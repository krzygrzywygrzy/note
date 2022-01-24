import React, { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { supabase } from "../../supabaseClient";
import { thunkGetSections } from "../../store/actions/sectionActions";
import DashboardSections from "./DashboardSections";

const DashboardMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(thunkGetSections());
  }, []);

  return (
    <div className="mr-4 px-4 w-96 h-screen border-r">
      <div className="text-center py-4 text-xl">
        Welcome {supabase.auth.user()!.user_metadata.name}
      </div>
      <DashboardSections />
    </div>
  );
};

export default DashboardMenu;
