import { Button } from '@/components/ui/button';
import React from 'react';

const CallToAction = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
							Simple and Effective Section Heading
						</h2>
						<p className='max-w-[900px] text-gray-500 md:text-xl'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
					</div>
					<div className='flex flex-col gap-2 min-[400px]:flex-row'>
						<Button variant='outline'>Industries</Button>
						<Button variant='outline'>Customers</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
