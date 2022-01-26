import React, { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "../../supabaseClient";

type Props = {
  close?(): void;
};

type Input = {
  email: string;
  password: string;
};

const SignIn: React.FC<Props> = ({ close }) => {
  const { register, handleSubmit } = useForm<Input>();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const onSubmit: SubmitHandler<Input> = async (data) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn(data);
      if (error) throw error;
      window.location.reload();
      if (close) close();
    } catch (err: any) {
      setMessage(err.error_description || err.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-128 p-4 relative">
      <div onClick={close} className="absolute top-4 right-4 cursor-pointer">
        <HiOutlineX size={24} />
      </div>
      <div>
        <p className="text-2xl text-center mt-4">Sign in</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="email..."
            className="text-input w-full"
            {...register("email")}
          />
          <br />
          <input
            type="password"
            placeholder="password..."
            className="text-input w-full"
            {...register("password")}
          />
          {message && <div className="font-bold my-4">{message}</div>}
          <button className="button mt-4">
            {loading ? "Loading..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
