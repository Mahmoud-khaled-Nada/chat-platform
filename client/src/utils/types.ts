/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserLoginParams = {
  email: string;
  password: string;
};

export type FriendsUser = {
  [x: string]: any;
  id: string;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
};
