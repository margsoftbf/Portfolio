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
		info: 'Katowice, Poland',
		icon: <FaLocationDot />,
	},
	{
		id: 5,
		title: 'Phone',
		info: '+48 577 793 533',
		icon: <FaPhone />,
	},
	{
		id: 6,
		href: './assets/Resume/Marcin-Garski-CV.pdf',
		title: 'CV',
		info: 'Download',
		icon: <FaRegFile />,
	},
];

const Contact = () => {
	return (
		<Element name='contact' className='relative left-0 w-full bg-black-color'>
			<div className='flex flex-col justify-center relative pt-8 pb-4 px-7 text-white overflow-hidden'>
				<div className='max-w-[1280px] m-auto relative'>
					<h2
						className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-poppins'
						style={{
							background: 'linear-gradient(to right, #8750f7 0%, #fff 100%)',
							WebkitBackgroundClip: 'text',
							backgroundClip: 'text',
							color: 'transparent',
						}}
					>
						Contact
					</h2>
					<div className='flex flex-col gap-3 items-center flex-wrap sm:flex-row justify-around mt-8'>
						{contactItems.map((contactItem) => (
							<div
								key={contactItem.id}
								className='group w-[300px] bg-[#140c1c] text-left border border-transparent rounded-xl relative mb-8 pt-8 pr-[70px] pb-8 pl-8 cursor-pointer transition-all duration-500 ease-in-out hover:border-[#8750f7] group-hover:bg-gradient-to-br group-hover:from-[#2a1454] group-hover:to-[#140c1c] md:w-[280px] lg:w-[350px]'
								onClick={() =>
									contactItem.href && window.open(contactItem.href, '_blank')
								}
							>
								<h3 className='font-semibold group-hover:text-white transition-all duration-300'>
									{contactItem.title}
								</h3>
								<p className='text-xs leading-4 text-gray-400 group-hover:text-[#8750f7] transition-all duration-300'>
									{contactItem.info}
								</p>
								<span className='absolute inline-block right-4 top-6 text-5xl text-gray-500 group-hover:text-[#8750f7] group-hover:scale-110 transition-all duration-500'>
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
