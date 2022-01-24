import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { useAppSelector } from "../../store/hooks";
import { supabase } from "../../supabaseClient";

const AuthWrapper: React.FC = ({ children }) => {
  const [, setLocation] = useLocation();
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    if (!supabase.auth.user()) {
      setLocation("/");
      window.location.reload();
    }
  });

  //TODO: refractor to see error if occurres
  return user.user ? <div>{children}</div> : <div>loading...</div>;
};

export default AuthWrapper;
