import { useId } from "react";
import SingleColor from "./SingleColor";

const ColorList = ({ colors }) => {
	return (
		<section className="colors">
			{colors.map((color, index) => {
				const id = useId();
				return <SingleColor color={color} key={id} index={index} />;
			})}
		</section>
	);
};
export default ColorList;
