import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "신동욱",
        comment: "안녕하세요, 신동욱입니다.",
    },
    {
        name: "신동욱2",
        comment: "안녕하세요, 신동욱입니다.",
    },
    {
        name: "신동욱3",
        comment: "안녕하세요, 신동욱입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;