import { Beast } from "../../App";
import "./card.styles.css";

type CardProps = {
	beast: Beast,
};

const Card = ({ beast }: CardProps) => {
	const { name, email, id, company} = beast;
	return (
		<div className="card-container" key={id}>
			<img
				alt={`beast ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
			<p>{company.bs}</p>
		</div>
	);
};

export default Card;
