import React, { useEffect, useState } from "react";
import styles from "../styles/Signup.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../redux/actions/auth/LogIn";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

function Signin({ }) {
    const [ShowForm, setShowForm] = useState(true);
    const auth = useSelector((state) => state.auth);
    const signinError = useSelector((state) => state.error.signinError);
    const router = useRouter();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (auth.isAuth || token) {
            setShowForm(false);
            router.push("/");
        }
    });
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        dispatch(LogIn(data));
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>shopy | signin</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {
                !ShowForm ? (
                    <h5 className="text-white-50 m-auto ">the user is already logedin</h5>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Sign in</h1>
                        {signinError && (
                            <div className="alert alert-danger">{signinError}</div>
                        )}
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                {...register("email", { required: "this filed is required" })}
                            />
                            {errors.email && (
                                <p className="text-danger text-center mt-2">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                {...register("password", {
                                    required: "this filed is required",
                                    minLength: {
                                        value: 8,
                                        message: "should have 8 characters",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-danger text-center mt-2">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Submit
                        </button>
                        <div>
                            <span>or </span>
                            <Link href="/Signup">
                                <a>SignUp</a>
                            </Link>
                        </div>
                    </form>
                )
            }
        </div >
    );
}

export default Signin;
