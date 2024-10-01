import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

const getMessage = async (id:string) => {
  try {
    const res = await client.get(`/secret/${id}`);
    const data = await res.data;
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error in getting message", error);
    return error;
  }
};

export const useGetMessage = () =>
  useMutation({
    mutationFn: (id:string) => getMessage(id),
  });
