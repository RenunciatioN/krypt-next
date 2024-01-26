"use client";

import { FC } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogOut, MenuIcon, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { ModeToggle } from "../ui/theme-toggle";

interface IProps {}

const HeaderProrfile: FC<IProps> = () => {
	const router = useRouter();

	return (
		<DropdownMenu >
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="p-px rounded-full self-center h-8 w-8">
					{false ? (
						<Avatar className="w-8 h-8">
							<AvatarImage src={"" || ""} alt="" />
							<AvatarFallback>AC</AvatarFallback>
						</Avatar>
					) : (
						<MenuIcon />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56  ">
				<DropdownMenuLabel>
					<p>Мой аккаунт</p>
					<p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">name</p>
				</DropdownMenuLabel>
				<DropdownMenuGroup></DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild>
						<Link href={`/profile`}>
							<User className="mr-2 h-4 w-4" />
							<span>Profile</span>
						</Link>
					</DropdownMenuItem>
					{/* <DropdownMenuItem asChild>
						<div className="flex items-center">
							<ModeToggle />
							<span>Светлый режим</span>
						</div>
					</DropdownMenuItem> */}
					<DropdownMenuItem disabled={false} onClick={() => router.push("/")}>
						<LogOut className="mr-2 h-4 w-4" />
						<span>Sign out</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { HeaderProrfile };
