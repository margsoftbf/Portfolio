import React from 'react';
import { Element } from 'react-scroll';
import htmlIcon from '../../assets/img/skills/html.png';
import cssIcon from '../../assets/img/skills/css.png';
import reactIcon from '../../assets/img/skills/react.png';
import javascriptIcon from '../../assets/img/skills/javascript.png';
import typescriptIcon from '../../assets/img/skills/typescript.png';
import nextjsIcon from '../../assets/img/skills/nextjs.png';
import sassIcon from '../../assets/img/skills/sass.png';
import tailwindIcon from '../../assets/img/skills/tailwind.png';
import materialIcon from '../../assets/img/skills/material-ui.png';
import webpackIcon from '../../assets/img/skills/webpack.png';
import viteIcon from '../../assets/img/skills/vite.png';
import affinityIcon from '../../assets/img/skills/affinity.png';
import figmaIcon from '../../assets/img/skills/figma.png';
import { motion } from 'framer-motion';

const skills = [
	{
		id: 1,
		name: 'HTML',
		src: htmlIcon,
		alt: 'html icon',
	},
	{
		id: 2,
		name: 'CSS',
		src: cssIcon,
		alt: 'css icon',
	},
	{
		id: 3,
		name: 'React',
		src: reactIcon,
		alt: 'react icon',
	},
	{
		id: 4,
		name: 'Javascript',
		src: javascriptIcon,
		alt: 'javascript icon',
	},
	{
		id: 5,
		name: 'Typescript',
		src: typescriptIcon,
		alt: 'typescript icon',
	},
	{
		id: 6,
		name: 'Next.js',
		src: nextjsIcon,
		alt: 'nextjs icon',
	},
	{
		id: 7,
		name: 'SASS',
		src: sassIcon,
		alt: 'sass icon',
	},
	{
		id: 8,
		name: 'Tailwind',
		src: tailwindIcon,
		alt: 'tailwind icon',
	},
	{
		id: 9,
		name: 'Material UI',
		src: materialIcon,
		alt: 'material ui icon',
	},
	{
		id: 10,
		name: 'Webpack',
		src: webpackIcon,
		alt: 'webpack icon',
	},
	{
		id: 11,
		name: 'Vite',
		src: viteIcon,
		alt: 'vite icon',
	},
	{
		id: 12,
		name: 'Affinity Photo',
		src: affinityIcon,
		alt: 'affinity photo icon',
	},
	{
		id: 13,
		name: 'Figma',
		src: figmaIcon,
		alt: 'figma icon',
	},
];

const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<Element name='skills' className='max-w-[1280px] m-auto relative'>
				<h2 className='text-3xl font-semibold lg:text-4xl'>Skills</h2>
				<div className='flex justify-center flex-wrap mx-4 z-20 mt-4 p-8'>
					{skills.map((skill) => (
						<div
							key={skill.id}
							className="relative flex flex-row items-center top-0 w-44 h-10 m-2 rounded-md bg-[#313552] cursor-pointer before:content-[''] before:absolute before:left-9 before:w-[2px] before:h-[50%] before:bg-lightOrange/10 before:bg-opacity-50 transition-all duration-300 ease-in-out hover:-top-1 hover:shadow-myShadow hover:duration-300  "
						>
							<img src={skill.src} alt={skill.alt} className='mx-2 w-6 h-6' />
							<p className='ml-1'>{skill.name}</p>
						</div>
					))}
				</div>
			</Element>
		</motion.div>
	);
};

export default Skills;
