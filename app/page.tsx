import React from 'react';
import CallToAction from './(public)/(components)/(call-to-action)/CallToAction';
import DynamicCallToAction from './(public)/(components)/(call-to-action)/DynamicCallToAction';
import HeroSection from './(public)/(components)/(homepage)/(hero-section)/HeroSection';
import FeatureBanner from './(public)/(components)/(homepage)/(feature-section)/FeatureBanner';
import FeaturesSection from './(public)/(components)/(homepage)/(feature-section)/FeaturesSection';

const Home = () => {
	return (
		<div>
			<HeroSection />
			<CallToAction />
			<FeatureBanner />
			<FeaturesSection />
			<DynamicCallToAction />
		</div>
	);
};

export default Home;
