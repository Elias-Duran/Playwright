const { test, expect } = require('@playwright/test');

test('Rindegastos Login', async ({ page }) => { 
    
    await page.goto('https://app.rindegastos.com/');
    
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

   
        
    
    await page.click(".rindeButton-g.tiny.nM");
    await page.click(".ng-input");
   
    await page.click(".ng-option.ng-option-selected.ng-option-marked.ng-star-inserted>*");
    await page.click('#createSingleButton');


     // ✅ Esperar hasta que la página cargue completamente
     console.log('⏳ Esperando que la página cargue completamente...');
     await page.waitForLoadState('networkidle');
        
    //Provedor

    await page.locator("[placeholder='Indica el proveedor']").fill('Lider');
    //Fecha
    //await page.locator("[placeholder='Fecha del gasto']").fill('02-04-2024');
    //await page.keyboard.press('Escape')
    //Total
    await page.locator("[placeholder='Ej: 1 000']").fill('30000')
    await page.press('Enter');
    //Categoria
    await page.click(".input-container.br-8.wp-100");
    await page.click("#aaade80629c1-0");
    //Rut
    await page.locator("[placeholder='RUT Proveedor']").fill('113946527');
    //Tipo Documento
    await page.click("[for='252983813Boleta Electrónica1']")
    //Nota
    await page.locator("[placeholder='Escribe una nota o comentario']");
})