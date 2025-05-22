"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

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
        
        // Redirect to home page after successful login
        router.push("/");
      } catch (err: unknown) {
        console.error("Login error:", err);
        setError(err instanceof Error ? err.message : "Invalid email or password. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  return (   

    <div className=" min-h-screen bg-black">
      <Navbar/>
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gradient-to-b from-gray-950 to-slate-800 h-180 w-150 rounded-2xl flex justify-center items-center overflow-hidden shadow-lg transition-transform hover:scale-105">
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
              className="bg-red-100 w-full h-10 rounded-xl text-black focus:ring-2 placeholder:text-center px-4 py-4"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="bg-red-100 w-full h-10 rounded-xl text-black placeholder:text-center px-4 py-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              className=" bg-gray-950 text-xl text-gray-300 hover:cursor-pointer hover:bg-black "
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
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
    <hr className="w-full border-white/20" />
    <Footer/>
  </div>


  );
}