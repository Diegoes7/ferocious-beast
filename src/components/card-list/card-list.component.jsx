import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ beasts }) => (
	<div className="card-list">
		{beasts.map((beast) => (
			<Card beast={beast} />
		))}
	</div>
);

export default CardList;
