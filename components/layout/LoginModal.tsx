import { useForm } from "react-hook-form";
import {
  LinkButton,
  PrimaryButton,
  TransparentButton,
} from "../shared/buttons";
import { Modal } from "../shared/modal";
import { Input } from "../shared/inputs";

type LoginModalProps = {
  open: boolean;
  onSignup: () => void;
  onClose: () => void;
};

type LoginForm = {
  email: string;
  password: string;
};

export function LoginModal({ open, onSignup, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted, errors },
  } = useForm<LoginForm>({});

  function onSignupClick() {
    onSignup();
    onClose();
  }
  function onSubmit(data: LoginForm) {
    console.log(data);
  }

  return (
    <Modal
      className="!w-[500px]"
      title={"Log in"}
      open={open}
      onClose={onClose}
    >
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-5">
            <Input
              type="email"
              placeholder="Email"
              error={errors["email"]?.message}
              {...register("email", { required: "Email required" })}
            />
            <Input
              type="password"
              placeholder="Password"
              error={errors["password"]?.message}
              {...register("password", { required: "Password required" })}
            />
          </div>
          {isSubmitted && (
            <span className="text-xs font-bold leading-none text-error">
              Invalid email or password
            </span>
          )}
        </div>
        <LinkButton
          className="!p-0 font-normal !text-accent-link text-center"
          href="#"
        >
          Forgot password?
        </LinkButton>
        <PrimaryButton type="submit">Log in</PrimaryButton>
        <TransparentButton
          type="button"
          className="!p-0 !text-accent-link"
          onClick={onSignupClick}
        >
          Sign up
        </TransparentButton>
      </form>
    </Modal>
  );
}
