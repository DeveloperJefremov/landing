import type { Metadata } from 'next';

import LandingFooter from './(public)/(components)/LandingFooter';
import LandingHeader from './(public)/(components)/LandingHeader';
import './globals.css';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='flex flex-col '>
				<LandingHeader />

				<div className='h-dvh'>{children}</div>
				<LandingFooter />
			</body>
		</html>
	);
}
