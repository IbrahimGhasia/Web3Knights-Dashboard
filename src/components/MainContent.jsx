import { IconPlus, IconSearch } from "@tabler/icons-react";
import Categories from "./Categories";
import CertificateCard from "./CertificateCard";

const MainContent = () => {
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

	return (
		<div className="w-full sm:w-3/4">
			<div className="mx-5 md:ml-32 md:mr-10 mt-20 md:mt-10">
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

				<div className="my-5 md:my-10">
					<div className="flex flex-wrap gap-5">
						{categories.map((value, index) => (
							<Categories title={value} key={index} />
						))}
					</div>
				</div>

				<div className="flex items-center justify-between mt-10 md:mt-0">
					<p className="text-purple-500 text-sm md:text-md font-bold">
						Certificates under the categories
					</p>

					<div className="flex items-center">
						<input
							placeholder="Search Certificate"
							className="md:w-96 w-48 h-10 rounded-l-lg p-3 border border-gray-200 "
						/>
						<button className="bg-blue-500 h-10 px-2 rounded-r-lg text-white">
							<IconSearch />
						</button>
					</div>
				</div>

				<div className="grid md:grid-cols-3 gap-10 mt-5 mb-5">
					<CertificateCard text="Accounts Finance" number="7" />
					<CertificateCard text="Taxation Finance" number="4" />
					<CertificateCard text="Finance" number="5" />
					<CertificateCard
						text="Financial Market Analyst"
						number="0"
					/>
				</div>

				<div className="flex items-center justify-end gap-2 mb-10 md:mb-0">
					<button className="h-8 w-8 border border-blue-500 rounded-lg text-blue-500">
						1
					</button>
					<button className="h-8 w-8 bg-blue-500 rounded-lg text-white">
						2
					</button>
					<button className="h-8 w-8 bg-blue-500 rounded-lg text-white">
						3
					</button>
					<button className="h-8 w-8 bg-blue-500 rounded-lg text-white">
						4
					</button>
					<button className="h-8 w-8 bg-blue-500 rounded-lg text-white">
						5
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
