import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='w-full bg-primary text-white'>
			{/* Light section */}
			<div className='bg-[#412a4c] py-16'>
				<div className='container mx-auto px-4'>
					{/* Main Footer Content */}
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center justify-items-center'>
						{/* Features Column */}
						<div className='space-y-4'>
							<h3 className='text-lg font-semibold mb-4 text-[#e57cd8]'>
								Features
							</h3>
							<ul className='space-y-2 '>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Time Tracking
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Reporting
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Project Planning
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Team Scheduling
									</Link>
								</li>
							</ul>
						</div>

						{/* Solutions Column */}
						<div className='space-y-4'>
							<h3 className='text-lg font-semibold mb-4 text-[#e57cd8]'>
								Solutions
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Enterprise
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Small Business
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Freelancers
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Teams
									</Link>
								</li>
							</ul>
						</div>

						{/* Resources Column */}
						<div className='space-y-4'>
							<h3 className='text-lg font-semibold mb-4 text-[#e57cd8]'>
								Resources
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Case Studies
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Help Center
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Developer API
									</Link>
								</li>
							</ul>
						</div>

						{/* Company Column */}
						<div className='space-y-4'>
							<h3 className='text-lg font-semibold mb-4 text-[#e57cd8]'>
								Company
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Press
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Download Column */}
						<div className='space-y-4'>
							<h3 className='text-lg font-semibold mb-4 text-[#e57cd8]'>
								Download
							</h3>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Mobile Apps
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Desktop Apps
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white hover:text-[#e57cd8] transition-colors text-sm'
									>
										Browser Extensions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Dark section */}
			<div className='bg-[#2c1338] py-8'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col items-center justify-center mb-6'>
						<div className='flex items-center w-full justify-center'>
							<div className='w-1/2 h-px bg-[#412a4c] mr-6'></div>
							<div className='flex space-x-6'>
								<Link
									href='#'
									className='text-[#e57cd8] hover:text-white transition-colors'
								>
									<Linkedin className='h-5 w-5' />
									<span className='sr-only'>LinkedIn</span>
								</Link>
								<Link
									href='#'
									className='text-[#e57cd8] hover:text-white transition-colors'
								>
									<Twitter className='h-5 w-5' />
									<span className='sr-only'>X (Twitter)</span>
								</Link>
								<Link
									href='#'
									className='text-[#e57cd8] hover:text-white transition-colors'
								>
									<Youtube className='h-5 w-5' />
									<span className='sr-only'>YouTube</span>
								</Link>
								<Link
									href='#'
									className='text-[#e57cd8] hover:text-white transition-colors'
								>
									<Facebook className='h-5 w-5' />
									<span className='sr-only'>Facebook</span>
								</Link>
								<Link
									href='#'
									className='text-[#e57cd8] hover:text-white transition-colors'
								>
									<Github className='h-5 w-5' />
									<span className='sr-only'>GitHub</span>
								</Link>
							</div>
							<div className='w-1/2 h-px bg-[#412a4c] ml-6'></div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='mb-4 md:mb-0'>
							<Link
								href='#'
								className='text-[#e57cd8] hover:text-white transition-colors text-sm mr-4'
							>
								Legal Center
							</Link>
							<Link
								href='#'
								className='text-[#e57cd8] hover:text-white transition-colors text-sm'
							>
								Status
							</Link>
						</div>
						<div className='text-[#e57cd8] text-sm'>
							© {new Date().getFullYear()} Time Pulse
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
