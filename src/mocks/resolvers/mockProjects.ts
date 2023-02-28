import { ResponseComposition, RestContext, RestRequest } from 'msw';
import { projectsMock } from '../info';

export const mockprojects = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
	return res(
		ctx.status(200),
		ctx.json({
			message: 'Informacion de los projectos',
			data: projectsMock,
		}),
	);
};
