import React from 'react';
// import PropTypes from 'prop-types';
//
// Post.propTypes = {
//
// };
type postProps ={
    userId: number,
    id: number,
    title: string,
    body: string
}

function Post(props: postProps) {
    return (
        <div className={'post'}>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <p>{props.id}</p>
        </div>
    );
}

export default Post;