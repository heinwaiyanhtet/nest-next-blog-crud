"use client"

import { CreateForm } from "@/app/create-form";




export default function Blogs() {

    return (

        <div className='flex justify-center mt-5'>

            <div className="w-11/12	p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            
                <CreateForm />

            </div>

        </div>

    )
    
}

