"use client"

import { useFormState, useFormStatus } from "react-dom";
import { deleteBlog } from "./actions";


const initialState = {
    message: "",
};
  

function DeleteButton(){
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



export async function DeleteForm(
    {  Blog }: {  Blog: Object }
){

    const [state,formAction] = useFormState(deleteBlog,initialState);

    return(
        <form action={formAction}>
            
            <div>
                <input 
                    type="hidden" 
                    name="title" 
                    id="title" 
                />
            </div>

            <div>
                <input 
                    type="hidden" 
                    name="createdBy" 
                    id="createdBy" 
                />
            </div>

                <input 
                    type="hidden"
                    id="description" 
                    name="description"
                ></input>

            <DeleteButton />
                
        </form>
    )
}