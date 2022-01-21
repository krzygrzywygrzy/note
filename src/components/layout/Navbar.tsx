import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="px-12 py-4 border-b sticky top-0 z-50 bg-white flex justify-between">
      <div>Note</div>
      <div>
        <span>Sing up</span>
        <span className="ml-4">Sing in</span>
      </div>
    </nav>
  );
};

export default Navbar;
