# 🚀 Automatización de Inicio de Sesión con Playwright

Este proyecto utiliza **Playwright** para automatizar pruebas de inicio de sesión en la plataforma **Rindegastos**.

---

## 📌 Requisitos previos

Antes de ejecutar el script, asegúrese de tener instalado:

✅ [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)\
✅ [Playwright](https://playwright.dev/)

---

## 📥 Instalación

1️⃣ Clone este repositorio en su máquina local:

```sh
git clone https://github.com/tu-repositorio/playwright-login.git
cd playwright-login
```

2️⃣ Instale las dependencias necesarias:

```sh
npm install
```

3️⃣ Instale los navegadores compatibles con Playwright:

```sh
npx playwright install
```

---

## ▶️ Ejecución de las pruebas

Para ejecutar la prueba automatizada de inicio de sesión, utilice el siguiente comando:

```sh
npx playwright test login.spec.js
```

---

## 📝 Descripción del script

El script realiza las siguientes acciones:

1️⃣ Accede a la página de inicio de sesión de **Rindegastos**.\
2️⃣ Ingresa las credenciales de usuario.\
3️⃣ Realiza múltiples intentos de inicio de sesión (según configuración).\
4️⃣ Verifica la carga completa de la página.\
5️⃣ Cierra sesión y repite el proceso.\
6️⃣ Registra la actividad en la consola.

---

## ⚙️ Personalización

🔹 Puede modificar la variable `intentos` en el script para ajustar el número de repeticiones.\
🔹 Para cambiar las credenciales de usuario, edite el archivo `login.spec.js` en las líneas correspondientes.

---

## 📊 Reporte de pruebas

El informe de pruebas se puede generar con el siguiente comando:

```sh
npx playwright test --reporter=html
```

Este comando generará un informe detallado en formato **HTML** en la carpeta `playwright-report/`.

---

## 📞 Contacto

📧 Para cualquier consulta o mejora del proyecto, comuníquese con el equipo de QA.

---

✨ **© 2025 - Empresa QA Automation** ✨

