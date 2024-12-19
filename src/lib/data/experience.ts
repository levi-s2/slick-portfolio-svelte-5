import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'freelance-cleaning-app',
		company: 'Self-employed',
		description: 'Developed a custom web application for a local cleaning business, featuring responsive design, animations, and an automated email booking system.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Sugar Hill, GA',
		period: { from: new Date(2024, 5, 1), to: new Date(2024, 6, 31) },
		skills: getSkills('react', 'js', 'css', 'html', 'email-automation'),
		name: 'Freelance Web Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Built a responsive web app with email automation for client bookings.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;