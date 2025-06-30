import Image from "next/image";
import Header from "../components/header";

function Login() {
  return (
    <><Header />
      <div className="w-full mt-28 flex flex-col lg:flex-row justify-start items-start max-w-screen-2xl mx-auto px-4">
        <div className="w-full lg:w-[600px] h-auto lg:h-[500px] m-0 lg:m-11 mb-8 lg:mb-0 flex-shrink-0">
          <Image
            src={"/images/sign-up.jpg"}
            width={400}
            height={400}
            alt="Mobile"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-[600px] h-auto lg:h-[500px] my-0 flex flex-col justify-center items-center">
          <div className="w-full max-w-md mx-auto">
            <div>
              <h1 className="sm:text-lg md:text-2xl lg:text-3xl mb-2">Login Here</h1>
              <p className="text-sm pt-2 text-gray-300">Enter your details below</p>
            </div>
            <form className="mt-5 space-y-5">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="py-2 px-3 bg-transparent border-b-2 border-charcoal text-pearl w-full focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="py-2 px-3 bg-transparent border-b-2 border-charcoal text-pearl w-full focus:outline-none"
              />
            </form>
            <div className="flex flex-col sm:flex-row items-center mt-10 gap-4">
              <button className="py-2 px-6 w-full sm:w-auto bg-bordeaux text-pearl rounded-sm hover:bg-charcoal transition">Log In</button>
              <button className="py-2 px-4 w-full sm:w-auto bg-charcoal text-pearl rounded-sm hover:bg-bordeaux transition">Forgot Password</button>
            </div>
            <div className="flex flex-col items-center mt-5 w-full">
              <p className="text-sm text-pearl mt-3">
                Don&apos;t have an account?{' '}
                <a href="/signup" className="underline text-bordeaux">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;