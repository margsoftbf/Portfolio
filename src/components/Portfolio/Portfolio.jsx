import { ExternalLink, Github } from 'lucide-react';

const Card = ({ children, className }) => (
	<div className={`border border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-xl ${className}`}>
		{children}
	</div>
);

const CardContent = ({ children }) => (
	<div className="p-6">{children}</div>
);

const CardHeader = ({ children }) => (
	<div className="px-6 pt-6">{children}</div>
);

const CardTitle = ({ children, className }) => (
	<h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className }) => (
	<p className={`text-sm ${className}`}>{children}</p>
);

const Badge = ({ children, variant = "default", className }) => {
	const baseClass = "inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium";
	const variantClass = variant === "outline" 
		? "bg-blue-500/10 border-blue-400/30 text-blue-400 hover:bg-blue-500/20 transition-colors duration-200" 
		: variant === "secondary"
		? "bg-blue-600 text-blue-100"
		: "bg-blue-600 text-blue-100";
	
	return (
		<span className={`${baseClass} ${variantClass} ${className}`}>
			{children}
		</span>
	);
};

const Button = ({ children, size = "default", className, href, ...props }) => {
	const baseClass = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200";
	const sizeClass = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2";
	
	if (href) {
		return (
			<a 
				href={href} 
				target="_blank" 
				rel="noopener noreferrer"
				className={`${baseClass} ${sizeClass} ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	}
	
	return (
		<button className={`${baseClass} ${sizeClass} ${className}`} {...props}>
			{children}
		</button>
	);
};

const projects = [
	{
		id: 1,
		title: 'Real Estate Platform (Fullstack App)',
		description: 'Advanced Real Estate Platform featuring comprehensive property management, AI-powered property descriptions, and modern user experience. Built with cutting-edge technologies including Next.js 15, TypeScript, and PostgreSQL database.',
		image: './assets/RealEstate.png',
		technologies: [
			'Next.js 15',
			'TypeScript',
			'Tailwind CSS v4',
			'TanStack Query',
			'NestJS',
			'PostgreSQL',
			'TypeORM',
			'JWT',
			'Google Gemini API',
			'Jest',
			'Docker',
			'GitHub Actions',
		],
		liveUrl: 'https://real-estate.marcingarski.com/',
		githubUrl: 'https://github.com/margsoftbf/real-estate',
		featured: true,
		isNew: true,
	},
	{
		id: 2,
		title: 'Admin Dashboard',
		description: 'Comprehensive administration tool designed to streamline business operations. Advanced Dashboard application tailored for E-commerce, Finance, Job Management, Analytics, and Project Management.',
		image: './assets/AdminDashboard.webp',
		technologies: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Next.js',
			'Chart.js',
			'React Context',
			'Framer Motion',
		],
		liveUrl: 'https://admin.marcingarski.com/',
		githubUrl: 'https://github.com/margsoftbf/Admin-Dashboard-App',
		featured: true,
	},
	{
		id: 3,
		title: 'Travelo - Travel & Trip',
		description: 'State-of-the-art travel platform that operates similarly to TripAdvisor. Revolutionize the way you search for vacations, adventures, restaurants, and hotels in the world\'s 50 most popular cities.',
		image: './assets/Travelo.webp',
		technologies: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Next.js',
			'Redux',
			'Material UI',
			'Swiper',
		],
		liveUrl: 'https://travelo.marcingarski.com/',
		githubUrl: 'https://github.com/margsoftbf/Travelo',
		featured: false,
	},
	{
		id: 4,
		title: 'Fusion Feast Restaurant',
		description: 'Contemporary dining experience that combines traditional flavors with a modern twist. Unique menu that lets you customize your favorite dishes like pizzas, burgers, and more.',
		image: './assets/FusionFeast.webp',
		technologies: [
			'React',
			'TypeScript',
			'Tailwind CSS',
			'Next.js',
			'Redux',
			'React Context',
			'Framer Motion',
		],
		liveUrl: 'https://restaurant.marcingarski.com/',
		githubUrl: 'https://github.com/margsoftbf/Fusion-Feast-Restaurant',
		featured: false,
	},
];

const Portfolio = () => {
	return (
		<div className="bg-[#091219] text-white">
			<section id="projects" className="py-20 bg-gray-800/20">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-4xl font-bold font-sans mb-12 text-center">Projects</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{projects.map((project) => (
								<Card
									key={project.id}
									className={`group hover:shadow-xl transition-all duration-300 border-gray-700 bg-gray-800/50 hover:bg-gray-800/70 ${
										project.featured ? "md:col-span-2 lg:col-span-1" : ""
									}`}
								>
									<div className="relative overflow-hidden rounded-t-xl">
										<img
											src={project.image || "/placeholder.svg"}
											alt={project.title}
											className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>

									<CardHeader>
										<div className="flex items-center justify-between text-left mb-4">
											<CardTitle className="font-sans text-xl text-white text-left">{project.title}</CardTitle>
											<div className="flex gap-2">
												{project.isNew && (
													<Badge variant="secondary" className="bg-green-600 text-green-100 text-xs animate-pulse">
														New
													</Badge>
												)}
												{project.featured && (
													<Badge variant="secondary" className="bg-blue-600 text-blue-100">
														Featured
													</Badge>
												)}
											</div>
										</div>
										<CardDescription className="font-mono text-gray-400 text-left">{project.description}</CardDescription>
									</CardHeader>

									<CardContent>
										<div className="flex flex-wrap gap-2 mb-4 text-left">
											{project.technologies.map((tech) => (
												<Badge
													key={tech}
													variant="outline"
													className="text-xs bg-blue-500/10 border-blue-400/30 text-blue-400 hover:bg-blue-500/20 transition-colors duration-200"
												>
													{tech}
												</Badge>
											))}
										</div>

										<div className="flex gap-2 mt-auto text-left">
											<Button
												size="sm"
												href={project.liveUrl}
												className="bg-white text-black hover:bg-gray-100 border border-gray-200 transition-all duration-200"
											>
												<ExternalLink size={16} className="mr-2" />
												Demo
											</Button>
											<Button
												size="sm"
												href={project.githubUrl}
												className="bg-white text-black hover:bg-gray-100 border border-gray-200 transition-all duration-200"
											>
												<Github size={16} className="mr-2" />
												Code
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Portfolio;
