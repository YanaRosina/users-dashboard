export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

export interface ServerError {
  message: string;
  code: number;
}

export interface ServerResponse {
  data: User[];
  success: boolean;
  error?: ServerError;
}
