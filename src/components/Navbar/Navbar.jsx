import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import headerLogo from '../../assets/img/logo/logo-5.png';
import { ArrowRight } from 'lucide-react';
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);
	return (
		<motion.div
			className='h-24 w-full flex items-center justify-center top-0 z-50 font-sora text-white'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
		>
			<div className='flex justify-between items-center w-full mx-4 max-w-[1280px] m-auto'>
				<div>
					<ul className='flex items-center gap-4'>
						<li>
							<Link to='/' className='logo'>
								<img
									className='w-15 h-15 inline-block'
									src={headerLogo}
									alt=''
								/>
							</Link>
						</li>
						<li className='hidden md:block'>
							<a
								href='mailto:marcin.garski@gmail.com'
								className='text-size-15 font-medium text-seondary-color dark:text-white-color'
							>
								marcin.garski@gmail.com
							</a>
						</li>
					</ul>
				</div>
				<div className='block absolute top-5 right-0 cursor-pointer -translate-x-full translate-y-1/2 text-white text-2xl lg:hidden z-50'>
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
				<nav>
					<ul className='nav flex items-center gap-12'>
						<li className='group relative hidden lg:block'>
							<ScrollLink
								to='skills'
								aria-label='skills'
								smooth={true}
								duration={500}
								className='font-medium text-white linkAni'
								spy={true}
							>
								Skills
							</ScrollLink>
						</li>
						<li className='group relative hidden lg:block'>
							<ScrollLink
								to='experience'
								aria-label='experience'
								smooth={true}
								duration={500}
								className='font-medium text-white linkAni'
								spy={true}
							>
								Experience
							</ScrollLink>
						</li>
						<li className='group relative hidden lg:block'>
							<ScrollLink
								to='portfolio'
								aria-label='portfolio'
								smooth={true}
								duration={500}
								className='font-medium text-white linkAni'
								spy={true}
							>
								Portfolio
							</ScrollLink>
						</li>
						<li className='group relative hidden lg:block'>
							<ScrollLink
								to='contact'
								aria-label='contact'
								smooth={true}
								duration={500}
								className='font-medium text-white linkAni'
								spy={true}
							>
								Contact
							</ScrollLink>
						</li>
						<li className='hidden lg:block z-30'>
							<a
								href='https://github.com/margsoftbf'
								className='w-full px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-indigo-900 hover:from-purple-800 hover:to-indigo-950 text-white font-semibold cursor-pointer flex items-center justify-center gap-2 group'
								onClick={() => setIsOpen(false)}
								target='_blank'
								rel='noopener noreferrer'
							>
								Github Profile!
								<span className='transform -rotate-45'>
									<ArrowRight className='w-4 h-4 text-white group-hover:text-white/80 transition-colors duration-300' />
								</span>
							</a>
						</li>
					</ul>
				</nav>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className='fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center lg:hidden'
							initial={{ opacity: 0, y: '-100%' }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: '-100%' }}
							transition={{ duration: 0.3 }}
						>
							<div className='flex flex-col items-center justify-center gap-8 px-4 w-full'>
								<ScrollLink
									to='skills'
									aria-label='skills'
									smooth={true}
									duration={500}
									className='text-xl font-medium text-white hover:text-primary-color py-4 w-full text-center'
									spy={true}
									onClick={() => setIsOpen(false)}
								>
									Skills
								</ScrollLink>
								<div className='w-24 h-px bg-white/20'></div>

								<ScrollLink
									to='experience'
									aria-label='experience'
									smooth={true}
									duration={500}
									className='text-xl font-medium text-white hover:text-primary-color py-4 w-full text-center'
									spy={true}
									onClick={() => setIsOpen(false)}
								>
									Experience
								</ScrollLink>
								<div className='w-24 h-px bg-white/20'></div>

								<ScrollLink
									to='portfolio'
									aria-label='portfolio'
									smooth={true}
									duration={500}
									className='text-xl font-medium text-white hover:text-primary-color py-4 w-full text-center'
									spy={true}
									onClick={() => setIsOpen(false)}
								>
									Portfolio
								</ScrollLink>
								<div className='w-24 h-px bg-white/20'></div>

								<ScrollLink
									to='contact'
									aria-label='contact'
									smooth={true}
									duration={500}
									className='text-xl font-medium text-white hover:text-primary-color py-4 w-full text-center'
									spy={true}
									onClick={() => setIsOpen(false)}
								>
									Contact
								</ScrollLink>
								<div className='w-24 h-px bg-white/20'></div>

								<a
									href='#'
									className='mt-4 px-8 py-3 rounded-full bg-gradient-primary text-white'
									onClick={() => setIsOpen(false)}
								>
									Github Profile!
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};

export default Navbar;
