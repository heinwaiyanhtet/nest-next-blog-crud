import { createSlice } from '@reduxjs/toolkit'

interface Blog{
    id : number,
    title : string,
    createdBy : string,
    description : string,
}

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [] as Blog[],
  reducers: {

    setBlogs(state,action)
    {
        state.push({
            id: action.payload.id,
            title: action.payload.title,
            createdBy : action.payload.createdBy,
            description : action.payload.description,
        })
    }

  }
})

export const { setBlogs } = blogsSlice.actions
export default blogsSlice.reducer