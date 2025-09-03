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
			title: "Fullstack Developer",
			company: "MIG Construction & ConstrAction App",
			period: "August 2024 – Present",
			location: "Remote, Poland",
			description: [
				"Developing and maintaining web applications using React, Typescript, Next.js and Tailwind on the frontend",
				"Building scalable and secure APIs with Nest.js and Postgres for backend services, implementing database operations with TypeORM including filtering, sorting and custom queries",
				"Managing AWS cloud infrastructure including Cognito authentication, Lambda functions, App runner deployment, Amplify hosting, S3 storage, and SES email services",
				"Collaborating in a cross-functional team to implement fullstack solutions, ensuring responsiveness, performance, and a seamless user experience",
				"Handling database management and optimizations for improved system efficiency",
				"Integrating third-party services and managing cloud infrastructure",
				"Integrating AI/LLM solutions for enhanced application functionality and user experience",
				"Writing comprehensive End-to-End tests for backend services and monitoring application errors through Sentry.io",
				"Leading full-cycle feature development from database design through API creation to frontend implementation and user deploy"
			],
			skills: [
				"React",
				"TypeScript",
				"Next.js",
				"Nest.js",
				"PostgreSQL",
				"TypeORM",
				"AWS",
				"Cognito",
				"Lambda",
				"S3",
				"AI/LLM",
				"Jest",
				"Sentry.io",
			],
			technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
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
			title: 'Web Development Studies',
			institution: 'Online Education',
			period: '2022 - Present',
			type: 'Education',
			description: [
				'Completed comprehensive React and Next.js courses by Maximilian Schwarzmuller',
				'Node.js and backend development training by Maximilian Schwarzmuller',
				'Frontend development training through MMC School',
				'Continually expands technical knowledge in Web Development through online programs'
			],
			skills: ['Web Development', 'Frontend', 'Backend', 'Full Stack'],
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
