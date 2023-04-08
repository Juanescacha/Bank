import React from "react"

const Button = ({ style }) => (
	<button
		type="button"
		className={`px-6 py-4 text-lg font-medium rounded-lg outline-none font-poppins bg-blue-gradient text-primary ${style}`}>
		Get Started
	</button>
)

export default Button
