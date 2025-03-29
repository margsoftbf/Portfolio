import elementImg from '../../assets/img/hero/hero-element-4.png';
import elementImg2 from '../../assets/img/hero/hero-element-3.png';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

const Wrapper = () => {
	return (
		<div className='relative left-0 w-full bg-black-color'>
			<div className='flex flex-col justify-center relative pt-8 px-7 text-white  overflow-hidden'>
				<Skills />
				<div className='bg-dark-color relative'>
					<Experience />
					<img
						src={elementImg}
						alt=''
						className='absolute top-2 right-0 md:top-1/2 opacity-75'
					/>
					<img
						src={elementImg2}
						alt=''
						className='absolute bottom-0 left-0 md:bottom-1/2 opacity-60'
					/>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
