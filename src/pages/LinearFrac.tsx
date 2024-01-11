import { useRef } from "react";
import { LinearRenderer } from "@/lib/utils";
import { useParams, Navigate } from "react-router-dom";
import FractalForm, { formSchema } from "@/components/FractalForm";
import LinearFractalRulesSet from "@/lib/rules/Linear";
import SVGCanvas from "@/components/SVGCanvas";

const LinearFrac = () => {
	const { fracID } = useParams();
	const SVGRef = useRef<SVGSVGElement>(null);
	const interval: { i: NodeJS.Timeout | undefined } = { i: undefined };
	if (!(fracID! in LinearFractalRulesSet)) return <Navigate to="/geo-vis/404" />;
	let FractalInfo = LinearFractalRulesSet[fracID!].rules();
	function SVGReset() {
		FractalInfo = LinearFractalRulesSet[fracID!].rules();
		SVGRef.current!.innerHTML = "";
		clearInterval(interval.i);
	}

	function handleSubmit(data: formSchema) {
		SVGReset();
		LinearRenderer(SVGRef.current!, {
			...data,
			rules: FractalInfo.rules,
			interval,
			depth: data.depth + FractalInfo.shift,
		});
	}

	function handleSave() {
		console.log(SVGRef.current);
	}

	return (
		<article className="flex w-full justify-evenly py-2">
			<div className="flex w-1/3 flex-col">
				<h3 className="pb-4 text-3xl underline">{LinearFractalRulesSet[fracID!].name}</h3>
				<FractalForm
					handleSubmit={handleSubmit}
					SVGReset={SVGReset}
					maxDepth={LinearFractalRulesSet[fracID!].maxDepth}
					handleSave={handleSave}
				/>
			</div>
			<div className="aspect-square h-[90vh]  bg-gray-300">
				<SVGCanvas ref={SVGRef} />
			</div>
		</article>
	);
};

export default LinearFrac;
