import { User } from "@/models/user.model";
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./states/user";

export interface AppStore {
  user: User;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
});
