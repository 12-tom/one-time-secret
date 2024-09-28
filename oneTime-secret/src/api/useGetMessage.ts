import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

const getMessage = async () => {
  try {
    const res = await client.get("/secret/:url");
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("Error in sending message", error);
    return error;
  }
};

export const useGetMessage = () =>
  useMutation({
    mutationFn: () => getMessage(),
  });
