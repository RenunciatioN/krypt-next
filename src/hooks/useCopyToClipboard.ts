"use client";

import { useState } from "react";

export const useCopyToClipboard = () => {
	const [text, setText] = useState<string | null>(null);

	const copyHandler = (content: string) => {
		navigator.clipboard
			.writeText(content)
			.then(() => {
				setText(content);
			})
			.catch(() => {
				setText(null);
			});
	};

	return {
		text,
		copyHandler,
	};
};
