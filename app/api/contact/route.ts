import { sendEmail } from '@/lib/email';

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Všechna pole jsou povinná' },
        { status: 400 }
      );
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
      `
    });

    if (!result.success) {
      console.error('[Contact] Email send failed:', result.error);
      return Response.json(
        { error: 'Chyba při odesílání zprávy' },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: 'Zpráva byla úspěšně odeslána' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact]', error);
    return Response.json(
      { error: 'Chyba při odesílání zprávy' },
      { status: 500 }
    );
  }
}
