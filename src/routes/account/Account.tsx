import React from "react";
import AuthWrapper from "../../components/layout/AuthWrapper";
import { useAppDispatch } from "../../store/hooks";
import { signOut } from "../../store/reducers/userReducer";
import { supabase } from "../../supabaseClient";
import DashboardMenu from "../dashboard/DashboardMenu";
import { useLocation } from "wouter";

const Account: React.FC = () => {
  const [, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const logOut = () => {
    supabase.auth.signOut();
    dispatch({ type: signOut });
    setLocation("/");
    window.location.reload();
  };

  return (
    <AuthWrapper>
      <div className="flex">
        <DashboardMenu />
        <section className="m-4">
          <p>ACCOUNT</p>
          <button onClick={logOut}>Log out</button>
        </section>
      </div>
    </AuthWrapper>
  );
};

export default Account;
