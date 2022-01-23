import React, { useState } from "react";
import { Link } from "wouter";
import Popup from "../popup/Popup";
import SignIn from "./SignIn";

const Navbar: React.FC = () => {
  const [signupPopup, setSignupPopup] = useState<boolean>(false);

  return (
    <nav className="px-12 py-4 border-b sticky top-0 z-50 bg-white flex justify-between">
      <div>
        <Link href="/">Note</Link>
      </div>
      <div>
        <span onClick={() => setSignupPopup(true)} className="cursor-pointer">
          Sign in
        </span>
        <span className="ml-4">
          <Link href="/join">Sign up</Link>
        </span>
      </div>
      <Popup trigger={signupPopup}>
        <div className="bg-white rounded-sm">
          <SignIn close={() => setSignupPopup(false)} />
        </div>
      </Popup>
    </nav>
  );
};

export default Navbar;
