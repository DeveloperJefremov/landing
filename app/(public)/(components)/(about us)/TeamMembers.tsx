import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const TeamMembers = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'>
			<div className='container px-4 md:px-6 mx-auto'>
				<h2 className='text-3xl font-bold tracking-tighter text-center mb-12'>
					Meet our team members
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{[
						{ name: 'Alex White', role: 'CEO & Founder' },
						{ name: 'James Voss', role: 'Design Manager' },
						{ name: 'Mira Frost', role: 'Lead Developer' },
						{ name: 'Sam Gates', role: 'Product Manager' },
					].map((member, index) => (
						<Card key={index} className='overflow-hidden group'>
							<CardHeader className='p-0'>
								<Image
									alt={member.name}
									className='object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300'
									height='400'
									src='/placeholder.svg'
									width='400'
								/>
							</CardHeader>
							<CardContent className='p-4'>
								<CardTitle>{member.name}</CardTitle>
								<CardDescription>{member.role}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamMembers;
