import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { motionPropsDefault } from "../../helpers/misc/motionPropsDefault";

interface Values {
	firstName: string;
	lastName: string;
	email: string;
}

const DefaultForm: React.FC = () => {
	const ref = useRef(null);
	const inView = useInView(ref);

	return (
		<Main ref={ref} animate={inView ? _MotionVariants.Main.animate : _MotionVariants.Main.initial}>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
					lastName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
					email: Yup.string().email("Invalid email address").required("Required"),
				})}
				onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));

						setSubmitting(false);
					}, 400);
				}}
			>
				<StyledForm>
					<Label htmlFor="firstName">First Name</Label>
					<StyledInput type="text" name="firstName" placeholder="John" />
					<ErrorMessage name={"firstName"} />

					<Label htmlFor="lastName">Last Name</Label>
					<StyledInput type="text" name="lastName" placeholder="Doe" />
					<ErrorMessage name={"lastName"} />

					<Label htmlFor="email">Email</Label>
					<StyledInput name="email" placeholder="john@acme.com" type="email" />
					<ErrorMessage name={"email"} />

					<Submit type="submit" {...motionPropsDefault} variants={_MotionVariants.Submit}>
						Submit
					</Submit>
				</StyledForm>
			</Formik>
		</Main>
	);
};

const Main = styled(motion.div)`
	flex-grow: 1;
`;

const StyledForm = styled(Form)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	row-gap: 2vmin;
	padding: 5vmin;
`;

const StyledInput = styled(Field)`
	background: transparent;
	height: 5rem;
	padding: 1rem;
	width: 50vmin;
	border: none;
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.3rem);

	color: var(--palette-color-dark);
	text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 1);

	&:focus {
		outline-color: var(--palette-color-dark);
	}

	&::placeholder {
		color: var(--palette-color-dark);
		text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 1);
	}
`;

const Label = styled(motion.label)`
	width: 50vmin;
`;

const Submit = styled(motion.button)`
	height: 10vmin;
	width: 20vmin;
	box-shadow: 0 0 0.5rem 0.2rem var(--palette-color-medium);
	backdrop-filter: blur(0.3rem);
	background: transparent;
	border: none;
`;

const _MotionVariants = {
	Main: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 2,
			},
		},
	},
	Submit: {
		whileHover: {
			scale: 1.1,
		},
		whileTap: {
			scale: 1,
		},
	},
};

export default DefaultForm;
