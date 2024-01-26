import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import type { InputProps } from "./Input";
import { Input } from "./Input";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="relative">
			<Input type={showPassword ? "text" : "password"} {...props} className={cn("pr-10", className)} />
			<Button
				type="button"
				variant="ghost"
				size="sm"
				className="absolute right-0 top-0  h-full px-3 py-2 hover:bg-transparent cursor-pointer"
				onClick={() => setShowPassword(!showPassword)}
				disabled={!props.value || props.disabled}
			>
				{showPassword ? (
					<EyeOffIcon className="h-4 w-4" aria-hidden="true" />
				) : (
					<EyeIcon className="h-4 w-4" aria-hidden="true" />
				)}
			</Button>
		</div>
	);
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
