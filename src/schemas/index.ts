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

const MemberCreationsTwoSchema = z.object({
  image: z.string().min(6, { message: 'Must be at least 6 characters long' }),
  mentor: z.boolean().default(false),
  stack: z.array(z.string()).nonempty({
    message: "Can't be empty!"
  }),
  intrests: z
    .string()
    .min(6, { message: 'Must be at least 6 characters long' }),
  portfolio: z
    .string()
    .min(6, { message: 'Must be at least 6 characters long' }),
  experience: z
    .string()
    .min(6, { message: 'Must be at least 6 characters long' }),
  expetations: z
    .string()
    .min(6, { message: 'Must be at least 6 characters long' }),
  commetmentlevel: z.number(),
  programminglanguage: z.array(z.string()).optional(),

  whatdoyoubringtothetable: z
    .string()
    .min(6, { message: 'Must be at least 6 characters long' })
});
const OtpSchema = z.object({
  otp: z.string()
});

export { NewMemberSchema, OtpSchema, MemberCreationsTwoSchema };
