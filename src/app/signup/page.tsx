import Header from "../components/header";
import Image from "next/image";
import Link from "next/link";

function Signup() {
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
                            <h1 className="sm:text-lg md:text-2xl lg:text-3xl">Create an account</h1>
                            <p className="text-sm pt-2 text-gray-300">Enter your details below</p>
                        </div>
                        <form className="mt-5 space-y-5">
                            <input
                                type="text"
                                placeholder="Name"
                                className="py-2 px-3 bg-transparent border-b-2 border-charcoal text-pearl w-full focus:outline-none"
                            />
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
                            <input
                                className="py-2 px-12 bg-bordeaux hover:bg-charcoal text-pearl rounded-sm w-full transition"
                                type="button"
                                value="Create Account"
                            />
                        </form>
                        <div className="flex flex-col items-center mt-5 w-full gap-3">
                            <button className="py-2 px-4 bg-charcoal text-pearl rounded-sm w-full hover:bg-bordeaux flex items-center justify-center gap-2 transition">
                                <Image
                                    src="/images/googleicon.png"
                                    alt="Google"
                                    width={20}
                                    height={20}
                                />
                                Continue with Google
                            </button>
                            <p className="text-sm text-pearl mt-3">
                                Already have an account?{' '}
                                <Link href="/login" className="underline text-bordeaux">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;