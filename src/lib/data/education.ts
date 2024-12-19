import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Software Engineering',
		description: 'Full Stack Web Development program focused on Python, JavaScript, Flask, React, and SQLAlchemy.',
		location: 'USA',
		logo: Assets.Unknown,
		name: 'Flatiron School',
		organization: 'Flatiron School',
		period: { from: new Date(2023, 7, 1), to: new Date(2024, 10, 1) },
		shortDescription: 'Comprehensive training in full-stack development.',
		slug: 'flatiron-software-engineering',
		subjects: ['Python', 'JavaScript', 'Flask', 'React', 'SQLAlchemy', 'RESTful APIs']
	}
];

const EducationData = { title, items };

export default EducationData;
