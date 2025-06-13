"use client";
import {  useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { signIn,useSession } from "next-auth/react";
import { IconBrandGoogle } from "@tabler/icons-react";


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState<{ password: string; showPassword: boolean }>({ password: "", showPassword: false });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const session = useSession();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      // Perform login request
      
      try {
        const response = await fetch('/api/auth/login', { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password: password.password }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message ?? "Login failed");
        }
  
        // Login successful
        console.log("Login successful", data);
        // Store user info or token in localStorage/cookies if needed
        if (data.token || session.data?.user) {
          localStorage.setItem("token", data.token);
        }
        router.push("/"); // Redirect to home page or dashboard
      } catch (err: unknown) {
        console.error("Login error:", err);
        setError(err instanceof Error ? err.message : "Invalid email or password. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  return (  
    <div> 
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Half-circle gradient background element */}

      <div className="absolute w-[100%] h-[100%] -left-1/2 rounded-full bg-gradient-to-br from-blue-900 to-black opacity-70" />
      <div className="absolute z-10 left-50 top-100 text-center">
        <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-white animate-gradient-x">
          HELLO, WELCOME!
        </p>

        <p className="text-lg text-white/90 pt-6 pb-4 animate-fade-in-down">
          Do not have an account?
        </p>
        <button
          type="button"
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-15 font-medium shadow-input bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 hover:cursor-pointer transition-all duration-300 hover:shadow-lg"
          onClick={() => router.push("/signup")}
        >
          <span className="text-lg font-bold bg-clip-text text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 dark:from-indigo-300 dark:via-purple-400 dark:to-cyan-300">
        Register
          </span>
          <BottomGradient />
        </button>
      </div>
      
     

      <Navbar/>
      <div className="h-screen flex justify-center items-center pl-30 ml-200 pt-5 relative z-10">
        <div className="bg-gradient-to-b from-gray-950 h-160 w-130 rounded-2xl flex justify-center items-center border-2 border-white/20 backdrop-blur-sm bg-opacity-80">
          <div className="grid gap-20">
            <p className="text-4xl font-bold text-white flex justify-center items-center pt-30">
              Login to your Account
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 pb-40 px-4"
            >
              {error && (
                <div className="text-red-300 text-center ">{error}</div>
              )}
              <input
                type="email"
                className="bg-muted w-full h-13 rounded-xl border-2 text-white font-bold text-lg focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder:text-center px-4 py-4"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
                <div className="relative">
                  <input
                  type={password.showPassword ? "text" : "password"}
                  className="bg-muted w-full h-13 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-white font-bold text-lg placeholder:text-center pl-10 pr-10 py-4"
                  placeholder="Password"
                  value={password.password}
                  onChange={(e) => setPassword({...password, password: e.target.value})}
                  required
                  />
                  <div 
                  className="absolute inset-y-0 right-4 flex items-center pl-3 cursor-pointer"
                  onClick={() => setPassword({...password, showPassword: !password.showPassword})}
                  >
                  {password.showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                  </div>
                </div>
              <button
                type="button"
                className="text-white text-lg hover:cursor-pointer hover:underline"
                onClick={() => router.push("/auth/forgot-password")}
              >
                Forgot Password?
              </button>
              <button
                type="submit"
                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:cursor-pointer dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                disabled={loading} 
                
              > 
                 <span className=" text-neutral-700 dark:text-neutral-300 text-xl">
              
                {loading ? "Loading..." : "Login"}
            </span>
            <BottomGradient />
              </button>
              <div className="grid grid-cols-2 gap-4">  
              <button
                type="button"
                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:cursor-pointer dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                onClick={() => signIn()}
              >

                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">Google</span>
                <BottomGradient />
              </button>
              <button
                type="button"
                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:cursor-pointer dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                onClick={() => router.push("/auth/otp-login")}
              >

             <span className=" text-neutral-700 dark:text-neutral-300 text-lg">  

                OTP Login
              </span>

              <BottomGradient />
              </button>

              </div>
              <p className="text-white text-center">
                Do not have an account?{" "}
                <Link href="/signup" className="underline">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    
      </div>
      <Footer />
      </div>
  );
}





const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};