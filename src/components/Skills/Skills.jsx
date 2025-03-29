import { Element } from 'react-scroll';
import reactIcon from '../../assets/img/skills/react.png';
import javascriptIcon from '../../assets/img/skills/javascript.png';
import typescriptIcon from '../../assets/img/skills/typescript.png';
import nextjsIcon from '../../assets/img/skills/nextjs.png';
import sassIcon from '../../assets/img/skills/sass.png';
import tailwindIcon from '../../assets/img/skills/tailwind.png';
import figmaIcon from '../../assets/img/skills/figma.png';
import gitIcon from '../../assets/img/skills/git.png';
import nodejsIcon from '../../assets/img/skills/nodejs.png';
import postmanIcon from '../../assets/img/skills/postman.png';
import nestjsIcon from '../../assets/img/skills/nestjs.png';
import postgresIcon from '../../assets/img/skills/postgres.png';
import otherIcon from '../../assets/img/skills/other.png';
import typeormIcon from '../../assets/img/skills/typeorm.png';
import dockerIcon from '../../assets/img/skills/docker.png';

import { motion } from 'framer-motion';

const skills = [
	{
		id: 1,
		name: 'Javascript',
		src: javascriptIcon,
		alt: 'javascript icon',
	},
	{
		id: 2,
		name: 'Typescript',
		src: typescriptIcon,
		alt: 'typescript icon',
	},
	{
		id: 3,
		name: 'React',
		src: reactIcon,
		alt: 'react icon',
	},
	{
		id: 4,
		name: 'Next.js',
		src: nextjsIcon,
		alt: 'nextjs icon',
	},
	{
		id: 5,
		name: 'SASS',
		src: sassIcon,
		alt: 'sass icon',
	},
	{
		id: 6,
		name: 'Tailwind',
		src: tailwindIcon,
		alt: 'tailwind icon',
	},
	{
		id: 10,
		name: 'Nodejs',
		src: nodejsIcon,
		alt: 'node js icon',
	},
	{
		id: 11,
		name: 'Nest.js',
		src: nestjsIcon,
		alt: 'nestjs icon',
	},
	{
		id: 12,
		name: 'Postgres',
		src: postgresIcon,
		alt: 'postgres icon',
	},
	{
		id: 13,
		name: 'TypeORM',
		src: typeormIcon,
		alt: 'type orm icon',
	},
	{
		id: 14,
		name: 'REST Api',
		src: otherIcon,
		alt: 'rest api icon',
	},
	{
		id: 15,
		name: 'JWT/OAuth',
		src: otherIcon,
		alt: 'JWT/OAuth icon',
	},
	{
		id: 16,
		name: 'E2E Test',
		src: otherIcon,
		alt: 'e2e test icon',
	},
	{
		id: 17,
		name: 'Postman',
		src: postmanIcon,
		alt: 'postman icon',
	},
	{
		id: 20,
		name: 'Docker',
		src: dockerIcon,
		alt: 'docker icon',
	},
	{
		id: 21,
		name: 'Figma',
		src: figmaIcon,
		alt: 'figma icon',
	},
	{
		id: 22,
		name: 'Git',
		src: gitIcon,
		alt: 'git icon',
	},
];

const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<Element name='skills' className='max-w-[1280px] m-auto relative py-6'>
				<div className='text-center flex flex-col items-center mb-10'>
					<h2
						className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-poppins'
						style={{
							background: 'linear-gradient(to right, #8750f7 0%, #fff 100%)',
							WebkitBackgroundClip: 'text',
							backgroundClip: 'text',
							color: 'transparent',
						}}
					>
						My Skills
					</h2>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-8 px-4 mb-6'>
					{skills.map((skill) => (
						<div key={skill.id} className='w-full max-w-[140px] group fadeInUp'>
							<div className='flex flex-col items-center p-6 rounded-2xl bg-[#140c1c] group-hover:bg-gradient-to-br group-hover:from-[#2a1454] group-hover:to-[#140c1c] border border-transparent group-hover:border-[#8750f7] transition-all duration-500 mb-3'>
								<div className='w-16 flex flex-col justify-center items-center'>
									<img
										className='grayscale-[90%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-100 w-16'
										src={skill.src}
										alt={skill.alt}
									/>
								</div>
								<div className='text-xl text-gray-400 group-hover:text-[#8750f7] transition-all duration-300 font-extrabold'>
									{skill.proficiency}
								</div>
							</div>
							<p className='text-center text-[#8750f7]'>{skill.name}</p>
						</div>
					))}
				</div>
			</Element>
		</motion.div>
	);
};

export default Skills;
