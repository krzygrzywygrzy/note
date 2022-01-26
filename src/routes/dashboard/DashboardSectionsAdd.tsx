import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../../supabaseClient";
import SupabaseTables from "../../models/SupabaseTables";
import { useLocation } from "wouter";
import { thunkAddSection } from "../../store/actions/sectionActions";

type Inputs = {
  name: string;
};

type Props = {
  close?(): void;
};

const DashboardSectionsAdd: React.FC<Props> = ({ close }) => {
  const [, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const user_id = useAppSelector((state) => state.user).user!.id;
  const onSubmit: SubmitHandler<Inputs> = async (form) => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from(SupabaseTables.SECTION)
        .insert({ name: form.name, user_id })
        .single();

      if (error) throw error;
      dispatch(thunkAddSection(data));
      if (close) close();
      setLocation(`/page/${form.name}`);
    } catch (err: any) {
      setMessage(err.error_description || err.message);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-sm w-96">
      <header className="text-xl">Add new page</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="title..."
          {...register("name")}
          className="text-input w-full"
        />
        <br />
        <button className="button mt-2">
          {loading ? "Loading..." : "Add page"}
        </button>
        {message && <div className="font-bold my-4">{message}</div>}
      </form>
    </div>
  );
};

export default DashboardSectionsAdd;
