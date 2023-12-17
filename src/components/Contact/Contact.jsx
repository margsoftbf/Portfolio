import React from 'react';
import { Element } from 'react-scroll';
import { FaRegEnvelope, FaRegFile } from 'react-icons/fa';
import {
	FaLinkedinIn,
	FaGithub,
	FaLocationDot,
	FaPhone,
} from 'react-icons/fa6';

const contactItems = [
	{
		id: 1,
		href: 'mailto:marcin.garski@gmail.com',
		title: 'Email',
		info: 'marcin.garski@gmail.com',
		icon: <FaRegEnvelope />,
	},
	{
		id: 2,
		href: 'https://www.linkedin.com/in/marcin-garski/',
		title: 'Linkedin',
		info: 'Click to check',
		icon: <FaLinkedinIn />,
	},
	{
		id: 3,
		href: 'https://github.com/margsoftbf',
		title: 'Github',
		info: 'Check my projects',
		icon: <FaGithub />,
	},
	{
		id: 4,
		title: 'Location',
		info: 'Garfield, NJ, USA',
		icon: <FaLocationDot />,
	},
	{
		id: 5,
		title: 'Phone',
		info: '+1 973 800 4853',
		icon: <FaPhone />,
	},
	{
		id: 6,
		href: './assets/Resume/Marcin-Garski-Resume.pdf',
		title: 'Resume',
		info: 'Download',
		icon: <FaRegFile />,
	},
];

const Contact = () => {
	return (
		<Element name='contact' className='relative left-0 w-full bg-darkNavy'>
			<div className='flex flex-col justify-center relative pt-8 pb-4 px-7 text-white  overflow-hidden'>
				<div className='max-w-[1280px] m-auto relative'>
					<h2 className='text-3xl font-semibold text-white lg:text-4xl'>
						Contact
					</h2>
					<div className='flex flex-col gap-3 items-center flex-wrap sm:flex-row justify-around mt-8'>
						{contactItems.map((contactItem) => (
							<div
								key={contactItem.id}
								className='w-[300px] bg-[2c304a] text-left bg-[#2c304a] border-[1px] border-solid border-lightOrange rounded-md relative mb-8 pt-8 pr-[70px] pb-8 pl-8 cursor-pointer transition-all duration-500 ease-in-out hover:bg-lightOrange hover:text-[#1f2235] md:w-[280px] lg:w-[350px] group'
								onClick={() =>
									contactItem.href && window.open(contactItem.href, '_blank')
								}
							>
								<h3 className='font-semibold'>{contactItem.title}</h3>
								<p className='text-xs leading-4 text-lightOrange group-hover:text-[#1f2235] transition-colors duration-300'>
									{contactItem.info}
								</p>
								<span className='absolute inline-block right-4 top-6 text-5xl text-darkNavy '>
									{contactItem.icon}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</Element>
	);
};

export default Contact;
