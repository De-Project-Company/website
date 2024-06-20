'use client';
import { useMemberCtx } from '@/context/MemberCtx';
import { cn } from '@/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState, useTransition } from 'react';
import { NewMemberSchema } from '@/schemas';
import { CreateUser } from '@/action';
import { useStateCtx } from '@/context/StateCtx';
import { OTPMODAL } from '@/components/modals';
import { Member } from '@/types';
import { useToast } from '@/components/ui/use-toast';

export interface UploadedAssetData {
  public_id: string;
  width: number;
  height: number;
  id: string;
  info: Record<string, unknown>;
  original_filename: string;
  url: string;
  [key: string]: unknown;
}

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
          window?.sessionStorage.setItem(
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
  return <div>home</div>;
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
        <div>Default Content</div>
      )}
    </>
  );
};

export { RegistrationNav, CompleteForm };
