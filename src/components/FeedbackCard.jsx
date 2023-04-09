import { quotes } from "../assets"
import styles from "../styles"

const FeedbackCard = ({ id, name, content, title, img, index }) => (
	<div
		className={`basis-full feedback-card rounded-[20px] py-10 flex-col gap-10 flex justify-between items-start px-12 max-w-[370px]`}>
		<img
			src={quotes}
			alt="quotes"
			className="object-contain w-[42px] h-[27px]"
		/>
		<p className="text-lg font-normal leading-[32px] text-white font-poppins">
			{content}
		</p>
		<div className="flex items-center w-full gap-4">
			<img
				src={img}
				alt={name}
				className="object-contain w-[48px] h-[48px] rounded-full"
			/>
			<div className="flex flex-col w-full">
				<h4 className="text-xl font-semibold leading-8 text-white font-poppins">
					{name}
				</h4>
				<p className="text-base font-normal leading-6 font-poppins text-dimWhite">
					{title}
				</p>
			</div>
		</div>
	</div>
)

export default FeedbackCard
