/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/auth/register.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { setRegister } from "../../redux/features/auth/authSlice";
import { motion } from "framer-motion";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const { isDark } = useAppSelector((state) => state.theme);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignUp = async (event: {
    preventDefault: () => void;
    target: any;
  }) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const toastId = toast.loading("Waiting");

    try {
      const userInfo = {
        name,
        email,
        password,
      };
      await register(userInfo);
      dispatch(setRegister({ name: name, email: email, password: password }));
      toast.success("Registration Successfully", {
        id: toastId,
        duration: 3000,
      });
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <div
      className={`${isDark ? "bg-slate-700" : "bg-base-300"} hero min-h-screen`}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 w-4/5 md:mr-12"
        >
          <img src={img} alt="image" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Registration</h1>

            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <p className="my-3 text-center">
                  Already have an account ?{" "}
                  <Link className="text-orange-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
