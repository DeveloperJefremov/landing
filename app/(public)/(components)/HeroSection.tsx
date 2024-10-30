// components/HeroSection.tsx
'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import React, { useState } from 'react';

const HeroSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const slides = [
		{ color: 'bg-blue-500', label: 'Слайд 1' },
		{ color: 'bg-red-500', label: 'Слайд 2' },
		{ color: 'bg-green-500', label: 'Слайд 3' },
	];

	const handlePrevious = () => {
		setActiveIndex(prevIndex =>
			prevIndex === 0 ? slides.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setActiveIndex(prevIndex =>
			prevIndex === slides.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handleIndicatorClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<Carousel>
			<CarouselContent
				className='w-full h-screen flex  '
				style={{
					transform: `translateX(-${activeIndex * 100}%)`,
				}}
			>
				{slides.map((slide, index) => (
					<CarouselItem key={index} className='w-full flex-shrink-0'>
						<div
							className={`flex items-center justify-center ${slide.color} h-full text-white text-2xl`}
						>
							{slide.label}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious
				className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full'
				onClick={handlePrevious}
			>
				&lt;
			</CarouselPrevious>
			<CarouselNext
				className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full'
				onClick={handleNext}
			>
				&gt;
			</CarouselNext>
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{slides.map((_, index) => (
					<div
						key={index}
						className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer ${
							index === activeIndex ? 'bg-white' : 'bg-gray-300'
						}`}
						onClick={() => handleIndicatorClick(index)}
					></div>
				))}
			</div>
		</Carousel>
	);
};

export default HeroSection;
