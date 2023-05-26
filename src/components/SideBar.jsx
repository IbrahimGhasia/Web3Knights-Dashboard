import {
	IconArticle,
	IconBriefcase,
	IconBuilding,
	IconCreditCard,
	IconPuzzle,
	IconSchool,
	IconSettingsCog,
	IconShieldPlus,
	IconUser,
	IconUserPlus,
	IconUsers,
} from "@tabler/icons-react";
import NavLink from "./NavLinks";

const Sidebar = () => {
	const links = [
		{ title: "Manage Catergories", icon: <IconSettingsCog /> },
		{ title: "Add Company", icon: <IconUserPlus /> },
		{ title: "Add new User", icon: <IconUserPlus /> },
		{ title: "Add new Certificates", icon: <IconShieldPlus /> },
		{ title: "University Actions", icon: <IconBuilding /> },
		{ title: "Add students", icon: <IconBuilding /> },
		{ title: "Add MCQ Questions", icon: <IconPuzzle /> },
		{ title: "Recruiters and Jobs", icon: <IconBriefcase /> },
		{ title: "Universities", icon: <IconSchool /> },
		{ title: "View All users", icon: <IconUsers /> },
		{ title: "Trial Version", icon: <IconCreditCard /> },
		{ title: "Add blogs", icon: <IconArticle /> },
	];

	return (
		<div className="bg-sky-950 w-full h-full p-5 sm:w-1/4">
			<div className="my-5">
				<span className="flex justify-center gap-3 items-center">
					<IconUser className="text-blue-500" />
					<h3 className="text-2xl text-center font-bold text-blue-500">
						Admin panel
					</h3>
				</span>
			</div>
			<ul className="flex flex-col p-4 gap-3">
				{links.map((link, index) => (
					<NavLink key={index} props={link} index={index} />
				))}
				{/* <li className="flex gap-3 items-center pl-10 w-full h-10 bg-white rounded-lg text-blue-500 cursor-pointer">
					<IconSettingsCog />
					Manage Catergories
				</li> */}

				<div className="flex items-center mt-10 md:mb-48">
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
			</ul>
		</div>
	);
};

export default Sidebar;
