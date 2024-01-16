import styles from "./Form.module.css";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(5).max(200).required(),
  email: Joi.string().min(5).max(200).required(),
  password: Joi.string().min(8).max(1000).required(),
});

type Props = {
  name: string,
  email: string,
  password: string,
};

const Form: FunctionComponent<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => alert(`Hii ${data.name} you have been successfully Registered`))}
    >
      <span className={styles.header}>Registration Form</span>
      <div className={styles.input_wrap}>
        <input
          placeholder="Enter your name"
          type="text"
          {...register("name")}
        />
        {errors.name && <p className={styles.danger}>{errors.name.message}</p>}
        <input
          placeholder="Enter your email"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <p className={styles.danger}>{errors.email.message}</p>
        )}
        <input
          placeholder="Enter Password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <p className={styles.danger}>{errors.password.message}</p>
        )}
      </div>
      <button className={styles.register}>Register</button>
    </form>
  );
};

export default Form;
