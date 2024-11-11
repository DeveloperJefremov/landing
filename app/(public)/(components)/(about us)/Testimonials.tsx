import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6 mx-auto'>
				<h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>
					What our clients say
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{[
						{
							quote: 'An amazing service',
							author: 'Amanda Hayes',
							role: 'Designer at Our Company',
						},
						{
							quote: 'The best service',
							author: 'Thomas Rodriguez',
							role: 'CEO at Our Company',
						},
						{
							quote: 'One of a kind',
							author: 'Lucy Campbell',
							role: 'Product Manager at Our Company',
						},
					].map((testimonial, index) => (
						<Card key={index} className='relative'>
							<CardHeader>
								<div className='flex items-center gap-4'>
									<Image
										alt={testimonial.author}
										className='rounded-full'
										height='40'
										src='/placeholder.svg'
										style={{
											aspectRatio: '40/40',
											objectFit: 'cover',
										}}
										width='40'
									/>
									<div>
										<CardTitle className='text-lg'>
											{testimonial.quote}
										</CardTitle>
										<CardDescription>{testimonial.author}</CardDescription>
										<CardDescription>{testimonial.role}</CardDescription>
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className='text-gray-500'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Suspendisse varius enim in eros elementum tristique.
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
