"use client";

import React from "react";
import { AuthButtonsContainer } from "../AuthButtonsContainer/AuthButtonsContainer";

import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormControl, FormMessage, Form } from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@radix-ui/react-dropdown-menu";

import { Input } from "@/components/ui/Input";
import { SpinnerIcon } from "@/components/icons/Spinner";
import { useSignUpForm } from "./useSingUpForm";
import Image from "next/image";

export const SignUpForm = () => {
	const { functions, state, form } = useSignUpForm();

	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<div className="flex justify-center">
					<Image src="/logo.png" alt="logo" width={40} height={40} draggable={false} />
				</div>
				<h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
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
							name="login"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only">Email</Label>
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
						{/* <FormField
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only">First name</Label>
									<FormControl>
										<Input
											id="firstName"
											placeholder="your first perfect name"
											autoCapitalize="none"
											autoComplete="firstName"
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
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only">Last name</Label>
									<FormControl>
										<Input
											id="lastName"
											placeholder="your second amazing name"
											autoCapitalize="none"
											autoComplete="lastName"
											autoCorrect="off"
											disabled={state.loading}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/> */}
						<FormField
							name="password"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only">Password</Label>
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
						<FormField
							name="passwordConfirmation"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<Label className="sr-only">Confirm password</Label>
									<FormControl>
										<PasswordInput
											id="passwordConfirmation"
											placeholder="confirm your password dude"
											autoCapitalize="none"
											autoComplete="passwordConfirmation"
											autoCorrect="off"
											disabled={state.loading}
											{...field}
										/>
									</FormControl>
									{/* {state.isPasswordsEqual && !!field.value && (
										<FormDescription>passwords are equal 🔥</FormDescription>
									)}
									{!state.isPasswordsEqual && (
										<FormDescription>confirm your password</FormDescription>
									)} */}
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className="w-full">
							{state.loading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
							Sign up
						</Button>
					</form>
				</Form>
				<div className="flex justify-center ">
					<Button variant="link" disabled={state.loading} onClick={() => functions.goToSignIn()}>
						<span className=" px-2 text-muted-foreground">have account already</span>
					</Button>
				</div>

				<AuthButtonsContainer loading={state.loading} />
			</div>
		</div>
	);
};
