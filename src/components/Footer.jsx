import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import styles, { layout } from "../styles"

const Footer = () => {
	return (
		<section
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
			<div className="absolute z-0 w-screen h-full bg-[#06080d]" />
			<div
				className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full z-10`}>
				<div className="flex flex-col justify-start flex-1 mr-10">
					<img
						src={logo}
						alt="logo"
						className="w-[266px] h-[72px] object-contain"
					/>
					<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
						A new way to make the payments easy, reliable and
						secure.
					</p>
				</div>

				<div className="flex flex-row flex-wrap justify-between flex-[1.5] w-full mt-10 md:mt-0">
					{footerLinks.map(footerLink => (
						<div
							key={footerLink.key}
							className="flex flex-col ss:my-0 my-4 min-w-[150px] gap-4">
							<h4 className="text-lg font-medium leading-7 text-white font-poppins">
								{footerLink.title}
							</h4>
							<ul className="list-none">
								{footerLink.links.map((link, index) => (
									<li
										key={link.name}
										className={` ${
											index !==
											footerLink.links.length - 1
												? "mb-4"
												: "mb-0"
										} font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer`}>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="border-t-[#3F3E45] z-10 pt-6 border-t-[1px] flex flex-col items-center justify-between w-full gap-10 md:flex-row">
				<p className="text-lg font-normal leading-7 text-center text-dimWhite font-poppins">
					Copyright &copy; 2021 HooBank. All Rights Reserved.
				</p>
				<div className="flex flex-row mt-6 md:mt-0">
					{socialMedia.map((social, index) => (
						<img
							key={social.id}
							src={social.icon}
							alt={social.id}
							className={`w-5 h-5 object-contain cursor-pointer ${
								index !== socialMedia.length - 1
									? "mr-6"
									: "mr-0"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Footer
