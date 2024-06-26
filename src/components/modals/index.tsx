/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useTransition } from 'react';
import { useStateCtx } from '@/context/StateCtx';
import { cn, maskEmail } from '@/utils';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';
import { Otp } from '@/action';
import { useToast } from '../ui/use-toast';
import { useMemberCtx } from '@/context/MemberCtx';
import { OtpSchema } from '@/schemas';
import * as z from 'zod';

const OTPMODAL = ({ id, email }: { id?: string; email?: string }) => {
  const { ShowOtp, setShowOtp } = useStateCtx();
  const { toast } = useToast();
  const [value, setValue] = useState('');
  const [isLoading, startTransition] = useTransition();
  const { currentPage, setCurrentPage } = useMemberCtx();

  const onSubmit = (
    value: z.infer<typeof OtpSchema>,
    e?: React.FormEvent<HTMLFormElement>
  ) => {
    e?.preventDefault?.();
    startTransition(() => {
      Otp(value, id!).then(data => {
        toast({
          title:
            data.status === 200
              ? 'OTP verification successfully!'
              : 'An error occured',
          description: `${data.message}`
        });

        if (data.status === 200) {
          window.localStorage.setItem(
            'currentPage',
            JSON.stringify(currentPage + 1)
          );
          window?.localStorage.setItem(
            'MemberDetails',
            JSON.stringify(data.account)
          );
          setValue('');
          setShowOtp(false);
          setCurrentPage(currentPage + 1);
        }
      });
    });
  };
  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all duration-300 z-[99] backdrop-blur-sm',
          ShowOtp ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        // onClick={() => setShowOtp(false)}
      />
      <div
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          'py-6   flex flex-col max-[350px]:h-[410px] w-[90%] h-[380px] min-[550px]:w-[500px] md:h-[400px] md:w-[682px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ',
          ShowOtp
            ? '-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl'
            : 'translate-x-full duration-300 pointer-events-none'
        )}
      >
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-copy dark:text-dark-copy">
              <p>We have sent a code to your email {maskEmail(email)}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-between h-full space-y-16">
              <div className="items-center justify-center mt-8 flex w-full ">
                <InputOTP
                  maxLength={6}
                  className="flex w-full"
                  onComplete={onSubmit}
                  value={value}
                  onChange={setValue}
                  disabled={isLoading}
                >
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={0}
                      className="w-[46px] h-[46px] md:h-[56px] md:w-[56px]"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-[46px] h-[46px] md:h-[56px] md:w-[56px]"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator className="hidden md:block" />
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={2}
                      className="w-[46px] h-[46px] md:h-[56px] md:w-[56px]"
                    />
                    <InputOTPSlot
                      index={3}
                      className="w-[46px] h-[46px] md:h-[56px] md:w-[56px]"
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator className="hidden md:block" />
                  <InputOTPGroup>
                    <InputOTPSlot
                      index={4}
                      className="w-[46px] h-[46px] md:h-[56px] md:w-[56px]"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-[46px] h-[46px] md:h-[56px] md:w-[56px]"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="flex flex-col space-y-3">
                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1">
                  <p>Didn&apos;t recieve code?</p>
                  <button
                    className="flex flex-row items-center text-navbar"
                    disabled
                  >
                    Resend
                  </button>
                </div>
                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 ">
                  <p>OTP expires in 15 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OTPMODAL };
