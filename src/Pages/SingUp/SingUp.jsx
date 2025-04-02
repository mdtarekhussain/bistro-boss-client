import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosLocal from "../../Hooks/useAxiosLocal";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";
const SingUp = () => {
  const localAxios = useAxiosLocal();
  const navigate = useNavigate();

  const { signIn, updateUSerProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log("New User Created:", user);
        updateUSerProfile(data.name, data.photo)
          .then(() => {
            const authInfo = {
              name: data.name,
              email: data.email,
            };
            localAxios.post("/user", authInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  icon: "success",
                  title: "Sign up successful!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.error("Sign Up Error:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        console.error("Sign Up Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // const handleSign = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const name = form.name.value;
  //   console.log(email, password, name);

  //   signIn(email, password)
  //     .then((res) => {
  //       console.log(res.user);
  //       if (res.user.email) {
  //         Swal.fire({
  //           icon: "success",
  //           title: "Your work has been saved",
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error  message", error.message);
  //       if (error) {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Something went wrong!",
  //           footer: '<a href="#">Why do I have this issue?</a>',
  //         });
  //       }
  //     });
  // };
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
        <title>Bistro Boss! Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <div className="text-center md:w-1/2 lg:text-left ">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. <br /> In deleniti eaque aut
              repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl">
            <div className="card-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                //  onSubmit={handleSign}
                action=""
              >
                <fieldset className="fieldset">
                  <label className="fieldset-label">Your Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    className="input"
                    placeholder="name"
                  />

                  {errors.name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                  <label className="fieldset-label">Photo URL</label>
                  <input
                    {...register("photo", { required: true })}
                    type="text"
                    className="input"
                    placeholder="Photo Url"
                  />
                  {errors.photo && (
                    <span className="text-red-600">Photo URl is required</span>
                  )}
                  <label className="fieldset-label">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-600">name is required</span>
                  )}
                  <label na className="fieldset-label">
                    Password
                  </label>
                  <input
                    {...register(
                      "password",
                      { required: true },
                      { min: 18, max: 99 }
                    )}
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">
                      This Password is required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password Must be 6 Characters
                    </span>
                  )}
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
                    value="Sign In"
                  />
                </fieldset>
              </form>
              <SocialLogin></SocialLogin>
              <div className="flex  items-center">
                <p className="text-[18px] font-semibold">
                  {" "}
                  Already Have a Account{" "}
                </p>
                <Link to={"/login"}>
                  {" "}
                  <button className="btn btn-link text-[20px] font-semibold">
                    Login
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

export default SingUp;
