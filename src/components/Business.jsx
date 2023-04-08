import Button from "./Button"
import { features } from "../constants"
import styles, { layout } from "../styles"

const FeatureCard = ({ id, icon, title, content, index }) => (
	<div
		className={`${styles.flexCenter} p-6 rounded-[20px] feature-card gap-7`}>
		<div
			className={`${styles.flexCenter} rounded-full bg-dimBlue w-16 h-16`}>
			<img
				src={icon}
				alt="icon"
				className="object-contain w-1/2 h-1/2"
			/>
		</div>
		<div className="flex flex-col flex-1 max-w-[347px] gap-1">
			<h4 className="text-lg font-semibold leading-6 text-white font-poppins">
				{title}
			</h4>
			<p className="text-base font-normal leading-6 text-dimWhite font-poppins">
				{content}
			</p>
		</div>
	</div>
)

const Business = () => (
	<section
		className={`${layout.section}`}
		id="features">
		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2}`}>
				You do the business, <br className="hidden sm:block" /> we'll
				handle the money.
			</h2>
			<p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
				With the right credit card, you can improve your financial life
				by building credit, earning rewards and saving money. But with
				hundreds of credit cards on the market.
			</p>
			<Button style="mt-10" />
		</div>

		<div className={`flex-col ${layout.sectionImg} gap-6`}>
			{features.map((feature, index) => (
				<FeatureCard
					key={feature.id}
					{...feature}
					index={index}
				/>
			))}
		</div>
	</section>
)

export default Business
