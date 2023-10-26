"use client";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Modal } from "../shared/modal";
import {
  Input,
  RadioInput,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  TextArea,
} from "../shared/inputs";
import { PrimaryButton } from "../shared/buttons";

const socialNets = [
  { value: "qq", title: "Qq" },
  { value: "momo", title: "Momo" },
  { value: "facebook", title: "Facebook" },
  { value: "whatsapp", title: "Whatsapp" },
  { value: "wechat", title: "Wechat" },
  { value: "telegram", title: "Telegram" },
  { value: "skype", title: "Skype" },
];

type SignupModalProps = {
  open: boolean;
  onLogin: () => void;
  onRegistered: () => void;
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

export function SignupModal({
  open,
  onLogin,
  onRegistered,
  onClose,
}: SignupModalProps) {
  const pathName = usePathname();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    reset,
    control,
    formState: { isSubmitted, errors },
  } = useForm<SignupForm>({
    defaultValues: {
      type: "personal",
    },
  });
  const type = watch("type");
  const socialVal = watch("socialNet");
  const social = socialNets.find(({ value }) => socialVal === value);

  useEffect(() => {
    reset();
  }, [open, reset]);

  useEffect(() => {
    clearErrors();
  }, [type, clearErrors]);

  function onLoginClick() {
    onLogin();
    onClose();
  }
  function onSubmit(values: SignupForm) {
    console.log(values);
    onClose();
    onRegistered();
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

                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Your passwords do not match";
                  }
                },
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
            <Controller
              name="socialNet"
              control={control}
              render={({ field }) => (
                <Select
                  name={field.name}
                  onValueChange={field.onChange}
                  disabled={field.disabled}
                >
                  <SelectTrigger
                    placeholder={!field.value ? "show" : undefined}
                  >
                    <SelectValue placeholder="Social network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value={null!}>None</SelectItem>
                      {socialNets.map(({ title, value }) => (
                        <SelectItem key={value} value={value}>
                          {title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <Input
              placeholder="Phone number"
              error={errors["phone"]?.message}
              {...register("phone")}
            />
            {social && (
              <Input
                placeholder={`${social.title} nickname*`}
                error={errors["socialNetContact"]?.message}
                {...register("socialNetContact", {
                  required: `${social.title} nickname required`,
                })}
              />
            )}
          </>
        </div>
        <p className="text-dark text-center">
          By clicking the signup button you are agreeing to the{" "}
          <Link
            className="text-accent-link"
            href={`/${pathName.split("/")[1]}/policies/terms-and-conditions`}
            onClick={onClose}
          >
            terms & conditions{" "}
          </Link>
          and{" "}
          <Link
            className="text-accent-link"
            href={`/${pathName.split("/")[1]}/policies/privacy-policy`}
            onClick={onClose}
          >
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
