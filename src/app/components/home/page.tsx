'use client'
import React from 'react';
import { LucideTruck, LucideUndo2, LucideLeaf, LucideCheckCircle, Heart, Star, LucideStar, CheckCircle, Headphones } from 'lucide-react';
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

const serviceImages = [
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
];

const bestSellingProducts = [
  {
    image: "/images/14.jpg",
    title: "Lorem ipsum dolor sit.",
    price: "$260",
    oldPrice: "$360",
    rating: 4,
    reviews: "(88)",
  },
  {
    image: "/images/15.jpg",
    title: "Lorem ipsum dolor sit.",
    price: "$960",
    oldPrice: "$1160",
    rating: 4,
    reviews: "(90)",
  },
  {
    image: "/images/16.jpg",
    title: "Lorem ipsum dolor sit.",
    price: "$160",
    oldPrice: "$170",
    rating: 4,
    reviews: "(95)",
  },
  {
    image: "/images/17.jpg",
    title: "Lorem ipsum dolor sit.",
    price: "$320",
    oldPrice: null,
    rating: 4,
    reviews: "(78)",
  },
];

const exploreProducts = [
  {
    image: "/images/12.jpg",
    title: "Lorem ipsum dolor sit emit",
    price: "$100",
    rating: 4,
    reviews: "(88)",
  },
  {
    image: "/images/22.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$360",
    rating: 4,
    reviews: "(95)",
  },
  {
    image: "/images/21.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$700",
    rating: 5,
    reviews: "(325)",
  },
  {
    image: "/images/24.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$1500",
    rating: 4,
    reviews: "(3145)",
  },
  {
    image: "/images/23.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$960",
    rating: 5,
    reviews: "(65)",
  },
  {
    image: "/images/26.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$1160",
    rating: 4,
    reviews: "(25)",
  },
  {
    image: "/images/28.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  },
  {
    image: "/images/27.jpg",
    title: "Lorem ispum dolor sit emit",
    price: "$600",
    rating: 5,
    reviews: "(55)",
  },
];

export default function HomeSection() {
  return (
    <section className="bg-onyx text-pearl">
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
      <section className="bg-onyx py-16 px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-4xl font-thin mb-2 mt-10 text-bordeaux font-libertinus drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]"
        >
          New Trend in 2025
        </motion.h2>
        <p className="text-center text-pearl/70 text-xs md:text-base mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
          Ratione dolor earum magnam omnis in necessitatibus non</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center justify-items-center gap-6 mb-10">
          <div className="w-20 h-20 transform rotate-45 overflow-hidden border-2 border-pearl shadow-md">
            <Image
              src="/images/2.jpg"
              alt="Rhombus 1"
              width={80}
              height={80}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
          <div className="w-20 h-20 transform rotate-45 overflow-hidden border-2 border-pearl shadow-md">
            <Image
              src="/images/3.jpg"
              alt="Rhombus 2"
              width={80}
              height={80}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
          <div className="w-20 h-20 transform rotate-45 overflow-hidden border-2 border-pearl shadow-md">
            <Image
              src="/images/4.jpg"
              alt="Rhombus 3"
              width={80}
              height={80}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
          <div className="w-20 h-20 transform rotate-45 overflow-hidden border-2 border-pearl shadow-md">
            <Image
              src="/images/10.jpg"
              alt="Rhombus 4"
              width={80}
              height={80}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
          <div className="w-20 h-20 transform rotate-45 overflow-hidden border-2 border-pearl shadow-md">
            <Image
              src="/images/11.jpg"
              alt="Rhombus 5"
              width={80}
              height={80}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
          <div className="w-20 h-20 transform rotate-45 overflow-hidden border-2 border-pearl shadow-md">
            <Image
              src="/images/9.jpg"
              alt="Rhombus 6"
              width={80}
              height={80}
              className="w-full h-full object-cover transform -rotate-45"
            />
          </div>
        </div>
      </section>

      {/* === Benefits Strip === */}
      <section className="py-6 px-4 bg-charcoal grid grid-cols-4 text-center text-xs md:text-base lg:text-lg gap-4">
        <div className="flex items-center justify-center gap-2"><LucideTruck size={18} /> Free Shipping</div>
        <div className="flex items-center justify-center gap-2"><LucideUndo2 size={18} /> Easy Returns</div>
        <div className="flex items-center justify-center gap-2"><LucideLeaf size={18} /> Eco Materials</div>
        <div className="flex items-center justify-center gap-2"><LucideCheckCircle size={18} /> Trusted Quality</div>
      </section>

      {/* Our Services Section */}
      <div className="relative z-10 text-pearl px-4 md:px-20 py-20 rounded-b-[100px]">
        <h2 className="text-center text-2xl md:text-4xl font-thin mb-2 text-bordeaux font-libertinus drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">Our Services</h2>
        <p className="text-center text-pearl/70 text-xs md:text-base mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Ratione dolor earum magnam omnis in necessitatibus non dolores<br />
          officiis! Nobis totam nemo esse tempore, possimus corrupti neque<br />
          minima et quia eum.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceImages.map((src, i) => (
            <div key={i} className="overflow-hidden flex justify-center items-center">
              <Image
                src={src}
                alt={`service-${i}`}
                width={128}
                height={192}
                className="w-32 h-48 object-cover border-4 border-onyx rounded-[999px]"
              />
            </div>
          ))}
        </div>
      </div>
      {/* === Benefits Strip === */}
      <section className="py-6 px-4 bg-charcoal grid grid-cols-4 text-center text-xs md:text-base lg:text-lg gap-4">
        <div className="flex items-center justify-center gap-2"><LucideTruck size={18} /> Free Shipping</div>
        <div className="flex items-center justify-center gap-2"><LucideUndo2 size={18} /> Easy Returns</div>
        <div className="flex items-center justify-center gap-2"><LucideLeaf size={18} /> Eco Materials</div>
        <div className="flex items-center justify-center gap-2"><LucideCheckCircle size={18} /> Trusted Quality</div>
      </section>
      <div className="w-full flex justify-center items-center mt-10 mb-20 max-w-screen-2xl mx-auto">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h3 className="text-bordeaux font-bold border-l-8 border-bordeaux pl-3 ml-1 drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">
              This Month
            </h3>
            <div className="flex justify-between">
              <h1 className="text-pearl font-thin sm:text-md md:text-3xl lg:text-3xl pt-4 font-libertinus drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">
                Best Selling Products
              </h1>
              <Link
                href={"/product"}
                className="bg-bordeaux pt-2 hover:bg-bordeaux/80 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-pearl rounded-sm h-10 mt-3"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {bestSellingProducts.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                transition={{ duration: 0.4, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div className="group shadow-md bg-onyx w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                  <Image src={product.image} width={150} height={100} alt={product.title} />
                  <span className="absolute top-1 right-1 sm:top-2 sm:right-2 text-bordeaux rounded-full">
                    <Heart size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                </div>
                <h1 className="font-sans pt-2 text-pearl">{product.title}</h1>
                <span className="text-bordeaux">{product.price}</span>{" "}
                {product.oldPrice && (
                  <span className="text-pearl/60 line-through ml-2">{product.oldPrice}</span>
                )}
                <div className="flex space-x-1 ml-1 text-md pt-1 mb-5">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-yellow-300" />
                  ))}
                  <Star size={16} className="text-yellow-300" />
                  <span className="text-pearl/60">{product.reviews}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* === Video Section === */}
      <section className="w-full relative mt-10">
        <video
          id="promo-video"
          src="/videos/1.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Text & Timer */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-pearl bg-black/40">
          <h2 className="text-3xl md:text-4xl font-thin mb-2 text-bordeaux drop-shadow-lg font-libertinus drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">Our Story in Motion</h2>
          <p className="text-lg md:text-xl mb-4 text-pearl/90 font-libertinus font-bold drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">Experience the elegance in every frame.</p>
          {/* Timer */}
          <VideoTimer videoId="promo-video" />
        </div>
      </section>
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
                  <span className="absolute top-1 right-1 sm:top-2 sm:right-2 text-bordeaux rounded-full">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                </div>
                <h1 className="font-bold font-sans pt-2 text-pearl">{product.title}</h1>
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
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[80%] flex justify-center border-b-2 border-onyx pb-10">
          <Link href="/product">
            <button className="bg-bordeaux hover:bg-bordeaux/80 cursor-pointer py-2 px-5 text-pearl rounded-sm">
              View All Products
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-7 max-w-screen-2xl mx-auto">
        <div className="w-[80%]">
          <div className="w-full">
            <h3 className="text-bordeaux font-bold border-l-8 border-bordeaux pl-3 ml-1 drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">
              Featured
            </h3>
            <h1 className="text-pearl font-thin sm:text-xl md:text-3xl lg:text-3xl pt-4 font-libertinus drop-shadow-[0_2px_8px_rgba(109,15,54,0.5)]">
              New Arrival
            </h1>
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row gap-x-0 md:gap-x-8 gap-y-5 text-pearl pt-4">
            <div className="bg-onyx sm:w-full md:w-[60%] relative">
              <div className="absolute left-3 bottom-3 text-pearl">
                <h1 className="sm:text-lg font-bold md:text-2xl">
                  Women&apos;s Collections
                </h1>
                <p className="text-xs py-1 text-pearl/80">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="text-md font-sans underline underline-offset-8 hover:font-bold text-bordeaux">
                  Shop Now
                </button>
              </div>
              <Image
                src={"/images/woman.png"}
                width={500}
                height={500}
                alt="women"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="bg-onyx flex relative items-end h-full rounded-lg overflow-hidden">
                <div className="absolute left-2 bottom-3">
                  <h1 className="sm:text-lg font-bold md:text-2xl text-pearl">
                    Women&apos;s Collections
                  </h1>
                  <p className="text-xs py-1 text-pearl/80">
                    Featured women collections that give you another vibe.
                  </p>
                  <button className="text-md font-sans underline underline-offset-8 hover:font-bold text-bordeaux">
                    Shop Now
                  </button>
                </div>
                <div className="w-full">
                  <Image
                    src={"/images/13.jpg"}
                    width={500}
                    height={300}
                    alt="Women Collection"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex gap-x-5">
                <div className="bg-onyx relative flex justify-center items-center w-[50%] rounded-lg overflow-hidden">
                  <div className="absolute left-2 bottom-3">
                    <h1 className="sm:text-sm font-bold md:text-xl text-pearl">Women&apos;s Collections</h1>
                    <p className="text-xs sm:py-0 md:py-1 text-pearl/80">
                      Featured women collections that give you another vibe.
                    </p>
                    <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold text-bordeaux">
                      Shop Now
                    </button>
                  </div>
                  <Image
                    src={"/images/25.jpg"}
                    width={200}
                    height={200}
                    alt="Speakers"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-onyx relative flex justify-center items-center w-[50%] rounded-lg overflow-hidden">
                  <div className="absolute left-2 bottom-3">
                    <h1 className="sm:text-sm font-bold md:text-xl text-pearl">Women&apos;s Collections</h1>
                    <p className="text-xs sm:py-0 md:py-1 text-pearl/80">
                      Featured women collections that give you another vibe.
                    </p>
                    <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold text-bordeaux">
                      Shop Now
                    </button>
                  </div>
                  <Image
                    src={"/images/20.jpg"}
                    width={200}
                    height={200}
                    alt="Perfume"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-auto lg:h-[300px] flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center max-w-screen-2xl mx-auto">
        <div className="sm:w-full mt-14 lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex flex-col md:flex-col lg:flex-row lg:justify-evenly gap-x-4 ">

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

  );
}

function VideoTimer({ videoId }: { videoId: string }) {
  const [current, setCurrent] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  React.useEffect(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!video) return;
    const update = () => setCurrent(video.currentTime);
    const setDur = () => setDuration(video.duration);
    video.addEventListener('timeupdate', update);
    video.addEventListener('loadedmetadata', setDur);
    setDur();
    return () => {
      video.removeEventListener('timeupdate', update);
      video.removeEventListener('loadedmetadata', setDur);
    };
  }, [videoId]);

  function format(sec: number) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  return (
    <div className="bg-bordeaux px-4 py-2 rounded-full text-pearl font-mono text-lg shadow-lg">
      {format(current)} / {format(duration)}
    </div>

  );
}
