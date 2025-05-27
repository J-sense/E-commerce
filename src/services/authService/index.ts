/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    if (result?.success) {
      (await cookies()).set("accessToken", result?.data.accessToken);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
export const getCurrentUser = async () => {
  const token = (await cookies()).get("accessToken")?.value;
  let decode = null;
  if (token) {
    decode = await jwtDecode(token);
    return decode;
  }
};
