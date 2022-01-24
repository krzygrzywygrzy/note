import React, { useEffect } from "react";
import AuthWrapper from "../../components/layout/AuthWrapper";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { supabase } from "../../supabaseClient";
import { thunkGetSections } from "../../store/actions/sectionActions";

const DashboardMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetSections());
  }, []);

  return (
    <AuthWrapper>
      <div className="mr-4 w-96 h-screen border-r">
        <div className="text-center py-4 text-xl">
          Welcome {supabase.auth.user()!.user_metadata.name}{" "}
          {supabase.auth.user()!.user_metadata.surname}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default DashboardMenu;
