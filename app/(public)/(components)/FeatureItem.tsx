// components/FeatureItem.tsx

import { Feature } from '../types/feature';

type FeatureItemProps = {
	feature: Feature;
	isActive: boolean;
	onClick: () => void;
};

export default function FeatureItem({
	feature,
	isActive,
	onClick,
}: FeatureItemProps) {
	return (
		<button
			onClick={onClick}
			className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
				isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
			}`}
		>
			<div className='flex items-center gap-3'>
				{feature.icon}
				<span className='font-medium'>{feature.title}</span>
			</div>
		</button>
	);
}
