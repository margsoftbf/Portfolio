import { CloseRounded } from '@mui/icons-material';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { Modal } from '@mui/material';
import React from 'react';

const PortfolioDetails = ({ openModal, setOpenModal }) => {
	const project = openModal?.project;
	return (
		<Modal
			open={true}
			onClose={() => setOpenModal({ state: false, project: null })}
		>
			<div className='container w-full h-full absolute top-0 left-0 right-0 bg-[#000000a7] max-w-[100vw] flex items-start justify-center overflow-y-scroll transition-all duration-500 ease-in-out'>
				<div className='wrapper w-full max-w-[800px] rounded-2xl my-12 mx-3 h-min bg-darkNavy text-white p-5 flex flex-col relative'>
					<CloseRounded
						style={{
							position: 'absolute',
							top: '10px',
							right: '20px',
							cursor: 'pointer',
						}}
						onClick={() => setOpenModal({ state: false, project: null })}
					/>
					<img
						src={project?.image}
						className='w-full object-cover rounded-xl mt-7 shadow-sm'
					/>
					<h3 className='title text-2xl lg:text-3xl font-semibold overflow-hidden mt-4 text-stone-300'>
						{project.title}
					</h3>
					<div className='tags w-full flex items-center flex-wrap gap-2 mt-4'>
						{project.tags?.map((tag, index) => (
							<span
								key={index}
								className='tag text-xs font-normal  bg-[#434a94] text-stone-400 bg-opacity-50 py-1 px-2 rounded-xl'
							>
								{tag}
							</span>
						))}
					</div>
					<p className='description mt-4 text-slate-200 text-base max-w-full box-orient-vertical'>
						{project.description}
					</p>
					<div className='buttonGroup flex justify-end gap-3 mt-6 mb-3'>
						<a
							dull
							href={project?.github}
							target='new'
							className='flex relative items-center text-center rounded-md bg-indigo-500 w-full px-8 py-2.5 text-md font-semibold border-2 border-indigo-800 text-white shadow-sm hover:text-white hover:border-2 hover:border-white hover:bg-lightNavy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300 ease-in-out hover:duration-300'
						>
							<FaGithub className='mr-2 text-xl' />
							View Code
						</a>
						<a
							href={project?.webapp}
							target='new'
							className='flex relative items-center text-center rounded-md bg-indigo-500 w-full px-8 py-2.5 text-md font-semibold border-2 border-indigo-800 text-white shadow-sm hover:text-white hover:border-2 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300 ease-in-out hover:duration-300'
						>
							<CgWebsite className='mr-2 text-xl' />
							View Live App
						</a>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default PortfolioDetails;
