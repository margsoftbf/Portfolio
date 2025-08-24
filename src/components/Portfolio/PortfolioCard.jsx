import { TbHandClick } from 'react-icons/tb';

const PortfolioCard = ({ project, setOpenModal }) => {
	return (
		<div
			onClick={() => setOpenModal({ state: true, project: project })}
			className='w-80 lg:w-full max-w-lg h-[500px] bg-seondary-color cursor-pointer rounded-xl shadow-md overflow-hidden py-5 px-4 flex flex-col gap-4 transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-2xl hover:brightness-110 relative'
		>
			<TbHandClick className='text-white text-3xl absolute top-6 right-6 z-20' />

			<img
				src={project.image}
				alt={project.imageAlt}
				className='w-full h-44 bg-white rounded-xl shadow-md brightness-75'
			/>
			<div className='tags w-full flex items-center flex-wrap gap-2 mt-1 line-clamp-3 overflow-hidden'>
				{project.tags?.map((tag, index) => (
					<span
						key={index}
						className='tag text-xs font-normal  bg-primary-color-2  text-gray-300 bg-opacity-50 py-1 px-2 rounded-xl'
					>
						{tag}
					</span>
				))}
			</div>
			<div className='details w-full flex flex-col justify-start text-left gap-0 px-1'>
				<h3 className='title text-xl font-semibold overflow-hidden mt-1 text-stone-300 flex flex-col'>
					{project.title}
					{''}
				</h3>
				<div className='flex gap-2'>
					{project.finished && (
						<span className='text-xs font-semibold my-2 rounded-md text-green-700 bg-green-300 ring-green-600/20 px-2 text-center'>
							Finished
						</span>
					)}
					{project.id === 1 && (
						<span className='text-xs font-semibold my-2 rounded-md text-red-100 bg-red-600 ring-red-600/20 px-2 text-center'>
							NEW
						</span>
					)}
					{!project.finished && (
						<span className='text-xs font-semibold my-2 rounded-md text-yellow-800 bg-yellow-200 ring-yellow-600/20 px-2 text-center'>
							In progress
						</span>
					)}
				</div>
				<p className='description text-slate-400 text-sm max-w-full line-clamp-3'>
					{project.description}
				</p>
			</div>
		</div>
	);
};

export default PortfolioCard;
