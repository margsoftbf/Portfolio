import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiNestjs,
	SiPostgresql,
	SiMongodb,
	SiTailwindcss,
	SiSass,
	SiRedux,
	SiGit,
	SiDocker,
	SiFigma,
	SiJest,
	SiPostman,
	SiSupabase,
	SiAmazonaws,
	SiGithubactions,
} from 'react-icons/si';
import { FaKey, FaServer, FaVial, FaRobot } from 'react-icons/fa';
import { MdStorage, MdQueryStats } from 'react-icons/md';

const skills = [
	{
		name: 'JavaScript',
		icon: <SiJavascript className='w-8 h-8' />,
		color: 'text-yellow-400',
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript className='w-8 h-8' />,
		color: 'text-blue-400',
	},
	{
		name: 'React',
		icon: <SiReact className='w-8 h-8' />,
		color: 'text-cyan-400',
	},
	{
		name: 'Next.js',
		icon: <SiNextdotjs className='w-8 h-8' />,
		color: 'text-white',
	},
	{
		name: 'Sass',
		icon: <SiSass className='w-8 h-8' />,
		color: 'text-pink-400',
	},
	{
		name: 'Tailwind',
		icon: <SiTailwindcss className='w-8 h-8' />,
		color: 'text-cyan-300',
	},
	{
		name: 'Redux',
		icon: <SiRedux className='w-8 h-8' />,
		color: 'text-purple-400',
	},
	{
		name: 'Node.js',
		icon: <SiNodedotjs className='w-8 h-8' />,
		color: 'text-green-400',
	},
	{
		name: 'NestJS',
		icon: <SiNestjs className='w-8 h-8' />,
		color: 'text-red-500',
	},
	{
		name: 'PostgreSQL',
		icon: <SiPostgresql className='w-8 h-8' />,
		color: 'text-blue-300',
	},
	{
		name: 'MongoDB',
		icon: <SiMongodb className='w-8 h-8' />,
		color: 'text-green-400',
	},
	{
		name: 'TypeORM',
		icon: <MdStorage className='w-8 h-8' />,
		color: 'text-red-400',
	},
	{
		name: 'JWT',
		icon: <FaKey className='w-8 h-8' />,
		color: 'text-yellow-500',
	},
	{
		name: 'REST API',
		icon: <FaServer className='w-8 h-8' />,
		color: 'text-blue-500',
	},
	{
		name: 'Postman',
		icon: <SiPostman className='w-8 h-8' />,
		color: 'text-orange-400',
	},
	{
		name: 'AWS',
		icon: <SiAmazonaws className='w-8 h-8' />,
		color: 'text-orange-300',
	},
	{
		name: 'Supabase',
		icon: <SiSupabase className='w-8 h-8' />,
		color: 'text-green-400',
	},
	{
		name: 'Figma',
		icon: <SiFigma className='w-8 h-8' />,
		color: 'text-purple-400',
	},
	{
		name: 'Git',
		icon: <SiGit className='w-8 h-8' />,
		color: 'text-orange-400',
	},
	{
		name: 'Docker',
		icon: <SiDocker className='w-8 h-8' />,
		color: 'text-blue-400',
	},
	{
		name: 'Jest',
		icon: <SiJest className='w-8 h-8' />,
		color: 'text-red-400',
	},
	{
		name: 'E2E Test',
		icon: <FaVial className='w-8 h-8' />,
		color: 'text-green-500',
	},
	{
		name: 'Github Actions CI/CD',
		icon: <SiGithubactions className='w-8 h-8' />,
		color: 'text-gray-600',
	},
	{
		name: 'AI/LLM Integration',
		icon: <FaRobot className='w-8 h-8' />,
		color: 'text-purple-500',
	},
	{
		name: 'TanStack Query',
		icon: <MdQueryStats className='w-8 h-8' />,
		color: 'text-orange-500',
	},
];

const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<Element name='skills' className='py-20'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center flex flex-col items-center mb-16'>
							<h2 className='text-4xl md:text-5xl font-bold font-sans mb-4 text-white'>
								My Skills
							</h2>
							<p className='text-center text-white'>Technologies I work with</p>
						</div>

						<div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6'>
							{skills.map((skill) => (
								<div
									key={skill.name}
									className='flex flex-col items-center group cursor-pointer'
								>
									<div className='p-4 rounded-xl bg-black-color-2 border border-gray-800 hover:border-primary-color/50 transition-all duration-300 group-hover:scale-110 mb-3 hover:bg-primary-color/5'>
										<div
											className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}
										>
											{skill.icon}
										</div>
									</div>
									<span className='text-sm font-mono text-gray-400 group-hover:text-white transition-colors text-center'>
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Element>
		</motion.div>
	);
};

export default Skills;
