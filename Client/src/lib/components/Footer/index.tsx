import { Link } from "react-router-dom";
import { Icon_Factory } from "../../utils/icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon_Factory className="h-8 w-8 fill-blue-400" />
              <span className="text-xl font-bold">OpenCapacity</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting unused manufacturing capacity with production demand
              worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 OpenCapacity. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
