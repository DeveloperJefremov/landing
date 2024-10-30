import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import React from 'react';
const LandingSlider = () => {
	return (
		<Carousel>
			<CarouselContent className='w-full h-96'>
				<CarouselItem>
					<div className='flex items-center justify-center bg-blue-500 h-full text-white text-2xl'>
						Слайд 1
					</div>
				</CarouselItem>
				<CarouselItem>
					<div className='flex items-center justify-center bg-red-500 h-full text-white text-2xl'>
						Слайд 2
					</div>
				</CarouselItem>
				<CarouselItem>
					<div className='flex items-center justify-center bg-green-500 h-full text-white text-2xl'>
						Слайд 3
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default LandingSlider;
