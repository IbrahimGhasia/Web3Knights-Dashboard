import CertificateCard from "./components/CertificateCard";
import Categories from "./components/Categories";
import Dashboard from "./components/Dashboard";

const categories = [
	"Finance",
	"Electronics",
	"Content Writing",
	"Media & Communication",
	"Software Services",
	"Human Resources",
	"Marketing",
	"Construction",
	"Teaching",
	"Business Development",
	"Soft Skills",
	"Management",
	"Entreprenership",
	"Miscellanious",
	"Custom",
	"Creative Design",
	"Applications",
	"Business Operations",
];

function App() {
	return (
		<>
			<Dashboard />
			{/* <div className="grid grid-cols-10">
				<div className="col-span-2"></div>
				<div className="ml-32 mr-10 mt-10 col-span-8">
					<div className="flex justify-between items-center">
						<p className="text-gray-300">
							Assert admin {">"}{" "}
							<span className="text-gray-500 font-bold">
								Manage Categories
							</span>
						</p>
						<button className="flex justify-center items-center bg-purple-500 text-white py-1 px-3 rounded-lg text-sm">
							<IconPlus size={18} />
							Add Category
						</button>
					</div>

					<div className="my-10">
						<div className="flex flex-wrap gap-5">
							{categories.map((value, index) => (
								<Categories title={value} key={index} />
							))}
						</div>
					</div>

					<div className="flex items-center justify-between">
						<p className="text-purple-500 font-bold">
							Certificates under the categories
						</p>

						<div className="flex items-center">
							<input
								placeholder="Search Certificate"
								className="w-96 h-10 rounded-l-lg p-3 border border-gray-200 "
							/>
							<button className="bg-blue-500 h-10 px-2 rounded-r-lg text-white">
								<IconSearch />
							</button>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-10 mt-5 mb-5">
						<CertificateCard text="Accounts Finance" number="7" />
						<CertificateCard text="Taxation Finance" number="4" />
						<CertificateCard text="Finance" number="5" />
						<CertificateCard
							text="Financial Market Analyst"
							number="0"
						/>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default App;
