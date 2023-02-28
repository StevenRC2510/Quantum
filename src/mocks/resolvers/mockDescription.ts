import { ResponseComposition, RestContext, RestRequest } from "msw";
import { goldDescriptionMock, silverDescriptionMock } from "../info";

export const mockDescription = (
    req: RestRequest,
    res: ResponseComposition,
    ctx: RestContext
  ) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "Descripciones de planes",
        data: [goldDescriptionMock, silverDescriptionMock],
      })
    );
  }