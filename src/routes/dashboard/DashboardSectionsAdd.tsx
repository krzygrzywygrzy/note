import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

type Props = {
  close?(): void;
};

const DashboardSectionsAdd: React.FC<Props> = ({ close }) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="title..."
          {...register("title")}
          className="text-input"
        />

        <button className="button">Create Section</button>
      </form>
    </div>
  );
};

export default DashboardSectionsAdd;
