import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { supabase } from "../../supabaseClient";

const AuthWrapper: React.FC = ({ children }) => {
  const [, setLocation] = useLocation();
  useEffect(() => {
    if (!supabase.auth.user()) {
      setLocation("/");
      window.location.reload();
    }
  });

  return <div>{children}</div>;
};

export default AuthWrapper;
