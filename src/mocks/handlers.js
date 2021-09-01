import { rest } from "msw";
import getQuestion from "mocks/getQuestion";

const handlers = [
    rest.get("/api/question", (req, res, ctx) => {
        return res(ctx.delay(1_000), ctx.status(200), ctx.json(getQuestion()));
    }),
    rest.get("/api/error", (req, res, ctx) => {
        return res(ctx.delay(1_000), ctx.status(403));
    }),
];

export default handlers;
