import { VercelRequest, VercelResponse } from "@vercel/node";
import { lastDamagedSystem, systemCodes } from "./status";

export default (_req: VercelRequest, res: VercelResponse) => {
    if (!lastDamagedSystem) {
        res.status(400).send("No damaged system available. Call /status first.");
    } else {
        const code = systemCodes[lastDamagedSystem];
        res.send(`
<!DOCTYPE html>
<html>
  <head><title>Repair</title></head>
  <body>
    <div class=\"anchor-point\">${code}</div>
  </body>
</html>
`);
    }
};