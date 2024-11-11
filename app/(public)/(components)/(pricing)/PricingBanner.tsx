import React from 'react';

const PricingBanner = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
							Pricing plan
						</h2>
						<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingBanner;
