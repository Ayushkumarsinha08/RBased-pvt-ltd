"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { signIn } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError("");
  
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          throw new Error(data.message ?? "Login failed");
        }
  
        // Login successful
        console.log("Login successful", data);
        // Store user info or token in localStorage/cookies if needed
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        router.push("/services"); // Redirect to home page or dashboard
      } catch (err: unknown) {
        console.error("Login error:", err);
        setError(err instanceof Error ? err.message : "Invalid email or password. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  return (  
    <div> 
    <div className="min-h-screen relative overflow-hidden">
      {/* Half-circle gradient background element */}
      <div className="absolute w-[110%] h-[100%] -top-1/2 -left-1/2 rounded-full bg-gradient-to-br from-blue-950 to-black opacity-70" />
      
      {/* Second overlapping half-circle for more depth */}
      <div className="absolute w-[100%] h-[100%] -bottom-1/2 -right-1/2 rounded-full bg-gradient-to-tl from-gray-100 to-black opacity-60" />

      <Navbar/>
      <div className="h-screen flex justify-center items-center relative z-10">
        <div className="bg-gradient-to-b from-gray-950 h-180 w-150 rounded-2xl flex justify-center items-center overflow-hidden shadow-lg transition-transform hover:scale-105 border-2 border-white/20 backdrop-blur-sm bg-opacity-80">
          <div className="grid gap-30">
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
                className="bg-muted w-full h-13 rounded-xl border-2 text-white focus:ring-2 placeholder:text-center px-4 py-4"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="bg-muted w-full h-13 rounded-xl text-white placeholder:text-center px-4 py-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="text-white text-lg hover:cursor-pointer hover:underline"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </button>
              <button
                type="submit"
                className="bg-muted text-xl w-full text-gray-300 hover:cursor-pointer transition-colors duration-300 ease-in-out rounded-xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] relative overflow-hidden group hover:bg-gradient-to- from-black"
                disabled={loading} 
              > 
                {loading ? "Login..." : "Login"}
              </button>
              <div className="grid grid-cols-2 gap-4">  
              <button
                type="button"
                className="bg-muted text-xl w-full text-gray-300 hover:cursor-pointer transition-colors duration-300 ease-in-out rounded-xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] relative overflow-hidden group hover:bg-gradient-to- from-black"
                onClick={() => signIn(" ")}
              >
                Google
              </button>
              <button
                type="button"
                className="bg-muted text-xl w-full text-gray-300 hover:cursor-pointer transition-colors duration-300 ease-in-out rounded-xl h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] relative overflow-hidden group hover:bg-gradient-to- from-black"
                onClick={() => router.push("/services")}
              >
                OTP
              </button>

              </div>
              <p className="text-white text-center">
                Do not have an account?{" "}
                <Link href="/signup" className="underline">
                  Sign up
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