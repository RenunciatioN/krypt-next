import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

interface IProps {}

const FormSkeleton: FC<IProps> = () => {
	return (
		<div className="w-[500px h-[338px] p-6 rounded-md backdrop-blur-xs bg-gray-400/10">
			<div className="flex gap-4 items-center mb-11 mt-8">
				<Skeleton className="w-full h-[40px] rounded-md bg-black/70" />
				<Skeleton className="w-full h-[40px] rounded-md bg-black/70" />
			</div>

			<Skeleton className="w-full h-[40px] mb-9 rounded-md bg-black/70" />
			<Skeleton className="w-full h-[40px] mb-4 rounded-md bg-black/70" />
			<Skeleton className="w-full h-[40px] rounded-md bg-black/70" />
		</div>
	);
};

export { FormSkeleton };
