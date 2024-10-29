'use client';

import { Button } from '@/components/ui/button';
import { Clock, LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LandingHeader() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	const navItems = [
		{ href: '/features', label: 'Features' },
		{ href: '/prices', label: 'Prices' },
		{ href: '/contacts', label: 'Contacts' },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-200  ${
				scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
			}`}
		>
			<div className='w-full flex justify-between items-center h-16'>
				<div className='flex items-center space-x-8 pl-4'>
					<Link href='/' className='flex items-center space-x-2'>
						<div className='relative w-10 h-10'>
							<Image
								src='/Logo.png'
								alt='Time Pulse Logo'
								layout='fill'
								objectFit='cover'
								className='rounded-full'
							/>
							<div className='absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse'></div>
						</div>
						<span className='text-xl font-bold text-gray-800'>
							Time <span className='text-blue-500'>Pulse</span>
						</span>
					</Link>

					<nav className='hidden md:flex space-x-8'>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className={`text-sm font-medium transition-colors hover:text-blue-500 ${
									pathname === item.href ? 'text-blue-500' : 'text-gray-600'
								}`}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>

				<div className='hidden md:flex items-center space-x-4 pr-4'>
					<Button
						variant='ghost'
						size='sm'
						className='flex items-center space-x-1 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-300'
					>
						<LogIn className='h-4 w-4' />
						<span>Log In</span>
					</Button>
					<span className='text-gray-300'>|</span>
					<Button
						size='sm'
						className='bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300'
					>
						Register
					</Button>
					<span className='text-gray-600'>or</span>
					<Button
						size='sm'
						className='bg-green-500 hover:bg-green-600 text-white transition-colors duration-300 flex items-center'
					>
						<Clock className='mr-1 h-4 w-4' />
						Try Online
					</Button>
				</div>

				<button
					className='md:hidden focus:outline-none pr-4'
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Toggle menu'
				>
					<svg
						className='h-6 w-6 text-gray-600'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						{isOpen ? (
							<path d='M6 18L18 6M6 6l12 12' />
						) : (
							<path d='M4 6h16M4 12h16M4 18h16' />
						)}
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className='md:hidden bg-white shadow-lg rounded-b-lg'>
					<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
									pathname === item.href
										? 'text-blue-500 bg-blue-50'
										: 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
								}`}
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						))}
						<div className='flex items-center justify-between px-3 py-2'>
							<Button
								size='sm'
								className='bg-blue-500 hover:bg-blue-600 text-white transition-colors duration-300'
							>
								Register
							</Button>
							<span className='text-gray-600'>or</span>
							<Button
								size='sm'
								className='bg-green-500 hover:bg-green-600 text-white transition-colors duration-300 flex items-center'
							>
								<Clock className='mr-1 h-4 w-4' />
								Try Online
							</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
