import React from "react";
import { Link } from "wouter";

const Navbar: React.FC = () => {
  return (
    <nav className="px-12 py-4 border-b sticky top-0 z-50 bg-white flex justify-between">
      <div>
        <Link href="/">Note</Link>
      </div>
      <div>
        <span>Sign up</span>
        <span className="ml-4">
          <Link href="/join">Sign in</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
