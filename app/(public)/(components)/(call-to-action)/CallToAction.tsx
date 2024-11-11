'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckSquare, Clock, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CallToAction() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 to-indigo-800 text-white'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
							Управляйте проектами как профи
						</h2>
						<p className='max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto'>
							Оптимизируйте рабочий процесс, повышайте продуктивность и
							достигайте большего с нашим инновационным инструментом.
						</p>
					</div>
					<div className='w-full max-w-sm space-y-2'>
						<Button
							className='w-full bg-white text-purple-700 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105'
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<span className='mr-2'>Начать бесплатно</span>
							<ArrowRight
								className={`transition-all duration-300 ${
									isHovered ? 'translate-x-1' : ''
								}`}
							/>
						</Button>
					</div>
					<div className='flex justify-center space-x-4 mt-8'>
						<div className='flex items-center space-x-2'>
							<Clock className='text-zinc-200' />
							<span className='text-sm text-zinc-200'>Экономия времени</span>
						</div>
						<div className='flex items-center space-x-2'>
							<CheckSquare className='text-zinc-200' />
							<span className='text-sm text-zinc-200'>
								Повышение эффективности
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<DollarSign className='text-zinc-200' />
							<span className='text-sm text-zinc-200'>Рост прибыли</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
