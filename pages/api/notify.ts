import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { isValidEmail } from '@/lib/utils'
import { sendEmail, getNotificationEmail } from '@/lib/email'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { email, market } = req.body

      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email je povinný',
        })
      }

      if (!isValidEmail(email)) {
        return res.status(400).json({
          success: false,
          message: 'Neplatný email',
        })
      }

      // Zkontrolovat, jestli už email existuje
      const existing = await prisma.notification.findUnique({
        where: { email },
      })

      if (existing) {
        return res.status(409).json({
          success: false,
          message: 'Tento email už je zaregistrován',
        })
      }

      // Vytvořit novou notifikaci
      const notification = await prisma.notification.create({
        data: { email },
      })

      console.log(`[Notify] Registered notification for: ${email}`)

      // Odeslat potvrzovací email
      const emailHtml = getNotificationEmail(email, market || 'praha')

      const emailResult = await sendEmail({
        to: email,
        subject: 'Upozornění bylo zaregistrováno',
        html: emailHtml,
      })

      if (!emailResult.success) {
        console.warn('[Notify] Email failed to send:', emailResult.error)
        // Pokračuj i když se email nepodařilo odeslat
      }

      return res.status(201).json({
        success: true,
        message: 'Registrace úspěšná. Pošleme vám email, jakmile bude dostupné.',
        notification,
      })
    } catch (error) {
      console.error('[Notify] Error:', error)
      return res.status(500).json({
        success: false,
        message: 'Chyba při registraci',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  } else if (req.method === 'GET') {
    try {
      const notifications = await prisma.notification.findMany({
        orderBy: { createdAt: 'desc' },
      })

      return res.status(200).json({
        success: true,
        notifications,
      })
    } catch (error) {
      console.error('[Notify] Error:', error)
      return res.status(500).json({
        success: false,
        message: 'Chyba při načítání',
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }
}
