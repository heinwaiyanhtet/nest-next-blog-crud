import { DeleteForm } from "../delete-form";

async function getData() {
    const res = await fetch('http://localhost:3001/blogs',{ next: { revalidate: 1 }})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

async function deleteBlog(id : number)
{
      const res = await fetch(`http://localhost:3001/blogs/${id}`,{
          method : "DELETE",
      });

      if(!res.ok)
      {
        throw new Error('Failed to delete blog item');
      }

      return res.json();
}

type BlogItem = {
   id : number,
   title : string,
   description : string,
   createdBy : string
}

export default async function Home() {
  
  const data : BlogItem[] = await getData();

  const  hanldeDelete = async (id : number) => {
      deleteBlog(id)
  } 


  return (

  <div className="container mx-auto">
    <h1 className="text-center mt-5 mb-2 font-bold underline underline-offset-4">Blog List</h1>

      <div className='flex mt-5 flex-wrap'>
          {
            data.map((d:BlogItem, index:number) : React.ReactNode => {
              
                return (
                  <div key={index} className="mr-2 mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <a href="#">
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.title}</h5>
                          </a>
                          <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">{d.description}</p>
                          <div className="flex">
                              <p className="font-normal text-gray-500 dark:text-gray-400 mr-1">Created By -  </p>
                              <span className="font-medium"> {d.createdBy} </span>
                          </div>

                         <div className="flex justify-between mt-2">
                            <button className="bg-transparent mr-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                  Edit
                              </button>

                            <DeleteForm Blog={d} />
                         </div>
                       </div>
                    )
               
              })
          }
          
        
      </div>
  </div>

  )
}
