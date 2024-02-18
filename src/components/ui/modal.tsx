"use client";

import React, { FC } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const overlayVariant = {
	hide: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { duration: 0.2 },
	},
};
const modalPositionVariant = {
	hide: {
		opacity: 0,
		y: 30,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.2 },
	},
};

interface IProps {
	isVisible: boolean;
	children: React.ReactNode;
	onClose: () => void;
	className?: string;
	overlayClassName?: string;
}

const Modal: FC<IProps> = ({ isVisible, children, onClose, className, overlayClassName }) => {
	return createPortal(
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className={cn("fixed inset-0 bg-black/60 z-10", overlayClassName)}
					onClick={() => onClose()}
					variants={overlayVariant}
					initial="hide"
					animate="visible"
					exit="hide"
				>
					<motion.div
						className="fixed inset-0 overflow-y-auto z-20"
						variants={modalPositionVariant}
						initial="hide"
						animate="visible"
						exit="hide"
					>
						<motion.div className="min-h-full flex justify-center items-center p-5">
							<div
								className={cn(
									"p-5 rounded-lg bg-black border  border-gray-300/20 text-white",
									className
								)}
								onClick={(e) => e.stopPropagation()}
							>
								{children}
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>,
		document.body
	);
};

export { Modal };
