import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getMyDetails, login } from "../../services/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("please fill all fields");
    }

    try {
      const data = await login(email, password);
      if (data?.data?.accessToken) {
        await localStorage.setItem("accessToken", data.data.accessToken);
        await localStorage.setItem("refreshToken", data.data.refreshToken);

        const resData = await getMyDetails();
        const userData = resData?.data;
        setUser(userData);

        // navigate("/researcherdash")

        // role check
        if (userData.role == "COMPANY") {
          navigate("/companydash");
        } else if (userData.role === "RESEARCHER") {
          navigate("/researcherdash");
        } else {
          alert("Invalid role");
        }
        
      } else {
        alert("Login fail..!");
      }
    } catch (err) {
      alert("Login fail..!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-5">
        <h1 className="text-2xl font-bold text-cyan-400">DefenZo</h1>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-">
        {/* Left Side */}
        <div className="hidden flex-1 lg:block">
          <h2 className="text-5xl font-bold">
            Welcome Back To
            <span className="block text-cyan-400">DefenZo</span>
          </h2>

          <p className="mt-4 text-slate-400">
            Sign in and continue your cyber security journey.
          </p>

          {/* Stats */}
          <div className="mt-8 space-y-4 max-w-170">
            <div className="rounded-xl border border-cyan-500/20 p-4">
              <h3 className="text-xl font-bold text-cyan-400">500+</h3>
              <p className="text-slate-400">Security Researchers</p>
            </div>

            <div className="rounded-xl border border-cyan-500/20 p-4">
              <h3 className="text-xl font-bold text-cyan-400">100+</h3>
              <p className="text-slate-400">Companies</p>
            </div>

            <div className="rounded-xl border border-cyan-500/20 p-4">
              <h3 className="text-xl font-bold text-cyan-400">10K+</h3>
              <p className="text-slate-400">Vulnerabilities Reported</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg">
          <h2 className="text-3xl font-bold">Sign In</h2>

          <p className="mt-2 text-slate-400">Access your DefenZo account</p>

          {/* Email */}
          <div className="mt-6">
            <label className="mb-2 block text-sm">Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black p-3"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="mb-2 block text-sm">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black p-3"
            />
          </div>

          {/* Remember Me */}
          <div className="mt-4 flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </label>

            <a href="#" className="text-sm text-cyan-400">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="
              mt-6
              w-full
              rounded-lg
              bg-cyan-500
              py-3
              font-semibold
              text-black
              transition
              hover:bg-cyan-400
            "
            onClick={handleLogin}
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="my-6 border-t border-white/10"></div>

          {/* Google Login */}
          <button
            className="
              w-full
              rounded-lg
              border
              border-white/10
              py-3
              transition
              hover:bg-white/5
            "
          >
            Continue With Google
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <a href="/register" className="text-cyan-400">
              Create Account
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
