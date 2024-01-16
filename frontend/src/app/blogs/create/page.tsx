"use client"

import { ChangeEvent, FormEvent, useState } from "react"


interface BlogData {
    title: string,
    createdBy : string,
    description : string,
}

export default function Blogs() {

    const [blogData,setBlogData] = useState<BlogData>({
        title : '',
        createdBy : '',
        description : ''
    })

    const handleSubmit = async (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(blogData);
        try 
        {
            const response = await fetch(`http://localhost:3001/blogs`,
            {
                method:"POST",
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(blogData),
            })

            if(response.ok)
            {
                console.log("Blog created successfully");
            }

            else
            {
                console.error("failed to create blog");
            }
        } 
        catch (error) {
            console.error('Error creating blog:', error);
        }
    }

    const handleInputChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    {
        const {name,value} = e.target;
        
        setBlogData({
            ...blogData,
            [name] : value
        })
    }

    return (

        <div className='flex justify-center mt-5'>

            <div className="w-11/12	p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create Blog</h5>
                    
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blog title</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            defaultValue = {blogData.title}
                            onChange={handleInputChange}
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
                            defaultValue={blogData.createdBy}
                            onChange={handleInputChange}
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
                            name="description"
                            defaultValue={blogData.description}
                            onChange={handleInputChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Write your thoughts here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" 
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Create Blog</button>

                </form>

            </div>

        </div>

    )
}

