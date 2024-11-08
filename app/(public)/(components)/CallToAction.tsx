// components/CallToAction.tsx
import { Button } from '@/components/ui/button';

export default function CallToAction() {
	return (
		<div className='text-center mb-12'>
			<h2 className='text-3xl font-bold tracking-tight mb-4'>
				Discover Our Powerful Features
			</h2>
			<p className='text-muted-foreground mb-6'>
				Everything you need to manage your team and projects effectively
			</p>
			<Button size='lg'>Get Started Now</Button>
		</div>
	);
}
