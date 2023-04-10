import styles, { layout } from "../styles"
import Button from "./Button"

const CTA = () => {
	return (
		<section className={`${layout.section} ${styles.flexCenter}`}>
			<div className="bg-black-gradient-2 box-shadow rounded-[20px] p-10 flex-col sm:flex-row flex gap-10">
				<div className="flex flex-col gap-5 flex-[4]">
					<h2 className={`${styles.heading2}`}>
						Let’s try our service now!
					</h2>
					<p className={`${styles.paragraph} max-w-[470px]`}>
						Everything you need to accept card payments and grow
						your business anywhere on the planet.
					</p>
				</div>
				<div className="flex items-center justify-center flex-1">
					<Button style="min-w-[152px]" />
				</div>
			</div>
		</section>
	)
}

export default CTA
