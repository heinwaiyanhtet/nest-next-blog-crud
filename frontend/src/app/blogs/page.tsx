async function getData() {
    const res = await fetch('http://localhost:3001/blogs')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
}
 
type BlogItem = {
   id : number,
   title : string,
   description : string,
   createdBy : string
}

export default async function Home() {
  
  const data : BlogItem[] = await getData();

  return (

    <div className="container mx-auto">
      <h1 className="text-center mt-5 mb-5 font-bold underline underline-offset-4">Blog List</h1>

      <div className='flex mt-5'>
          {
            data.map((d : BlogItem,index:number) : React.ReactNode => {
                return <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{d.title}</h5>
                            </a>
                            <p className="mb-1 font-normal text-gray-500 dark:text-gray-400">{d.description}</p>
                            <div className="flex">
                                <p className="font-normal text-gray-500 dark:text-gray-400 mr-1">Created By -  </p>
                                <span className="font-medium"> {d.createdBy} </span>
                            </div>
                       </div>
               
              })
          }
          
        
      </div>
    </div>

  )
}