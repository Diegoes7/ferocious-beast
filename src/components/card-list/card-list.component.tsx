import Card from "../card/card.component";
import { Beast } from "../../App";

import "./card-list.styles.css";

type CardListProp = {
	beasts: Beast[]
}

const CardList = ({ beasts }: CardListProp) => (
	<div className="card-list">
		{beasts.map((beast) => (
			<Card beast={beast}key={beast.id} />
		))}
	</div>
);

export default CardList;
