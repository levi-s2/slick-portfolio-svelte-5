import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Hi, I’m Joao Vieira, a passionate full-stack developer specializing in creating user-focused applications with modern technologies like React, Flask, and SQLAlchemy. With a background in full-stack web development from Flatiron School, I thrive on solving complex problems and delivering clean, responsive designs. Lets connect and bring ideas to life!',
	links: [
		{ label: 'GitHub', href: 'https://github.com/levi-s2', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-collins-vieira/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:john.collins.vieira@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
