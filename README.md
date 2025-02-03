# Playwright - Pruebas Automatizadas de Inicio de Sesión en Rindegastos

Este proyecto automatiza el inicio de sesión en la plataforma Rindegastos utilizando Playwright. Realiza intentos de inicio de sesión múltiples veces, captura las respuestas de la API y genera un informe con los resultados.

## 🛠 Posibles Errores y la Solucion automatizada
- **Error de Timeout**: Asegúrese de que la página se carga correctamente y ajuste los tiempos de espera (`timeout`) si es necesario.
- **Credenciales Incorrectas**: Verifique que el usuario y la contraseña sean correctos.
- **Bloqueo de IP**: Si se realizan muchos intentos fallidos, la plataforma podría bloquear temporalmente el acceso.

## 📌 Requisitos Previos

Antes de ejecutar la prueba, asegúrese de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Playwright](https://playwright.dev/)

Si Playwright no está instalado, puede hacerlo con el siguiente comando:
```sh
npm install -D @playwright/test
```

## 🚀 Instalación y Configuración
1. Clone este repositorio o copie el código en su entorno de trabajo.
2. Instale las dependencias necesarias ejecutando:
   ```sh
   npm install
   ```
3. Asegúrese de que Playwright tenga los navegadores requeridos:
   ```sh
   npx playwright install
   ```

## 📜 Descripción del Script
El script `home.spec.js` realiza los siguientes pasos:

1. Abre la página de inicio de sesión de Rindegastos.
2. Realiza dos intentos de inicio de sesión con las credenciales proporcionadas.
3. Captura la respuesta de la API tras el intento de inicio de sesión.
4. Si la autenticación es exitosa, espera la carga de la página.
5. Accede al menú y cierra la sesión.
6. Registra los resultados en un archivo `login_report.json`.

## ⚡ Ejecución de la Prueba
Para ejecutar la prueba, use el siguiente comando:
```sh
npx playwright test home.spec.js --project=chromium --headed
```
Generar reporte:
```sh
npx playwright test home.spec.js --project=chromium --headed
```
## 📄 Formato del Informe
El script genera un informe `login_report.json` con el resultado de cada intento de inicio de sesión. Ejemplo:
```json
[
  {
    "intento": 1,
    "status": 200,
    "timestamp": "2025-02-01T12:00:00Z"
  },
  {
    "intento": 2,
    "status": 401,
    "timestamp": "2025-02-01T12:01:00Z"
  }
]
```
## 📢 Contribuciones
Si desea mejorar el script, comunicar con QA Elias Duran.




