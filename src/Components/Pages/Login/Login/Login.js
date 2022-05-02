import "./Login.css";
import React, { useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { auth } from "../../../../Firebase/Firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    toast.error(<span>{error?.message}</span>);
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    toast.success("Login Successfully!");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Reset Password Link Sent Successfully!");
    } else {
      toast.error('Type your Email first!', {
        duration: 4000,
        position: 'top-center',
      });
    }
  };
  return (
    <div className="form-body">
      <PageTitle title="Login"></PageTitle>
      <div className="container-main-form " id="container">
        <div className="form-container-section log-in-container">
          <form onSubmit={handleSubmit} className="form">
            <h1>Login</h1>
            <SocialLogin />
            <span>or use your account</span>
            <input required ref={emailRef} type="email" placeholder="Email" />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
            <p>
              Forgot Password ?{" "}
              <Link
                className="text-primary text-decoration-none pe-auto"
                to="/login"
                onClick={resetPassword}
              >
                Reset
              </Link>
            </p>
            <button className="login-btn" type="submit">
              Log In
            </button>
            <p>
              New Here ?{" "}
              <span>
                <Link
                  className="text-primary"
                  to="/signup"
                >Signup
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
