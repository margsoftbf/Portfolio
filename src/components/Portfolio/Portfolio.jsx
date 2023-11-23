import React from 'react';
import { Element } from 'react-scroll';
import PortfolioCard from './PortfolioCard';
import elementImg from '../../assets/img/hero/hero-element-1.png';
import elementImg2 from '../../assets/img/hero/hero-element-2.png';
import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Trackify',
		date: 'Jun 2023 - Jul 2023',
		description:
			"Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
		image:
			'https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png',
		tags: [
			'Docker',
			'AWS',
			'DuckDNS',
			'Eslint',
			'Husky',
			'CI/CD',
			'React Js',
			'MongoDb',
			'Node Js',
			'Express Js',
			'Redux',
		],
		category: 'web app',
		github: 'https://github.com/rishavchanda/Trackify',
		webapp: 'https://trackify.duckdns.org',
	},
	{
		id: 2,
		title: 'Trackify',
		date: 'Jun 2023 - Jul 2023',
		description:
			"Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
		image:
			'https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png',
		tags: [
			'Docker',
			'AWS',
			'DuckDNS',
			'Eslint',
			'Husky',
			'CI/CD',
			'React Js',
			'MongoDb',
			'Node Js',
			'Express Js',
			'Redux',
		],
		category: 'web app',
		github: 'https://github.com/rishavchanda/Trackify',
		webapp: 'https://trackify.duckdns.org',
	},
	{
		id: 3,
		title: 'Trackify',
		date: 'Jun 2023 - Jul 2023',
		description:
			"Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
		image:
			'https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png',
		tags: [
			'Docker',
			'AWS',
			'DuckDNS',
			'Eslint',
			'Husky',
			'CI/CD',
			'React Js',
			'MongoDb',
			'Node Js',
			'Express Js',
			'Redux',
		],
		category: 'web app',
		github: 'https://github.com/rishavchanda/Trackify',
		webapp: 'https://trackify.duckdns.org',
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
