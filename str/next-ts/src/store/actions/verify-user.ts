import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "@/utils/axios/fetch";
import { API_ENDPOINTS } from "@/constant/Api_EndPoints";

export const verifyUser = createAsyncThunk(
  API_ENDPOINTS.AUTH.GET_USER,
  async () => {
    return await fetchRequest({ url: API_ENDPOINTS.AUTH.GET_USER });
  }
);
