"use client";

import { useState } from "react";

export const useCopyToClipboard = () => {
	const [text, setText] = useState<string | null>(null);

	const copyHandler = (content: string) => {
		try {
			navigator.clipboard
				.writeText(content)
				.then(() => {
					setText(content);
				})
				.catch(() => {
					setText(null);
				});
		} catch (error) {
			new Error("Error Copy To Clipboard", { cause: error });
		}
	};

	return {
		text,
		copyHandler,
	};
};
