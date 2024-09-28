import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

const sendMessage = async (message: string) => {
  try {
    const res = await client.post(
      "/",
      {
        data: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.data;
    return data;
  } catch (error) {
      console.log("Error in sending message", error);
      return error;
  }
};

export const useGetUrl = () =>
  useMutation({
    mutationFn: (message:string) => sendMessage(message),
  });
