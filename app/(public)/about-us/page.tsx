import HeroSection from '../(components)/(about us)/(hero-section)/HeroSection';
import CallToAction from '../(components)/(about us)/CallToAction';
import Stats from '../(components)/(about us)/Stats';
import TeamMembers from '../(components)/(about us)/TeamMembers';
import Testimonials from '../(components)/(about us)/Testimonials';

export default function Component() {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				<HeroSection />
				<Stats />
				<CallToAction />
				<TeamMembers />
				<Testimonials />
			</main>
		</div>
	);
}
