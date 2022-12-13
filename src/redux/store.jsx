import { configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice';
import PostsSlice from './PostsSlice';






export const store =configureStore({
    reducer:{
        user:UserSlice,
        ListPosts:PostsSlice,
    }
})