"use server"

import { revalidatePath } from "next/cache";

export async function createTodo(
    prevState: {
      message: string;
    },
    formData: FormData,
  ) {
    
  
    try {
       
      revalidatePath("/blogs");
    } catch (e) {
      return { message: "Failed to create todo" };
    }
  }
  