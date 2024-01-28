"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { questionsData } from "@/data/faq";

import { FC } from "react";

interface IProps {}

const AccordionQuestions: FC<IProps> = () => {
	return (
		<section className=" py-20 gradient-bg-question px-4">
			<h2 className="text-2xl text-center mb-10">FAQ</h2>

			<div className="max-w-[800px] mx-auto">
				<Accordion type="single" collapsible>
					{questionsData.map(({ text, title }, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger>{title}</AccordionTrigger>
							<AccordionContent>{text}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export { AccordionQuestions };
