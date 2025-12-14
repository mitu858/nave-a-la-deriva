import { VercelRequest, VercelResponse } from "@vercel/node";

export default (_req: VercelRequest, res: VercelResponse) => {
    res.status(418).send("I'm a teapot");
};