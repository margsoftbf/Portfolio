import HeroBgAnimation from './HeroBgAnimation';
import heroAvatar from '../../assets/img/my-photo-small-size.png';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
	return (
		<motion.div
			className='min-h-screen flex items-center justify-center relative overflow-hidden pt-12'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='absolute inset-0 bg-gradient-to-br from-primary-color/10 via-black-color to-black-color' />

			<div className='absolute top-20 left-10 w-20 h-20 bg-primary-color/20 rounded-full blur-xl' />
			<div className='absolute bottom-20 right-10 w-32 h-32 bg-seondary-color/20 rounded-full blur-xl' />
			<div className='absolute top-1/3 right-1/4 w-16 h-16 bg-primary-color/15 rounded-full blur-lg' />
			<div className='absolute bottom-1/3 left-1/4 w-24 h-24 bg-primary-color/25 rounded-full blur-xl' />
			<div className='absolute top-1/2 left-1/6 w-12 h-12 bg-primary-color/20 rounded-full blur-md' />
			<div className='absolute bottom-1/4 right-1/3 w-18 h-18 bg-primary-color/30 rounded-full blur-lg' />
			<div className='absolute bottom-20 right-10 w-20 h-20 bg-primary-color/20 rounded-full blur-xl' />
			<div className='absolute top-20 right-10 w-32 h-32 bg-seondary-color/20 rounded-full blur-xl' />
			<div className='absolute bottom-1/3 left-1/4 w-16 h-16 bg-primary-color/15 rounded-full blur-lg' />
			<div className='absolute top-1/3 right-1/4 w-24 h-24 bg-primary-color/25 rounded-full blur-xl' />
			<div className='absolute bottom-1/2 right-1/6 w-12 h-12 bg-primary-color/20 rounded-full blur-md' />
			<div className='absolute top-1/4 left-1/3 w-18 h-18 bg-primary-color/30 rounded-full blur-lg' />

			<div className='container mx-auto px-4 py-8 text-center relative z-10'>
				<div className='max-w-4xl mx-auto'>
					<div className='mb-12 lg:mb-20 flex justify-center'>
						<div className='relative'>
							<div className='absolute inset-0 flex justify-center items-center w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 lg:top-1/3 -z-10 lg:w-[600px] lg:h-[600px]'>
								<HeroBgAnimation />
							</div>

							<img
								src={heroAvatar}
								alt='Marcin Garski'
								className='rounded-full border-4 border-primary-color/30 shadow-2xl w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[240px] lg:h-[240px] object-cover object-top relative z-10'
								style={{ objectPosition: 'center top' }}
							/>
						</div>
					</div>

					<h1 className='text-5xl md:text-6xl font-bold mb-6 md:mb-10 text-white font-poppins'>
						I am{' '}
						<span
							className='text-primary-color bg-black px-4 py-1 rounded shadow-2xl shadow-blue-500/30'
							style={{
								boxShadow:
									'0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
							}}
						>
							Marcin.
						</span>
					</h1>
					<div className='my-4 md:my-6'>
						<h2 className='text-2xl md:text-3xl font-bold font-poppins text-white'>
							Fullstack Developer.
						</h2>
					</div>
					<p className='text-base  leading-6 text-gray-400  max-w-lg mx-auto text-center lg:my-2 px-4 md:px-2 xl:px-0 mb-6 md:mb-10 lg:mb-8'>
						I transform complex challenges into clean, efficient solutions.
						Focused on creating responsive, user-friendly applications with
						attention to detail and performance. Always eager to learn and
						implement emerging technologies.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
						<a
							href='/assets/Resume/Marcin-Garski-CV.pdf'
							target='_blank'
							download='Marcin-Garski-CV.pdf'
							className='border border-primary-color/50 hover:border-primary-color hover:bg-primary-color/10 transition-all duration-300 bg-transparent text-white text-sm px-6 py-3 rounded-lg font-semibold flex items-center gap-2'
						>
							Download CV
						</a>
					</div>

					<div className='flex flex-col items-center gap-4'>
						<div className='animate-bounce'>
							<ArrowDown className='text-gray-400' size={24} />
						</div>
						<div className='flex justify-center space-x-6'>
							<a
								href='https://github.com/margsoftbf'
								className='text-gray-400 hover:text-primary-color transition-colors duration-300'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Github size={24} />
							</a>
							<a
								href='https://www.linkedin.com/in/marcin-garski/'
								className='text-gray-400 hover:text-primary-color transition-colors duration-300'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Linkedin size={24} />
							</a>
							<a
								href='mailto:marcin.garski@gmail.com'
								className='text-gray-400 hover:text-primary-color transition-colors duration-300'
							>
								<Mail size={24} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
