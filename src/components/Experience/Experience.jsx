import { motion } from 'framer-motion';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoBriefcase } from 'react-icons/io5';
import { Element } from 'react-scroll';

const experienceData = [
	{
		id: 1,
		dateRange: 'Jun. 2019 - May 2024',
		workTitle: 'E-commerce Specialist',
		where: 'A&J Vacuum Services, Clifton, NJ',
		description:
			`Manages and actively optimizes eCommerce operations to promote offerings for this vacuum service provider. Utilizes industry-best optimization techniques to bolster the website’s Google ranking.`,
	},
	{
		id: 2,
		dateRange: 'July 2015 - May 2019',
		workTitle: 'Machine Operator',
		where: 'Precision Custom Coatings, Totowa, NJ',
		description:
			'Performed duties involving operation, maintenance, and configuration of machines utilized for accomplishing custom coating orders.',
	},
	{
		id: 3,
		dateRange: 'Aug. 2012 - May 2015',
		workTitle: 'Call Center Operator',
		where: 'Solid Security, Katowice, Poland',
		description:
			'Handled outbound calls for customers to inform alarm activation instances as reported by Solid Security’s managed services.',
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
		>
			<Element
				name='experience'
				className='mt-8 flex flex-col w-full max-w-[1280px] m-auto z-20'
			>
				<h2 className='mb-12 text-3xl font-semibold lg:text-4xl'>Experience</h2>
				<div className='flex flex-col gap-4 md:flex-row'>
					<div className='timeline-box w-full relative pb-4 md:w-1/2'>
						{experienceData.map((item) => (
							<div
								key={item.id}
								className="relative text-left pl-10 before:content-[''] before:w-[2px] before:absolute before:h-full before:left-2 before:bg-lightOrange mb-4 "
							>
								<IoBriefcase className='absolute text-3xl -left-[7px] z-30 bg-darkNavy' />
								<div className='bg-[#313552] p-4 rounded-xl w-full'>
									<h3 className='text-sm font-medium text-slate-400'>
										{item.dateRange}
									</h3>
									<h3 className='mt-2 font-semibold text-lightOrange'>
										{item.workTitle}
									</h3>
									<p className='my-3 text-sm sm:text-base text-slate-400'>
										{item.where}
									</p>
									<p className='text-sm w-full'>{item.description}</p>
								</div>
							</div>
						))}
					</div>
					<div className='timeline-box w-full relative pb-4 md:w-1/2 md:ml-4'>
						{schoolData.map((item) => (
							<div
								key={item.id}
								className="relative text-left pl-10 before:content-[''] before:w-[2px] before:absolute before:h-full before:left-2 before:bg-lightOrange mb-4 "
							>
								<FaGraduationCap className='absolute text-3xl -left-[7px] z-30 bg-darkNavy' />
								<div className='bg-[#313552] p-4 rounded-xl w-full'>
									<h3 className='text-sm font-medium text-slate-400'>
										{item.dateRange}
									</h3>
									<h3 className='mt-2 font-semibold text-lightOrange'>
										{item.title}
									</h3>
									<p className='my-3 text-sm sm:text-base text-slate-400'>
										{item.where}
									</p>
									<p className='text-sm w-full'>{item.description}</p>
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
