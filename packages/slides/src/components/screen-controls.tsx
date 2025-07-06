"use client";

import { ChevronLeft, ChevronRight, Expand, Shrink } from "lucide-react";
import { useFullScreen } from "../hooks/useFullScreen";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSlides } from "../stores/slides.store";
import { ViewTransition } from "./view-transition";

export function SetFullScreen() {
	const { setFullScreen, exitFullScreen, isFullScreen } = useFullScreen();

	return (
		<button
			type="button"
			onClick={isFullScreen ? exitFullScreen : setFullScreen}
			className="cursor-pointer"
			title={isFullScreen ? "Exit full screen" : "Set full screen"}
			aria-label={isFullScreen ? "Exit full screen" : "Set full screen"}
			tabIndex={3}
		>
			<ViewTransition name="full-screen">
				{isFullScreen ? <Shrink /> : <Expand />}
			</ViewTransition>
		</button>
	);
}

export function MoveOnSlides() {
	const params = useParams();
	const router = useRouter();
	const { slides } = useSlides();

	const totalSlides = slides.length;
	const currentSlide = Number(params.slide);

	const canMoveForward = currentSlide < totalSlides;
	const canMoveBack = currentSlide > 1;

	const goBack = () => {
		if (!canMoveBack) return;
		router.replace(`/${currentSlide - 1}`);
	};

	const goForward = () => {
		console.log({ currentSlide, totalSlides });
		if (!canMoveForward) return;
		router.replace(`/${currentSlide + 1}`);
	};

	useEffect(() => {
		const keydownHandler = (event: KeyboardEvent) => {
			console.log(event.key);
			if (event.key === "ArrowLeft") {
				goBack();
			} else if (event.key === "ArrowRight") {
				goForward();
			}
		};

		document.addEventListener("keydown", keydownHandler);

		return () => {
			document.removeEventListener("keydown", keydownHandler);
		};
	}, []);

	return (
		<div className="flex items-center gap-1">
			<button
				type="button"
				disabled={!canMoveBack}
				className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
				title="Move to previous slide"
				aria-label="Move to previous slide"
				tabIndex={1}
				onClick={goBack}
			>
				<ChevronLeft />
			</button>
			<button
				type="button"
				disabled={!canMoveForward}
				className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
				title="Move to next slide"
				aria-label="Move to next slide"
				tabIndex={2}
				onClick={goForward}
			>
				<ChevronRight />
			</button>
		</div>
	);
}
