import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleLogin } = useContext(AuthContext);
    const handleSocialLogin = (media) => {
        media()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    };


  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral"
        >
          Google Login
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
