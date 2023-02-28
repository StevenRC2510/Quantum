import { rest } from 'msw';

import { mockDescription } from 'mocks/resolvers/mockDescription';
import { mockFooter } from 'mocks/resolvers/mockFooter';
import { mockJoinUs } from 'mocks/resolvers/mockJoinUs';
import { mockMoreInformation } from 'mocks/resolvers/mockMoreInformation';
import { mockPillars } from 'mocks/resolvers/mockPillars';
import { mockprojects } from 'mocks/resolvers/mockProjects';

export const handlers = [
	rest.get('/description', mockDescription),
	rest.get('/footer', mockFooter),
	rest.get('/join-us', mockJoinUs),
	rest.get('/more-information', mockMoreInformation),
	rest.get('/pillars', mockPillars),
	rest.get('/projects', mockprojects),
];
