import React, { useState, useEffect } from "react";
import { Route } from "wouter";
import { supabase } from "../supabaseClient";
import Dashboard from "./dashboard/Dashboard";
import SignUp from "./singnup/SignUp";
import Welcome from "./welcome/Welcome";
import { Provider } from "react-redux";
import store from "../store/store";
import Account from "./account/Account";

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
      <Provider store={store}>
        <Route path="/">{signedIn ? <Dashboard /> : <Welcome />}</Route>
        <Route path="/page/:name">
          {(params) => {
            return <Dashboard section_name={params.name} />;
          }}
        </Route>
        <Route path="/join">
          <SignUp />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Provider>
    </div>
  );
};

export default Router;
