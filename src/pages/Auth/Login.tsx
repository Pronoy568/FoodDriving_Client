/* eslint-disable @typescript-eslint/no-explicit-any */
import img from "../../assets/auth/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = async (event: {
    preventDefault: () => void;
    target: any;
  }) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email,
        password,
      };
      await login(userInfo);
      dispatch(setUser({ email: email, password: password }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate("/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 w-4/5 md:mr-12"
        >
          <img className="rounded-3xl" src={img} alt="image" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
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
                <p className="text-center my-3">
                  New to user ?{" "}
                  <Link className="text-orange-600 font-bold" to="/register">
                    Registration
                  </Link>{" "}
                </p>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
