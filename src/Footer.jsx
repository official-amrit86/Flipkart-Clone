// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-10 mt-12">
      {/* main link grid */}
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {/* ----- column 1 ----- */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/press" className="hover:underline">
                Press
              </Link>
            </li>
          </ul>
        </div>

        {/* ----- column 2 ----- */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/payments" className="hover:underline">
                Payments
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:underline">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/cancellation" className="hover:underline">
                Cancellation
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* ----- column 3 ----- */}
        <div>
          <h3 className="font-semibold mb-3">Policy</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/return-policy" className="hover:underline">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:underline">
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* ----- column 4 ----- */}
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* ----- column 5 ----- */}
        <div>
          <h3 className="font-semibold mb-3">Consumer Policy</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/sitemap" className="hover:underline">
                Sitemap
              </Link>
            </li>
            <li>
              <Link to="/epr-compliance" className="hover:underline">
                EPR Compliance
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="hover:underline">
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* ----- column 6 ----- */}
        <div>
          <h3 className="font-semibold mb-3">Mail Us</h3>
          <address className="not-italic text-sm leading-6">
            Flipkart Clone Pvt Ltd,
            <br />
            42/6 Residency Road,
            <br />
            Bengaluru 560025,
            <br />
            Karnataka, India
          </address>
        </div>
      </div>

      {/* divider */}
      <hr className="border-gray-700 my-8" />

      {/* legal + payments row */}
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-center md:text-left">
          © 2025 Flipkart Clone by Amrit • All rights reserved
        </p>

        {/* payment method icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.visa.com" target="Visa">
            <img src="./assets/FooterImg/Visa.png" alt="Visa" className="h-6" />
          </a>
          <a
            href="https://www.mastercard.us/en-us/personal/ways-to-pay/click-to-pay.html"
            target="MasterCard"
          >
            <img
              src="/assets/FooterImg/MasterCard.png"
              alt="Master"
              className="h-6"
            />
          </a>
          <a href="https://www.PayPal.com">
            <img
              src="./assets/FooterImg/PayPal.png"
              alt="PayPal"
              className="h-6"
            />
          </a>
          <a href="https://www.Rupay.com" target="-Paypal">
            <img
              src="./assets/FooterImg/RuPay.png"
              alt="RuPay"
              className="h-6"
            />
          </a>
          <a href="https://payments.google.com/gp/w/home/signup" target="-Gpay">
            <img src="./assets/FooterImg/Gpay.png" alt="GPay" className="h-6" />
          </a>
          <a href="https://www.phonepe.com/" target="-Phonepay">
            <img
              src="./assets/FooterImg/PhonePay.png"
              alt="PhonePay"
              className="h-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
