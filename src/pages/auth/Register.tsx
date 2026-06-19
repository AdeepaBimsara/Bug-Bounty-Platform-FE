import { useState } from "react";
import { register } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const [role,setRole] = useState("")
  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleRegister = async () => {

    if(!fullName || !email || !password){
      alert("please fill all fields")
      return
    }
    
    try{
     const data = await register(
        role,
        fullName,
        email,
        password
    )
     alert(data.message)
     alert("Success full register...")
     navigate("/login")
     
    }catch(err){
      alert("register fail....")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <header className="border-b border-white/10 p-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          DefenZo
        </h1>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-6">

        {/* Left Side */}
        <div className="hidden flex-1 lg:block">
          <h2 className="text-5xl font-bold">
            Join The Future of
            <span className="block text-cyan-400">
              Cyber Security
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Connect with security researchers and organizations worldwide.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full max-w-md rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg">

          <h2 className="text-3xl font-bold">
            Create Account
          </h2>

          <p className="mt-2 text-slate-400">
            Register to start your journey
          </p>

          {/* Role */}
          <div className="mt-6">
            <label className="mb-2 block text-sm">
              Select Role
            </label>

            <select 
            className="w-full rounded-lg border border-white/10 bg-black p-3" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            >
              <option>Researcher</option>
              <option>Company</option>
            </select>
          </div>

          {/* Full Name */}
          <div className="mt-4">
            <label className="mb-2 block text-sm">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black p-3"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="mb-2 block text-sm">
              Email
            </label>

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
            <label className="mb-2 block text-sm">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-black p-3"
            />
          </div>

          {/* Button */}
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
            onClick={handleRegister}
          >
            Create Account
          </button>

          {/* Sign In */}
          <p className="mt-4 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a href="/login" className="text-cyan-400">
              Sign In
            </a>
          </p>

        </div>

      </main>

    </div>
  );
};

export default Register;