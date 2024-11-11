import Image from 'next/image';
import React from 'react';
const HeroSection = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
							Innovative minds to boost your business
						</h1>
						<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
				</div>
				<div className='mx-auto max-w-5xl py-12'>
					<Image
						alt='Abstract Architecture'
						className='aspect-[2/1] overflow-hidden rounded-lg object-cover'
						height='400'
						src='/placeholder.svg'
						width='800'
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
