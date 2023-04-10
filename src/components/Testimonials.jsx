import styles, { layout } from "../styles"
import { quotes } from "../assets"
import { feedback } from "../constants"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
	<section className="relative">
		<div className="absolute z-[0] w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient" />
		<div className={`${layout.section}`}>
			<div className={`${layout.sectionInfo}`}>
				<h1 className={`${styles.heading2}`}>
					What people are
					<br className="hidden sm:block" /> saying about us.
				</h1>
			</div>
			<div
				className={`flex flex-1 justify-start items-center md:ml-10 ml-0 md:mt-0 mt-10 relative`}>
				<p
					className={`${styles.paragraph}  max-w-[450px] text-left mt-5`}>
					Everything you need to accept card payments and grow your
					business anywhere on the planet.
				</p>
			</div>
		</div>
		<div className="flex xl:justify-center justify-start gap-10 relative z-[1] items-stretch flex-wrap">
			{feedback.map((item, index) => (
				<FeedbackCard
					key={item.id}
					index={index}
					{...item}
				/>
			))}
		</div>
	</section>
)

export default Testimonials
