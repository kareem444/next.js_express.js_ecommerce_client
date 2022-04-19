import React from "react";
import Avatar from "@material-ui/core/Avatar";

function CommentItem({ styles , comment }) {
    return (
        <div className={styles.comment_item_container}>
            <div>
                <Avatar alt="Remy Sharp" src="/kk.jpg" />
                <h6>{comment.userName}</h6>
            </div>
            <p>
                {comment.body}
            </p>
        </div>
    );
}

export default CommentItem;
