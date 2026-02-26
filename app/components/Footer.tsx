import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-gray-300">
              362 S Greeno Rd
              <br />
              Fairhope, AL 36532
            </p>
          </div>

          {/* Phone */}
          <div>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-300">
              <a
                href="tel:(251) 928-8302"
                className="hover:text-white transition"
              >
                (251) 928-8302
              </a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-2">Hours</h3>
            <p className="text-gray-300">Mon-Fri, 8:30a-5p</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="text-white text-xl md:text-2xl mb-4 italic font-semibold">
            See it, touch it, love it—visit or give us a ring
          </p>
          <p>&copy; 2026 Fairhope Floor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
