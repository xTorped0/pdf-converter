import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx|mjs)$': 'babel-jest' // Ensure babel-jest handles mjs files
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	transformIgnorePatterns: [
		'/node_modules/(?!(pdfjs-dist)/)' // Transform pdfjs-dist with babel-jest
	],
	coverageProvider: 'v8'
};

export default config;
