import { card } from "../assets"
import styles, { layout } from "../styles"
import Button from "./Button"

const CardDeal = () => (
	<section
		className={`${layout.section}`}
		id="cardDeal">
		<div className={`${layout.sectionInfo}`}>
			<h2 className={`${styles.heading2}`}>
				Find a better card deal
				<br className="hidden sm:block" /> in few easy steps.
			</h2>
			<p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
				{/* cSpell:disable */}
				Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
				quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
			</p>
			<Button style="mt-10" />
		</div>

		<div className={`${layout.sectionImg}`}>
			<img
				src={card}
				alt="card"
				className="object-contain w-full h-full"
			/>
		</div>
	</section>
)

export default CardDeal
