import { Element } from 'react-scroll';
import PortfolioCard from './PortfolioCard';
import elementImg from '../../assets/img/hero/hero-element-1.png';
import elementImg2 from '../../assets/img/hero/hero-element-2.png';
import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		title: 'Real Estate Platform (Fullstack App)',
		description:
			'Advanced Real Estate Platform featuring comprehensive property management, AI-powered property descriptions, and modern user experience. Built with cutting-edge technologies including Next.js 15, TypeScript, and PostgreSQL database. Features include user authentication, property listings, advanced filtering, AI integration for property descriptions, comprehensive testing suite, and modern responsive design.',
		image: './assets/RealEstate.png',
		imageAlt: 'Real Estate Platform Screenshot',
		tags: [
			'Next.js 15',
			'TypeScript',
			'Tailwind CSS v4',
			'TanStack Query',
			'Framer Motion',
			'React Hook Form',
			'NestJS',
			'PostgreSQL',
			'TypeORM',
			'JWT',
			'Google Gemini API',
			'Zod',
			'Jest',
			'React Testing Library',
			'Docker',
			'GitHub Actions',
			'Vercel',
			'Supabase',
		],
		category: 'web app',
		finished: true,
		github: 'https://github.com/margsoftbf/real-estate',
		webapp: 'https://real-estate.marcingarski.com/',
	},
	{
		id: 2,
		title: 'Admin Dashboard',
		description:
			'Welcome to Admin Dashboard, your comprehensive administration tool designed to streamline the management of your businesss essential operations. Admin Dashboard is an advanced Admin Dashboard application tailored for E-commerce, Finance, Job Management, Analytics, Project Management, and various other sectors. It integrates seamlessly into your business ecosystem, offering a wide array of functionalities to enhance productivity, oversight, and the overall management experience.',
		image: './assets/AdminDashboard.webp',
		imageAlt: 'Admin dashboard Screenshot',
		tags: [
			'React',
			'Typescript',
			'Tailwind CSS',
			'Axios',
			'Next js',
			'Chart.js',
			'React Context',
			'Framer motion',
			'Datepicker',
		],
		category: 'web app',
		finished: true,
		github: 'https://github.com/margsoftbf/Admin-Dashboard-App',
		webapp: 'https://admin.marcingarski.com/',
	},
	{
		id: 3,
		title: 'Travelo - Travel & Trip',
		description:
			'Welcome to Travelo, a state-of-the-art travel platform that operates similarly to TripAdvisor. Our application is designed to revolutionize the way you search for vacations, adventures, restaurants, and hotels in the worlds 50 most popular cities. With Travelo, you can effortlessly book your dream vacation or explore exciting new activities.',
		image: './assets/Travelo.webp',
		imageAlt: 'Travelo Website Screenshot',
		tags: [
			'React',
			'Typescript',
			'Tailwind CSS',
			'Next.js',
			'Redux',
			'DatePicker',
			'Material UI',
			'Swiper',
			'UUID',
			'Swiper',
		],
		category: 'web app',
		finished: true,
		github: 'https://github.com/margsoftbf/Travelo',
		webapp: 'https://travelo.marcingarski.com/',
	},
	{
		id: 4,
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
		finished: true,
		github: 'https://github.com/margsoftbf/Fusion-Feast-Restaurant',
		webapp: 'https://restaurant.marcingarski.com/',
	},
];

const Portfolio = ({ openModal, setOpenModal }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
			className='bg-primary-color-light py-4'
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
				<h2
					className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-poppins'
					style={{
						background: 'linear-gradient(to right, #8750f7 0%, #fff 100%)',
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						color: 'transparent',
					}}
				>
					Portfolio
				</h2>
				<div className='wrapper relative flex justify-between items-center flex-col w-full pt-3 pb-12 gap-3'>
					<div className='cardContainer grid grid-cols-1 lg:grid-cols-2 gap-7 justify-items-center'>
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
