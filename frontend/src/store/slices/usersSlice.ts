import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { usersApi } from "../../services/api";

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  searchTerm: "",
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (searchTerm?: string) => {
    const response = await usersApi.getUsers(searchTerm);
    if (!response.success) {
      throw new Error(response.error?.message || "Failed to fetch users");
    }
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setSearchTerm, clearError } = usersSlice.actions;
export default usersSlice.reducer;
