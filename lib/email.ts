import nodemailer from 'nodemailer'

// Vytvoření transportu s SMTP konfigurací
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true pro 465, false pro ostatní porty
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@datlamo.cz',
      to: options.to,
      subject: options.subject,
      html: options.html,
    })

    console.log('[Email] Sent:', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('[Email] Error:', error)
    return { success: false, error }
  }
}

// Email template pro potvrzení objednávky
export function getOrderConfirmationEmail(
  email: string,
  orderId: string,
  confirmationCode: string,
  product: string,
  market: string,
  price: number
) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #047BEC 0%, #0056b3 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; }
          .header h1 { margin: 0; font-size: 28px; }
          .content { background: #f9f9f9; padding: 30px; margin: 20px 0; border-radius: 8px; }
          .order-details { background: white; padding: 20px; border-left: 4px solid #047BEC; margin: 15px 0; }
          .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
          .detail-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #555; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; }
          .button { display: inline-block; background: #047BEC; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✓ Objednávka potvrena</h1>
          </div>
          
          <div class="content">
            <p>Dobrý den,</p>
            <p>Děkujeme za vaši objednávku! Vaše objednávka byla úspěšně zpracována.</p>
            
            <div class="order-details">
              <div class="detail-row">
                <span class="label">ID Objednávky:</span>
                <span>${orderId}</span>
              </div>
              <div class="detail-row">
                <span class="label">Potvrzovací kód:</span>
                <span>${confirmationCode}</span>
              </div>
              <div class="detail-row">
                <span class="label">Produkt:</span>
                <span>${product === 'dataset' ? 'Dataset' : 'Dataset + Dashboard'}</span>
              </div>
              <div class="detail-row">
                <span class="label">Trh:</span>
                <span>${market === 'praha' ? '🇨🇿 Praha' : market === 'brno' ? '🇨🇿 Brno' : '🇨🇿 Ostrava'}</span>
              </div>
              <div class="detail-row">
                <span class="label">Cena:</span>
                <span style="font-size: 18px; font-weight: bold; color: #047BEC;">${price} Kč</span>
              </div>
            </div>
            
            <p><strong>Další kroky:</strong></p>
            <ul>
              <li>Soubor si stáhneš na odkazu v emailu níže</li>
              <li>Obsah je dostupný ihned po zaplacení</li>
              <li>Máš 30 dní na stažení datasetu</li>
            </ul>
            
            <a href="http://localhost:3000/api/download/${orderId}" class="button">Stáhnout soubor</a>
            
            <p>Máš-li nějaké otázky, neváhej nás kontaktovat.</p>
            
            <p>S pozdravem,<br/>Tým Datlamo</p>
          </div>
          
          <div class="footer">
            <p>© 2026 Datlamo. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

// Email template pro notifikaci "upozornit mě"
export function getNotificationEmail(email: string, market: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #047BEC 0%, #0056b3 100%); color: white; padding: 30px; text-align: center; border-radius: 8px; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { background: #f9f9f9; padding: 30px; margin: 20px 0; border-radius: 8px; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✓ Přihlášen k upozornění</h1>
          </div>
          
          <div class="content">
            <p>Dobrý den,</p>
            <p>Děkujeme za registraci! Pošleme ti upozornění, jakmile bude produkt <strong>${market === 'praha' ? '🇨🇿 Praha' : market === 'brno' ? '🇨🇿 Brno' : '🇨🇿 Ostrava'}</strong> dostupný.</p>
            
            <p>Budeš mezi prvními, kdo se dozví o novém datasetu!</p>
            
            <p>S pozdravem,<br/>Tým Datlamo</p>
          </div>
          
          <div class="footer">
            <p>© 2026 Datlamo. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
