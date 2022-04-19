import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MakeComment } from "../../../redux/actions/comment/makeComment";

function CommentInput({ styles , product_id , auth}) {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        dispatch(MakeComment(data , product_id , auth.AuthInfo))
    };
    return (
        <div className={styles.comment_input_container}>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Comment"
                        {...register("comment", {
                            required: "please type a comment first",
                        })}
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </form>
            </div>
            {errors.comment && (
                <span className=" text-danger">{errors.comment.message}</span>
            )}
        </div>
    );
}

export default CommentInput;
