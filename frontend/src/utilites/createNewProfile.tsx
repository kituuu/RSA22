"use client";
import { postData } from "@/api/postDatawithBody";
import { useCookies } from "react-cookie";

export async function createNewProfile(body: string,authtoken:string) {
  try {
    
    const response = await postData(
      "http://localhost:8000/userProfile/create",
      authtoken,
      body
    );
    console.log(authtoken);
    console.log("chal gya");
  } catch (error) {
    console.log(error);
  }
}
