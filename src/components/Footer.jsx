
export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white mt-15 py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
          {/* Logo & About */}
          <div>
            <h1 className="text-2xl font-bold text-red-500 mb-2">Tomato</h1>
            <p>
              Discover the best food & drinks in your city. Order online or
              explore restaurants nearby.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-red-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Help & Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-red-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Connect</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-red-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-10">
          © {new Date().getFullYear()} Tomato. All rights reserved.
        </div>
      </footer>
    </>
  );
}
