import React from 'react';

const Stats = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
					<div className='flex flex-col items-center space-y-2'>
						<h3 className='text-3xl font-bold'>100+</h3>
						<p className='text-sm text-gray-500'>Countries Served</p>
					</div>
					<div className='flex flex-col items-center space-y-2'>
						<h3 className='text-3xl font-bold'>120+</h3>
						<p className='text-sm text-gray-500'>Team Members</p>
					</div>
					<div className='flex flex-col items-center space-y-2'>
						<h3 className='text-3xl font-bold'>50+</h3>
						<p className='text-sm text-gray-500'>Products Launched</p>
					</div>
					<div className='flex flex-col items-center space-y-2'>
						<h3 className='text-3xl font-bold'>98%</h3>
						<p className='text-sm text-gray-500'>Customer Satisfaction</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Stats;
