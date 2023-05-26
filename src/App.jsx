import {
	IconArticle,
	IconBriefcase,
	IconBuilding,
	IconCreditCard,
	IconPlus,
	IconPuzzle,
	IconSchool,
	IconSearch,
	IconSettingsCog,
	IconShieldPlus,
	IconUser,
	IconUserPlus,
	IconUsers,
} from "@tabler/icons-react";
import CertificateCard from "./components/CertificateCard";

function App() {
	return (
		<>
			<div className="grid grid-cols-10">
				<div className="col-span-2">
					<div className="bg-sky-950 h-full p-5">
						<div className="my-5">
							<span className="flex justify-center gap-3 items-center">
								<IconUser className="text-blue-500" />
								<h3 className="text-2xl text-center font-bold text-blue-500">
									Admin panel
								</h3>
							</span>
						</div>

						<div className="">
							<li className="flex gap-3 items-center pl-10 w-full h-10 bg-white rounded-lg text-blue-500 cursor-pointer">
								<IconSettingsCog />
								Manage Catergories
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconUserPlus />
								Add company
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconUserPlus />
								Add new User
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconShieldPlus />
								Add new Certificates
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconBuilding />
								University Actions
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconBuilding />
								Add Students
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconPuzzle />
								Add MCQ Questions
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconBriefcase />
								Recruiters and Jobs
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconSchool />
								Universities
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconUsers />
								View All users
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconCreditCard />
								Trial Version
							</li>

							<li className="flex gap-3 my-3 items-center pl-10 w-full h-10 hover:bg-white rounded-lg text-white hover:text-blue-500 cursor-pointer">
								<IconArticle />
								Add blogs
							</li>

							<div className="flex items-center mt-10 ml-10">
								<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
									<svg
										className="absolute w-12 h-12 text-gray-400 -left-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
											clipRule="evenodd"
										></path>
									</svg>
								</div>
								<div className="text-white ml-3">
									<p className="text-md">Anil J</p>
									<p className="text-xs">Assert_admin</p>
								</div>
							</div>
						</div>
					</div>
				</div>
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
						<div className="flex items-center justify-between gap-4 text-center">
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Finance
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Electronics
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Content Writing
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Media & Communication
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Software Services
							</span>
						</div>

						<div className="flex my-3 items-center justify-between gap-4 text-center">
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Human Resources
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Marketing
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Construction
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Teaching
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Business Development
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Soft Skills
							</span>
						</div>

						<div className="flex my-3 items-center justify-between gap-4 text-center">
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Management
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Entrepreneuriship
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Miscellaneous
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Custom
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Creative Design
							</span>
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Application
							</span>
						</div>

						<div className="mt-6">
							<span className="py-2 px-5 rounded-full bg-gray-100 text-gray-400">
								Business Operations
							</span>
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
			</div>
		</>
	);
}

export default App;
