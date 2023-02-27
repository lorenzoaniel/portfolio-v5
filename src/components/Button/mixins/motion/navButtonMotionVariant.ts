export const navButtonMotionVariant = {
	initial: {
		background: "rgba(255,255,255,0)",
		boxShadow: "0 0 1rem rgba(0, 0, 0, 0)",
		backdropFilter: "blur(0rem)",
		transition: {
			duration: 0.2,
			delay: 0,
			ease: "easeInOut",
		},
	},
	whileHover: {
		background: "rgba(255, 255, 255, 0.05)",
		boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
		backdropFilter: "blur(1rem)",
		transition: {
			duration: 0.2,
			delay: 0,
			ease: "easeInOut",
		},
	},
};
