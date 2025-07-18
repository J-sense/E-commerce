/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

export const createPr = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const getAllProducts = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product?limit=1&page=${page}`,
      {
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
export const getSingleProduct = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`,
      {
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
