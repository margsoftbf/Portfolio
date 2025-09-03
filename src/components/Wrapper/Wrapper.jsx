import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

const Wrapper = () => {
	return (
		<div className='relative left-0 w-full bg-black-color'>
			<div className='flex flex-col justify-center relative pt-8 px-7 text-white  overflow-hidden'>
				<Skills />
				<div className='bg-[#091219] relative'>
					<Experience />
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
