import {
  FaEnvelope,
  FaPhone,
  FaRss,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e6f2f7] text-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Section 1: Address + Logos */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.svg" alt="Flowrec" className="h-8 mr-2" />
            <span className="text-2xl font-bold text-[#1d65a6]">Atlab</span>
          </div>
          <div className="mb-6">
            <p>
              <strong>United States:</strong> 447 Broadway,<br />
              2nd Floor Suite #2599,<br />
              New York 10013
            </p>
          </div>
          <div className="mb-6">
            <p>
              <strong>India:</strong> GN 34/1, Sector V,<br />
              Kolkata, West Bengal 700091
            </p>
          </div>
          <div className="flex gap-4">
            <img src="/iso-9001.png" alt="ISO 9001" className="h-12 w-auto" />
            <img src="/iso-27001.png" alt="ISO 27001" className="h-12 w-auto" />
          </div>
        </div>

        {/* Section 2: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <span>connect@atlab.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <span>
                <span className="mr-2">🇺🇸</span> +1 (252) 5995522
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-xl" />
              <span>
                <span className="mr-2">🇮🇳</span> +91 93302 26233
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaRss className="text-xl" />
              <span>Also Follow on:</span>
              <div className="flex items-center gap-2 ml-2">
                <a href="#" className="text-blue-600">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-black">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-blue-600">
                  <FaFacebookF size={20} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#1d65a6] text-white text-sm text-center py-3">
        © 2024. Atlab. All rights Reserved. &nbsp;
        <a href="#" className="underline">Privacy policy</a> &nbsp;•&nbsp;
        <a href="#" className="underline">Terms and conditions</a>
      </div>
    </footer>
  );
}
