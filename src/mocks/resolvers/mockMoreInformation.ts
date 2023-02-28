import { ResponseComposition, RestContext, RestRequest } from "msw";
import { moreInformationMock } from "../info";

export const mockMoreInformation = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: "Mas informacion de la compañia",
      data: moreInformationMock,
    })
  );
};
