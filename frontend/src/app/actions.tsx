"use server"

import { revalidatePath } from "next/cache";

export async function createBlog(
    prevState: {
      message: string | undefined | null
    },
    formData: FormData,
  ) {
    
   try {

    const title = formData.get("title");
    const createdBy = formData.get("createdBy");
    const description = formData.get("description");


    const response = await fetch(`http://localhost:3001/blogs`,
    {
        method:"POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          title,
          createdBy,
          description
        }),
    })

    if(response.ok)
    {
        revalidatePath("/blogs");
        return { message: `Blog created successfully` };
    }
    else
    {
      return { message: `failed to create blog` };
    }
    } 
    catch (e) 
    {
      return { message: "Failed to create todo" };
    }
    
}


export async function deleteBlog(
  prevState: {
    message: string | undefined | null
  },
  formData : FormData
)
{
  try {

      const id = formData.get("id");

      const response = await fetch(`http://localhost:3001/blogs/${id}`,
      {
          method:"DELETE",
      })

      console.log(response);
      
      if(response.ok)
      {
          revalidatePath("/blogs");
          return { message: `Blog deleted successfully` };
      }
      else
      {
          return { message: `failed to delete blog` };
      }
  } catch (error) {
      return {message : "Failed to delete blog"};
  }
}