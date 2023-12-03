import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.div
			className='h-16 w-full bg-lightNavy flex items-center justify-center text-lg sticky top-0 z-50 '
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='flex justify-between items-center h-16 w-full mx-4 bg-lightNavy mb-4 max-w-[1280px] m-auto'>
				<Link to='/' className='text-2xl text-white font-bold mb-4'>
					Marcin <span className='text-lightOrange text-5xl'>.</span>
				</Link>
				<div className='block absolute top-3 right-0 cursor-pointer -translate-x-full translate-y-1/2 text-white text-2xl md:hidden'>
					{isOpen ? (
						<FaXmark
							onClick={() => {
								setIsOpen(false);
							}}
						/>
					) : (
						<FaBars
							onClick={() => {
								setIsOpen(true);
							}}
						/>
					)}
				</div>
				<ul className='text-white hidden md:flex md:items-center md:justify-center md:gap-8 md:mx-1 md:list-none  md:no-underline '>
					<li>
						<ScrollLink
							to='skills'
							aria-label='skills'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
						>
							Skills
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to='experience'
							aria-label='experience'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
						>
							Experience
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to='portfolio'
							aria-label='portfolio'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
						>
							Portfolio
						</ScrollLink>
					</li>
					<li>
						<ScrollLink
							to='contact'
							aria-label='contact'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
						>
							Contact
						</ScrollLink>
					</li>
				</ul>
				<div className='hidden md:h-full md:flex md:justify-end md:items-center'>
					<a
						href='https://github.com/margsoftbf'
						target='_blank'
						className='border-2 border-solid text-lightOrange border-lightOrange rounded-3xl px-4 py-2 transition duration-300 ease-in-out hover:bg-lightOrange hover:text-lightNavy hover:duration-300'
					>
						Github Profile
					</a>
				</div>
				{isOpen && (
					<div
						isOpen={isOpen}
						className='flex flex-col justify-center gap-4 absolute top-16 right-0 w-full bg-black bg-opacity-60 text-white p-4 text-left'
					>
						<ScrollLink
							to='skills'
							aria-label='skills'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Skills
						</ScrollLink>
						<ScrollLink
							to='experience'
							aria-label='experience'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Experience
						</ScrollLink>
						<ScrollLink
							to='portfolio'
							aria-label='portfolio'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Portfolio
						</ScrollLink>
						<ScrollLink
							to='contact'
							aria-label='contact'
							smooth={true}
							duration={500}
							className='transition duration-300 ease-in-out hover:text-lightOrange hover:duration-300 cursor-pointer'
							spy={true}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							Contact
						</ScrollLink>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Navbar;
