import { Button } from '@/components/ui/button';
import React from 'react';

const CallToAction = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter'>Let's talk</h2>
						<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare.
						</p>
					</div>
					<div className='flex flex-col gap-2 min-[400px]:flex-row'>
						<Button>Contact us</Button>
						<Button variant='outline'>Learn more</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
