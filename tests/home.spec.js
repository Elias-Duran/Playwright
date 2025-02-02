const { test, expect } = require('@playwright/test');

test('Rindegastos Login', async ({ page }) => {
    const intentos = 1; // Número de intentos de inicio de sesión
    await page.goto('https://app.rindegastos.com/');
    
    for (let i = 0; i < intentos; i++) {
        console.log(`🔄 Intento ${i + 1} de inicio de sesión...`);
        if (page && !page.isClosed()) {
            console.log('✅ Ingreso Correo, Enter');
            await page.locator('input[formcontrolname="username"]').fill('usuario2@seleccionqa.cl');
            await page.click(".valueButton");
            console.log('✅ Esperando Input contraseña');
            await page.waitForSelector('#signin_password', { state: 'visible', timeout:10000 });
            console.log('✅ Ingreso contraseña, Enter');
            await page.locator("//input[@id='signin_password']").fill('Usuario.02');
            await page.click(".valueButton");
            console.log('✅ Click iniciar sesion');
        } else {
            console.error("❌ La página se cerró antes de hacer clic");
        }

        // ✅ Esperar hasta que la página cargue completamente
        console.log('⏳ Esperando que la página cargue completamente...');
        await page.waitForLoadState('networkidle');

        if (page && !page.isClosed()) {
            console.log('✅ Página cargada, continuando con la automatización...');

            await page.waitForSelector(".sessionMenu", { timeout: 10000 });
            const menu = await page.$(".sessionMenu");
            await menu.click();

      

            console.log('✅ Click "Cerrar sesión"');
            await page.waitForSelector(".option.orange", { timeout: 10000 });
            const logoutButton = await page.$(".option.orange");

            if (logoutButton) {
                await logoutButton.click();
                console.log('✅ Cerrar sesión completado');
            } else {
                console.error('❌ No se encontró el botón de cerrar sesión');
            }
        } else {
            console.error("❌ La página se cerró antes de hacer clic");
        }

    }
} )