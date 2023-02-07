import { ReactNode } from "react";

export interface iUserFormRegister {
  email: string;
  name: string;
  password: string;
  passwordConfirm?: string;
  contact?: string;
  avatar?: string;
  isWorker: boolean;
}
export interface iUserFormLogin {
  email: string;
  password: string;
}

export interface iUserFormEdit {
  name?: string;
  contact?: string;
  avatar?: string;
}

export interface iUserProfileResponse {
  email: string;
  password?: string;
  name: string;
  contact?: string;
  avatar?: string;
  isWorker: boolean;
  id: number;
}

export interface iUser {
  email: string;
  name: string;
  contact?: string;
  avatar?: string;
  isWorker: boolean;
  id: number;
}
export interface iUserResponse {
  accessToken: string;
  user: iUser;
}

export interface iUserContext {
  localLoading: boolean;
  setLocalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  globalLoading: boolean;
  user: null | iUser;
  setUser: React.Dispatch<React.SetStateAction<null | iUser>>;
  login: (formData: iUserFormLogin) => void;
  register: (formData: iUserFormRegister) => void;
  handleLogout: () => void;
}

export interface iUserProviderProps {
  children: ReactNode;
}
