export default function CertificateCard(props) {
	return (
		<div className="bg-gray-100 rounded-xl px-5 py-5 shadow-lg">
			<span className="flex items-center justify-between">
				<h4 className="text-gray-400 font-bold text-md md:text-lg">
					{" "}
					Finance
				</h4>
				<p className="text-gray-400 text-xs font-semibold">
					Know more {">"}
				</p>
			</span>
			<h2 className="mt-6 mb-3 text-lg md:text-2xl text-blue-500 font-bold">
				{props.text}{" "}
				<span className="text-green-500 ml-2 md:ml-5">
					{props.number}
				</span>
			</h2>
			<button className="w-full h-8 mt-2 bg-green-500 text-white text-center rounded-lg">
				Tag a Job
			</button>
			<button className="w-full h-8 mt-3 border border-purple-500 text-purple-500 text-center rounded-lg">
				Employees Enrolled {">"}
			</button>

			<button className="w-60 h-10 mt-3 border bg-gray-200 text-gray-400 text-center rounded-lg">
				Assign Certificate
			</button>
		</div>
	);
}
