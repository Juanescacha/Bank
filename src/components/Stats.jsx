import { stats } from "../constants"
import styles from "../styles"

const Stats = () => (
	<section
		className={`flex-row flex-wrap ${styles.flexCenter} mb-6 sm:mb-20`}
		id="stats">
		{stats.map(stat => (
			<div
				className={`flex-1 flex items-center justify-start m-3`}
				key={stat.id}>
				<h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
					{stat.value}
				</h4>
				<p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
					{stat.title}
				</p>
			</div>
		))}
	</section>
)

export default Stats
