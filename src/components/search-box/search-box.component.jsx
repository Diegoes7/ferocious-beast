import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, handlerChange }) => (
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
