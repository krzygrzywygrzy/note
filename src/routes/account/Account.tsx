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
        <div>
          <p>ACCOUNT</p>
          <button onClick={logOut}>Log out</button>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Account;
