import React, { useState } from "react";
import Footer from "../Footer";

const products = [
  {
    id: 1,
    title: "Men's T-shirt",
    price: 499,
    image: "/assets/Fashion/T-shirt.png",
    category: "Fashion",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: 99999,
    image: "/assets/Smartphone/SamsungGalaxyS23.png",
    category: "Smartphone",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    price: 29999,
    image: "/assets/Headphone/Sony WH-1000XM5.png",
    category: "Headphone",
  },
  {
    id: 4,
    title: "Lego Classic Set",
    price: 799,
    image: "/assets/Logo/LogoClassic.png",
    category: "Toys",
  },
  {
    id: 5,
    title: "Google Pixel 8",
    price: 69999,
    image: "/assets/Smartphone/GooglePixel8.png",
    category: "Smartphone",
  },
  {
    id: 6,
    title: "Boat Rockerz 550",
    price: 1999,
    image: "/assets/Headphone/BoatRockerz550.png",
    category: "Headphone",
  },
  {
    id: 7,
    title: "Women's Jeans",
    price: 999,
    image: "/assets/Fashion/Jeans.png",
    category: "Fashion",
  },
  {
    id: 7,
    title: "Metal Mirrer",
    price: 999,
    image: "/assets/Mirrer/Mirrer.png",
    category: "Fashion",
  },
];

const categories = ["All", "Fashion", "Smartphone", "Headphone", "Toys"];

function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Welcome to the Shop
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-blue-100"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-blue-600 font-bold mt-2">
              ₹{item.price.toLocaleString()}
            </p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found in this category.
        </p>
      )}

      <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cart Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                <span>{item.title}</span>
                <span>₹{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
