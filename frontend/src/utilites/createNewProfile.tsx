"use client";
import { postData } from "@/api/postDatawithBody";
import { useCookies } from "react-cookie";
import axios from "axios"

export async function createNewProfile(body: string,authtoken:string) {
  try {
    
    const response = await axios.post("http://127.0.0.1:8000/userProfile/create", 
      body,
      {headers: {
        Authorization: `Token ${authtoken}`,
      },
    })
    console.log(authtoken);
    console.log("chal gya");
  } catch (error) {
    console.log(error);
  }
}
