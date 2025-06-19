"use client";
import { Navbar } from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";

// Sample projects data - replace with your actual projects
const projects = [
	{
		id: 1,
		title: "Water Balance study and Web Portal Development ",
		description:
			"A comprehensive Urban Studies platform with real-time data visualization.",
		image: "/pic-rbased/urban-studies.jpg",
		link: "#",
	},
	{
		id: 2,
		title: "Preparation of Geo-database of Delhi city for Property Crow Services Pvt. Ltd.",
		description:
			"Full-stack solution with payment integration and inventory management.",
		image: "/pic-rbased/enery-sec.jpg",
		link: "#",
	},
	{
		id: 3,
		title: "Drone data processing for Agricultural Monitoring and Management in for Wind Hawk.",
		description:
			"Secure financial application with biometric authentication.",
		image: "/pic-rbased/climatology.jpg",
		link: "#",
	},
	{
		id: 4,
		title: "Drone data processing for solar potential estimation and terrain survey for Global Sustainability Solution India",
		description:
			"ML-powered tool that creates personalized marketing content.",
		image: "/pic-rbased/forestry-ecology.jpg",
		link: "#",
	},
];

export default function ProjectsPage() {
	return (
		<div className="bg-black min-h-screen text-gray-200 ">
			<Navbar />

			<div className="container mx-auto px-4 py-16 pt-25">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-5xl font-bold text-center mb-4 text-stone-100 bg-clip-text"
				>
					Our Projects
				</motion.h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-400"
				>
					Explore our portfolio of innovative solutions delivering exceptional
					results for our clients.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: index * 0.2 }}
							className="bg-gradient-b from-black to-slate-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
						>
							<div className="h-64 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-2 text-white">
									{project.title}
								</h3>
								<p className="text-gray-400 mb-4">
									{project.description}
								</p>
							
								<a
									href={project.link}
									className="inline-block px-6 py-2 bg-gradient-to-r from-slate-900 to-gray-900 rounded-md hover: hover: transition-all duration-300 text-white font-medium"
								>
									View Project
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
}