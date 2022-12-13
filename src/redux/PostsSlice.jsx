import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	todos: [],
	loading: false,
	error: null,
}

export const getListPosts = createAsyncThunk('todos/getTodos', async () => {
    const response = await axios.get('https://dummyjson.com/posts')
    return response.data
  })
  
const PostsSlice = createSlice({
	name: 'Posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getListPosts.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getListPosts.fulfilled, (state, action) => {
			state.loading = false
			state.todos = action.payload
		})
		builder.addCase(getListPosts.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message
		})
	},
})

export default PostsSlice.reducer