import styles from "../styles"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => (
	<section
		id="home"
		className={`${styles.paddingX} flex md:flex-row flex-col ${styles.paddingY}`}>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ${styles.paddingX}`}>
			<div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
				<img
					src={discount}
					alt="discount"
					className="w-8 h-8"
				/>
				<p className={`${styles.paragraph} uppercase ml-2`}>
					<span className="text-white">20% </span>Discount For
					<span className="text-white"> 1 month </span>
					Account
				</p>
			</div>
			<div className="flex items-center justify-between w-ful">
				<h1 className="flex-1 text-[52px] ss:text-[72px] text-white font-semibold font-poppins ss:leading-[100px] leading-[75px]">
					The Next <br className="hidden sm:block" />
					<span className="text-gradient">Generation</span>
				</h1>

				<div className="hidden mr-0 ss:flex md:mr-4">
					<GetStarted />
				</div>
			</div>
			<h1 className="text-[52px] ss:text-[68px] text-white font-semibold font-poppins ss:leading-[100px] leading-[75px] w-full">
				Payment Method.
			</h1>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Our team of experts uses a methodology to identify the credit
				cards most likely to fit your needs. We examine annual
				percentage rates, annual fees.
			</p>
		</div>
		<div
			className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative -right-16`}>
			<img
				src={robot}
				alt="billing"
				className="relative w-full z-[5]"
			/>
			<div className="absolute z-[0] w-2/5 h-[35%] top-0 pink__gradient" />
			<div className="absolute z-[1] w-4/5 h-4/5 rounded-full bottom-40 white__gradient" />
			<div className="absolute z-[0] w-1/2 h-1/2 right-20 bottom-20 blue__gradient" />
		</div>
		<div className={`ss:hidden ${styles.flexCenter}`}>
			<GetStarted />
		</div>
	</section>
)

export default Hero
