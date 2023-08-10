"use client";
import { getDataWithAuthToken } from "@/api/fetchDataWithAuthToken";

import { useCookies } from "react-cookie";

export default async function getLoginStatus() {
  try {
    const [cookie, setCookie, removeCookie] = useCookies(["auth-token"]);
    const authtoken = cookie["auth-token"];
    let isLoggedIn = false;

    if (authtoken) {
      isLoggedIn = await getDataWithAuthToken(
        "http://localhost:8000/auth/test_token",
        authtoken
      );
    }

    return isLoggedIn;
  } catch (e) {
    console.log(e);
    return false;
  }
}
