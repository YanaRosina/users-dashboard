import axios from "axios";
import { ServerResponse } from "../types/user";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const usersApi = {
  getUsers: async (term?: string): Promise<ServerResponse> => {
    const params = term ? { term } : {};
    const response = await api.get<ServerResponse>("/", { params });
    return response.data;
  },
};
