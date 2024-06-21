/* eslint-disable */

'use client';
import { useMemberCtx } from '@/context/MemberCtx';
import { cn } from '@/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState, useTransition, useEffect, useRef } from 'react';
import { NewMemberSchema, MemberCreationsTwoSchema } from '@/schemas';
import { CreateUser, completeRegistration } from '@/action';
import { useStateCtx } from '@/context/StateCtx';
import { OTPMODAL } from '@/components/modals';
import { Member } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { MultiSelect } from '@/components/ui/multiSelect';
import './cont.scss';

type CloudinaryAsset = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
};

type Option = {
  label: string;
  value: string;
};

type StackOption = {
  label: string;
  options: Option[];
};

export type UploadResult = {
  info: {
    public_id: string;
    original_filename: string;
  };
  event: 'success';
};

const RegistrationNav = () => {
  const { currentPage } = useMemberCtx();
  return (
    <nav className="w-full container items-center justify-center h-[56px] flex mt-[50px]">
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
        <li
          className={cn(
            "flex md:w-full items-center text-navbar  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-[1px] after:bg-gray-200 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10",
            currentPage > 1 ? 'after:border-navbar after:bg-navbar' : ''
          )}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
            {currentPage > 1 ? (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
              <span className="me-2">1</span>
            )}
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li
          className={cn(
            "flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:bg-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10",
            currentPage > 2 ? 'after:border-navbar after:bg-navbar' : '',
            currentPage >= 2 ? 'text-navbar' : ''
          )}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
            {currentPage > 2 ? (
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            ) : (
              <span className="me-2">2</span>
            )}
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
          </span>
        </li>
        <li className="flex items-center">
          {currentPage > 3 ? (
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          ) : (
            <span className="me-2">3</span>
          )}
          Confirmation
        </li>
      </ol>
    </nav>
  );
};

const RegistrationFormOne = () => {
  const { memberregistrationData, setmemberregistrationData } = useMemberCtx();
  const { setShowOtp } = useStateCtx();
  const [isLoading, startTransition] = useTransition();
  const [member, setmember] = useState<Member | null>(null);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setmemberregistrationData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault?.();

    const validation = NewMemberSchema.safeParse(memberregistrationData);

    if (!validation.success) {
      toast({
        title: 'Validation Error',
        description: validation.error.errors.map(err => err.message).join(', ')
      });
      return;
    }
    startTransition(() => {
      CreateUser(validation.data).then(data => {
        toast({
          title: data.status === 201 ? 'Account Created!' : 'An error occurred',
          description: `${data.message}`
        });

        if (data.status === 201) {
          setmember(data.account);
          setmemberregistrationData({
            fullName: '',
            email: '',
            bio: '',
            address: '',
            whatsappnumber: '',
            image: '',
            preferedName: ''
          });
          setShowOtp(true);
          window?.localStorage.setItem(
            'MemberDetails',
            JSON.stringify(data.account)
          );
        }
      });
    });
  };

  return (
    <section className="py-10 relative">
      <div className="w-full md:container">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full lg:p-11 md:p-8 p-7 bg-white rounded-3xl shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] flex-col justify-start items-start flex">
            <form
              className="w-full flex-col justify-start items-start gap-8 flex font-worksans"
              onSubmit={onSubmit}
            >
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="fullName"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    FullName
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    disabled={isLoading}
                    value={memberregistrationData.fullName}
                    onChange={handleChange}
                    name="fullName"
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                    placeholder="Enter FullName"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="preferedName"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    PreferedName
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Input
                    type="text"
                    id="preferedName"
                    name="preferedName"
                    disabled={isLoading}
                    value={memberregistrationData.preferedName}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                    placeholder="Enter Your Prefered Name"
                  />
                </div>
              </div>
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="email"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Email
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={memberregistrationData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                    placeholder="Email"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="whatsappnumber"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Phone Number (Preferably Whatsapp Number)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Input
                    type="tel"
                    id="whatsappnumber"
                    name="whatsappnumber"
                    disabled={isLoading}
                    value={memberregistrationData.whatsappnumber}
                    onChange={handleChange}
                    className="w-full h-[56px] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                    placeholder="(+234) 123 456 789"
                  />
                </div>
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label
                  htmlFor="address"
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Address
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  disabled={isLoading}
                  value={memberregistrationData.address}
                  onChange={handleChange}
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px]"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <Label
                  htmlFor="bio"
                  className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                >
                  Bio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    fill="none"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </Label>
                <Textarea
                  id="bio"
                  name="bio"
                  disabled={isLoading}
                  value={memberregistrationData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about your self and any exciting information about yourself"
                  className="w-full  md:h-[200px] h-[150px] resize-none p-4"
                />
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <button
                  type="button"
                  onClick={() =>
                    setmemberregistrationData({
                      fullName: '',
                      email: '',
                      bio: '',
                      address: '',
                      whatsappnumber: '',
                      image: '',
                      preferedName: ''
                    })
                  }
                  className="w-full px-6 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-indigo-600 hover:border-transparent hover:bg-indigo-50 transition-all duration-700 ease-in-out justify-center items-center flex"
                >
                  <span className="px-2 py-px text-center text-indigo-600 text-lg font-semibold leading-8">
                    Cancel
                  </span>
                </button>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                >
                  <span className="px-2 text-center text-white text-lg font-semibold leading-8">
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <OTPMODAL id={member?.id} email={member?.email} />
    </section>
  );
};

const RegistrationFormTwo = () => {
  const { toast } = useToast();
  const { secondForm, setsecondForm, currentPage, setCurrentPage } =
    useMemberCtx();
  const [Id, setId] = useState<string>();
  const [data, setData] = useState<Member>();
  const [image, setImage] = useState<File | Blob | null>(null);
  const [sliderValue, setSliderValue] = useState<number>(
    secondForm.commetmentlevel
  );

  useEffect(() => {
    setSliderValue(secondForm.commetmentlevel);
  }, [secondForm.commetmentlevel]);

  const [isLoading, startTransition] = useTransition();
  useEffect(() => {
    const existingData = window?.localStorage.getItem('MemberDetails');
    if (existingData) {
      const data: Member = JSON.parse(existingData);
      setId(data.id);
      setData(data);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setsecondForm(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) {
      toast({
        title: 'Error',
        description: 'Please select a valid image'
      });
      return;
    }

    startTransition(async () => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET!);
      formData.append('api_key', process.env.NEXT_PUBLIC_API_KEY!);

      await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      )
        .then(async res => {
          if (!res.ok) {
            throw new Error('Failed to upload image');
          }

          const data: CloudinaryAsset = await res.json();
          setsecondForm(prevForm => ({
            ...prevForm,
            image: data.url
          }));

          const updatedForm = {
            ...secondForm,
            image: data.url
          };

          const validation = MemberCreationsTwoSchema.safeParse(updatedForm);

          if (!validation.success) {
            toast({
              title: 'Validation Error',
              description: validation.error.errors
                .map(err => err.message)
                .join(', ')
            });
            return;
          }

          startTransition(() => {
            completeRegistration(validation.data, Id!).then(data => {
              toast({
                title:
                  data.status === 200
                    ? 'Account Updated Successfully!'
                    : 'An error occurred',
                description: `${data.message}`
              });
              if (data.status === 200) {
                setsecondForm(defaultMemberData2);
                window.localStorage.setItem(
                  'currentPage',
                  JSON.stringify(currentPage + 1)
                );
                setCurrentPage(currentPage + 1);
                window?.sessionStorage.setItem(
                  'UpdatedUser',
                  JSON.stringify(data.account)
                );
              }
            });
          });
        })
        .catch(error => {
          toast({
            title: 'Error',
            description: error.message
          });
        });
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      toast({
        variant: 'destructive',
        title: 'File Too Large',
        description: 'Please upload an image file smaller than 5MB'
      });
    }
    const acceptedMimeType = [
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/jpg'
    ];
    if (acceptedMimeType.includes(file.type)) {
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setImage(e.dataTransfer.files[0]);
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid File Type',
        description: 'Please upload an image file'
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const maxSize = 5 * 1024 * 1024;

    if (file?.size! > maxSize) {
      toast({
        variant: 'destructive',
        title: 'File Too Large',
        description: 'Please upload an image file smaller than 5MB'
      });
      e.target.value = '';
    }
    const acceptedMimeType = [
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/jpg'
    ];
    if (acceptedMimeType.includes(file?.type!)) {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid File Type',
        description: 'Please upload an image file'
      });
    }
  };
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleSliderChange = (value: number[]) => {
    const newValue = value[0] / 20;
    setsecondForm(prevData => ({
      ...prevData,
      commetmentlevel: newValue
    }));
  };

  const commitmentLevels: Record<number, string> = {
    1: 'Minimal commitment',
    2: 'Moderate commitment',
    3: 'Averagely committed',
    4: 'Highly Commited',
    5: 'Maximal Commitment'
  };

  const StackOptions: StackOption[] = [
    {
      label: 'Cybersecurity',
      options: [{ label: 'Cybersecurity', value: 'Cybersecurity' }]
    },
    {
      label: 'Data Science',
      options: [
        { label: 'Artificial Intelligence/Machine Learning', value: 'AI/ML' },
        { label: 'Data Science', value: 'Data Science' }
      ]
    },
    {
      label: 'Database Administration',
      options: [
        { label: 'Database Administration', value: 'Database Administration' }
      ]
    },
    {
      label: 'Design',
      options: [
        { label: 'Product Design', value: 'Product Design' },
        { label: 'UI/UX Design', value: 'UI/UX Design' }
      ]
    },
    {
      label: 'IoT (Internet of Things)',
      options: [{ label: 'IoT (Internet of Things)', value: 'IoT' }]
    },

    {
      label: 'Product Management',
      options: [
        { label: 'Product Management', value: 'Product Management' },
        { label: 'Product Tester', value: 'Product Tester' }
      ]
    },
    {
      label: 'Software Development',
      options: [
        { label: 'Game Development', value: 'Game Development' },
        { label: 'Software Development', value: 'Software Development' }
      ]
    },
    {
      label: 'Web Development',
      options: [
        { label: 'Backend', value: 'Backend' },
        { label: 'DevOps', value: 'DevOps' },
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Fullstack', value: 'Fullstack' },
        { label: 'Mobile', value: 'Mobile' }
      ]
    },
    {
      label: 'Other',
      options: [
        { label: 'Network Administration', value: 'Network Administration' },
        { label: 'Project Management', value: 'Project Management' },
        { label: 'Quality Assurance', value: 'QA' },
        { label: 'Technical Support', value: 'Tech Support' }
      ]
    }
  ];

  const handleStackChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map(
      (option: Option) => option.value
    );

    setsecondForm(prevData => ({
      ...prevData,
      stack: selectedValues
    }));
  };

  const FrameWorkOptions: StackOption[] = [
    {
      label: 'Backend',
      options: [
        { label: 'C#', value: 'C#' },
        { label: 'Go', value: 'Go' },
        { label: 'Java', value: 'Java' },
        { label: 'Kotlin', value: 'Kotlin' },
        { label: 'Node.js', value: 'Node.js' },
        { label: 'PHP', value: 'PHP' },
        { label: 'Python', value: 'Python' },
        { label: 'Ruby', value: 'Ruby' },
        { label: 'Scala', value: 'Scala' },
        { label: 'Swift', value: 'Swift' }
      ]
    },
    {
      label: 'Blockchain',
      options: [
        { label: 'Bitcoin', value: 'Bitcoin' },
        { label: 'Ethereum', value: 'Ethereum' },
        { label: 'Hyperledger', value: 'Hyperledger' },
        { label: 'Solidity', value: 'Solidity' }
      ]
    },
    {
      label: 'Database',
      options: [
        { label: 'Firebase', value: 'Firebase' },
        { label: 'MongoDB', value: 'MongoDB' },
        { label: 'MySQL', value: 'MySQL' },
        { label: 'Oracle', value: 'Oracle' },
        { label: 'PostgreSQL', value: 'PostgreSQL' },
        { label: 'SQL', value: 'SQL' }
      ]
    },
    {
      label: 'Design',
      options: [
        { label: 'Figma', value: 'Figma' },
        { label: 'Adobe Photoshop', value: 'Adobe Photoshop' },
        { label: 'Adobe XD', value: 'Adobe XD' }
      ]
    },
    {
      label: 'DevOps',
      options: [
        { label: 'Ansible', value: 'Ansible' },
        { label: 'Docker', value: 'Docker' },
        { label: 'Jenkins', value: 'Jenkins' },
        { label: 'Kubernetes', value: 'Kubernetes' },
        { label: 'Terraform', value: 'Terraform' }
      ]
    },
    {
      label: 'Embedded Systems',
      options: [
        { label: 'Arduino', value: 'Arduino' },
        { label: 'Embedded C', value: 'Embedded C' },
        { label: 'Microcontrollers', value: 'Microcontrollers' },
        { label: 'Raspberry Pi', value: 'Raspberry Pi' }
      ]
    },
    {
      label: 'Frontend',
      options: [
        { label: 'Angular', value: 'Angular' },
        { label: 'CSS', value: 'CSS' },
        { label: 'HTML', value: 'HTML' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'React.js', value: 'React.js' },
        { label: 'Svelte', value: 'Svelte' },
        { label: 'TypeScript', value: 'TypeScript' },
        { label: 'Vue.js', value: 'Vue.js' }
      ]
    },
    {
      label: 'Game Development',
      options: [
        { label: 'C#', value: 'C#' },
        { label: 'C++', value: 'C++' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'Unity', value: 'Unity' },
        { label: 'Unreal Engine', value: 'Unreal Engine' }
      ]
    },

    {
      label: 'Machine Learning / AI',
      options: [
        { label: 'NLTK', value: 'NLTK' },
        { label: 'PyTorch', value: 'PyTorch' },
        { label: 'Python', value: 'Python' },
        { label: 'R', value: 'R' },
        { label: 'Scikit-learn', value: 'Scikit-learn' },
        { label: 'TensorFlow', value: 'TensorFlow' }
      ]
    },
    {
      label: 'Mobile Development',
      options: [
        { label: 'Flutter', value: 'Flutter' },
        { label: 'Ionic', value: 'Ionic' },
        { label: 'Java (Android)', value: 'Java (Android)' },
        { label: 'Kotlin', value: 'Kotlin' },
        { label: 'React Native', value: 'React Native' },
        { label: 'Swift', value: 'Swift' }
      ]
    },
    {
      label: 'Web Development',
      options: [
        { label: 'Backend', value: 'Backend' },
        { label: 'DevOps', value: 'DevOps' },
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Fullstack', value: 'Fullstack' },
        { label: 'Mobile', value: 'Mobile' }
      ]
    },
    {
      label: 'Other',
      options: [
        { label: 'Bash/Shell', value: 'Bash/Shell' },
        { label: 'Haskell', value: 'Haskell' },
        { label: 'Julia', value: 'Julia' },
        { label: 'Lua', value: 'Lua' },
        { label: 'Network Administration', value: 'Network Administration' },
        { label: 'Perl', value: 'Perl' },
        { label: 'Project Management', value: 'Project Management' },
        { label: 'Quality Assurance', value: 'QA' },
        { label: 'Rust', value: 'Rust' },
        { label: 'Technical Support', value: 'Tech Support' }
      ]
    }
  ];

  const handleLanguageChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map(
      (option: Option) => option.value
    );

    setsecondForm(prevData => ({
      ...prevData,
      programminglanguage: selectedValues
    }));
  };

  return (
    <>
      <section className="py-10 relative">
        <div className="w-full md:container">
          <div className="w-full flex-col justify-center items-center gap-4 inline-flex">
            <h2 className="text-center text-navbar text-lg md:text-4xl font-medium  leading-normal capitalize">
              Hi {data?.fullName}
            </h2>
            <p className="text-center text-gray-500 font-normal leading-relaxed text-sm md:text-base">
              Let's finish your registration. Just a few more details are needed
              and we'll be all set! Completing this information helps us to know
              you better. It will only take a few moments, and then you'll be
              ready to fully enjoy all the features we offer. Thank you for your
              patience!
            </p>
          </div>
          <div className="w-full bg-white rounded-3xl shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] flex-col justify-start items-start flex mt-[20px] md:mt-[40px] p-4 md:p-8">
            <form
              className="flex w-full flex-col md:flex-row gap-4 gap-y-8 md:gap-8  py-4 sm:px-4 md:px-6 lg:px-8 h-full items-start font-worksans"
              onSubmit={onSubmit}
            >
              {/* image */}
              <div
                ref={scrollRef}
                className="flex w-[300px] h-[300px] max-md:w-full max-md:justify-center "
              >
                {image ? (
                  <>
                    <div className="flex flex-col gap-y-2 h-full w-full relative overflow-hidden rounded-lg">
                      <Image
                        width={300}
                        height={300}
                        src={URL.createObjectURL(image)}
                        alt="Client"
                        className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:duration-700 hover:scale-150"
                      />

                      <span className="absolute bottom-1 left-0 bg-gradient-to-r from-white via-white/50 to-white/5 px-2 w-full text-left font-medium">
                        {/* @ts-expect-error: Necessary to catch and handle errors gracefully.*/}
                        {image?.name.length > 20
                          ? // @ts-expect-error: Necessary to catch and handle errors gracefully.
                            image?.name.slice(0, 20) + '...'
                          : // @ts-expect-error: Necessary to catch and handle errors gracefully.
                            image?.name}
                      </span>

                      <button
                        type="button"
                        tabIndex={0}
                        aria-label="Remove image"
                        onClick={() => setImage(null)}
                        className="text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full bg-white/60 backdrop-blur-sm absolute top-1 right-1 w-8 h-8 flex items-center justify-center hover:text-red-500 hover:bg-white/80 hover:brightness-150 transition-all duration-700 hover:duration-200"
                        title="Remove image"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col w-full">
                    <div>
                      <Label
                        htmlFor="Image"
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        Image
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                        >
                          <path
                            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                            fill="#EF4444"
                          />
                        </svg>
                      </Label>
                      <Label
                        htmlFor="dropzone-file"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className={cn(
                          'flex flex-col items-center justify-center py-9 w-full h-full min-h-[300px] border border-gray-300 border-dashed rounded-2xl cursor-pointer bg-gray-50',

                          {
                            hidden: image
                          }
                        )}
                      >
                        <Input
                          id="dropzone-file"
                          type="file"
                          className="hidden sr-only"
                          accept="image/jpeg,image/png,image/svg+xml"
                          onChange={handleImageChange}
                        />
                        <div className="mb-3 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <g id="Upload 02">
                              <path
                                id="icon"
                                d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589"
                                stroke="#4F46E5"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </g>
                          </svg>
                        </div>
                        <span className="text-center text-gray-400 text-xs font-normal leading-4 mb-1 px-3">
                          Formats accepted are JPG, PNG, or SVG and must be less
                          than 5mb
                        </span>
                        <h6 className="text-center text-gray-900 text-sm font-medium leading-5">
                          Drag and Drop your image here
                        </h6>
                      </Label>
                    </div>
                  </div>
                )}
              </div>
              {/* main contents */}

              <div className="flex w-full flex-col gap-y-4 sm:gap-y-6 pt-8 md:pt-0">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="portfolio"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Portfolio | Github Profile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    disabled={isLoading}
                    value={secondForm.portfolio}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex h-[56px] placeholder:text-sm"
                    placeholder="a link to yr github profile or your portfolio"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="flex flex-row items-center justify-between rounded-lg border p-4 w-full">
                    <div className="space-y-0.5">
                      <Label
                        htmlFor="mentor"
                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                      >
                        Mentorship
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                        >
                          <path
                            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                            fill="#EF4444"
                          />
                        </svg>
                      </Label>
                      <p className="text-xs md:text-base">
                        Are you interested in mentoring or being mentored by
                        others?
                      </p>
                    </div>
                    <Switch
                      checked={secondForm.mentor}
                      onCheckedChange={checked =>
                        setsecondForm(prevData => ({
                          ...prevData,
                          mentor: checked
                        }))
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="multiSelect"
                    className="flex gap-1 items-center text-gray-600 text-sm md:text-base font-medium leading-relaxed"
                  >
                    What's your occupation or fields of expertise
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <MultiSelect
                    isDisabled={isLoading}
                    id="multiSelect"
                    options={StackOptions}
                    className="w-full sele"
                    placeholder="Where do you belong ..."
                    hideSelectedOptions
                    isSearchable
                    aria-label="multiSelect"
                    aria-labelledby="multiSelect"
                    onChange={handleStackChange}
                    noOptionsMessage={() => (
                      <div className="text-gray-600 text-sm">Not Available</div>
                    )}
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="programing language"
                    className="flex gap-1 items-center text-gray-600 text-sm md:text-base font-medium leading-relaxed"
                  >
                    What are the Programming languages or FrameWorks you're
                    proficient in?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <MultiSelect
                    isDisabled={isLoading}
                    id="multiSelect"
                    options={FrameWorkOptions}
                    className="w-full sele"
                    placeholder="Programming Languages ..."
                    hideSelectedOptions
                    isSearchable
                    aria-label="multiSelect"
                    aria-labelledby="multiSelect"
                    onChange={handleLanguageChange}
                    noOptionsMessage={() => (
                      <div className="text-gray-600 text-sm">Not Available</div>
                    )}
                  />
                </div>

                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <div className="flex flex-col items-start gap-2 justify-between rounded-lg border p-4 w-full">
                    <div className="space-y-0.5">
                      <Label
                        htmlFor=""
                        className="flex gap-1 items-center text-gray-600 text-sm md:text-base font-medium leading-relaxed"
                      >
                        Commitment Level:{' '}
                        {commitmentLevels[sliderValue] || 'Unknown'}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="7"
                          viewBox="0 0 7 7"
                          fill="none"
                        >
                          <path
                            d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                            fill="#EF4444"
                          />
                        </svg>
                      </Label>
                      <p className="text-sm md:text-base">
                        what is the level of commitment you promise to give to
                        the community
                      </p>
                    </div>
                    <Slider
                      defaultValue={[secondForm.commetmentlevel * 20]}
                      step={20}
                      onValueChange={handleSliderChange}
                    />
                  </div>
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="intrests"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Intrests
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Textarea
                    id="intrests"
                    name="intrests"
                    disabled={isLoading}
                    value={secondForm.intrests}
                    onChange={handleChange}
                    placeholder="What interests you in joining Starters?"
                    className="w-full  md:h-[200px] h-[150px] resize-none p-4"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="experience"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    Past Experience
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    disabled={isLoading}
                    value={secondForm.experience}
                    onChange={handleChange}
                    placeholder="Tell us about your Previous projects or experiences in the tech field"
                    className="w-full  md:h-[200px] h-[150px] resize-none p-4"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="whatdoyoubringtothetable"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    How do you believe Starters can benefit your career or
                    personal growth
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Textarea
                    id="whatdoyoubringtothetable"
                    name="whatdoyoubringtothetable"
                    disabled={isLoading}
                    value={secondForm.whatdoyoubringtothetable}
                    onChange={handleChange}
                    placeholder="How do you believe Starters can benefit your career or
                    personal growth"
                    className="w-full  md:h-[200px] h-[150px] resize-none p-4"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <Label
                    htmlFor="expetations"
                    className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                  >
                    What are your expectations from the Starters community?
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="7"
                      viewBox="0 0 7 7"
                      fill="none"
                    >
                      <path
                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                        fill="#EF4444"
                      />
                    </svg>
                  </Label>
                  <Textarea
                    id="expetations"
                    name="expetations"
                    disabled={isLoading}
                    value={secondForm.expetations}
                    onChange={handleChange}
                    placeholder="What are your expectations from the Starters community?"
                    className="w-full  md:h-[200px] h-[150px] resize-none p-4"
                  />
                </div>
                <div className="flex w-full justify-end items-center gap-x-2 sm:gap-x-3 md:gap-x-6 mt-6">
                  <button
                    type="button"
                    tabIndex={0}
                    aria-label="Cancel"
                    onClick={() => {
                      setsecondForm(defaultMemberData2);
                    }}
                    className={cn(
                      'rounded-lg border border-navbar text-navbar min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navbar'
                    )}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    tabIndex={0}
                    aria-label="Continue"
                    disabled={
                      deepEqual(secondForm, defaultMemberData2) || isLoading
                    }
                    className={cn(
                      'rounded-lg border bg-navbar text-nav-text-active min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navbar'
                    )}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const Page3 = () => {
  const { toast } = useToast();

  const [data, setData] = useState<Member>();
  useEffect(() => {
    const existingData = window?.sessionStorage.getItem('UpdatedUser');
    if (existingData) {
      const data: Member = JSON.parse(existingData);
      toast({
        title: `Hi ${data.preferedName}`,
        description:
          'your request has been sent and you will be notified via email soon!'
      });
      setData(data);
    }
  }, []);

  return (
    <main className="cont min-h-screen">
      <section className="relative pt-40 pb-24 bg-white">
        <Image
          src="/profile.png"
          alt="cover-image"
          objectFit="cover"
          width={1440}
          height={240}
          className="w-full absolute top-0 left-0 z-0 h-60"
        />
        <div className="w-full container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <Image
              alt="name"
              src={data?.image!}
              width={162}
              height={162}
              className="border-4 border-solid border-white rounded-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
                {data?.fullName}
              </h3>
              <p className="font-normal text-base leading-7 text-gray-500">
                {data?.address}
              </p>
            </div>
            <div className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-indigo-100 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  className="stroke-gray-700 transition-all duration-500 group-hover:stroke-indigo-600"
                  d="M14.1667 11.6666V13.3333C14.1667 14.9046 14.1667 15.6903 13.6785 16.1785C13.1904 16.6666 12.4047 16.6666 10.8333 16.6666H7.50001C5.92866 16.6666 5.14299 16.6666 4.65483 16.1785C4.16668 15.6903 4.16668 14.9047 4.16668 13.3333V11.6666M16.6667 9.16663V13.3333M11.0157 10.434L12.5064 9.44014C14.388 8.18578 15.3287 7.55861 15.3287 6.66663C15.3287 5.77466 14.388 5.14749 12.5064 3.89313L11.0157 2.8993C10.1194 2.3018 9.67131 2.00305 9.16668 2.00305C8.66205 2.00305 8.21393 2.3018 7.31768 2.8993L5.82693 3.89313C3.9454 5.14749 3.00464 5.77466 3.00464 6.66663C3.00464 7.55861 3.9454 8.18578 5.82693 9.44014L7.31768 10.434C8.21393 11.0315 8.66205 11.3302 9.16668 11.3302C9.67131 11.3302 10.1194 11.0315 11.0157 10.434Z"
                  stroke="#374151"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex items-center justify-evenly">
                {data?.stack.map(s => (
                  <span
                    key={s}
                    className="px-2  font-medium text-xs md:text-base md:leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
            <div className="flex items-center gap-4 md:max-w-[300px]">
              {data?.bio}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 ">
              <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400 ">
                FrameWorks | Tools
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.78135 5.55191C9.4453 3.5173 9.77728 2.5 10.3928 2.5C11.0083 2.5 11.3403 3.5173 12.0043 5.55191L12.2949 6.44244C12.4784 7.00479 12.5701 7.28596 12.7928 7.44706C13.0155 7.60816 13.3125 7.60816 13.9063 7.60816H14.8683C17.0355 7.60816 18.119 7.60816 18.3081 8.19335C18.4972 8.77854 17.6169 9.40763 15.8563 10.6658L15.0921 11.2118C14.6069 11.5586 14.3643 11.732 14.278 11.9937C14.1918 12.2554 14.2841 12.5382 14.4687 13.1038L14.7569 13.9872C15.4209 16.0218 15.7529 17.0391 15.2549 17.3993C14.7569 17.7595 13.8878 17.1308 12.1496 15.8733L11.3887 15.323C10.9083 14.9754 10.6681 14.8016 10.3928 14.8016C10.1175 14.8016 9.87731 14.9754 9.39687 15.323L8.63605 15.8733C6.89779 17.1308 6.02866 17.7595 5.5307 17.3993C5.03273 17.0391 5.36471 16.0218 6.02866 13.9872L6.31927 13.0966C6.50278 12.5343 6.59454 12.2531 6.50948 11.9924C6.42441 11.7318 6.18419 11.558 5.70375 11.2104L4.94293 10.6601C3.20467 9.40261 2.33555 8.77389 2.52575 8.19102C2.71596 7.60816 3.79026 7.60816 5.93886 7.60816H6.87929C7.47315 7.60816 7.77008 7.60816 7.99277 7.44706C8.21547 7.28596 8.30723 7.00479 8.49074 6.44244L8.78135 5.55191Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.6"
                  />
                </svg>
              </p>
              <ul className="flex items-center max-sm:justify-center flex-wrap gap-2.5">
                {data?.programminglanguage.map(pr => (
                  <li
                    key={pr}
                    className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700"
                  >
                    {pr}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const CompleteForm = () => {
  const { currentPage } = useMemberCtx();

  return (
    <>
      {currentPage === 1 ? (
        <RegistrationFormOne />
      ) : currentPage === 2 ? (
        <RegistrationFormTwo />
      ) : (
        <Page3 />
      )}
    </>
  );
};

export { RegistrationNav, CompleteForm };

const defaultMemberData2 = {
  image: '', //
  stack: [''],
  intrests: '', //
  portfolio: '', //
  experience: '', //
  expetations: '', //
  commetmentlevel: 0, //
  programminglanguage: [''],
  whatdoyoubringtothetable: '', //
  mentor: false //
};

const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};
