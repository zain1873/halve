import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500">Halveoff</h3>
            <p className="text-gray-300">
              Your one-stop destination for the latest technology and electronics. Quality products at unbeatable
              prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Watches
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">+1 (800) 777-7777</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">support@techstore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h4>
              <p className="text-gray-300">Get the latest deals and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <p className="text-gray-400 text-sm">© 2024 TechStore. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}