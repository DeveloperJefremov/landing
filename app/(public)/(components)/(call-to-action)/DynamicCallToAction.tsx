'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Sparkles, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const words = ['Efficiency', 'Focus', 'Productivity'];

export default function Component() {
	const [currentWord, setCurrentWord] = useState(0);
	const [currentChar, setCurrentChar] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [cursorVisible, setCursorVisible] = useState(true);
	const typingSpeed = 100;
	const deletingSpeed = 50;
	const pauseBetweenWords = 1000;

	useEffect(() => {
		const timer = setTimeout(
			() => {
				if (!isDeleting && currentChar < words[currentWord].length) {
					setCurrentChar(prev => prev + 1);
				} else if (isDeleting && currentChar > 0) {
					setCurrentChar(prev => prev - 1);
				} else if (!isDeleting && currentChar === words[currentWord].length) {
					setTimeout(() => setIsDeleting(true), pauseBetweenWords);
				} else if (isDeleting && currentChar === 0) {
					setIsDeleting(false);
					setCurrentWord(prev => (prev + 1) % words.length);
				}
			},
			isDeleting ? deletingSpeed : typingSpeed
		);

		return () => clearTimeout(timer);
	}, [currentWord, currentChar, isDeleting]);

	useEffect(() => {
		const cursorTimer = setInterval(() => {
			setCursorVisible(prev => !prev);
		}, 530);
		return () => clearInterval(cursorTimer);
	}, []);

	const parallaxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (parallaxRef.current) {
				const { left, top, width, height } =
					parallaxRef.current.getBoundingClientRect();
				const x = (e.clientX - left) / width - 0.5;
				const y = (e.clientY - top) / height - 0.5;
				parallaxRef.current.style.transform = `perspective(1000px) rotateY(${
					x * 10
				}deg) rotateX(${-y * 10}deg)`;
			}
		};

		document.addEventListener('mousemove', handleMouseMove);
		return () => document.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<section className='relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white'>
			<div className='absolute inset-0 overflow-hidden'>
				{[...Array(50)].map((_, i) => (
					<div
						key={i}
						className='star'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
						}}
					></div>
				))}
			</div>
			<div
				ref={parallaxRef}
				className='container px-4 md:px-6 mx-auto z-10 transition-transform duration-300 ease-out'
			>
				<div className='flex flex-col items-center space-y-8 text-center'>
					<div className='space-y-4'>
						<h2 className='text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
							Embrace a New Era of
							<div className='inline-block align-bottom overflow-hidden ml-2'>
								<span className='inline-block'>
									{words[currentWord].substring(0, currentChar)}
									<span
										className={`${
											cursorVisible ? 'opacity-100' : 'opacity-0'
										} transition-opacity duration-100`}
									>
										|
									</span>
								</span>
							</div>
						</h2>
						<p className='max-w-[800px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto leading-relaxed'>
							Dive into a world of limitless possibilities with our
							revolutionary time-tracking platform. Turn your ideas into
							achievements and reach unprecedented heights.
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-4 w-full max-w-md'>
						<Button className='flex-1 bg-white text-purple-700 hover:bg-purple-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
							<span className='mr-2'>Get Started</span>
							<Rocket className='animate-pulse' />
						</Button>
						<Button
							variant='outline'
							className='flex-1 border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 ease-in-out'
						>
							<span className='mr-2'>Learn More</span>
							<ArrowRight className='group-hover:translate-x-1 transition-transform' />
						</Button>
					</div>
					<div className='flex justify-center space-x-8 mt-12'>
						<div className='flex flex-col items-center space-y-2 group'>
							<Zap className='text-yellow-400 w-8 h-8 group-hover:animate-bounce' />
							<span className='text-sm text-zinc-200 group-hover:text-yellow-400 transition-colors'>
								Instant Start
							</span>
						</div>
						<div className='flex flex-col items-center space-y-2 group'>
							<Sparkles className='text-blue-400 w-8 h-8 group-hover:animate-spin' />
							<span className='text-sm text-zinc-200 group-hover:text-blue-400 transition-colors'>
								Unlimited Potential
							</span>
						</div>
						<div className='flex flex-col items-center space-y-2 group'>
							<Rocket className='text-green-400 w-8 h-8 group-hover:animate-ping' />
							<span className='text-sm text-zinc-200 group-hover:text-green-400 transition-colors'>
								Rapid Growth
							</span>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.star {
					position: absolute;
					width: 2px;
					height: 2px;
					background: white;
					border-radius: 50%;
					animation: twinkle 5s infinite;
				}
				@keyframes twinkle {
					0%,
					100% {
						opacity: 0;
					}
					50% {
						opacity: 1;
					}
				}
			`}</style>
		</section>
	);
}
