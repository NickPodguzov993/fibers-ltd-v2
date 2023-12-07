"use client";
import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {
    LinkButton,
    PrimaryButton,
    TransparentButton,
} from "../shared/buttons";
import {Modal} from "../shared/modal";
import {Input} from "../shared/inputs";
import {ModalType} from "@/components/layout/Header";

type LoginModalProps = {
    titleLog: string
    titleEmail: string
    titlePassword: string
    titleForgotPassword: string
    titleSingUp: string
    titleInvalidEmail:string
    modalTitle:ModalType
    open: boolean;
    onSignup: () => void;
    onClose: () => void;
};

type LoginForm = {
    email: string;
    password: string;
};

export function LoginModal({
                               open, onSignup, onClose, titleLog, titlePassword,
                               titleForgotPassword,
                               titleEmail,
                               titleSingUp,
                               titleInvalidEmail,
                               modalTitle
                           }: LoginModalProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: {isSubmitted, errors},
    } = useForm<LoginForm>({});

    useEffect(() => {
        reset();
    }, [open, reset]);

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
            title={titleLog}
            open={open}
            onClose={onClose}
        >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-5">
                        <Input
                            type="email"
                            placeholder={titleEmail}
                            error={errors["email"]?.message}
                            {...register("email", {required: "Email required"})}
                        />
                        <Input
                            type="password"
                            placeholder={titlePassword}
                            error={errors["password"]?.message}
                            {...register("password", {required: "Password required"})}
                        />
                    </div>
                    {isSubmitted && (
                        <span className="text-xs font-bold leading-none text-error">
             {titleInvalidEmail}
            </span>
                    )}
                </div>
                <LinkButton
                    className="!p-0 font-normal !text-accent-link text-center"
                    href="#"
                >
                    {titleForgotPassword}
                </LinkButton>
                <PrimaryButton type="submit">{titleLog}</PrimaryButton>
                <TransparentButton
                    type="button"
                    className="!p-0 !text-accent-link"
                    onClick={onSignupClick}
                >
                    {titleSingUp}
                </TransparentButton>
            </form>
        </Modal>
    );
}
