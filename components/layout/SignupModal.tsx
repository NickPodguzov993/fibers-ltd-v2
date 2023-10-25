"use client";
import { useForm } from "react-hook-form";
import { Modal } from "../shared/modal";
import { Input, TextArea } from "../shared/inputs";
import Link from "next/link";
import { PrimaryButton } from "../shared/buttons";
import { RadioInput } from "../shared/inputs";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type SignupModalProps = {
  open: boolean;
  onLogin: () => void;
  onClose: () => void;
};

type SignupForm = {
  type: "personal" | "company";
  name: string;
  email: string;
  password: string;
  password_repeat: string;
  phone?: string;
  socialNet?: string;
  socialNetContact?: string;
  // Company
  company?: {
    name: string;
    value: string;
    address: string;
    site: string;
    additional?: string;
  };
};

export function SignupModal({ open, onLogin, onClose }: SignupModalProps) {
  const pathName = usePathname();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { isSubmitted, errors },
  } = useForm<SignupForm>({
    defaultValues: {
      type: "personal",
    },
  });
  const type = watch("type");

  useEffect(() => {
    clearErrors();
  }, [type, clearErrors]);

  function onLoginClick() {
    onLogin();
    onClose();
  }
  function onSubmit() {
    return;
  }

  return (
    <Modal
      className="w-[800px]"
      title={"Sign up"}
      open={open}
      onClose={onClose}
    >
      <form
        className="flex flex-col gap-4 lg:gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gal-4 lg:gap-8 justify-center">
          <RadioInput
            value="personal"
            checked={type === "personal"}
            onClick={() => setValue("type", "personal")}
            {...register("type")}
          >
            Personal
          </RadioInput>
          <RadioInput
            value="company"
            checked={type === "company"}
            onClick={() => setValue("type", "company")}
            {...register("type")}
          >
            Company
          </RadioInput>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <>
            <Input
              placeholder="Name*"
              error={errors["name"]?.message}
              {...register("name", { required: "Name required" })}
            />
            <Input
              placeholder="Email*"
              type="email"
              error={errors["email"]?.message}
              {...register("email", { required: "Email required" })}
            />
            <Input
              placeholder="Password*"
              type="password"
              error={errors["password"]?.message}
              {...register("password", { required: "Password required" })}
            />
            <Input
              placeholder="Repeat password*"
              type="password"
              error={errors["password_repeat"]?.message}
              {...register("password_repeat", {
                required: "Repeat password required",
              })}
            />
          </>
          {type === "company" && (
            <>
              <Input
                placeholder="Company name*"
                error={errors["company"]?.name?.message}
                {...register("company.name", {
                  required: "Company name required",
                })}
              />
              <Input
                placeholder="Value added tax, %*"
                error={errors["company"]?.value?.message}
                {...register("company.value", {
                  required: "Value added tax required",
                })}
              />
              <Input
                placeholder="Company address*"
                error={errors["company"]?.address?.message}
                {...register("company.address", {
                  required: "Company address required",
                })}
              />
              <TextArea
                rootClass="row-span-2"
                placeholder="Additional info"
                error={errors["company"]?.additional?.message}
                {...register("company.additional")}
              />
              <Input
                placeholder="Company site*"
                error={errors["company"]?.site?.message}
                {...register("company.site", {
                  required: "Company site required",
                })}
              />
            </>
          )}
          <>
            <Input
              placeholder="Social network"
              error={errors["socialNet"]?.message}
              {...register("socialNet")}
            />
            <Input
              placeholder="Phone number"
              error={errors["phone"]?.message}
              {...register("phone")}
            />
            <Input
              placeholder="Social network nickname"
              error={errors["socialNetContact"]?.message}
              {...register("socialNetContact", {
                required: "Social network nickname required",
              })}
            />
          </>
        </div>
        <p className="text-dark text-center">
          By clicking the signup button you are agreeing to the{" "}
          <Link href="#" className="text-accent-link">
            terms & conditions{" "}
          </Link>
          and
          <Link href="#" className="text-accent-link">
            {" "}
            privacy policy
          </Link>
        </p>
        <div className="flex flex-col gap-2 lg:gap-6 lg:items-center">
          <PrimaryButton
            type="submit"
            className="lg:w-fit lg:px-8 lg:py-6 lg:text-[20px]"
          >
            Sign Up
          </PrimaryButton>
          <span className="text-dark text-center">
            Already have an account?
            <span
              onClick={onLoginClick}
              className="p-2 text-accent-link font-bold cursor-pointer"
            >
              Log in
            </span>
          </span>
        </div>
      </form>
    </Modal>
  );
}
