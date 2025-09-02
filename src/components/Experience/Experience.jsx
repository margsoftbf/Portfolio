import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { GraduationCap, BriefcaseBusiness } from 'lucide-react';

const experienceData = [
	{
		id: 1,
		dateRange: 'Aug 2024  - Present',
		workTitle: 'Junior Fullstack Developer',
		where: 'Remote, Poland',
		description: `Junior Fullstack Developer with experience in React, Next.js, Tailwind CSS, and E2E testing on frontend. Backend skills include Nest.js with PostgreSQL and AWS. Focused on building efficient, scalable web applications.`,
	},
	{
		id: 2,
		dateRange: 'Jun. 2019 - May 2024',
		workTitle: 'E-commerce Specialist',
		where: 'A&J Vacuum Services, Clifton, NJ',
		description: `Manages and actively optimizes eCommerce operations to promote offerings for this vacuum service provider. Utilizes industry-best optimization techniques to bolster the website’s Google ranking.`,
	},
	{
		id: 3,
		dateRange: 'July 2015 - May 2019',
		workTitle: 'Machine Operator',
		where: 'Precision Custom Coatings, Totowa, NJ',
		description:
			'Operated advanced machinery for custom coating applications. Responsible for system configuration, quality control and routine maintenance. Followed precise technical specifications while ensuring safe operation procedures.',
	},
	{
		id: 4,
		dateRange: 'Aug. 2012 - May 2015',
		workTitle: 'Call Center Operator',
		where: 'Solid Security, Katowice, Poland',
		description:
			'Managed outbound client communications for alarm system activations. Provided first-level technical support and troubleshooting over the phone. Coordinated with field service teams to resolve complex security system issues.',
	},
];
const schoolData = [
	{
		id: 1,
		dateRange: '2022 - present',
		title: 'Web Development Studies',
		where: 'Online programs',
		description:
			'Continually expands technical knowledge in Web Development through online programs.',
	},
	{
		id: 2,
		dateRange: '2008 - 2012',
		title: 'High School Diploma',
		where: 'Katowice, Poland',
		description:
			'IT Technician Designation, Programming, Specialization in Graphics',
	},
];
const Experience = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			className='bg-[#091219]'
		>
			<Element
				name='experience'
				className='mt-6 flex flex-col w-full max-w-[1280px] py-6 m-auto z-20'
			>
				<h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 font-poppins'>
					My Resume
				</h2>
				<div className='flex flex-col gap-4 md:flex-row z-20'>
					<div className='timeline-box w-full relative pb-4 md:w-1/2'>
						{experienceData.map((item) => (
							<div key={item.id} className='relative text-left flex gap-3 mb-4'>
								<div className="before:content-[''] before:w-[2px] before:absolute before:h-64 sm:before:h-48 md:before:h-[118px] before:top-12 md:before:top-[70px] before:left-8 md:before:left-11 before:bg-primary-color-2 mb-4"></div>
								<div className='w-1/8'>
									<div className='flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-seondary-color rounded-full z-30'>
										<BriefcaseBusiness
											className='text-white-color md:w-8 md:h-8'
											size={24}
											strokeWidth={1.5}
										/>
									</div>
								</div>
								<div className='bg-seondary-color transition-all duration-300- p-4 rounded-xl w-full'>
									<h3 className='text-sm font-medium text-slate-400'>
										{item.dateRange}
									</h3>
									<h3 className='mt-2 font-semibold text-white'>
										{item.workTitle}
									</h3>
									<p className='my-3 text-sm sm:text-base text-slate-400'>
										{item.where}
									</p>
									<p className='text-sm w-full text-slate-300'>
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className='timeline-box w-full relative pb-4 md:w-1/2 md:ml-4'>
						{schoolData.map((item) => (
							<div key={item.id} className='relative text-left flex gap-3 mb-4'>
								<div className="before:content-[''] before:w-[2px] before:absolute before:h-32 sm:before:h-32 md:before:h-20 before:top-12 md:before:top-[70px] before:left-8 md:before:left-11 before:bg-primary-color-2 mb-4"></div>
								<div className='w-1/8'>
									<div className='flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-seondary-color rounded-full z-30'>
										<GraduationCap
											className='text-white-color md:w-8 md:h-8'
											size={24}
											strokeWidth={1.5}
										/>
									</div>
								</div>
								<div className='bg-seondary-color transition-all duration-300- p-4 rounded-xl w-full'>
									<h3 className='text-sm font-medium text-slate-400'>
										{item.dateRange}
									</h3>
									<h3 className='mt-2 font-semibold text-white'>
										{item.title}
									</h3>
									<p className='my-3 text-sm sm:text-base text-slate-400'>
										{item.where}
									</p>
									<p className='text-sm w-full text-slate-300'>
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Element>
		</motion.div>
	);
};

export default Experience;
