import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	handlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
	className,
	placeholder,
	handlerChange,
}: SearchBoxProps) => (
	<div>
		<input
			className={className}
			type="search"
			placeholder={placeholder}
			onChange={handlerChange}
		/>
	</div>
);

export default SearchBox;
