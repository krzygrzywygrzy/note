import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { thunkGetUser } from "../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { supabase } from "../../supabaseClient";

const AuthWrapper: React.FC = ({ children }) => {
  const [, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  // useEffect(() => {
  //   if (!supabase.auth.user()) {
  //     setLocation("/");
  //   }
  // });

  useEffect(() => {
    dispatch(thunkGetUser());
  }, []);

  if (user.loading) {
    return <div>loading</div>;
  }

  if (user.error) {
    return <div>Error :( {user.error.message}</div>;
  }

  if (!user.user) {
    return <></>;
  }

  //TODO: refractor to see error if occurres
  return <div>{children}</div>;
};

export default AuthWrapper;
