# Nave a la Deriva API

## Descripción

Este proyecto es una API en TypeScript que simula la recuperación de una nave espacial a la deriva en el espacio profundo. La API proporciona información sobre los sistemas dañados de la nave y genera respuestas adecuadas para ayudar a un robot de reparación a localizar y reparar los sistemas averiados.

## Endpoints

La API expone los siguientes endpoints:

### 1. `GET /status`

Devuelve un sistema dañado aleatorio de la nave. La respuesta es un objeto JSON con el siguiente formato:

```json
{
  "damaged_system": "<sistema_dañado>"
}
```
### 2. GET /repair-bay
Devuelve una página HTML con un código único para el último sistema dañado registrado. La estructura de la página es:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Repair</title>
</head>
<body>
    <div class="anchor-point">CÓDIGO_SISTEMA</div>
</body>
</html>
```
### 3. POST /teapot
Retorna un código de estado HTTP 418 (I'm a teapot).

## Cómo Ejecutar el Proyecto
### 1. Clona el repositorio:
```git
git clone https://github.com/mitu858/nave-a-la-deriva.git
```
### 2. Navega al directorio del proyecto:
```bash
cd nave-a-la-deriva
```
### 3. Instala las dependencias:
```bash
npm install
```
### 4. Compila el proyecto:
```bash
npm run build
```

### 5. Inicia el servidor:
```bash
npm start
```

### El servidor debería estar disponible en http://localhost:3000.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.

## Contacto
### Para cualquier consulta, puedes contactar al autor del proyecto:
 #### Nombre: Juan de la Fuente
 #### GitHub: mitu858
