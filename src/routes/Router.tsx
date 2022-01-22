import React, { useState, useEffect } from "react";
import { Route } from "wouter";
import { supabase } from "../supabaseClient";
import Dashboard from "./dashboard/Dashboard";
import SignIn from "./singIn/SignIn";
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
      <Route path="/">{signedIn ? <Dashboard /> : <Welcome />}</Route>
      <Route path="/join">
        <SignIn />
      </Route>
    </div>
  );
};

export default Router;
