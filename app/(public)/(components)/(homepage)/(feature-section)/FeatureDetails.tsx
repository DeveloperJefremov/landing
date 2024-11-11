// components/FeatureDetails.tsx

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Feature } from '../../../types/feature';

type FeatureDetailsProps = {
	feature: Feature;
};

export default function FeatureDetails({ feature }: FeatureDetailsProps) {
	return (
		<Card className='p-6 h-[400px] flex flex-col items-center justify-center text-center'>
			<div className='mb-4'>{feature.icon}</div>
			<h3 className='text-2xl font-bold mb-4'>{feature.title}</h3>
			<p className='text-muted-foreground mb-6'>{feature.description}</p>
			<Button variant='outline'>Learn More</Button>
		</Card>
	);
}
