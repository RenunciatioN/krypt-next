"use client";

import React from "react";

import { SpinnerIcon } from "@/components/icons/Spinner";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { AuthButtonsContainer } from "../AuthButtonsContainer/AuthButtonsContainer";
import { useSignInForm } from "./useSignInForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import Image from "next/image";

export const SignInForm = () => {
	const { form, functions, state } = useSignInForm();

	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
			<div className="flex flex-col space-y-2 text-center">
				<div className="flex justify-center">
					<Image src="/logo.png" alt="logo" width={40} height={40} draggable={false} />
				</div>
				<h1 className="text-2xl font-semibold tracking-tight">Login to your account</h1>
				<p className="text-sm text-muted-foreground">Enter your email and password</p>
			</div>
			<div className="grid gap-2">
				<Form {...form}>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							functions.onSubmit();
						}}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="login"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only" htmlFor="email">
										Email
									</Label>
									<FormControl>
										<Input
											id="email"
											placeholder="email@example.com"
											autoCapitalize="none"
											autoComplete="email"
											autoCorrect="off"
											disabled={state.loading}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only" htmlFor="password">
										Password
									</Label>
									<FormControl>
										<PasswordInput
											id="password"
											placeholder="your very secret password"
											autoCapitalize="none"
											autoComplete="password"
											autoCorrect="off"
											disabled={state.loading}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							{state.loading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
							Sign in
						</Button>
					</form>
				</Form>
				<div className="flex justify-center ">
					<Button variant="link" disabled={state.loading} onClick={() => functions.goToSignUp()}>
						<span className=" px-2 text-muted-foreground">create new account</span>
					</Button>
				</div>

				<AuthButtonsContainer loading={state.loading} />
			</div>
		</div>
	);
};
