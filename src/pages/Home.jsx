import React from "react";
import Slider from "react-slick";
import BannerCarousel from "./BannerCarousel";
import Footer from "../Footer";
function Home() {
  let sections = [
    {
      image: "./assets/Electronics/Electronics.png",
      title: "Electronics",
      link: "/categories/Electronics",
    },
    {
      title: "Fashion",
      image: "./assets/Fashion/Fashion.png",
      link: "/categories/fashion",
    },
    {
      title: "Groceries",
      image: "./assets/Groceries.png",
      link: "/categories/groceries",
    },
    {
      title: "Books",
      image: "./assets/Books.png",
      link: "/categories/books",
    },
    {
      title: "Toys",
      image: "./assets/Toys.png",
      link: "/categories/toys",
    },
    {
      title: "Mobile",
      image: "./assets/Electronics/Mobile.png",
      link: "/categories/Mobile",
    },
    {
      title: "Handset",
      image: "./assets/Electronics/Handset.png",
      link: "/categories/Handset",
    },
    {
      title: "Headphones",
      image: "./assets/Electronics/HeadPhones.png",
      link: "/categories/HeadPhones",
    },
  ];
  let sectionss = [
    {
      title: "Electronics",
      items: [
        {
          title: "Smartphone",
          image: "./assets/Electronics/TV.png",
          price: 14999,
          link: "/categories/Electronics",
        },
        {
          title: "Laptop",
          image: "./assets/Electronics/Laptop.png",
          price: 49999,
          link: "/products/laptop",
        },
        {
          title: "Headphones",
          image: "./assets/Electronics/HeadPhones.png",
          price: 1999,
          link: "/products/headphones",
        },
        {
          title: "Smartwatch",
          image: "./assets/Electronics/Smartwatch.png",
          price: 3999,
          link: "/products/smartwatch",
        },
        {
          title: "Camera",
          image: "./assets/Electronics/Camera.png",
          price: 24999,
          link: "/products/Camera",
        },
      ],
    },
    {
      title: "Fashion",
      items: [
        {
          title: "T-shirt",
          image: "./assets/Fashion/T-shirt.png",
          price: 499,
          link: "/products/tshirt",
        },
        {
          title: "Jeans",
          image: "./assets/Fashion/Jeans.png",
          price: 999,
          link: "/products/jeans",
        },
        {
          title: "Sneakers",
          image: "./assets/Fashion/Sneakers.png",
          price: 1999,
          link: "/products/sneakers",
        },
        {
          title: "Jacket",
          image: "./assets/Fashion/Jacket.png",
          price: 2499,
          link: "/products/jacket",
        },
        {
          title: "Socks",
          image: "./assets/Fashion/Socks.png",
          price: 2999,
          link: "/products/watch",
        },
      ],
    },
    {
      title: "Groceries",
      items: [
        {
          title: "Rice",
          image: "./assets/Groceries/Rice.png",
          price: 89,
          link: "/products/rice",
        },
        {
          title: "Wheat Flour",
          image: "./assets/Groceries/Wheatflour.png",
          price: 120,
          link: "/products/wheat-flour",
        },
        {
          title: "Milk",
          image: "./assets/Groceries/Milk.png",
          price: 60,
          link: "/products/milk",
        },
        {
          title: "Ghee",
          image: "./assets/Groceries/Ghee.png",
          price: 75,
          link: "/products/Ghee",
        },
        {
          title: "Cooking Oil",
          image: "./assets/Groceries/Cookingoil.png",
          price: 150,
          link: "/products/oil",
        },
      ],
    },
    {
      title: "Books",
      items: [
        {
          title: "Atomic Habits",
          image: "./assets/Books/AtomicHabits.png",
          price: 399,
          link: "/products/atomic-habits",
        },
        {
          title: "The Alchemist",
          image: "./assets/Books/The Alchemist.png",
          price: 299,
          link: "/products/the-alchemist",
        },
        {
          title: "Rich Dad Poor Dad",
          image: "./assets/Books/Rich Dad Poor Dad.png",
          price: 349,
          link: "/products/rich-dad-poor-dad",
        },
        {
          title: "Think and Grow Rich",
          image: "./assets/Books/think and Grow Rich.png",
          price: 279,
          link: "/products/think-and-grow-rich",
        },
        {
          title: "Deep Work",
          image: "./assets/Books/Deepwork.png",
          price: 320,
          link: "/products/deep-work",
        },
      ],
    },
    {
      title: "Toys",
      items: [
        {
          title: "Lego Classic Set",
          image: "./assets/Toys/LegoClassicset.png",
          price: 799,
          link: "/products/lego-classic",
        },
        {
          title: "Remote Control Car",
          image: "./assets/Toys/RemoteControlCar.png",
          price: 1199,
          link: "/products/remote-car",
        },
        {
          title: "Teddy Bear",
          image: "./assets/Toys/Teddybear.png",
          price: 499,
          link: "/products/teddy-bear",
        },
        {
          title: "Doll House",
          image: "./assets/Toys/Dollhouse.png",
          price: 1499,
          link: "/products/doll-house",
        },
        {
          title: "Puzzle Game",
          image: "./assets/Toys/PuzzleGame.png",
          price: 299,
          link: "/products/puzzle-game",
        },
      ],
    },
    {
      title: "Smartphone",
      items: [
        {
          title: "iPhone 14 Pro",
          image: "./assets/Smartphone/iPhone14Pro.png",
          price: 129999,
          link: "/products/iphone-14-pro",
        },
        {
          title: "Samsung Galaxy S23",
          image: "./assets/Smartphone/SamsungGalaxyS23.png",
          price: 99999,
          link: "/products/galaxy-s23",
        },
        {
          title: "OnePlus 11",
          image: "./assets/Smartphone/Oneplus11.png",
          price: 61999,
          link: "/products/oneplus-11",
        },
        {
          title: "Google Pixel 8",
          image: "./assets/Smartphone/GooglePixel8.png",
          price: 69999,
          link: "/products/pixel-8",
        },
        {
          title: "Xiaomi 14 Pro",
          image: "./assets/Smartphone/Xiaomi14Pro.png",
          price: 59999,
          link: "/products/xiaomi-14-pro",
        },
      ],
    },
    {
      title: "Handset",
      items: [
        {
          title: "Panasonic Cordless Phone",
          image: "./assets/Handset/PanasonicCordlessPhone.png",
          price: 2499,
          link: "/products/panasonic-cordless-phone",
        },
        {
          title: "Beetel X70 landline",
          image: "./assets/Handset/BeetalX70landline.png",
          price: 1399,
          link: "/products/beetel-x70",
        },
        {
          title: "Motorola Fixed Wireless Phone",
          image: "./assets/Handset/MotorolaFixedWirlessPhone.png",
          price: 2999,
          link: "/products/motorola-fwp",
        },
        {
          title: "Gigaset Cordless C530",
          image: "./assets/Handset/GigasetC530.png",
          price: 3999,
          link: "/products/gigaset-c530",
        },
        {
          title: "Binatone Spirit 111N",
          image: "./assets/Handset/BinatoneSpirit111N.png",
          price: 999,
          link: "/products/binatone-111n",
        },
      ],
    },

    // Add more sections if needed
  ];

  return (
    <div className="bg-gray-100">
      <BannerCarousel></BannerCarousel>
      {/* Categories */}
      <section className="bg-white p-5 flex overflow-x-auto space-x-25">
        {sections.map((section) => (
          <a
            href={section.link} // Each section will have a specific link
            key={section.title}
            className="text-center hover:underline min-w-[100px]"
          >
            <img
              src={section.image} // Each section will have a unique image
              alt={section.title}
              className="mx-auto w-16 h-16 object-contain"
            />
            <p className="mt-2 text-sm font-medium">{section.title}</p>
          </a>
        ))}
      </section>

      {/* Each Product Section */}

      {/* // */}
      {sectionss.map((section) => (
        <section key={section.title} className="my-6 p-4 bg-white shadow">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto space-x-35">
            {section.items.map((item, i) => (
              <a
                href={item.link}
                key={i}
                className="min-w-[250px] border rounded p-2 hover:shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-42 object-contain"
                />
                <h3 className="mt-2 text-sm font-medium">{item.title}</h3>
                <p className="text-green-600 font-semibold">₹{item.price}</p>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cancellation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Policy</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Social</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4 text-sm">
          © 2025 Flipkart Clone by Amrit
        </p>
      </footer> */}
       <Footer></Footer>
    </div>
  );
}
export default Home;
