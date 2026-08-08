import { Calendar, Building2, Code, GraduationCap, Phone, Cog } from 'lucide-react';

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
	const variantClass = variant === "secondary" 
		? "bg-gray-700 text-gray-300" 
		: "bg-blue-600 text-blue-100";
	
	return (
		<span className={`${baseClass} ${variantClass} ${className}`}>
			{children}
		</span>
	);
};

const Experience = () => {
	const experiences = [
		{
			title: "Lead Full Stack Developer",
			company: "Type Of Code",
			period: "October 2025 – Present",
			location: "Remote, Poland",
			description: [
				"Leading technical delivery of large production applications: architecture decisions, planning, code review and features from requirement to production",
				"Designing multi-tenant data models with organisation-level access control, roles and permissions across a wide domain schema",
				"Building product features end to end, from data model and API through to the interface users work in every day",
				"Designing background processing with BullMQ and Redis: queues, scheduled jobs and workers running in separate containers from the API",
				"Optimizing MongoDB aggregations, indexing and GraphQL resolvers on large data sets",
				"Building real-time features with live queries and subscriptions, keeping client state in sync with the database",
				"Building and maintaining the Optima ERP integration synchronising products, stock levels, customers and orders between the platform and the ERP system",
				"Integrating third-party platforms: payments, calendars and video conferencing",
				"Running an internal QA platform that orchestrates Playwright end-to-end runs across projects, with role-based access and stored test artefacts",
				"Managing applications on AWS: S3 storage, CloudFront delivery, IAM access and production monitoring",
			],
			skills: [
				"TypeScript",
				"NestJS",
				"GraphQL",
				"MongoDB",
				"BullMQ",
				"Redis",
				"React",
				"AWS",
				"ERP Integration",
				"Playwright",
				"Docker",
				"Sentry",
			],
			technologies: ["TypeScript", "NestJS", "GraphQL", "MongoDB", "BullMQ", "AWS"],
			icon: Code,
		},
		{
			title: "Full Stack Developer",
			company: "MIG Construction",
			period: "August 2024 – October 2025",
			location: "Remote, Poland",
			description: [
				"Delivered features end to end, from database design through API to frontend and deployment",
				"Built applications with React, Next.js and TypeScript on NestJS and PostgreSQL APIs",
				"Implemented database operations with TypeORM including filtering, sorting and custom queries",
				"Managed AWS infrastructure: Cognito, Lambda, App Runner, Amplify, S3, SES and CloudWatch monitoring",
				"Handled database management and optimisations for improved system efficiency",
				"Integrated third-party services and managed cloud infrastructure",
				"Integrated AI and LLM capabilities into production features",
				"Collaborated in a cross-functional team to deliver fullstack solutions, ensuring responsiveness, performance and a seamless user experience",
				"Wrote end-to-end tests and monitored production errors with Sentry",
			],
			skills: [
				"React",
				"TypeScript",
				"Next.js",
				"NestJS",
				"PostgreSQL",
				"TypeORM",
				"AWS",
				"Jest",
				"Sentry",
			],
			technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "AWS"],
			icon: Code,
		},
		{
			title: "E-commerce Specialist",
			company: "A&J Vacuum Services Inc.",
			period: "June 2019 – May 2024",
			location: "Clifton, NJ, United States",
			description: [
				"Optimized daily e-commerce operations, including content creation, SEO, and product listings",
				"Enhanced Google ranking and user engagement through best practices in content strategy and analytics",
				"Collaborated with teams to ensure updated content across the platform, monitoring product performance"
			],
			skills: ["SEO", "Content Creation", "E-commerce", "Analytics", "Product Management"],
			technologies: ["SEO", "Analytics", "Content Management", "E-commerce"],
			icon: Building2,
		},
		{
			title: "Machine Operator",
			company: "Precision Custom Coatings",
			period: "July 2015 - May 2019",
			location: "Totowa, NJ, United States",
			description: [
				"Operated and maintained custom coating machinery, ensuring quality control and customer satisfaction",
				"Adjusted process within specifications, maintaining work area in accordance with all applicable safety and environmental policies"
			],
			skills: ["Quality Control", "Machine Operation", "Safety Protocols", "Process Optimization"],
			technologies: ["Manufacturing", "Quality Control", "Process Management"],
			icon: Cog,
		},
		{
			title: "Call Center Operator",
			company: "Solid Security",
			period: "August 2012 - May 2015",
			location: "Katowice, Poland",
			description: [
				"Managed all outbound calls for customers to inform alarm activation instances as reported by Solid Security's managed services",
				"Handled customer inquiries, offering solutions and maintaining high service standards"
			],
			skills: ["Customer Service", "Technical Support", "Communication", "Problem Solving"],
			technologies: ["Customer Support", "Communication Systems", "Security Systems"],
			icon: Phone,
		},
	];

	const education = [
		{
			title: 'Web Development',
			institution: 'Self-directed learning',
			period: '2022 - Present',
			type: 'Education',
			description: [
				'Continually expanding technical knowledge across backend architecture, databases and cloud infrastructure',
			],
			skills: ['Backend', 'Frontend', 'Architecture', 'Cloud'],
			icon: <GraduationCap className='w-5 h-5' />,
		},
		{
			title: 'High School Diploma',
			institution: 'Katowice, Poland',
			period: 'May 2012',
			type: 'Education',
			description: [
				'Specialization: IT Technician, Designation, Specialization in Graphics'
			],
			skills: [
				'IT Technician',
				'Graphics Design',
				'Computer Science',
				'Programming',
			],
			icon: <GraduationCap className='w-5 h-5' />,
		},
	];

	return (
		<div className="bg-[#091219] text-white">
			{/* Experience Section */}
			<section id="experience" className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold font-sans mb-12 text-center">Experience</h2>

						<div className="space-y-6">
							{experiences.map((exp, index) => {
								const IconComponent = exp.icon
								return (
									<Card key={index} className="border-gray-700 bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
										<CardHeader>
											<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
												<div className="flex items-start gap-4 md:gap-6">
													<div className="p-3 bg-blue-500/10 rounded-lg mt-1">
														<IconComponent className="w-6 h-6 text-blue-400" />
													</div>
													<div className="text-left">
														<CardTitle className="font-sans text-xl text-white">{exp.title}</CardTitle>
														<CardDescription className="text-blue-400 font-mono font-medium">{exp.company}</CardDescription>
														{exp.location && (
															<p className="text-gray-400 text-sm font-mono">{exp.location}</p>
														)}
													</div>
												</div>
												<div className="flex items-center text-gray-400 font-mono text-sm md:mt-1">
													<Calendar size={16} className="mr-2" />
													{exp.period}
												</div>
											</div>
										</CardHeader>

										<CardContent>
											<div className="mb-4 text-left">
												<ul className="text-gray-400 font-mono text-sm leading-relaxed space-y-2 list-none">
													{exp.description.map((item, idx) => (
														<li key={idx} className="flex items-start text-left">
															<span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
															<span className="text-left">{item}</span>
														</li>
													))}
												</ul>
											</div>

											<div className="text-left">
												<h4 className="text-sm font-semibold text-white mb-3">Key Skills & Technologies:</h4>
												<div className="flex flex-wrap gap-2">
													{exp.skills.map((skill) => (
														<Badge key={skill} variant="secondary" className="bg-gray-700 text-xs">
															{skill}
														</Badge>
													))}
												</div>
											</div>
										</CardContent>
									</Card>
								)
							})}
						</div>
					</div>
				</div>
			</section>

			{/* Education Section */}
			<section id="education" className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold font-sans mb-12 text-center">
							Education & Certificates
						</h2>

						<div className="space-y-6">
							{education.map((edu, index) => (
								<Card
									key={index}
									className="border-gray-700 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
								>
									<CardHeader>
										<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
											<div className="flex items-start gap-4 md:gap-6">
												<div className="p-3 bg-blue-500/10 rounded-lg mt-1">
													<div className="text-blue-400">{edu.icon}</div>
												</div>
												<div className="text-left">
													<CardTitle className="font-sans text-xl text-white">
														{edu.title}
													</CardTitle>
													<CardDescription className="text-blue-400 font-mono font-medium">
														{edu.institution}
													</CardDescription>
												</div>
											</div>
											<div className="flex items-center text-gray-400 font-mono text-sm md:mt-1">
												<Calendar size={16} className="mr-2" />
												{edu.period}
											</div>
										</div>
									</CardHeader>

									<CardContent>
										<div className="mb-4 text-left">
											<ul className="text-gray-400 font-mono text-sm leading-relaxed space-y-2 list-none">
												{edu.description.map((item, idx) => (
													<li key={idx} className="flex items-start text-left">
														<span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
														<span className="text-left">{item}</span>
													</li>
												))}
											</ul>
										</div>

										<div className="text-left">
											<h4 className="text-sm font-semibold text-white mb-3">Skills:</h4>
											<div className="flex flex-wrap gap-2">
												{edu.skills.map((skill) => (
													<Badge
														key={skill}
														variant="secondary"
														className="bg-gray-700"
													>
														{skill}
													</Badge>
												))}
											</div>
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

export default Experience;
