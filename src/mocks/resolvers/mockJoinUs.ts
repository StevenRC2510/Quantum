import { ResponseComposition, RestContext, RestRequest } from "msw";
import { sectionsLargeCosmicMembershipMock } from "../info";

export const mockJoinUs = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => {
    return res(
    ctx.status(200),
    ctx.json({
      message: "Informacion de aplicar",
      data: sectionsLargeCosmicMembershipMock,
    })
  );
};
