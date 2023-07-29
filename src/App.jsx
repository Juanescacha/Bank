import styles from "./styles"
import {
	Navbar,
	Billing,
	CardDeal,
	Business,
	Clients,
	CTA,
	Stats,
	Footer,
	Testimonials,
	Hero,
} from "./components"

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-primary">
			<div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
				<div
					className={`w-full z-50 bg-primary/0 backdrop-blur-xl fixed top-0 sm:px-32 px-12`}>
					{/* className={`w-full z-50 bg-primary/0 backdrop-blur-xl top-0 ${styles.paddingX}`}> */}
					<Navbar />
				</div>
			</div>

			<div className={`${styles.flexStart} mt-10 bg-primary`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div
				className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default App
