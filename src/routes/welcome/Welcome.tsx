import React from "react";
import Navbar from "../../components/layout/Navbar";
import { useLocation } from "wouter";

const Welcome: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div>
      <Navbar />
      <section className="mx-12 my-32 text-5xl">
        <span>Organise your notes...</span>
        <br />
        <span>And take them everywhere</span>
        <div className="my-8">
          <button
            className="text-xl text-white bg-black px-4 py-2 rounded-sm"
            onClick={() => setLocation("/join")}
          >
            Create Account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
