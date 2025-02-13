import type { User, UserRole } from "src/share/models";

export interface UserInfoType {
  user_id?: string;
  username?: string;
  password?: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  role?: UserRole;
}

export interface UserFormProp {
  initValues?: UserInfoType | User;
  setOpenAcountTab?: (isOpen: boolean) => void;
  action: "create" | "detail" | "update";
}

export interface CreateUserPartial {
  username: string;
  email: string;
  password: string;
  role_id: string;
}
