import { clients } from "../constants"
import styles, { layout } from "../styles"

const Clients = () => (
	<section
		className={`flex md:items-stretch items-center justify-center gap-24 my-10 flex-wrap ${layout.section}`}>
		{clients.map((client, index) => (
			<img
				src={client.logo}
				key={client.id}
				alt="client"
				className="object-contain sm:w-[192px] w-[100px] hover:brightness-[3]"
			/>
		))}
	</section>
)

export default Clients
