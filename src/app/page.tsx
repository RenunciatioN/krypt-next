import { Services } from "@/components/pages/home/Services";
import { Transactions } from "@/components/pages/home/Transactions";
import { Welcome } from "@/components/pages/home/Welcome";
import { Footer } from "@/components/layout/Footer";
import { СurrencyReserve } from "@/components/pages/home/СurrencyReserve";
import { AccordionQuestions } from "@/components/pages/home/AccordionQuestions";
import { useTranslations } from "next-intl";

export default function HomePage() {
	// const t = useTranslations("Index");

	return (
		<>
			{/* <div>t('title')</div> */}
			<Welcome />
			<Services />
			<Transactions />
			<СurrencyReserve />
			<AccordionQuestions />
			<Footer />
		</>
	);
}
