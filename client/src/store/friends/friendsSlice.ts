import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FriendsUser } from "../../utils/types";
import { fetchFriendsThunk } from "./friendsThunk";

interface FriendsStateType {
  data: FriendsUser[];
}

const initialState: FriendsStateType = {
  data: [],
};

export const friendsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchFriendsThunk.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(fetchFriendsThunk.rejected, () => {
        console.log("function get friends is rejected");
      }),
});

// export const { getCategoryName } = friendsSlice.actions;
export default friendsSlice.reducer;
