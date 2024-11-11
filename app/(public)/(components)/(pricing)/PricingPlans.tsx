import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import React from 'react';

const PricingPlans = () => {
	return (
		<div className='grid md:grid-cols-3 gap-6 mt-8 mx-auto'>
			<Card className='flex flex-col'>
				<CardHeader>
					<CardTitle>Basic plan</CardTitle>
					<CardDescription>
						<span className='text-3xl font-bold'>$19</span>/mo
						<div className='text-sm text-gray-500'>or $199 yearly</div>
					</CardDescription>
				</CardHeader>
				<CardContent className='flex-1'>
					<ul className='space-y-2'>
						{[
							'Feature text goes here',
							'Feature text goes here',
							'Feature text goes here',
						].map((feature, i) => (
							<li key={i} className='flex items-center'>
								<Check className='mr-2 h-4 w-4 text-green-500' />
								{feature}
							</li>
						))}
					</ul>
				</CardContent>
				<CardFooter>
					<Button className='w-full'>Get started</Button>
				</CardFooter>
			</Card>
			<Card className='flex flex-col border-2 border-primary'>
				<CardHeader>
					<CardTitle>Business plan</CardTitle>
					<CardDescription>
						<span className='text-3xl font-bold'>$29</span>/mo
						<div className='text-sm text-gray-500'>or $299 yearly</div>
					</CardDescription>
				</CardHeader>
				<CardContent className='flex-1'>
					<ul className='space-y-2'>
						{[
							'Feature text goes here',
							'Feature text goes here',
							'Feature text goes here',
						].map((feature, i) => (
							<li key={i} className='flex items-center'>
								<Check className='mr-2 h-4 w-4 text-green-500' />
								{feature}
							</li>
						))}
					</ul>
				</CardContent>
				<CardFooter>
					<Button className='w-full'>Get started</Button>
				</CardFooter>
			</Card>
			<Card className='flex flex-col'>
				<CardHeader>
					<CardTitle>Enterprise plan</CardTitle>
					<CardDescription>
						<span className='text-3xl font-bold'>$49</span>/mo
						<div className='text-sm text-gray-500'>or $499 yearly</div>
					</CardDescription>
				</CardHeader>
				<CardContent className='flex-1'>
					<ul className='space-y-2'>
						{[
							'Feature text goes here',
							'Feature text goes here',
							'Feature text goes here',
						].map((feature, i) => (
							<li key={i} className='flex items-center'>
								<Check className='mr-2 h-4 w-4 text-green-500' />
								{feature}
							</li>
						))}
					</ul>
				</CardContent>
				<CardFooter>
					<Button className='w-full'>Get started</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default PricingPlans;
