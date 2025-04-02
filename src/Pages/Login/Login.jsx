import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { loginUser } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const targets = { email, password };
    console.log(targets);
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.user.email) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Error  message", error.message);
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };
  const handleCaptcha = () => {
    const user_captcha = captchaRef.current.value;
    if (validateCaptcha(user_captcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss! Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <div className="text-center md:w-1/2 lg:text-left ">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. <br /> In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} action="">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label na className="fieldset-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div className="">
                    <label na className="fieldset-label">
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      name="captcha"
                      ref={captchaRef}
                      type="text"
                      className="input"
                      placeholder="type the captcha above"
                    />

                    <button
                      type="button"
                      onClick={handleCaptcha}
                      className="btn px-10  btn-outline btn-sx mt-2"
                    >
                      {" "}
                      Validate
                    </button>
                  </div>

                  <input
                    disabled={disabled}
                    className="btn btn-neutral mt-4"
                    type="submit"
                    value="Login"
                  />
                  <SocialLogin></SocialLogin>
                </fieldset>
              </form>

              <div className="flex  items-center">
                <p className="text-[18px] font-semibold">
                  {" "}
                  New Here ? Create a Account
                </p>
                <Link to={"/singUp"}>
                  {" "}
                  <button className="btn btn-link text-[20px] font-semibold">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
