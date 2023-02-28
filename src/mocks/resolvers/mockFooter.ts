import { ResponseComposition, RestContext, RestRequest } from 'msw';
import { sectionsMook } from '../info';

export const mockFooter = (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
	return res(
		ctx.status(200),
		ctx.json({
			message: 'Informacion de empresa',
			data: sectionsMook,
		}),
	);
};
