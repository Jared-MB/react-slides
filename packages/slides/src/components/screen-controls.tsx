import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useFullScreen } from "../hooks/useFullScreen";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSlides } from "../stores/slides.store";

export function SetFullScreen() {
	const { setFullScreen } = useFullScreen();

	return (
		<button
			type="button"
			onClick={setFullScreen}
			className="cursor-pointer"
			title="Set full screen"
			aria-label="Set full screen"
			tabIndex={3}
		>
			<Expand />
		</button>
	);
}

export function MoveOnSlides({
	currentSlide,
	totalSlides,
}: {
	currentSlide: number;
	totalSlides: number;
}) {
	const router = useRouter();
	const { isFullScreen } = useFullScreen();
	const { setCurrentSlideInFullScreen } = useSlides();

	const canMoveForward = currentSlide < totalSlides;
	const canMoveBack = currentSlide > 1;

	const goBack = () => {
		if (!canMoveBack) return;

		if (isFullScreen) {
			setCurrentSlideInFullScreen(currentSlide - 1);
		} else {
			router.replace(`/${currentSlide - 1}`);
		}
	};

	const goForward = () => {
		if (!canMoveForward) return;

		if (isFullScreen) {
			setCurrentSlideInFullScreen(currentSlide + 1);
		} else {
			router.replace(`/${currentSlide + 1}`);
		}
	};

	useEffect(() => {
		const keydownHandler = (event: KeyboardEvent) => {
			if (event.key === "ArrowLeft") {
				goBack();
				event.preventDefault();
			} else if (event.key === "ArrowRight") {
				goForward();
				event.preventDefault();
			}
		};

		document.addEventListener("keydown", keydownHandler);

		return () => {
			document.removeEventListener("keydown", keydownHandler);
		};
	}, [isFullScreen]);

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
