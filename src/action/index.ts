/* eslint-disable */

'use server';
import {
  NewMemberSchema,
  OtpSchema,
  MemberCreationsTwoSchema
} from '@/schemas';
import * as z from 'zod';
import { Baseurl } from '@/utils';
import Calls from './axios';
import { Member } from '@/types';

const $Http = Calls(Baseurl);

const CreateUser = async (values: z.infer<typeof NewMemberSchema>) => {
  const validatedfeilds = NewMemberSchema.safeParse(values);

  if (!validatedfeilds.success) {
    return {
      message: 'check your input'
    };
  }
  const { fullName, email, bio, address, whatsappnumber, preferedName } =
    validatedfeilds.data;

  try {
    const userData = {
      fullName,
      email,
      bio,
      address,
      whatsappnumber,
      preferedName
    };
    const res = await $Http.post('/api/v1/members/register', userData);

    return {
      status: res.status,
      account: res.data.data
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

const completeRegistration = async (
  values: z.infer<typeof MemberCreationsTwoSchema>,
  userId: string
) => {
  const validatedfeilds = MemberCreationsTwoSchema.safeParse(values);

  if (!validatedfeilds.success) {
    return {
      message: 'check your input',
      status: 401
    };
  }

  try {
    const res = await $Http.post(
      `/api/v1/members/update-registraion?id=${userId}`,
      validatedfeilds.data
    );

    return {
      status: res.status,
      account: res.data.member
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

const Otp = async (values: z.infer<typeof OtpSchema>, userId: string) => {
  const otp = values;

  const userdata = { otp, userId };

  try {
    const res = await $Http.post('/api/v1/members/verify-otp', userdata);

    return {
      status: res.status,
      message: res.data.message,
      account: res.data.data
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

const getallmembers = async () => {
  try {
    const res = await $Http.get('/api/v1/members/get-all-users');

    return {
      status: res.status,
      account: res.data.members
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

/**
 * GET MEMBER BY ID
 * @PARAMS: id
 * /api/v1/members/get-member-by-id?id=
 * */

const getMemberById = async (id: string): Promise<Member | null> => {
  try {
    const response = await $Http.get(
      `/api/v1/members/get-member-by-id?id=${id}`
    );
    return response.data;
  } catch (e: any) {
    console.error('Error getting data by id !!!', e);
    return null;
  }
};

const getAllProject = async () => {
  try {
    const res = await $Http.get('/api/v1/project');

    return {
      status: res.status,
      projects: res.data.projects
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status
    };
  }
};

export {
  CreateUser,
  Otp,
  getallmembers,
  getAllProject,
  getMemberById,
  completeRegistration
};
