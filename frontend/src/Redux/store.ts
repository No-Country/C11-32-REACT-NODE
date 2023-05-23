import { UserInfo } from "@/models/user.model";
import {configureStore} from "@reduxjs/toolkit"
import userSliceReducer from "./states/user";

export interface AppStore{
    user: UserInfo;
}

export default configureStore <AppStore> ({
    reducer: {
        user: userSliceReducer

    }
});



