import HeroBgAnimation from './HeroBgAnimation';
import heroAvatar from '../../assets/img/avatar.webp';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
const Hero = () => {
	return (
		<motion.div
			className='flex justify-center relative pt-12 pb-2 text-white lg:pb-20 max-w-[1280px] m-auto'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='absolute flex justify-center -top-12 right-0 bottom-0 left-0 w-full h-full lg:justify-end opacity-75'>
				<HeroBgAnimation />
			</div>
			<div className='relative flex justify-between flex-col items-center w-full lg:flex-row'>
				<div className='w-full order-2 mb-7 flex flex-col items-center lg:order-1 lg:items-start'>
					<h2 className='text-2xl text-gray-200 leading-1 mb-2 font-semibold sm:mt-4 md:text-3xl lg:text-left font-poppins'>
						I am Marcin
					</h2>
					<div className='my-4'>
						<h1
							className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-left font-poppins '
							style={{
								background: 'linear-gradient(to right, #8750f7 0%, #fff 100%)',
								WebkitBackgroundClip: 'text',
								backgroundClip: 'text',
								color: 'transparent',
							}}
						>
							Fullstack Developer.
						</h1>
					</div>
					<p className='text-base leading-6 text-gray-400 max-w-lg lg:text-left lg:my-2 px-6 md:px-2 xl:px-0'>
						I transform complex challenges into clean, efficient solutions.
						Focused on creating responsive, user-friendly applications with
						attention to detail and performance. Always eager to learn and
						implement emerging technologies.
					</p>
					<a
						href='./assets/Resume/Marcin-Garski-CV.pdf'
						target='_blank'
						className='mt-4 text-base flex items-center justify-center font-medium text-primary-color capitalize py-4 px-8 bg-transparent rounded-full leading-none border border-primary-color hover:text-white hover:bg-primary-color tracking-wider transition-all duration-300 ease-in-out'
					>
						Download CV
						<Download className='inline-block ml-2 w-4 h-4' />
					</a>
				</div>
				<div className='w-full flex justify-center gap-3 order-1 mb-7 lg:order-2'>
					<img
						src={heroAvatar}
						alt=''
						className='relative w-full h-full max-w-[220px] rounded-2xl border-2  border-seondary-color hover:border-primary-color rotate-3 hover:rotate-0 transition-all duration-300 sm:max-w-[360px] md:mr-6 lg:ml-16 lg:mr-0'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
