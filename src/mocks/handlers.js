import { rest } from "msw";
import getQuestion from "mocks/getQuestion";

const handlers = [
    rest.get("/api/question", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(getQuestion()));
    }),
];

export default handlers;
