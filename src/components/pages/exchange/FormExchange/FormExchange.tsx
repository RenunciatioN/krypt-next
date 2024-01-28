"use client";

import { Input } from "@/components/ui/Input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { FC } from "react";
import { useFormExchange } from "./useFormExchange";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface IProps {}

const FormExchange: FC<IProps> = () => {
	const { form } = useFormExchange();

	return (
		<Form {...form}>
			<form className="p-6 border border-1 rounded-md backdrop-blur-xs bg-gray-400/10">
				<div className="flex gap-6 mb-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full ">
								<FormLabel>From:</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select " />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="m@example.com">m@example.com</SelectItem>
										<SelectItem value="m@google.com">m@google.com</SelectItem>
										<SelectItem value="m@support.com">m@support.com</SelectItem>
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormLabel>To:</FormLabel>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="m@example.com">m@example.com</SelectItem>
										<SelectItem value="m@google.com">m@google.com</SelectItem>
										<SelectItem value="m@support.com">m@support.com</SelectItem>
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					name="from"
					render={({ field }) => (
						<FormItem className="w-full">
							<Label className="" htmlFor="from">
								You send
							</Label>
							<FormControl>
								<Input
									id="from"
									placeholder="13.2323"
									autoCapitalize="none"
									autoComplete="email"
									autoCorrect="off"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="mt-6">
					<Label className="" htmlFor="from">
						You send
					</Label>
					<div className="flex h-10 w-full mt-2 rounded-md border border-input bg-background px-3 py-2 text-sm">
						234
					</div>
				</div>

				<Button className="w-full mt-4 bg-accent-blue font-bold">Start exchange</Button>
			</form>
		</Form>
	);
};

export { FormExchange };
