import React from 'react';
import { Element } from 'react-scroll';
import PortfolioCard from './PortfolioCard';
import elementImg from '../../assets/img/hero/hero-element-1.png';
import elementImg2 from '../../assets/img/hero/hero-element-2.png';
import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Fusion Feast Restaurant',
		description:
			'Welcome to Fusion Feast, a contemporary dining experience that combines traditional flavors with a modern twist. Our restaurant offers a unique menu that lets you customize your favorite dishes like pizzas, burgers, and more. Enjoy a seamless ordering and dining experience with our state-of-the-art digital platform.',
		image: './assets/FusionFeast.webp',
		imageAlt: 'Fusion Feast Screenshot',
		tags: [
			'React',
			'Typescript',
			'Tailwind CSS',
			'React Router',
			'Next js',
			'Redux',
			'React Context',
			'Framer motion',
			'Swiper',
		],
		category: 'web app',
		finished: false,
		github: 'https://github.com/margsoftbf/Fusion-Feast-Restaurant',
		webapp: 'https://fusion-feast-restaurant.vercel.app/',
	},
	{
		id: 2,
		title: 'Ecommerce PC Part Shop',
		description:
			'Welcome to Terabit Supply, an advanced e-commerce platform specializing in computer hardware. Our store offers a wide array of computer components, accessories, and peripherals, catering to both gaming enthusiasts and IT professionals.',
		image: './assets/TerabitSupply.webp',
		imageAlt: 'Ecommerce Computer Store Screenshot',
		tags: [
			'React',
			'Typescript',
			'Tailwind CSS',
			'Next.js',
			'Redux',
			'Javascript',
			'React icons',
			'Tailwind Forms',
			'Swiper',
		],
		category: 'web app',
		finished: true,
		github: 'https://github.com/margsoftbf/Terabit-Supply',
		webapp: 'https://terabit-supply.vercel.app/',
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
		webapp: 'https://admin-dashboard-gary.vercel.app/',
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
