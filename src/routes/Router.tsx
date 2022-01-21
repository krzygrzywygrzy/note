import React, { useState, useEffect } from "react";
import { Route } from "wouter";
import { supabase } from "../supabaseClient";
import Welcome from "./welcome/Welcome";

const Router: React.FC = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  useEffect(() => {
    if (supabase.auth.user()) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }, []);

  return (
    <div>
      <Route path="/">{signedIn ? <div>Home</div> : <Welcome />}</Route>
    </div>
  );
};

export default Router;
