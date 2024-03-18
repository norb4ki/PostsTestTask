import React from 'react';
import {Params, useLoaderData} from "react-router-dom";
import {PostData} from "../../utils/interfaces";
import {getPost} from "../../axios/fetch";

export async function loader({ params }: { params: Params<string> }): Promise<PostData> {
    const postId = params.postId; // postId: string | undefined
    if (postId === undefined) {
        throw new Error('postId is undefined');
    }
    return await getPost(postId);
}

function PostPage() {
    const post = useLoaderData() as  PostData ;
    console.log(post);
    return (
        <div>
            <div className={'rounded-lg font-bold p-2.5 text-center bg-[#175ec4] text-[#ffffff]'}>{post.title}</div>
            <div className={'text-[#000000] p-2.5'}>{post.body}</div>
        </div>
    );
}

export default PostPage;