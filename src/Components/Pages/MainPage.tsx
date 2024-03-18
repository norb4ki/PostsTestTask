import React from 'react';
import {getPosts} from '../../axios/fetch'
import Post from "../Blocks/Post";
import {useLoaderData} from "react-router-dom";
import {LoaderData, PostData} from "../../utils/interfaces";

export async function loader(): Promise<LoaderData> {
    const posts = await getPosts();
    return { posts };
}

function MainPage() {
    const { posts } = useLoaderData() as { posts: PostData[] };

    return (
        <div className={'grid grid-cols-4 gap-4 p-6 min-w-800'}>
            {posts.map(data =>
                <Post body={data.body}
                      title={data.title}
                      userId={data.userId}
                      id={data.id}/>)}
        </div>
    );
}


export default MainPage;