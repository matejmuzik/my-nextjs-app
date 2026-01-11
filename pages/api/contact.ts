import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/lib/email'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }

  try {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Všechna pole jsou povinná',
      })
    }

    // Odeslat email na info@datlamo.cz
    const result = await sendEmail({
      to: 'info@datlamo.cz',
      subject: `Nová zpráva z kontaktního formuláře od ${name}`,
      html: `
        <h2>Nová zpráva z kontaktního formuláře</h2>
        <p><strong>Jméno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (!result.success) {
      console.error('[Contact] Email send failed:', result.error)
      return res.status(500).json({
        error: 'Chyba při odesílání zprávy',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Zpráva byla úspěšně odeslána',
    })
  } catch (error) {
    console.error('[Contact]', error)
    return res.status(500).json({
      error: 'Chyba při odesílání zprávy',
    })
  }
}
