import React, {useEffect, useState} from 'react';
import fetchPosts from '../../axios/fetch'
import Post from "../Blocks/Post";

interface PostData {
    userId: number,
    id: number,
    title: string,
    body: string
}

function MainPage() {
    let [postArray, setPostArray] = useState<PostData[]>([]);

    useEffect(() => {
        fetchPosts()
            .then(posts => {
                setPostArray(posts);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    //console.log('Загруженные посты:', postArray);
    return (
        <div className={'grid grid-cols-4 gap-4 p-6 min-w-800'}>
            {postArray.map(data =>
                <Post body={data.body}
                      title={data.title}
                      userId={data.userId}
                      id={data.id}/>)}
        </div>
    );
}


export default MainPage;