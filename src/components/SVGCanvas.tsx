import { SVGProps } from "@/types";
import { forwardRef } from "react";

const SVGCanvas = forwardRef<SVGSVGElement, SVGProps>((_, ref) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-1000 -1000 2000 2000"
			width="100%"
			height="100%"
			xmlSpace="preserve"
			xmlnsXlink="http://wwww3.org/1999/xlink"
			ref={ref}
		/>
	);
});

SVGCanvas.displayName = "SVGCanvas";

export default SVGCanvas;
