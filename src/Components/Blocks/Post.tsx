import React from 'react';
import {Link} from "react-router-dom";
// import PropTypes from 'prop-types';
//
// Post.propTypes = {
//
// };
type postProps = {
    userId: number,
    id: number,
    title: string,
    body: string
}

function Post(props: postProps) {
    return (
        <Link to={`/post/${props.id}`}
              state={{ title: props.title, body: props.body }}
              className={'bg-[#578de3] rounded-lg'}>
            <div className={'rounded-lg font-bold p-2.5 text-center bg-[#175ec4] text-[#ffffff]'}>{props.title}</div>
            <div className={'text-[#ffffff] p-2.5'}>{props.body}</div>
        </Link>
    );
}

export default Post;