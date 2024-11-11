'use client';

import { Button } from '@/components/ui/button';
import { Clock, LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
	const navItems = [
		{ href: '/features', label: 'Features' },
		{ href: '/prices', label: 'Prices' },
		{ href: '/contacts', label: 'Contacts' },
		{ href: '/about-us', label: 'About Us' },
	];

	return (
		<header>
			<div className='flex justify-between items-center h-16'>
				<div className='flex items-center pl-4'>
					<Link href='/' className='flex items-center'>
						<div className='w-10 h-10'>
							<Image
								src='/Logo.png'
								alt='Time Pulse Logo'
								width={40}
								height={40}
							/>
						</div>
						<span className='text-xl font-bold'>
							Time <span className='text-blue-500'>Pulse</span>
						</span>
					</Link>
					<nav className='space-x-8'>
						{navItems.map(item => (
							<Link key={item.href} href={item.href} className='text-sm'>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
				<div className='flex items-center pr-4'>
					<Button variant='ghost' size='sm' className='flex items-center'>
						<LogIn className='h-4 w-4' />
						<span>Log In</span>
					</Button>
					<Button size='sm' className='bg-blue-500 text-white'>
						Register
					</Button>
					<Button
						size='sm'
						className='bg-green-500 text-white flex items-center'
					>
						<Clock className='mr-1 h-4 w-4' />
						Try Online
					</Button>
				</div>
			</div>
		</header>
	);
}
