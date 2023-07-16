import { ToastContainer, toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
	const { hex, weight } = color;
	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success("Copied to clipboard");
			} catch (error) {
				toast.error("Failed to copy");
			}
		} else {
			toast.error("Clipborard access is not available");
		}
	};

	return (
		<article
			className={index > 10 ? "color color-light" : "color"}
			style={{ background: `#${hex}`, transition: "all 1s ease" }}
			onClick={saveToClipboard}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
		</article>
	);
};
export default SingleColor;
