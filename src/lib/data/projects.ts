import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'library-manager',
		color: '#4caf50',
		description:
			'A CLI application built in Python that allows users to manage their virtual library. Users can add, arrange, and look up books by title, genre, and author.',
		shortDescription:
			'A Python CLI app for managing virtual libraries with features for organizing and searching by title, genre, and author.',
		links: [{ to: 'https://github.com/levi-s2/Library-Manager', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Library Manager',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2023, 8, 28)
		},
		skills: getSkills('python', 'cli', 'data-management'),
		type: 'CLI Application'
	},
	{
		slug: 'book-club',
		color: '#673ab7',
		description:
			'A full-stack web application for virtual book clubs. Built using Flask and React, it allows users to create and join clubs, manage book lists, and share profiles.',
		shortDescription:
			'A Flask and React web app for managing virtual book clubs with features for creating clubs, managing book lists, and sharing user profiles.',
		links: [{ to: 'https://github.com/levi-s2/book-club', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Book Club Platform',
		period: {
			from: new Date(2024, 5, 1),
			to: new Date(2024, 7, 31)
		},
		skills: getSkills('flask', 'react', 'sqlalchemy', 'rest-api', 'javascript', 'python'),
		type: 'Web Application'
	},
	{
		slug: 'lavender-blossom',
		color: '#9c27b0',
		description:
			'A responsive website built for a small cleaning business using React, focusing on modern design, smooth animations, and intuitive navigation. Features a booking system integrated with email automation.',
		shortDescription:
			'A React-based responsive website for a cleaning business, featuring modern design and an integrated booking system.',
		links: [
			{ to: 'https://github.com/levi-s2/lavenderblossom', label: 'GitHub' },
			{ to: 'https://lavenderblossomcs.com', label: 'Live Website' }
		],
		logo: Assets.Unknown,
		name: 'Lavender Blossom Website',
		period: {
			from: new Date(2024, 5, 1),
			to: new Date(2024, 6, 4)
		},
		skills: getSkills('react', 'css', 'javascript', 'email-automation', 'ui-design'),
		type: 'Website'
	},
	{
		slug: 'quiz-game',
		color: '#ff9800',
		description:
			'An online quiz game built with a React frontend and Flask backend. The game allows users to select themes, answer questions, and track their scores on a global leaderboard.',
		shortDescription:
			'A React and Flask-based online quiz game with multiple themes, questions, and a global leaderboard.',
		links: [{ to: 'https://github.com/levi-s2/online-quiz-game', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Online Quiz Game',
		period: {
			from: new Date(2024, 6, 1),
			to: new Date(2024, 7, 12)
		},
		skills: getSkills('react', 'flask', 'sqlalchemy', 'rest-api', 'javascript', 'python'),
		type: 'Web Application'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
