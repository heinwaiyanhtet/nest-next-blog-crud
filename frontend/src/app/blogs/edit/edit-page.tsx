"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { EditBlog, createBlog } from "../actions";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const initialState = {
    message: "",
};


function SubmitButton()
{
    const {pending} = useFormStatus();

    return(
        <button type="submit" 
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                aria-disabled={pending}

        >
            Edit Blog 
        </button>
    )
}


type blogs = {
    id : number,
    title : string,
    description : string,
    createdBy : string
 }

 type BlogItem = {

   blogs : blogs[]

 }

export function EditPage(blogs : BlogItem){

    const [state, formAction] = useFormState(EditBlog, initialState);

    const params = useParams<{ tag: string; item: string }>();
    
    const [perblog,setPerBlog] : any = useState() 

    useEffect(() => {

        const {id} : any = params;

        const getBlogById =  blogs.blogs
                                   .filter(b => b.id == id)

        setPerBlog(getBlogById[0])

    },[])

    return (

    
        <form className="space-y-6" action={formAction}>

            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit Blog</h5>

            <input type="hidden" name="id" value={perblog && perblog.id}/>

            <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    defaultValue={ perblog && perblog.title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                    placeholder="Blog Title" 
                    required 
                />
            </div>

            <div>
                <label htmlFor="createdBy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Created By</label>
                <input 
                    type="createdBy" 
                    name="createdBy" 
                    id="createdBy" 
                    defaultValue={ perblog && perblog.createdBy}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                    placeholder="Created By" 
                    required 
                />
            </div>

            <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea 
                    id="description" 
                    rows={4}
                    defaultValue={ perblog && perblog.description}
                    name="description"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Write your thoughts here..."
                    required
                ></textarea>
            </div>

            <SubmitButton />

        </form>
    );


}