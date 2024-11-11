import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	Activity,
	BarChart,
	Briefcase,
	Clock,
	DollarSign,
	Plug,
	Users,
} from 'lucide-react';

export default function FeatureBanner() {
	const features = [
		{
			icon: <Clock className='w-10 h-10' />,
			title: 'Time Tracking',
			description: 'Accurately track time across multiple projects and tasks.',
			isFree: true,
		},
		{
			icon: <Briefcase className='w-10 h-10' />,
			title: 'Task and Project Management',
			description: 'Organize tasks and manage projects efficiently.',
			isFree: true,
		},
		{
			icon: <BarChart className='w-10 h-10' />,
			title: 'Reporting and Analytics',
			description: 'Gain insights with detailed reports and analytics.',
			isFree: false,
		},
		{
			icon: <Users className='w-10 h-10' />,
			title: 'Team Management',
			description: 'Manage team roles, permissions, and productivity.',
			isFree: false,
		},
		{
			icon: <Plug className='w-10 h-10' />,
			title: 'Integrations',
			description: 'Connect with popular tools for seamless workflows.',
			isFree: true,
		},
		{
			icon: <DollarSign className='w-10 h-10' />,
			title: 'Billing and Finance',
			description: 'Handle billing and financial tracking with ease.',
			isFree: false,
		},
		{
			icon: <Activity className='w-10 h-10' />,
			title: 'Productivity and Monitoring',
			description: 'Monitor productivity and optimize workflows.',
			isFree: true,
		},
	];

	return (
		<section
			className='flex items-center justify-center min-h-screen py-12 md:py-24 lg:py-32'
			style={{ backgroundColor: '#2e026d' }}
		>
			<div className='container px-4 md:px-6 text-center'>
				<div className='flex flex-col items-center gap-4'>
					<Badge variant='secondary' className='backdrop-blur-sm bg-white/10'>
						Featured
					</Badge>
					<h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl'>
						Powerful tools to boost productivity and performance
					</h2>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className='bg-white/10 backdrop-blur-sm border-white/20 text-white transition-all hover:bg-white/15'
						>
							<CardHeader>
								<div className='flex items-center justify-center gap-4'>
									<div className='rounded-lg bg-white/10 p-2 backdrop-blur-sm'>
										{feature.icon}
									</div>
									<div>
										<CardTitle className='text-xl'>{feature.title}</CardTitle>
										{feature.isFree && (
											<Badge
												variant='secondary'
												className='mt-2 backdrop-blur-sm bg-white/10'
											>
												Free for non-commercial use
											</Badge>
										)}
									</div>
								</div>
							</CardHeader>
							<CardContent>
								<p className='text-white/80'>{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
