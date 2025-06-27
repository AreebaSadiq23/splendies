'use client'
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "../components/header";

export default function ContactPage() {
  return (
    <>
    <Header/>
    <section className="bg-onyx text-pearl font-sans min-h-screen mt-10">
      {/* Hero Section */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[400px] bg-[url('/images/bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-onyx/60 backdrop-blur-md" />
        <h1 className="relative text-[28px] sm:text-[36px] md:text-[60px] font-extrabold text-pearl tracking-widest uppercase z-10 drop-shadow-[0_2px_16px_rgba(245,245,245,0.4)] text-center px-2">Contact Us</h1>
      </div>

      {/* Contact Info */}
      <div className="py-10 sm:py-12 md:py-16 px-2 sm:px-4 md:px-24 text-center">
        <h2 className="text-[24px] sm:text-[30px] md:text-[40px] font-extrabold text-bordeaux uppercase mb-2 tracking-[2px] drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">Contact</h2>
        <p className="text-pearl text-[13px] sm:text-[15px] md:text-[17px] mb-8 sm:mb-10 md:mb-12 tracking-wide">Contact Information</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[{ icon: Phone, label: "+82 000 0000" }, { icon: Mail, label: "mail@splendies.co" }, { icon: MapPin, label: "London Eye, UK" }].map((item, i) => (
            <div key={i} className="flex flex-col items-center bg-onyx/80 backdrop-blur-md border border-charcoal rounded-xl shadow-lg p-5 sm:p-6 transition-transform hover:scale-105 hover:shadow-2xl">
              <div
                className={
                  `w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] flex items-center justify-center mb-4 sm:mb-5 border-2 border-bordeaux bg-bordeaux/20 ` +
                  (i === 1
                    ? "rounded-full"
                    : "rounded-tr-[16px] rounded-bl-[16px]")
                }
                style={{ boxShadow: '0 0 18px 4px #6D0F36, 0 0 32px 8px #36454F' }}
              >
                <item.icon className="text-bordeaux drop-shadow-[0_0_8px_#6D0F36]" size={22} />
              </div>
              <h4 className="text-[14px] sm:text-[16px] font-semibold mb-1 sm:mb-2 text-pearl drop-shadow-[0_1px_4px_#F5F5F533]">{item.label}</h4>
              <p className="text-[12px] sm:text-[13px] text-pearl/70 leading-relaxed max-w-[220px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-2 sm:px-4 md:px-24 pb-10 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
          <div className="pt-2 sm:pt-4">
            <h3 className="text-bordeaux text-[13px] sm:text-[15px] md:text-[16px] font-bold uppercase tracking-widest mb-2 sm:mb-3 drop-shadow-[0_1px_4px_#6D0F36]">Form</h3>
            <h2 className="text-[22px] sm:text-[26px] md:text-[38px] font-extrabold text-pearl mb-3 sm:mb-5 leading-snug drop-shadow-[0_2px_8px_#F5F5F5]">Get In Touch !!</h2>
            <p className="text-[13px] sm:text-[14px] text-pearl/80 leading-[1.8] max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <form className="grid gap-4 sm:gap-5 bg-onyx/80 backdrop-blur-md border border-charcoal rounded-xl shadow-lg p-5 sm:p-8">
            <input className="bg-onyx/60 border border-charcoal px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-pearl placeholder-pearl/60 rounded-[8px] focus:outline-bordeaux focus:ring-2 focus:ring-bordeaux transition-all" type="text" placeholder="Name" />
            <input className="bg-onyx/60 border border-charcoal px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-pearl placeholder-pearl/60 rounded-[8px] focus:outline-bordeaux focus:ring-2 focus:ring-bordeaux transition-all" type="text" placeholder="Email" />
            <input className="bg-onyx/60 border border-charcoal px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-pearl placeholder-pearl/60 rounded-[8px] focus:outline-bordeaux focus:ring-2 focus:ring-bordeaux transition-all" type="number" placeholder="Phone" />
            <textarea className="bg-onyx/60 border border-charcoal px-4 sm:px-5 py-2.5 sm:py-3 text-sm text-pearl placeholder-pearl/60 rounded-[8px] focus:outline-bordeaux focus:ring-2 focus:ring-bordeaux transition-all" rows={4} placeholder="Message" />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px 8px #6D0F36' }}
              whileTap={{ scale: 0.98 }}
              className="bg-bordeaux text-pearl font-semibold py-2.5 sm:py-3 rounded-[8px] text-[14px] sm:text-[15px] shadow-lg transition-all drop-shadow-[0_0_12px_#6D0F36b3] border-none outline-none focus:ring-2 focus:ring-bordeaux"
            >
              Submit Button
            </motion.button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-2 sm:px-4 md:px-24 pb-10 sm:pb-14 md:pb-16">
        <iframe
          className="w-full h-[200px] sm:h-[260px] md:h-[400px] rounded-xl shadow-lg border-2 border-bordeaux"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19816.206271168287!2d-0.1239274268286856!3d51.50329714381065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cd0e0e7e97%3A0x7d5889f9b7bdb6a1!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1627375299384!5m2!1sen!2suk"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
    </>
  );
}
