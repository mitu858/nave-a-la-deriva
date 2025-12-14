import { VercelRequest, VercelResponse } from "@vercel/node";

export let lastDamagedSystem: string | null = null;
export const systemCodes: { [key: string]: string } = {
    navigation: "NAV-01",
    communications: "COM-02",
    life_support: "LIFE-03",
    engines: "ENG-04",
    deflector_shield: "SHLD-05"
};

export default (_req: VercelRequest, res: VercelResponse) => {
    const keys = Object.keys(systemCodes);
    lastDamagedSystem = keys[Math.floor(Math.random() * keys.length)];
    res.json({ damaged_system: lastDamagedSystem });
};