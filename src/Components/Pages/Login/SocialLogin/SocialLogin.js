import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../../Firebase/Firebase.init";
import { toast } from "react-hot-toast";
import useToken from "../../../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [token] = useToken(user1 || user2);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    signInWithGoogle();
  };

  const handleGithub = () => {
    signInWithGithub();
  };
  if (error1 || error2) {
    toast.error(
      <span>
        {error2?.message} {error1?.message}
      </span>
    );
  }
  if (loading1 || loading2) {
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>;
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="social-container">
        <BsGithub className="social" onClick={handleGithub}></BsGithub>
        <FcGoogle className="social" onClick={handleGoogle}></FcGoogle>
      </div>
    </>
  );
};

export default SocialLogin;
