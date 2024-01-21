"use client"

import { useFormState, useFormStatus } from "react-dom";
import { deleteBlog } from "./actions";


const initialState = {
    message: "",
};
  

function EditButton()
{
    const {pending} = useFormStatus();

    return(
        <button 
            className="bg-transparent mr-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
            Edit
        </button>
    )
}



export function EditForm
(
    {  Blog }: { Blog: Object }
){

    const [state,formAction] = useFormState(deleteBlog,initialState);

    return(
        <form action={formAction}>
            
            <input 
                type="hidden" 
                name="id" 
                // value = {id}
            />

            <input 
                type="hidden" 
                name="title" 
                // value = {id}
            />

            <input 
                type="hidden" 
                name="description" 
                // value = {id}
            />


            <input 
                type="hidden" 
                name="createdBy" 
                // value = {title}
            />

            <EditButton />
            
        </form>
    )
}