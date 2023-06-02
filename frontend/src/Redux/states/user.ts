import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/models/user.model";

export const EmptyUserState: User = {
  id: 0,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    createUser: (_state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState,
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
