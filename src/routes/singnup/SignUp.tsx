import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { useForm, SubmitHandler } from "react-hook-form";
import User from "../../models/User";
import { supabase } from "../../supabaseClient";
import { useLocation } from "wouter";

const SignUp: React.FC = () => {
  const [, setLocation] = useLocation();
  const { register, handleSubmit } = useForm<User>();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signUp(
        {
          email: data.email,
          password: data.password,
        },
        {
          data: {
            name: data.name,
            surname: data.surname,
          },
        }
      );

      if (error) throw error;
      window.location.reload();
      setLocation("/");
    } catch (err: any) {
      setMessage(err.error_description || err.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <section className="m-12">
        <div>Create account and start taking notes</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="text-input w-128"
            placeholder="name..."
            {...register("name")}
          />
          <br />
          <input
            type="text"
            className="text-input w-128"
            placeholder="surname..."
            {...register("surname")}
          />
          <div className="my-8">
            Now provide some authentication information
          </div>
          <input
            type="text"
            className="text-input w-128"
            placeholder="email..."
            {...register("email")}
          />
          <br />
          <input
            type="password"
            className="text-input w-128"
            placeholder="password..."
            {...register("password")}
          />
          <br />
          {message && <div className="font-bold my-4">{message}</div>}
          <button className="button mt-4">
            {loading ? "Loading..." : "Sign up"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
