import styles from "../styles"
import { arrowUp } from "../assets"

const GetStarted = () => (
	<div
		className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
		<div
			className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
			<div className={`${styles.flexStart} gap-2`}>
				<p className="text-lg font-medium font-poppins leading-[23px]">
					<span className="text-gradient">Get</span>
				</p>
				<img
					src={arrowUp}
					alt="arrowUp"
					className="object-contain w-6 h-6"
				/>
			</div>
			<p className="text-lg font-medium font-poppins leading-[23px]">
				<span className="text-gradient">Started</span>
			</p>
		</div>
	</div>
)
export default GetStarted
