import { Navbar } from "@/components/ui/NavBar";

export default function ForgetPassword() {
    return (
        <div>
        <Navbar />
            <div className="flex flex-col items-center justify-center h-screen w-full bg-black">
                <div className="bg-gradient-to-b from-gray-950 shadow-md rounded-lg p-8 h-[50vh] w-full max-w-lg mx-auto">
                    <h2 className="text-2xl font-bold text-white pt-8 text-center mb-6">Get Password</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-xl font-medium pt-8 pb-2 text-gray-100">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:cursor-pointer dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        >
                            
             <span className=" text-neutral-700 dark:text-neutral-300 text-lg">  

Send Password to Email
</span>

<BottomGradient />
                        </button>
                    </form>
                </div>
            </div>
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