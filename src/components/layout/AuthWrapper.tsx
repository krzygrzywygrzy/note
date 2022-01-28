import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { thunkGetUser } from "../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { supabase } from "../../supabaseClient";

const AuthWrapper: React.FC = ({ children }) => {
  const [, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  //TOOD: redirect if there is no user logged in supabase

  useEffect(() => {
    if (!user.user) dispatch(thunkGetUser());
  }, []);

  if (user.loading) {
    return <div className="text-center">loading</div>;
  }

  if (user.error) {
    return <div>Error :( {user.error.message}</div>;
  }

  if (!user.user) {
    return <></>;
  }

  return <div>{children}</div>;
};

export default AuthWrapper;
