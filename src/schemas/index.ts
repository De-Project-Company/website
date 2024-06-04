import * as z from 'zod';
import validator from 'validator';

const NewMemberSchema = z.object({
  fullName: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  email: z.string().email(),
  whatsappnumber: z.string().refine(validator.isMobilePhone, {
    message: 'Invalid phone number'
  }),
  preferedName: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' }),
  bio: z.string(),
  address: z.string()
});

const OtpSchema = z.object({
  otp: z.string()
});

export { NewMemberSchema, OtpSchema };
