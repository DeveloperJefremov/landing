'use client';
import {
	BarChart2,
	Box,
	Clock,
	CreditCard,
	Layers,
	LineChart,
	Users,
} from 'lucide-react';
import React, { useState } from 'react';
import CallToAction from './CallToAction';
import FeatureDetails from './FeatureDetails';
import FeatureExample from './FeatureExample';
import FeatureItem from './FeatureItem';
type Feature = {
	id: string;
	title: string;
	icon: React.ReactNode;
	description: string;
	example: string;
};

// Feature data
const features: Feature[] = [
	{
		id: 'time-tracking',
		title: 'Time Tracking',
		icon: <Clock className='h-5 w-5' />,
		description:
			'Effortlessly track time spent on tasks and projects with our intuitive time tracking solution.',
		example:
			'Track time with a single click and generate detailed timesheets automatically.',
	},
	{
		id: 'task-management',
		title: 'Task and Project Management',
		icon: <Layers className='h-5 w-5' />,
		description:
			'Organize and manage your tasks and projects in one centralized location.',
		example:
			'Create, assign, and monitor tasks with our comprehensive project management tools.',
	},
	{
		id: 'reporting',
		title: 'Reporting and Analytics',
		icon: <BarChart2 className='h-5 w-5' />,
		description: 'Gain valuable insights with detailed reports and analytics.',
		example:
			"Generate custom reports and visualize your team's performance metrics.",
	},
	{
		id: 'team',
		title: 'Team Management',
		icon: <Users className='h-5 w-5' />,
		description: 'Efficiently manage your team and their responsibilities.',
		example:
			'Coordinate team activities and track individual contributions effectively.',
	},
	{
		id: 'integrations',
		title: 'Integrations',
		icon: <Box className='h-5 w-5' />,
		description: 'Connect with your favorite tools and services seamlessly.',
		example: 'Integrate with popular platforms to streamline your workflow.',
	},
	{
		id: 'billing',
		title: 'Billing and Finance',
		icon: <CreditCard className='h-5 w-5' />,
		description: 'Handle billing and financial operations with ease.',
		example:
			'Manage invoices, track expenses, and process payments efficiently.',
	},
	{
		id: 'productivity',
		title: 'Productivity and Monitoring',
		icon: <LineChart className='h-5 w-5' />,
		description: 'Monitor and optimize team productivity.',
		example: 'Track performance metrics and identify areas for improvement.',
	},
];

export default function FeaturesSection() {
	const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);

	return (
		<section className='py-12 md:py-24 lg:py-32'>
			<div className='w-full max-w-screen-xl mx-auto px-4 md:px-6'>
				<CallToAction />

				<div className='grid lg:grid-cols-[300px_1fr] gap-8'>
					{/* FeatureList */}
					<div className='space-y-2'>
						{features.map(feature => (
							<FeatureItem
								key={feature.id}
								feature={feature}
								isActive={activeFeature.id === feature.id}
								onClick={() => setActiveFeature(feature)}
							/>
						))}
					</div>

					{/* Feature Details and Example */}
					<div className='space-y-6'>
						<FeatureDetails feature={activeFeature} />
						<FeatureExample feature={activeFeature} />
					</div>
				</div>
			</div>
		</section>
	);
}
