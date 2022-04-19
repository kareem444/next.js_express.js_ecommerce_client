import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

function ProductComments({ styles, product_id, comments }) {
    const [ShowCommentInput, setShowCommentInput] = useState(false);
    const auth = useSelector((state) => state.auth);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (token && auth.isAuth) {
            setShowCommentInput(true);
        } else {
            setShowCommentInput(false);
        }
    }, [auth.isAuth]);

    return (
        <div className="container mt-5 mb-5 w-80 text-center">
            <h3 className="text-black-50 mb-4">Comments</h3>
            {ShowCommentInput && (
                <CommentInput styles={styles} product_id={product_id} auth={auth} />
            )}
            <div className={styles.totla_comment}>
                {comments && <span>{comments.commentCount} comment</span>}
            </div>
            {comments ? (
                comments.comment.map((comment, index) => (
                    <CommentItem styles={styles} key={index} comment={comment} />
                ))
            ) : (
                <div className="my-5 text-black-50">No comments yet</div>
            )}
        </div>
    );
}

export default ProductComments;
