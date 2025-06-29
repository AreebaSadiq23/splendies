"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { LucideStar } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";
import Header from "../../components/header";

// Dummy product data (same as in product/page.tsx)
const exploreProducts = [
  { id: 1, image: "/images/12.jpg", title: "Lorem ipsum dolor sit emit", price: "$100", rating: 4, reviews: "(88)",
    colors: [ { name: "Red", code: "#dc2626" }, { name: "Black", code: "#222" }, { name: "Green", code: "#16a34a" } ],
    initialReviews: [
      { name: "Emily", rating: 5, text: "Absolutely love this product!", isUser: false },
      { name: "Sophia", rating: 4, text: "Great quality and fast delivery.", isUser: false },
    ]
  },
  { id: 2, image: "/images/22.jpg", title: "Lorem ispum dolor sit emit", price: "$360", rating: 4, reviews: "(95)",
    colors: [ { name: "Blue", code: "#2563eb" }, { name: "Red", code: "#dc2626" }, { name: "Yellow", code: "#eab308" } ],
    initialReviews: [
      { name: "Olivia", rating: 5, text: "Very stylish and comfortable.", isUser: false },
      { name: "Ava", rating: 4, text: "Nice color and fits well.", isUser: false },
    ]
  },
  { id: 3, image: "/images/21.jpg", title: "Lorem ispum dolor sit emit", price: "$700", rating: 5, reviews: "(325)",
    colors: [ { name: "Purple", code: "#a21caf" }, { name: "Teal", code: "#14b8a6" }, { name: "Orange", code: "#f97316" } ],
    initialReviews: [
      { name: "Mia", rating: 5, text: "Best purchase ever!", isUser: false },
      { name: "Charlotte", rating: 5, text: "Super comfy and looks great.", isUser: false },
    ]
  },
  { id: 4, image: "/images/24.jpg", title: "Lorem ispum dolor sit emit", price: "$1500", rating: 4, reviews: "(3145)",
    colors: [ { name: "Pink", code: "#ec4899" }, { name: "Indigo", code: "#6366f1" }, { name: "Lime", code: "#84cc16" } ],
    initialReviews: [
      { name: "Amelia", rating: 4, text: "Looks elegant and feels premium.", isUser: false },
      { name: "Ella", rating: 5, text: "Loved the packaging and quality.", isUser: false },
    ]
  },
  { id: 5, image: "/images/23.jpg", title: "Lorem ispum dolor sit emit", price: "$960", rating: 5, reviews: "(65)",
    colors: [ { name: "Cyan", code: "#06b6d4" }, { name: "Amber", code: "#f59e42" }, { name: "Brown", code: "#92400e" } ]
  },
  { id: 6, image: "/images/26.jpg", title: "Lorem ispum dolor sit emit", price: "$1160", rating: 4, reviews: "(25)",
    colors: [ { name: "Olive", code: "#6b8e23" }, { name: "Navy", code: "#1e3a8a" }, { name: "Coral", code: "#fb7185" } ]
  },
  { id: 7, image: "/images/28.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Sky", code: "#38bdf8" }, { name: "Rose", code: "#f43f5e" }, { name: "Slate", code: "#64748b" } ]
  },
  { id: 8, image: "/images/27.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Mint", code: "#4ade80" }, { name: "Gold", code: "#facc15" }, { name: "Charcoal", code: "#27272a" } ]
  },
  { id: 9, image: "/images/14.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Magenta", code: "#d946ef" }, { name: "Silver", code: "#a3a3a3" }, { name: "Forest", code: "#166534" } ]
  },
  { id: 10, image: "/images/15.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Peach", code: "#fdba74" }, { name: "Steel", code: "#64748b" }, { name: "Aqua", code: "#22d3ee" } ]
  },
  { id: 11, image: "/images/16.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Lavender", code: "#a78bfa" }, { name: "Mustard", code: "#eab308" }, { name: "Denim", code: "#2563eb" } ]
  },
  { id: 12, image: "/images/17.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Sand", code: "#fcd34d" }, { name: "Plum", code: "#7c3aed" }, { name: "Mint", code: "#4ade80" } ]
  },
  { id: 13, image: "/images/31.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Ruby", code: "#be123c" }, { name: "Emerald", code: "#10b981" }, { name: "Sapphire", code: "#0ea5e9" } ]
  },
  { id: 14, image: "/images/19.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Ivory", code: "#f9fafb" }, { name: "Graphite", code: "#374151" }, { name: "Sunset", code: "#f472b6" } ]
  },
  { id: 15, image: "/images/20.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Bronze", code: "#b45309" }, { name: "Turquoise", code: "#06b6d4" }, { name: "Crimson", code: "#dc2626" } ]
  },
  { id: 16, image: "/images/21.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Azure", code: "#2563eb" }, { name: "Coral", code: "#fb7185" }, { name: "Olive", code: "#6b8e23" } ]
  },
  { id: 17, image: "/images/25.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Mint", code: "#4ade80" }, { name: "Rose", code: "#f43f5e" }, { name: "Slate", code: "#64748b" } ]
  },
  { id: 18, image: "/images/29.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Gold", code: "#facc15" }, { name: "Charcoal", code: "#27272a" }, { name: "Sky", code: "#38bdf8" } ]
  },
  { id: 19, image: "/images/13.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Emerald", code: "#10b981" }, { name: "Ruby", code: "#be123c" }, { name: "Sapphire", code: "#0ea5e9" } ]
  },
  { id: 20, image: "/images/30.jpg", title: "Lorem ispum dolor sit emit", price: "$600", rating: 5, reviews: "(55)",
    colors: [ { name: "Ivory", code: "#f9fafb" }, { name: "Graphite", code: "#374151" }, { name: "Sunset", code: "#f472b6" } ]
  },
];

const sizes = [32, 33, 34, 36];

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = exploreProducts.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState((product && product.colors && product.colors[0]?.name) || "");

  // Review state
  const [reviews, setReviews] = useState(product?.initialReviews || []);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewError, setReviewError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  if (!product) {
    return (
      <div className="text-center text-pearl mt-20">Product not found.</div>
    );
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) {
      setReviewError("Name and review are required.");
      return;
    }
    setReviews([
      { name: reviewName, rating: reviewRating, text: reviewText, isUser: true },
      ...reviews,
    ]);
    setReviewName("");
    setReviewText("");
    setReviewRating(5);
    setReviewError("");
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 2000);
  };

  return (
    <>
      <Header />
      <section className="bg-onyx text-pearl font-mono min-h-screen pt-8 pb-16 sm:pt-10 sm:pb-20 mt-22">
        <div className="max-w-5xl mx-auto bg-onyx rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
            <Image src={product.image} width={320} height={320} alt={product.title} className="rounded-xl object-cover shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto bg-onyx" />
          </div>
          <div className="flex-1 flex flex-col gap-4 sm:gap-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-pearl mb-2 drop-shadow">{product.title}</h1>
            <div className="flex items-center gap-1 sm:gap-2">
              {[...Array(5)].map((_, i) =>
                i < product.rating ? (
                  <FaStar key={i} className="text-yellow-400 text-lg sm:text-xl" />
                ) : (
                  <LucideStar key={i} className="text-yellow-300" size={18} />
                )
              )}
              <span className="text-pearl/60 ml-1 sm:ml-2 text-xs sm:text-base">{product.reviews}</span>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-bordeaux">{product.price}</div>
            <div className="text-pearl/80 text-sm sm:text-base mt-1 sm:mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4 bg-charcoal/70 border border-bordeaux/30 rounded-2xl shadow-xl p-4 sm:p-6 transition-all">
              <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                <span className="font-semibold text-sm sm:text-base">Size:</span>
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full border-2 text-base sm:text-lg font-bold transition-all duration-200 shadow ${size === s ? "bg-bordeaux text-pearl border-bordeaux scale-105 shadow-lg" : "bg-onyx text-pearl border-pearl/30 hover:border-bordeaux"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                <span className="font-semibold text-sm sm:text-base">Color:</span>
                {(product.colors ?? []).map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${color === c.name ? "border-bordeaux scale-110" : "border-pearl/30 hover:border-bordeaux"}`}
                    style={{ backgroundColor: c.code }}
                    aria-label={c.name}
                  >
                    {color === c.name && <span className="block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-pearl bg-pearl/40"></span>}
                  </button>
                ))}
                <span className="ml-1 sm:ml-2 text-pearl/70 text-xs sm:text-sm">{color}</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                <span className="font-semibold text-sm sm:text-base">Quantity:</span>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="bg-onyx border border-bordeaux rounded px-2 sm:px-3 py-1 w-16 sm:w-20 text-base sm:text-lg font-bold text-pearl"
                />
              </div>
              <button className="mt-4 sm:mt-6 bg-gradient-to-r from-bordeaux to-pink-600 text-pearl px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:from-pink-700 hover:to-bordeaux/90 hover:scale-105 transition w-full sm:w-auto flex items-center justify-center gap-2">
                <FaShoppingCart className="text-xl sm:text-2xl" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Add a Review Section */}
        <div className="relative max-w-xl sm:max-w-2xl mx-auto mt-10 sm:mt-16 rounded-2xl shadow-2xl p-4 sm:p-8 bg-onyx/80 border border-charcoal backdrop-blur-xl bg-clip-padding overflow-hidden animate-fade-in">
          {/* SVG Accent (using only global colors) */}
          <svg className="absolute -top-8 -right-8 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="var(--bordeaux)" strokeWidth="4" fill="var(--bordeaux)" fillOpacity="0.15" />
          </svg>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-bordeaux flex items-center gap-2 z-10 relative">
            <span className="bg-bordeaux/20 text-bordeaux px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-lg border border-bordeaux/30">Add a Review</span>
          </h2>
          <form onSubmit={handleReviewSubmit} className="flex flex-col gap-3 sm:gap-4 z-10 relative">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-semibold text-sm sm:text-base">Your Rating:</span>
              {[1,2,3,4,5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setReviewRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`focus:outline-none transition-all duration-200 ${hoverRating === star || reviewRating === star ? 'scale-125' : ''}`}
                  style={{ filter: (hoverRating || reviewRating) >= star ? 'drop-shadow(0 0 6px var(--pearl))' : undefined }}
                >
                  {(hoverRating || reviewRating) >= star ? (
                    <FaStar className="text-yellow-400 text-xl sm:text-2xl transition-colors duration-200" />
                  ) : (
                    <LucideStar className="text-yellow-400" size={18} />
                  )}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Your Name"
              value={reviewName}
              onChange={e => setReviewName(e.target.value)}
              className="bg-onyx/60 border border-pearl/30 rounded px-2 sm:px-3 py-2 text-pearl text-sm sm:text-base placeholder-pearl/60 shadow-inner backdrop-blur w-full focus:ring-2 focus:ring-bordeaux/40 transition"
            />
            <textarea
              placeholder="Write your review..."
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              className="bg-onyx/60 border border-pearl/30 rounded px-2 sm:px-3 py-2 text-pearl min-h-[60px] sm:min-h-[80px] text-sm sm:text-base placeholder-pearl/60 shadow-inner backdrop-blur w-full focus:ring-2 focus:ring-bordeaux/40 transition"
            />
            {reviewError && <div className="text-bordeaux text-xs sm:text-sm animate-shake">{reviewError}</div>}
            <button type="submit" className="bg-bordeaux text-pearl px-4 sm:px-6 py-2 rounded font-bold hover:bg-bordeaux/90 transition self-end w-full sm:w-auto shadow-lg mt-2 relative overflow-hidden">
              <span className="relative z-10">Submit Review</span>
            </button>
            {showThankYou && (
              <div className="text-pearl text-sm sm:text-base font-semibold mt-2 animate-bounce">Thank you for your review!</div>
            )}
          </form>

          {/* Divider for Recent Reviews */}
          <div className="flex items-center my-6 sm:my-8 z-10 relative">
            <div className="flex-grow h-0.5 bg-bordeaux/30 rounded-full"></div>
            <span className="mx-4 -my-3 text-pearl/80 text-xs sm:text-sm bg-charcoal px-4 py-1 rounded-full font-semibold tracking-wide shadow-lg border border-pearl/20 z-10 relative">Recent Reviews</span>
            <div className="flex-grow h-0.5 bg-bordeaux/30 rounded-full"></div>
          </div>
          {/* Show reviews */}
          <ul className="space-y-3 sm:space-y-4 z-10 relative">
            {reviews.length === 0 && <div className="text-pearl/60">No reviews yet.</div>}
            {reviews.map((r, idx) => (
              <li key={idx} className="group bg-charcoal border border-pearl/10 rounded-xl p-3 sm:p-4 shadow-xl backdrop-blur-sm flex gap-3 items-start transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-bordeaux/40 animate-fade-in hover:ring-2 hover:ring-bordeaux/30">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-pearl font-bold text-xl sm:text-2xl shadow-lg ring-4 group-hover:ring-pearl/40 transition-all duration-200 select-none ${r.isUser ? 'bg-green-600 ring-green-400' : 'bg-bordeaux ring-bordeaux/30'}`}
                >
                  {r.name?.[0]?.toUpperCase() || <LucideStar className="text-pearl" size={24} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    {[1,2,3,4,5].map((star) => (
                      star <= r.rating ? <FaStar key={star} className="text-yellow-400 text-base sm:text-lg drop-shadow" /> : <LucideStar key={star} className="text-yellow-400" size={14} />
                    ))}
                    <span className="ml-1 sm:ml-2 text-pearl font-semibold text-xs sm:text-base">{r.name}</span>
                  </div>
                  <div className="text-pearl/90 text-sm sm:text-base font-mono">{r.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
} 