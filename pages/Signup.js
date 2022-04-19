import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Signup.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignUp } from "../redux/actions/auth/Signup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

function Signup({ }) {
    const [ShowForm, setShowForm] = useState(true);
    const auth = useSelector((state) => state.auth);
    const signupError = useSelector((state) => state.error.signupError);
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
        watch,
        formState: { errors },
    } = useForm();

    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => dispatch(SignUp(data));

    return (
        <div className={styles.container}>
            <Head>
                <title>shopy | signup </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {!ShowForm ? (
                <h5 className="text-white-50 m-auto ">the user is already logedin</h5>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Signup</h1>
                    {signupError && (
                        <div className="alert alert-danger">{signupError}</div>
                    )}
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            autoFocus
                            {...register("name", { required: "This field is required" })}
                        />
                        {errors.email && (
                            <p className="text-danger text-center mt-2">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            {...register("email", { required: "This field is required" })}
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
                            autoComplete="new-password"
                            {...register("password", {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message: "should have 8 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-danger text-center mt-2">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register("confirm_password", {
                                required: "This field is required",
                                minLength: {
                                    value: 8,
                                    message: "should have 8 characters",
                                },
                                validate: (value) =>
                                    value === password.current ||
                                    "The passwords dosen't not match",
                            })}
                        />
                        {errors.confirm_password && (
                            <p className="text-danger text-center mt-2">
                                {errors.confirm_password.message}
                            </p>
                        )}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                    <div>
                        <span>Have account ? </span>
                        <Link href="/Signin">
                            <a>Sign in</a>
                        </Link>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Signup;
