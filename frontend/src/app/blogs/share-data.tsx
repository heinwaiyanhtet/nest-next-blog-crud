"use client"

import { setBlogs } from "@/lib/features/blogs/blogsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";

interface Blogs {
   id : number,
   title : string,
   description : string,
   createdBy : string
}

interface ShareDataProps
{
    blogs : Blogs[]
}



export function ShareData({ blogs } :ShareDataProps ){

    // const dispatch = useAppDispatch()

    useEffect(() => {

        // dispatch(setBlogs(blogs))

    },[])

    return (
      <>


      </>
    );


}