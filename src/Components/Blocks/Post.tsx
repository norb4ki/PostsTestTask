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
        <div className={'bg-[#578de3] rounded-lg'}>
            <div className={'rounded-lg font-bold p-2.5 text-center bg-[#175ec4] text-[#ffffff]'}>{props.title}</div>
            <div className={'text-[#ffffff] p-2.5'}>{props.body}</div>
        </div>
    );
}

export default Post;