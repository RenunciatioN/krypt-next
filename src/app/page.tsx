import { Services } from "@/components/Services";
import { Transactions } from "@/components/Transactions";
import { Welcome } from "@/components/Welcome";

export default function HomePage() {
	return (
		<main className="gradient-bg-welcome">
			<div className="gradient-bg-welcome">
				<Welcome />
			</div>

			<Services />
			<Transactions />
		</main>
	);
}
