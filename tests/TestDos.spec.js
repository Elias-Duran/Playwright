const { test, expect } = require('@playwright/test');

test('Login API multiple times', async ({ page }) => {
    const intentos = 4; // Número de intentos de inicio de sesión

    for (let i = 0; i < intentos; i++) {
        console.log(`🔄 Intento ${i + 1} de inicio de sesión...`);
        const startTime = new Date().toISOString();

        // Abrir la página de inicio de sesión
        await page.goto('https://app.rindegastos.com/');

        const [response] = await Promise.all([
            page.waitForResponse((response) => 
                response.url().includes('/auth/signin') && response.status() === 200
            ),
            page.fill('input[formcontrolname="username"]', 'usuario2@seleccionqa.cl'),
            page.press('input[formcontrolname="username"]', 'Enter'),
            page.waitForSelector('#signin_password', { state: 'visible' }),
            page.fill("//input[@id='signin_password']", 'Usuario.02'),
            page.press("//input[@id='signin_password']", 'Enter'),
        ]);

        const endTime = new Date().toISOString();

        // Verificar respuesta de la API
        expect(response.status()).toBe(200);
        console.log(`✅ Intento ${i + 1} exitoso, código: ${response.status()}`);

        // Esperar un poco antes de volver a intentar (opcional)
        await page.waitForTimeout(2000); 

        // Volver a la página de inicio de sesión o cerrar sesión antes de repetir
        await page.goto('https://app.rindegastos.com/logout'); 
    }
});