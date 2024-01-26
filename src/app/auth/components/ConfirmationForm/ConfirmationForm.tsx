"use client";

import React from "react";

import { SpinnerIcon } from "@/components/icons/Spinner";
import { useConfirmationForm } from "./hooks/useConfirmationForm";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Form } from "react-hook-form";

export const ConfirmationForm = () => {
	useConfirmationForm();

	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Two factor authentication</h1>
				<p className="text-sm text-muted-foreground">We sent you a code to your email</p>
			</div>
			<div className="grid gap-2">
				<Form>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							// functions.onSubmit();
						}}
						className="space-y-4"
					>
						<FormField
							name="otp"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only">Password</Label>
									<FormControl>
										<PasswordInput
											id="otp"
											maxLength={6}
											placeholder="your otp code"
											autoCapitalize="none"
											autoComplete="otp"
											autoCorrect="off"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							{true && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
							Confirm
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
