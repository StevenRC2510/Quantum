import { ResponseComposition, RestContext, RestRequest } from "msw";
import { sectionsLargePillarsMock } from "../info";

export const mockPillars = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext
) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: "Informacion de empresa",
      data: sectionsLargePillarsMock,
    })
  );
};
