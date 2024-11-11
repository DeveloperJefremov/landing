import React from 'react';
import CallToAction from '../(components)/(pricing)/CallToAction';
import PricingBanner from '../(components)/(pricing)/PricingBanner';
import PricingPlans from '../(components)/(pricing)/PricingPlans';

const Prices = () => {
	return (
		<div className='flex min-h-screen flex-col'>
			<main className='flex-1'>
				<PricingBanner />
				<PricingPlans />
				<CallToAction />
			</main>
		</div>
	);
};
export default Prices;
