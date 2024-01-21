"use client"

import { useFormState, useFormStatus } from "react-dom";
import { deleteBlog } from "./actions";


const initialState = {
    message: "",
};
  

function DeleteButton()
{
    const {pending} = useFormStatus();

    return(
        <button type="submit"
                aria-disabled={pending}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
            Delete
        </button>
    )
}



export function DeleteForm
(
    {  id , title }: { id:number, title: string }
){

    const [state,formAction] = useFormState(deleteBlog,initialState);

    return(
        <form action={formAction}>
            
            <input 
                type="hidden" 
                name="id" 
                value = {id}
            />

            <input 
                type="hidden" 
                name="title" 
                value = {title}
            />

            <DeleteButton />
        </form>
    )
}