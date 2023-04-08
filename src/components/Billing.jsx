import styles, { layout } from "../styles"
import { apple, bill, google } from "../assets"

const Billing = () => (
	<section
		className={`${layout.sectionReverse}`}
		id="product">
		<div className={`${layout.sectionImgReverse} gap-6`}>
			<img
				src={bill}
				alt="billing"
				className="object-contain w-full h-full relative z-[5]"
			/>
			<div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
			<div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
		</div>

		<div className={`${layout.sectionInfo} flex-col md:ml-32 ml-0`}>
			<h2 className={`${styles.heading2}`}>
				Easily control your
				<br className="hidden sm:block " /> billing & invoicing.
			</h2>
			<p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
				{/* cSpell:disable */}
				Elit enim sed massa etiam. Mauris eu adipiscing ultrices
				ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
				integer platea placerat.
			</p>
			<div className="flex flex-wrap gap-5 mt-6 sm:mt-10">
				<img
					src={apple}
					alt="apple"
					className="object-contain cursor-pointer w-[128px] h-[42px]"
				/>
				<img
					src={google}
					alt="google"
					className="object-contain cursor-pointer w-[128px] h-[42px]"
				/>
			</div>
		</div>
	</section>
)

export default Billing
