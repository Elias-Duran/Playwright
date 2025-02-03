const { test, expect } = require('@playwright/test');
const fs = require('fs');
test('Rindegastos Login', async ({ page }) => {
    const intentos = 2; // Número de intentos
    const report = [];  // Array para almacenar los resultados
    
    
    await page.goto('https://app.rindegastos.com/');
    
    for (let i = 0; i < intentos; i++) {
        try {
            console.log(`🔄 Intento ${i + 1} de inicio de sesión...`);

            // Ingresar usuario
            console.log('✅ Escribir Email');
            await page.locator('input[formcontrolname="username"]').fill('usuario2@seleccionqa.cl');
            await page.click(".valueButton");

            // Esperar campo de contraseña
            await page.waitForSelector('#signin_password', { state: 'visible', timeout: 10000 });

            // Ingresar contraseña y enviar
            console.log('✅ Escribir contraseña');
            await page.locator("#signin_password").fill('Usuario.02');

            // Capturar respuesta de inicio de sesión
            const [loginResponse] = await Promise.all([
                page.waitForResponse(res => res.url().includes('/auth/signin')),
                page.click(".valueButton"),
            ]);

            const status = loginResponse.status();
            console.log(`✅ Inicio de sesión - Código: ${status}`);
            report.push({ intento: i + 1, status, timestamp: new Date().toISOString() });

            // Esperar carga completa
            await page.waitForLoadState('networkidle');

            // Click en menú y cerrar sesión
            console.log('✅ Click "Menú"');
            await page.waitForSelector(".sessionMenu", { timeout: 10000 });
            await page.click(".sessionMenu");

            console.log('✅ Click "Cerrar sesión"');
            await page.waitForSelector(".option.orange", { timeout: 10000 });
            await page.click(".option.orange");

            console.log('✅ Cerrar sesión completado');

        } catch (error) {
            console.error(`❌ Error en intento ${i + 1}: ${error.message}`);
            report.push({ intento: i + 1, status: "error", timestamp: new Date().toISOString() });
        }
    }

    // Guardar el informe en un archivo JSON
    fs.writeFileSync('login_report.json', JSON.stringify(report, null, 2));
    console.log('📄 Informe guardado en "login_report.json"');
});
