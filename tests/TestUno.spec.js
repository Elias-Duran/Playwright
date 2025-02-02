const { test, expect  } = require('@playwright/test');

test('Login Api', async ({ page }) => {
    //Abrir navegador
    await page.goto('https://app.rindegastos.com/');
    
  const [response] = await Promise.all([
    page.waitForResponse((response) => response.url().includes('/auth/signin') && response.status() === 200),
    page.fill('input[formcontrolname="username"]', 'usuario2@seleccionqa.cl'),
    page.press('input[formcontrolname="username"]','Enter'),
    //Esperar textBox
    page.waitForSelector('#signin_password', { state: 'visible' }),
    //Contraseña
    page.fill("//input[@id='signin_password']", 'Usuario.02'),
    page.press("//input[@id='signin_password']",'Enter'),
    
        
      ]);

      // 3. Verificar si la respuesta fue exitosa (código 200)
        expect(response.status()).toBe(200);
        // 7️⃣ Mostrar en consola la respuesta del servidor
        console.log('✅ Login exitoso, endpoint respondió con código:', response.status());
})