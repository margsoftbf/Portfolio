import React from 'react';
import { Element } from 'react-scroll';
import PortfolioCard from './PortfolioCard';
import elementImg from '../../assets/img/hero/hero-element-1.png';
import elementImg2 from '../../assets/img/hero/hero-element-2.png';
import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Admin Dashboard',
		description:
			'Welcome to my dashboard application, a comprehensive solution designed to streamline your day-to-day activities and provide valuable insights across various domains. This versatile application offers a rich set of features to enhance your productivity and decision-making processes.',
		image: './assets/AdminDashboard.webp',
		imageAlt: 'Admin Dashboard Screenshot',
		tags: [
			'React',
			'Typescript',
			'Tailwind CSS',
			'React Router',
			'MUI Data Grid',
			'Nivo Charts',
			'Date fns',
			'Framer motion',
			'Swiper',
		],
		category: 'web app',
		finished: false,
		github: 'https://github.com/margsoftbf/AdminDashboard',
		webapp: 'https://admin-garski-dashboard.netlify.app/',
	},
	{
		id: 2,
		title: 'PC Parts Computer Shop',
		description:
			'Welcome to Terabit Supply, an advanced e-commerce platform specializing in computer hardware. Our store offers a wide array of computer components, accessories, and peripherals, catering to both gaming enthusiasts and IT professionals.',
		image: './assets/TerabitSupply.webp',
		imageAlt: 'Ecommerce Computer Store Screenshot',
		tags: ['React', 'Typescript', 'Tailwind CSS', 'Next.js', 'Swiper'],
		category: 'web app',
		finished: true,
		github: 'https://github.com/margsoftbf/Terabit-Supply',
		webapp: 'https://terabit-supply.netlify.app/',
	},
	{
		id: 3,
		title: 'Admin Dashboard',
		description:
			'Welcome to my dashboard application, a comprehensive solution designed to streamline your day-to-day activities and provide valuable insights across various domains. This versatile application offers a rich set of features to enhance your productivity and decision-making processes.',
		image: './assets/AdminDashboard.webp',
		imageAlt: 'Admin Dashboard Screenshot',
		tags: [
			'React',
			'Typescript',
			'Tailwind CSS',
			'React Router',
			'Material UI',
			'Nivo Charts',
			'Date fns',
			'Framer motion',
			'Swiper',
		],
		category: 'web app',
		finished: true,
		github: 'https://github.com/margsoftbf/AdminDashboard',
		webapp: 'https://admin-garski-dashboard.netlify.app/',
	},
];

const Portfolio = ({ openModal, setOpenModal }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<Element
				name='portfolio'
				className='max-w-[1280px] m-auto relative mt-8 flex flex-col items-center overflow-hidden'
			>
				<img src={elementImg} alt='' className='absolute top-2 left-0' />
				<img
					src={elementImg2}
					alt=''
					className='absolute bottom-0 right-0 md:bottom-1/2'
				/>
				<h2 className='text-3xl font-semibold lg:text-4xl text-white mb-8'>
					Portfolio
				</h2>
				<div className='wrapper relative flex justify-between items-center flex-col w-full pt-3 pb-12 gap-3'>
					<div className='cardContainer flex justify-center items-center flex-wrap gap-7'>
						{projects.map((project) => (
							<PortfolioCard
								key={project.id}
								project={project}
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						))}
					</div>
				</div>
			</Element>
		</motion.div>
	);
};

export default Portfolio;
