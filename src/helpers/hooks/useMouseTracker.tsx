import { useEffect, useState } from "react";

/**
 * Tracks the position of the mouse relative to the viewport.
 *
 * @returns An object with the x and y coordinates of the mouse.
 */
const useMouseTracker = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		/**
		 * Updates the mouse position in state whenever the mouse is moved.
		 */
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;
			setMousePosition({ x: clientX, y: clientY });
		};

		// Add event listener to track mouse movement
		document.addEventListener("mousemove", handleMouseMove);

		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
};

export default useMouseTracker;
