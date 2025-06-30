'use client'
import React from 'react';
import Header from "../components/header";
import { Headphones, CheckCircle, Heart, LucideStar, LucideTruck } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const bgImages = [
  '/images/ban1.jpg',
  '/images/ban2.jpg',
  '/images/ban3.jpg',
];

const exploreProducts = [
  {
    id: 1,
    image: "/images/12.jpg",
    title: "Lorem ipsum dolor sit emit",
    price: "$100",
    rating: 4,
    reviews: "(88)",
  },
  {
    id: 2,
    image: "/images/22.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$360",
    rating: 4,
    reviews: "(95)",
  },
  {
    id: 3,
    image: "/images/21.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$700",
    rating: 5,
    reviews: "(325)",
  },
  {
    id: 4,
    image: "/images/24.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$1500",
    rating: 4,
    reviews: "(3145)",
  },
  {
    id: 5,
    image: "/images/23.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$960",
    rating: 5,
    reviews: "(65)",
  },
  {
    id: 6,
    image: "/images/26.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$1160",
    rating: 4,
    reviews: "(25)",
  },
  {
    id: 7,
    image: "/images/28.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  },
  {
    id: 8,
    image: "/images/27.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  },
  {
    id: 9,
    image: "/images/14.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 10,
    image: "/images/15.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 11,
    image: "/images/16.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 12,
    image: "/images/17.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 13,
    image: "/images/31.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 14,
    image: "/images/19.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 15,
    image: "/images/20.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 16,
    image: "/images/13.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  },
  {
    id: 17,
    image: "/images/25.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 18,
    image: "/images/29.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 19,
    image: "/images/30.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  }, {
    id: 20,
    image: "/images/18.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  },
];


export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="relative min-h-[350px] h-[350px] sm:min-h-[400px] sm:h-[400px] md:min-h-[500px] md:h-[500px] lg:min-h-[600px] lg:h-[600px] w-full overflow-hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3500}
          showArrows={true}
          className="h-full w-full"
        >
          {bgImages.map((img, idx) => (
            <div key={idx} className="relative min-h-[350px] h-[350px] sm:min-h-[400px] sm:h-[400px] md:min-h-[500px] md:h-[500px] lg:min-h-[600px] lg:h-[600px] w-full">
              <Image
                src={img}
                alt={`Hero ${idx + 1}`}
                fill
                className="absolute inset-0 w-full h-full object-cover"
                sizes="100vw"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="relative z-20 flex flex-col justify-center items-start h-full px-2 sm:px-8 md:px-20 text-left mt-8 sm:mt-10">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-pearl tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)] mt-4 sm:mt-10 max-w-xs sm:max-w-md md:max-w-xl font-libertinus text-left"
                >
                  Unveil Your <br /> Radiance
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4 text-bordeaux max-w-xs sm:max-w-md text-left"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sit temporibus iusto.
                </motion.p>
                <Link href="/product" passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring' }}
                    className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-pearl text-pearl hover:bg-bordeaux transition text-xs sm:text-base"
                  >
                    Explore Now
                  </motion.button>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="bg-onyx text-pearl font-sans min-h-screen mt-10 mb-16">
        <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-2xl mx-auto">
          <div className="w-[80%]">
            <div className="flex flex-col">
              <h3 className="text-bordeaux font-bold border-l-8 border-bordeaux pl-3 ml-1 drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">
                Our Product
              </h3>
              <div className="flex">
                <h1 className="text-pearl font-thin sm:text-md md:text-3xl lg:text-3xl pt-4 font-libertinus drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">
                  Explore Our Products
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
              {exploreProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  <div className="group relative shadow-md bg-onyx cursor-pointer w-full h-[240px] flex justify-center items-center">
                    <Image src={product.image} width={150} height={100} alt={product.title} />
                    <span className="bg-bordeaux px-2 rounded-md text-white absolute top-0 left-0"></span>
                    <span className="absolute top-1 right-1 text-bordeaux rounded-full">
                      <Heart className="text-xl" />
                    </span>
                    <Link href={`/product/${product.id}`} className="w-full absolute bottom-0">
                      <button className="w-full bg-bordeaux text-pearl px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                  <h1 className="font-sans pt-2 text-pearl">{product.title}</h1>
                  <span className="text-bordeaux font-bold">{product.price}</span>
                  <span className="text-pearl/60 font-bold line-through ml-2"></span>
                  <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1">
                    {[...Array(5)].map((_, i) =>
                      i < product.rating ? (
                        <FaStar key={i} className="text-yellow-400 text-xl" />
                      ) : (
                        <LucideStar key={i} className="text-yellow-300" size={20} />
                      )
                    )}
                    <span className="text-pearl/60">{product.reviews}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full sm:h-auto lg:h-[300px] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center max-w-screen-2xl mx-auto mt-6">
          <div className="sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex flex-col md:flex-col lg:flex-row lg:justify-evenly gap-x-4 ">

            {/* box 1 */}
            <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 bg-onyx text-pearl'>
              <div className='w-[50px] h-[50px] rounded-full bg-bordeaux text-pearl flex justify-center items-center drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]'>
                <span><LucideTruck size={32} /></span></div>
              <div>
                <h1 className='font-bold text-center drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]'>FREE AND FAST DELIVERY</h1>
                <p className='text-sm text-pearl/80'>Free delivery for all orders over $140</p>
              </div>
            </div>

            {/* box 2 */}
            <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 bg-onyx text-pearl'>
              <div className='w-[50px] h-[50px] rounded-full bg-bordeaux text-pearl flex justify-center items-center drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]'>
                <span><Headphones size={32} /></span></div>
              <div>
                <h1 className='font-bold text-center drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)] '>24/7 CUSTOMER SERVICE</h1>
                <p className='text-sm text-pearl/80'>Friendly 24/7 customer support</p>
              </div>
            </div>

            {/* box 3 */}
            <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 bg-onyx text-pearl'>
              <div className='w-[50px] h-[50px] rounded-full bg-bordeaux text-pearl flex justify-center items-center drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]'>
                <span><CheckCircle size={32} /></span></div>
              <div>
                <h1 className='font-bold text-center drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]'>MONEY BACK GUARANTEE</h1>
                <p className='text-sm text-pearl/80'>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}