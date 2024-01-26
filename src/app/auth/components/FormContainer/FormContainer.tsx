"use client";

import React from "react";

import { ConfirmationForm } from "../ConfirmationForm/ConfirmationForm";
import { SignInForm } from "../SignInForm/SignInForm";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import { useStage } from "@/app/auth/components/context/authStage/useStage";

export const FormContainer = () => {
	const { stage } = useStage();

	return (
		<>
			{stage === "signIn" && <SignInForm />}
			{stage === "signUp" && <SignUpForm />}
			{stage === "confirmation" && <ConfirmationForm />}
		</>
	);
};
