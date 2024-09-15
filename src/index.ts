import express, { Request, Response } from 'express';

const app = express();

// Diccionario para los códigos de sistema averiados
const systemCodes: { [key: string]: string } = {
    navigation: "NAV-01",
    communications: "COM-02",
    life_support: "LIFE-03",
    engines: "ENG-04",
    deflector_shield: "SHLD-05"
};

// Variable global para almacenar el último sistema dañado
let lastDamagedSystem: string | null = null;

// Ruta raíz que muestra un mensaje o redirige
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Nave a la Deriva');
});

// Endpoint 1: /status
app.get('/status', (req: Request, res: Response) => {
    // Simula un sistema dañado aleatorio
    lastDamagedSystem = Object.keys(systemCodes)[Math.floor(Math.random() * Object.keys(systemCodes).length)];
    res.json({ damaged_system: lastDamagedSystem });
});

// Endpoint 2: /repair-bay
app.get('/repair-bay', (req: Request, res: Response) => {
    if (lastDamagedSystem) {
        const systemCode = systemCodes[lastDamagedSystem];
        res.send(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Repair</title>
          <link rel="icon" href="/favicon.ico" type="image/x-icon">
      </head>
      <body>
          <div class="anchor-point">${systemCode}</div>
      </body>
      </html>
    `);
    } else {
        res.status(400).send('No damaged system available. Call /status first.');
    }
});

// Endpoint 3: /teapot
app.post('/teapot', (req: Request, res: Response) => {
    res.status(418).send("I'm a teapot");
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
