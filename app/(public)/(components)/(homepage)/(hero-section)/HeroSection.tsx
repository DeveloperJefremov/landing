'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
	BarChart,
	Calendar,
	ChevronLeft,
	ChevronRight,
	Clock,
} from 'lucide-react';
import React, { useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';

interface Slide {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const slides: Slide[] = [
	{
		title: 'Эффективное отслеживание времени',
		description: 'Точно фиксируйте время, потраченное на задачи и проекты',
		icon: <Clock className='w-12 h-12 text-primary' />,
	},
	{
		title: 'Подробная аналитика',
		description: 'Получайте ценные инсайты о вашей продуктивности',
		icon: <BarChart className='w-12 h-12 text-primary' />,
	},
	{
		title: 'Планирование и расписание',
		description: 'Эффективно управляйте своим временем и задачами',
		icon: <Calendar className='w-12 h-12 text-primary' />,
	},
];

export default function HeroSlider() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef<Slider | null>(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		beforeChange: (_: number, next: number) => setCurrentSlide(next),
	};

	const goToSlide = useCallback((index: number) => {
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(index);
		}
	}, []);

	return (
		<div className=' h-[95vh] bg-purple-700 text-white overflow-hidden'>
			{/* <div className='mt-20'> */}
			<Slider ref={sliderRef} {...settings}>
				{slides.map((slide, index) => (
					<div
						key={index}
						className='h-screen flex items-center justify-center'
					>
						<Card className='bg-transparent border-none shadow-none'>
							<div className='text-center space-y-6 px-4'>
								{slide.icon}
								<h2 className='text-4xl font-bold'>{slide.title}</h2>
								<p className='text-xl  max-w-2xl mx-auto'>
									{slide.description}
								</p>
							</div>
						</Card>
					</div>
				))}
			</Slider>
			{/* </div> */}
			<div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
				<Button
					variant='outline'
					size='icon'
					className='rounded-full bg-white/10 hover:bg-white/20'
					onClick={() => sliderRef.current?.slickPrev()}
					aria-label='Previous slide'
				>
					<ChevronLeft className='h-6 w-6' />
				</Button>
			</div>

			<div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
				<Button
					variant='outline'
					size='icon'
					className='rounded-full bg-white/10 hover:bg-white/20'
					onClick={() => sliderRef.current?.slickNext()}
					aria-label='Next slide'
				>
					<ChevronRight className='h-6 w-6' />
				</Button>
			</div>

			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{slides.map((_, index) => (
					<Button
						key={index}
						variant='outline'
						size='icon'
						className={`rounded-full w-3 h-3 p-0 ${
							currentSlide === index ? 'bg-white' : 'bg-white/50'
						}`}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
