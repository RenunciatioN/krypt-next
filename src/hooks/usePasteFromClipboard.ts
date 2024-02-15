import { useState } from "react";

export const usePasteFromClipboard = () => {
	const [text, setText] = useState<string | null>(null);

	const pastHandler = () => {
		navigator.clipboard
			.readText()
			.then((text) => {
				setText(text);
			})
			.catch(() => {
				setText(null);
			});
	};
	return [text, pastHandler];
};
