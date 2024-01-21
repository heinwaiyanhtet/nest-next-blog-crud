"use server";

import { EditPage } from "@/app/edit-page";



// get parmas in server side and fetch from server
// use singleton pattern 


// async function getData() {
//     const res = await fetch(`http://localhost:3001/blogs`)
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }



export default async function Edit() {

    return (

        <div 
            className='flex justify-center mt-5'
        >
            <div 
                className="w-11/12	p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
                <EditPage />

            </div>

        </div>

    )
    
}

