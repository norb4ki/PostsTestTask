import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./Components/Pages/ErrorPage";
import PostPage from "./Components/Pages/PostPage";
import {loader as rootLoader} from "./Components/Pages/MainPage";
import getPost from "./axios/fetch";
import {PostData} from "./utils/interfaces";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
    },
    {
        path: "/post/:postId",
        loader: async ({params}) => {
            const posts = await getPost();
            const postId = parseInt(params.postId as string);
            //console.log(posts[postId]);
            return posts.find((obj: PostData) => {
                return obj.id === postId;
            });
        },
        element: <PostPage/>
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
