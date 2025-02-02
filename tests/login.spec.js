const { test, expect } = require('@playwright/test');

test('Rindegastos Login', async ({ page }) => {
    const intentos = 2; // Número de intentos de inicio de sesión

    for (let i = 0; i < intentos; i++) {
        console.log(`🔄 Intento ${i + 1} de inicio de sesión...`);

        await page.goto('https://app.rindegastos.com/');
        
        // Ingreso de correo
        console.log('✅ Ingreso Correo, Enter');
        await page.locator('input[formcontrolname="username"]').fill('usuario2@seleccionqa.cl');
        await page.click(".valueButton");

        // Esperar el campo de contraseña
        console.log('✅ Esperando Input contraseña');
        await page.waitForSelector('#signin_password', { state: 'visible', timeout: 10000 });

        // Ingreso de contraseña
        console.log('✅ Ingreso contraseña, Enter');
        await page.locator("//input[@id='signin_password']").fill('Usuario.02');
        await page.click(".valueButton");
        console.log('✅ Click iniciar sesión');

        // Interceptar la solicitud de la API para verificar el código de respuesta
        const response = await page.waitForResponse(response => response.url().includes('/api/auth/login') && response.status() === 200, { timeout: 10000 }).catch(() => null);
        
        if (response) {
            console.log(`✅ Login exitoso, código: ${response.status()}`);
        } else {
            console.error("❌ Error en el login: No se recibió respuesta 200.");
            return;
        }

        // Esperar que la página cargue completamente
        console.log('⏳ Esperando que la página cargue completamente...');
        await page.waitForLoadState('networkidle');

        if (await page.locator(".sessionMenu").isVisible({ timeout: 10000 })) {
            console.log('✅ Página cargada, continuando con la automatización...');
            
            const menu = await page.$(".sessionMenu");
            if (menu) {
                await menu.click();
            } else {
                console.error("❌ No se encontró el menú de sesión.");
                return;
            }

            console.log('✅ Click "Cerrar sesión"');
            const logoutButton = await page.$(".option.orange");
            
            if (logoutButton) {
                await logoutButton.click();
                console.log('✅ Cerrar sesión completado');
            } else {
                console.error('❌ No se encontró el botón de cerrar sesión');
            }
        } else {
            console.error("❌ No se pudo verificar la sesión.");
        }
    }
});
