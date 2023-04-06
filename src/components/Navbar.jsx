import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constants"

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<nav className="flex items-center justify-between w-full py-6 navbar">
			<img
				src={logo}
				alt="hoobank"
				className="w-[124px] h-8"
			/>

			<ul className="items-center justify-end flex-1 hidden gap-10 list-none sm:flex">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-base text-white`}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
			<div className="flex items-center justify-end flex-1 sm:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="object-contain cursor-pointer w-7 h-7"
					onClick={() => setToggle(prev => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
					<ul className="flex flex-col items-center justify-end flex-1 gap-4 list-none">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-base text-white`}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
