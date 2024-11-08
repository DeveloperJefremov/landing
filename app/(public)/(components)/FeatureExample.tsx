// components/FeatureExample.tsx

import { Feature } from '../types/feature';

type FeatureExampleProps = {
	feature: Feature;
};

export default function FeatureExample({ feature }: FeatureExampleProps) {
	return (
		<div className='bg-muted/50 rounded-lg p-6 mt-6'>
			<h4 className='font-medium mb-2'>Example Use Case</h4>
			<p className='text-muted-foreground'>{feature.example}</p>
		</div>
	);
}
