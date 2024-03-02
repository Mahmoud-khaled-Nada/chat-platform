import { configureStore } from "@reduxjs/toolkit";
import friendsSlice from "./friends/friendsSlice";


export const store = configureStore({
  reducer: {
    friends : friendsSlice
    // user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;