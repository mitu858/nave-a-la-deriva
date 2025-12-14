import { VercelRequest, VercelResponse } from "@vercel/node";

export default (_req: VercelRequest, res: VercelResponse) => {
    res.send("Bienvenido a la API de Nave a la Deriva");
};