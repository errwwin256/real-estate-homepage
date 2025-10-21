import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false); // 🧩 Add this
  const [current, setCurrent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Gallery images (from /public)
  const images = [
    "assesment11.webp",
    "assesment12.webp",
    "assesment13.webp",
    "assesment14.webp",
    "assesment15.webp",
    "assesment16.webp",
    "assesment17.webp",
  ];

  // Lightbox navigation
  const nextImage = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKey = (e) => {
      if (current === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setCurrent(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  // Pagination setup
  const itemsPerPage = 5;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleImages = images.slice(startIndex, endIndex);

  return (
    <div className="bg-[#0d1117] text-white font-sans scroll-smooth">
      {/* ✨ Frosted Midnight Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-[#0d1117]/75 border-b border-[#b87333]/40 shadow-[0_2px_10px_rgba(0,0,0,0.6)] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
          {/* 🏠 Logo Area */}
          <div className="flex items-center">
            <div
              className="relative flex justify-center items-center 
          w-28 h-16 sm:w-36 sm:h-20 md:w-48 md:h-28 rounded-2xl overflow-hidden
          bg-gradient-to-br from-[#f2e8d5]/60 via-[#e1c79b]/45 to-[#b87333]/35
          backdrop-blur-3xl border border-[#b87333]/40
          shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_4px_rgba(255,255,255,0.3)]
          before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.3)_0%,transparent_60%)] overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
            translate-x-[-100%] animate-[shine_4s_linear_infinite]"
              ></span>

              <img
                src="logoassesment.webp"
                alt="GoldenKey Logo"
                className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] saturate-[1.25] contrast-[1.2]"
              />
            </div>
          </div>

          {/* 🧭 Desktop Menu */}
          <ul className="hidden md:flex gap-7 text-lg font-bold tracking-wide">
            {[
              { name: "Home", id: "home" },
              { name: "Listings", id: "listings" },
              { name: "Services", id: "our-services" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-[#ffea9e] transition duration-300 hover:text-[#ffd700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* 🍔 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#ffea9e] text-3xl ml-4 focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* 📱 Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d1117]/95 backdrop-blur-md border-t border-[#b87333]/40 shadow-md w-full mt-2">
            <ul className="flex flex-col items-center py-4 gap-4 text-lg font-bold">
              {[
                { name: "Home", id: "home" },
                { name: "Listings", id: "listings" },
                { name: "Services", id: "our-services" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-[#ffea9e] transition duration-300 hover:text-[#ffd700] hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ✨ Polished Gold Accent Line */}
        <div className="relative h-[4px] w-full overflow-hidden bg-gradient-to-r from-[#cba135] via-[#e6c67a] to-[#cba135] shadow-[0_0_14px_rgba(230,198,122,0.8)]">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_6s_linear_infinite]" />
        </div>
      </nav>

      {/* 👇 Spacer to prevent content from being hidden under navbar */}
      <div className="pt-28 sm:pt-32"></div>

      {/* 🏡 Hero + Agent Section */}
      <section
        id="home"
        className="relative min-h-[100vh] flex flex-col lg:flex-row items-center lg:items-center justify-between 
  gap-16 bg-[#0d1117] text-white pt-28 px-6 lg:px-24 overflow-hidden"
      >
        {/* 🖼️ Background Image */}
        <div className="absolute inset-0">
          <img
            src="assesment1.webp"
            alt="Dream Home Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* 🌌 Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0d1117]/90"></div>

        {/* 🏡 Left Content */}
        <div className="relative z-10 flex flex-col justify-center text-center lg:text-left max-w-xl w-full lg:pr-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#ffea9e] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
            Find Your Dream Home
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Find stunning homes that fit your lifestyle, guided by a trusted
            local expert.
            <br />
            <span className="text-[#ffea9e] font-semibold">
              MARCI METZGER – The Ridge Realty Group Pahrump Realtor
            </span>
          </p>

          {/* 📞 Call Now Button */}
          <a
            href="tel:+12069196886"
            className="inline-block bg-gradient-to-r from-[#cba135] via-[#e6c67a] to-[#cba135]
  text-[#0d1117] font-bold text-sm px-5 py-3 rounded-full 
  shadow-[0_0_12px_rgba(230,198,122,0.6)]
  hover:scale-105 hover:shadow-[0_0_20px_rgba(230,198,122,0.9)]
  transition-all duration-300 text-center
  w-fit min-w-[100px] sm:min-w-[120px] mx-auto lg:mx-0"
          >
            Call Now
          </a>
        </div>

        {/* 👩‍💼 Right Agent Image */}
        <div className="relative z-10 flex flex-col items-center text-center lg:text-left lg:items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#e6c67a] shadow-lg">
            <img
              src="assesment2.webp"
              alt="Real Estate Agent"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#ffea9e] mt-6">
            MARCI METZGER
          </h3>
          <p className="text-gray-200 max-w-sm text-center mt-3 leading-relaxed">
            With nearly 30 years of experience, I help clients buy and sell
            homes with confidence — guiding you every step of the way to find
            your perfect place. <br />
            <span className="text-[#ffea9e] font-semibold">206-919-6886</span>
          </p>
        </div>
      </section>

      {/* 🏆 Get It Sold Section */}
      <section
        id="sold"
        className="relative bg-[#0d1117] text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-[#e6c67a] mb-4">
            Get It Sold
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We helped nearly{" "}
            <span className="text-[#ffd700] font-semibold">90 clients</span> in
            2021 and closed over{" "}
            <span className="text-[#ffd700] font-semibold">$28.5 million</span>{" "}
            in sales. Our clients deserve our best — and we make sure our best
            gets better every year.
          </p>
        </div>

        {/* 🏘️ Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              img: "assesment3.webp",
              title: "Top Residential Sales Last 5 Years",
              desc: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
            },
            {
              img: "assesment4.webp",
              title: "Don’t Just List it... Get it SOLD!",
              desc: "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
            },
            {
              img: "assesment5.webp",
              title: "Guide to Buyers",
              desc: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-2xl shadow-lg bg-[#1a1f27] border border-[#b87333]/40"
            >
              <div className="w-full bg-black flex justify-center items-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-auto md:max-h-[420px] max-h-[320px] object-contain mx-auto"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <h4 className="text-xl md:text-2xl font-bold text-[#e6c67a] mb-3">
                  {card.title}
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏠 Find Your Dream Home Section */}
      <section
        id="listings"
        className="relative bg-[#0d1117] text-white py-20 px-6 overflow-hidden"
      >
        {/* 🖼️ Background Image */}
        <div className="absolute inset-0">
          <img
            src="assesment6.webp"
            alt="Luxury Home"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* 🖤 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1117]/95"></div>

        {/* 🌟 Content */}
        <div className="relative max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#e6c67a] mb-6 drop-shadow-[0_0_6px_rgba(230,198,122,0.6)]">
            Find Your Dream Home
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Discover homes that perfectly match your lifestyle and budget.
          </p>

          {/* 🔍 Search Filter Form */}
          <div
            className="bg-[#1a1f27]/80 backdrop-blur-lg border border-[#b87333]/40 
  rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
          >
            {/* Location */}
            <div>
              <label className="block text-sm text-white mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter city or ZIP"
                className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#e6c67a]"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-sm text-white mb-2">Type</label>
              <select className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white focus:outline-none focus:border-[#e6c67a]">
                <option>House</option>
                <option>Condo</option>
                <option>Apartment</option>
                <option>Lot</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm text-white mb-2">Sort By</label>
              <select className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white focus:outline-none focus:border-[#e6c67a]">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm text-white mb-2">Bedrooms</label>
              <select className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white focus:outline-none focus:border-[#e6c67a]">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-sm text-white mb-2">Bathrooms</label>
              <select className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white focus:outline-none focus:border-[#e6c67a]">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label className="block text-sm text-white mb-2">Min Price</label>
              <input
                type="number"
                placeholder="$50,000"
                className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#e6c67a]"
              />
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-sm text-white mb-2">Max Price</label>
              <input
                type="number"
                placeholder="$1,000,000"
                className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-[#b87333]/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#e6c67a]"
              />
            </div>

            {/* Search Now Button */}
            <div className="flex items-end">
              <button
                className="w-full bg-gradient-to-r from-[#cba135] via-[#e6c67a] to-[#cba135]
      text-[#0d1117] font-bold py-2.5 rounded-md
      shadow-[0_0_12px_rgba(230,198,122,0.6)]
      hover:scale-105 hover:shadow-[0_0_20px_rgba(230,198,122,0.9)]
      transition-all duration-300"
              >
                Search Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🏢 Company Icons Section - Pure White Version */}
      <section className="relative py-20 sm:py-28 md:py-36 bg-white overflow-hidden">
        {/* 🌟 Thicker Gold Top Line (mobile-friendly) */}
        <div className="absolute top-0 left-0 w-full h-[6px] sm:h-[8px] bg-gradient-to-r from-[#e6c67a] via-[#f3dda0] to-[#e6c67a] shadow-[0_2px_10px_rgba(230,198,122,0.6)] z-30" />

        {/* 🖼️ Company Logos */}
        <div
          className="relative z-20 max-w-6xl mx-auto flex flex-wrap justify-center items-center 
    gap-10 sm:gap-16 md:gap-24 px-6 sm:px-10 md:px-12 text-center"
        >
          <img
            src="assesment7.webp"
            alt="Company 1"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain 
      hover:scale-110 transition-transform duration-500 ease-out"
          />
          <img
            src="assesment8.webp"
            alt="Company 2"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain 
      hover:scale-110 transition-transform duration-500 ease-out"
          />
          <img
            src="assesment9.webp"
            alt="Company 3"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain 
      hover:scale-110 transition-transform duration-500 ease-out"
          />
          <img
            src="assesment10.webp"
            alt="Company 4"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain 
      hover:scale-110 transition-transform duration-500 ease-out"
          />
        </div>
      </section>

      {/* 🏡 Property Gallery Section */}
      <section className="relative py-24 bg-gradient-to-b from-[#fffdf8] via-[#fffaf0] to-[#fff9e6] overflow-hidden">
        {/* 🌟 Gold Accent Line */}
        <div className="absolute top-0 left-0 w-full h-3 sm:h-4 bg-gradient-to-r from-[#c9a44b] via-[#e6c67a] to-[#c9a44b] shadow-[0_4px_20px_rgba(230,198,122,0.4)] z-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b08a3f] mb-12 tracking-tight">
            Explore Our Featured Properties
          </h3>

          {/* 🖼️ Responsive Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 
      gap-4 sm:gap-6 md:gap-8 justify-items-center"
          >
            {visibleImages.map((src, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white w-full max-w-[300px]"
                onClick={() => setCurrent(startIndex + idx)}
              >
                <img
                  src={src}
                  alt={`Property ${startIndex + idx + 1}`}
                  loading="lazy"
                  className="w-full h-60 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* 🩶 Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent 
            opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center"
                >
                  <span className="text-white text-sm sm:text-base md:text-lg font-medium mb-4 tracking-wide">
                    Luxury Property #{startIndex + idx + 1}
                  </span>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#e6c67a]/80 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* 🔢 Pagination Buttons */}
          <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  i === currentPage
                    ? "bg-[#e6c67a] text-[#0d1b2a] scale-110 shadow-lg"
                    : "bg-[#f9f4e3] text-[#b08a3f] hover:bg-[#e6c67a]/70 hover:text-[#0d1b2a]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* 💡 Lightbox Modal */}
        {current !== null && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
            <img
              src={images[current]}
              alt={`Full Gallery ${current + 1}`}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            />

            {/* ✖️ Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-[#e6c67a] transition-colors"
              onClick={() => setCurrent(null)}
            >
              <X size={36} />
            </button>

            {/* ◀️ Prev */}
            <button
              className="absolute left-6 text-white hover:text-[#e6c67a] transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={44} />
            </button>

            {/* ▶️ Next */}
            <button
              className="absolute right-6 text-white hover:text-[#e6c67a] transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={44} />
            </button>
          </div>
        )}
      </section>

      {/* 🏠 Our Services Section - Enhanced Luxury Style */}
      <section
        id="our-services"
        className="relative py-20 sm:py-28 bg-[#0d1b2a] text-white overflow-hidden"
      >
        {/* 🌟 Top Gold Line */}
        <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#e6c67a] via-[#f3dda0] to-[#e6c67a]" />

        {/* 🏷️ Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f3dda0] mb-3 tracking-tight">
            Our Services
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We provide expert real estate services that make your journey
            effortless and rewarding.
          </p>
        </div>

        {/* 🏡 Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            {
              title: "Real Estate Done Right",
              text: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
              img: "assesment18.webp",
            },
            {
              title: "Commercial & Residential",
              text: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
              img: "assesment19.webp",
            },
            {
              title: "Rely on Expertise",
              text: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
              img: "assesment20.webp",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              {/* Larger Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[400px] sm:h-[420px] lg:h-[450px] object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Always-visible overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-semibold text-[#f3dda0] mb-3 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed drop-shadow-sm">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Call or Visit Section - Premium Real Estate Design */}
      <section
        id="contact"
        className="relative py-20 bg-gradient-to-b from-[#0d1b2a] to-[#132743] text-white overflow-hidden"
      >
        {/* ✨ Top Gold Line */}
        <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#e6c67a] via-[#f3dda0] to-[#e6c67a]" />

        {/* 🏷️ Header */}
        <div className="text-center mb-14 px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f3dda0] mb-4 tracking-tight">
            Call or Visit Us
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
            Ready to make your real estate goals a reality? Contact us today —
            we’re here to help every step of the way.
          </p>
        </div>

        {/* 🏡 Main Content - Elegant Two-Column Layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
          {/* 💌 Contact Form */}
          <div className="bg-gradient-to-b from-[#ffffff] via-[#fdfbf7] to-[#f7f2e8] rounded-2xl shadow-xl p-8 sm:p-10 text-[#0d1b2a] border border-[#e6c67a]/40 hover:shadow-gold transition-all duration-500">
            <h3 className="text-2xl font-semibold text-[#b08a3f] mb-6 text-center sm:text-left">
              Send Message
            </h3>

            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md border border-[#d1c5a3]/40 bg-white/95 focus:ring-2 focus:ring-[#b08a3f] outline-none placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-[#d1c5a3]/40 bg-white/95 focus:ring-2 focus:ring-[#b08a3f] outline-none placeholder-gray-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message..."
                className="w-full p-3 rounded-md border border-[#d1c5a3]/40 bg-white/95 focus:ring-2 focus:ring-[#b08a3f] outline-none placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-[#b08a3f] hover:bg-[#d4b66a] text-white font-semibold py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Send
              </button>
            </form>
          </div>

          {/* 🏠 Contact Info - Matching Luxury Theme */}
          <div className="bg-gradient-to-b from-[#fefcf8] via-[#f9f6ef] to-[#f3ede2] rounded-2xl shadow-xl p-8 sm:p-10 text-[#0d1b2a] border border-[#e6c67a]/40 hover:shadow-gold transition-all duration-500">
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                <span className="text-[#0d1b2a] font-bold">MARCI METZGER</span>{" "}
                <span className="font-extrabold bg-gradient-to-r from-[#c7a64e] via-[#e8d08b] to-[#b8913e] bg-clip-text text-transparent drop-shadow-sm">
                  – THE RIDGE REALTY GROUP
                </span>
              </h3>

              <p className="text-[#0d1b2a]/80 mb-4 leading-relaxed">
                3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
              </p>

              <div className="space-y-2 text-[#0d1b2a]/80">
                <p>📞 (206) 919-6886</p>
                <p>📧 info@goldenkeyrealty.com</p>
              </div>

              {/* 🟢 WhatsApp CTA */}
              <a
                href="https://wa.me/12069196886"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 text-white font-semibold bg-[#25D366] hover:bg-[#20b558] py-3 px-5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                aria-label="Message us on WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .04 5.333.04 12c0 2.115.556 4.184 1.612 6.01L0 24l6.19-1.607A11.94 11.94 0 0012 24c6.627 0 11.96-5.333 11.96-12 0-2.98-1.16-5.77-3.44-7.52z"
                    fill="#25D366"
                  />
                  <path
                    d="M17.472 14.382c-.297-.149-1.763-.868-2.037-.967-.274-.099-.474-.148-.675.148-.201.297-.774.967-.949 1.165-.174.198-.349.223-.646.074-.298-.149-1.255-.462-2.391-1.476-.885-.79-1.48-1.764-1.655-2.062-.174-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.494.099-.198.05-.37-.025-.519-.075-.148-.674-1.63-.923-2.235-.243-.58-.49-.5-.672-.51-.173-.01-.373-.012-.573-.012s-.49.074-.748.37c-.259.297-.988 1.028-.988 2.505 0 1.476 1.01 2.904 1.151 3.106.14.198 2.01 3.08 4.86 4.424 2.85 1.344 3.106 1.025 3.665.96.559-.066 1.82-.744 2.08-1.464.261-.72.261-1.338.183-1.464-.078-.128-.287-.206-.59-.355z"
                    fill="#fff"
                  />
                </svg>
                Message us on WhatsApp
              </a>
            </div>

            {/* ⏰ Office Hours */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-[#b08a3f] mb-3">
                Office Hours
              </h4>
              <ul className="space-y-1 text-[#0d1b2a]/80 text-sm sm:text-base">
                <li>Mon – Sun: 08:00 am – 07:00 pm</li>
              </ul>
              <p className="mt-4 text-[#0d1b2a]/70 text-sm sm:text-base">
                Appointments outside office hours available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🗺️ Map Section */}
      <section className="relative w-full py-16 bg-gradient-to-b from-[#0b0f14] to-[#121a25]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 bg-gradient-to-r from-[#c7a64e] via-[#e8d08b] to-[#b8913e] bg-clip-text text-transparent">
            Find Us on the Map
          </h2>

          {/* 📍 Google Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(230,198,122,0.25)] border border-[#e6c67a]/40">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323197.4039531299!2d-116.29351119496353!3d36.20124041373066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8e715b6a5e0b1%3A0x4a4e03f6a72d087e!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1730121212121!5m2!1sen!2sph"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] border-0"
            ></iframe>
          </div>

          {/* 📍 Address */}
          <p className="text-center text-white/70 mt-6 text-sm sm:text-base">
            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
          </p>

          {/* 🗺️ Get Directions Button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://www.google.com/maps/dir//3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States/@36.2012404,-116.0576295,29358m/data=!3m1!1e3?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#b08a3f] hover:bg-[#d4b66a] text-white font-medium py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* 🌙 Footer Section */}
      <footer className="bg-[#0b0f14] text-white/80 border-t border-[#e6c67a]/20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          {/* 🌐 Social Media Icons */}
          <div className="flex justify-center gap-8 text-[#f3dda0]">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#1877F2]"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#E4405F]"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#0A66C2]"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a
              href="https://www.yelp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#AF0606]"
              aria-label="Yelp"
            >
              <i className="fab fa-yelp text-2xl"></i>
            </a>
          </div>

          {/* 👤 Brand Info */}
          <p className="text-sm sm:text-base text-center leading-relaxed">
            Copyright © 2023{" "}
            <span className="bg-gradient-to-r from-[#f3dda0] via-[#e6c67a] to-[#f3dda0] bg-clip-text text-transparent font-semibold">
              MARCI METZGER Homes
            </span>{" "}
            – All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
