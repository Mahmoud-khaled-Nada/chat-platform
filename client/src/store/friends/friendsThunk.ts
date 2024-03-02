import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFriendsUser } from "../../utils/api";

export const fetchFriendsThunk = createAsyncThunk(
  "fetch/friends",
  async () => {
    const response = await getFriendsUser();
    return response.data;
  }
);
