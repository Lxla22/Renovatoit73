import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get('name') as string
    const phone = formData.get('phone') as string
    const email = formData.get('email') as string
    const ville = formData.get('ville') as string
    const adresse = formData.get('adresse') as string || ''
    const codePostal = formData.get('codePostal') as string || ''
    const message = formData.get('message') as string || ''
    const servicesRaw = formData.getAll('services') as string[]
    const photos = formData.getAll('photos') as File[]

    // Validation
    if (!name || !phone || !email || !ville) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const serviceLabels: Record<string, string> = {
      demoussage: 'Démoussage de toiture',
      nettoyage: 'Nettoyage de toiture',
      hydrofuge: 'Traitement hydrofuge',
      'hydrofuge-colore': 'Traitement hydrofuge coloré',
      peinture: 'Peinture de toiture',
      gouttieres: 'Nettoyage de gouttières',
      terrasses: 'Nettoyage de terrasses',
      autre: 'Autre / Je ne sais pas',
    }

    const serviceLabel = servicesRaw.length > 0
      ? servicesRaw.map((s) => serviceLabels[s] || s).join(', ')
      : 'Non précisé'

    // Prepare attachments
    const attachments = await Promise.all(
      photos
        .filter((f) => f && f.size > 0)
        .map(async (file) => {
          const buffer = Buffer.from(await file.arrayBuffer())
          return {
            filename: file.name,
            content: buffer,
            contentType: file.type,
          }
        })
    )

    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Arial', sans-serif; background: #0A0A0A; color: #fff; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background: #161616; border-radius: 12px; overflow: hidden; }
          .header { background: #FF6A00; padding: 32px; text-align: center; }
          .header h1 { color: #fff; font-size: 24px; margin: 0; }
          .content { padding: 32px; }
          .field { margin-bottom: 20px; border-bottom: 1px solid #2A2A2A; padding-bottom: 20px; }
          .label { color: #FF6A00; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
          .value { color: #fff; font-size: 16px; }
          .message-box { background: #0A0A0A; border-radius: 8px; padding: 16px; color: #ccc; line-height: 1.6; }
          .footer { padding: 20px 32px; color: #666; font-size: 12px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏠 Nouvelle demande de devis — RENOVA'TOIT 73</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nom & Prénom</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Téléphone</div>
              <div class="value"><a href="tel:${phone}" style="color: #FF6A00;">${phone}</a></div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #FF6A00;">${email}</a></div>
            </div>
            ${adresse ? `<div class="field"><div class="label">Adresse</div><div class="value">${adresse}</div></div>` : ''}
            ${codePostal ? `<div class="field"><div class="label">Code postal</div><div class="value">${codePostal}</div></div>` : ''}
            <div class="field">
              <div class="label">Ville</div>
              <div class="value">${ville}</div>
            </div>
            <div class="field">
              <div class="label">Service souhaité</div>
              <div class="value">${serviceLabel}</div>
            </div>
            ${message ? `
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            ${attachments.length > 0 ? `
            <div class="field">
              <div class="label">Photos</div>
              <div class="value">${attachments.length} photo(s) en pièce(s) jointe(s)</div>
            </div>
            ` : ''}
          </div>
          <div class="footer">
            Demande reçue le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
            <br>via renovatoit73.fr
          </div>
        </div>
      </body>
      </html>
    `

    await transporter.sendMail({
      from: `"RENOVA'TOIT 73 — Site Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'renovatoit73@gmail.com',
      subject: `🏠 Devis demandé — ${name} (${ville})`,
      html: htmlBody,
      replyTo: email,
      attachments,
    })

    await transporter.sendMail({
      from: `"RENOVA'TOIT 73" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Votre demande de devis a bien été reçue — RENOVA'TOIT 73",
      html: `
        <!DOCTYPE html>
        <html>
        <head><style>
          body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
          .container { max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; }
          .header { background: #FF6A00; padding: 28px; text-align: center; }
          .header h1 { color: #fff; font-size: 20px; margin: 0; }
          .content { padding: 32px; color: #333; line-height: 1.6; }
          .highlight { background: #FFF3E0; border-left: 3px solid #FF6A00; padding: 12px 16px; border-radius: 4px; margin: 20px 0; }
        </style></head>
        <body>
          <div class="container">
            <div class="header"><h1>RENOVA'TOIT 73</h1></div>
            <div class="content">
              <p>Bonjour <strong>${name}</strong>,</p>
              <p>Nous avons bien reçu votre demande de devis pour <strong>${serviceLabel}</strong> à <strong>${ville}</strong>.</p>
              <div class="highlight">
                Nous vous recontacterons rapidement (jours ouvrés) pour vous proposer un devis gratuit et personnalisé.
              </div>
              <p>En attendant, n'hésitez pas à nous appeler directement :</p>
              <p style="font-size: 20px; font-weight: bold; color: #FF6A00;">📞 07 53 36 18 80</p>
              <p>Cordialement,<br><strong>L'équipe RENOVA'TOIT 73</strong></p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
