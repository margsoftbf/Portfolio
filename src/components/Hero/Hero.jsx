import React from 'react';
import HeroBgAnimation from './HeroBgAnimation';
import Typewriter from 'typewriter-effect';
import heroAvatar from '../../assets/img/avatar.webp';
import { motion } from 'framer-motion';

const fadeInUp = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 2.5,
			duration: 0.3,
		},
	},
};

const Hero = () => {
	return (
		<motion.div
			className='flex justify-center relative pt-20 pb-2 px-7 text-white lg:pb-20 max-w-[1280px] m-auto'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='absolute flex justify-center top-0 right-0 bottom-0 left-0 w-full h-full lg:justify-end lg:mt-8'>
				<HeroBgAnimation />
			</div>
			<div className='relative flex justify-between flex-col items-center w-full lg:flex-row'>
				<div className='w-full order-2 mb-7 flex flex-col items-center lg:order-1 lg:items-start'>
					<h2 className='text-4xl text-white leading-10 mb-2 font-bold sm:mt-4 md:text-5xl lg:text-left'>
						Hi, I am <br />
						Marcin Garski
					</h2>
					<div className='my-4'>
						<span className='text-2xl text-lightOrange md:text-3xl'>
							<Typewriter
								options={{
									strings: [
										'React Developer',
										'Software Developer',
										'Front-end Developer',
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</div>
					<p className='leading-7 text-stone-400 lg:text-left md:leading-8'>
						I've always been interested in technology. Additionally, I am also
						interested in sport, especially football. Hard-working and
						detail-oriented professional with a solid background in client
						services, combined with continuous self-study in web development.
						Operates as a dedicated service provider, going above and beyond to
						fulfill dynamic customer orders. Consistently evolves technical
						skills and experiences to further elevate value to the organization.
					</p>
					<a
						href='#'
						target='display'
						className='mt-4 rounded-md bg-lightOrange px-8 py-2.5 text-md font-semibold border-2 border-lightOrange text-darkNavy shadow-sm hover:bg-lightNavy hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition duration-300 ease-in-out hover:duration-300'
					>
						Check Resume
					</a>
				</div>
				<div className='w-full flex justify-center gap-3 order-1 mb-7 lg:order-2'>
					<img
						src={heroAvatar}
						alt=''
						className='relative w-full h-full max-w-[280px] rounded-full border-4 border-lightOrange sm:max-w-[400px] md:mr-6 lg:ml-16 lg:mr-0'
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
