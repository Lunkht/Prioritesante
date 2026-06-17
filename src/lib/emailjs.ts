import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface SendEmailParams {
  templateId: string;
  templateParams: Record<string, string>;
}

export function initEmailJS() {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  }
}

export async function sendEmail({ templateId, templateParams }: SendEmailParams) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  if (!serviceId || !PUBLIC_KEY || !templateId) {
    console.warn('EmailJS non configuré. Vérifie le fichier .env');
    return { success: false, error: 'Configuration manquante' };
  }
  try {
    const response = await emailjs.send(serviceId, templateId, templateParams);
    return { success: true, response };
  } catch (error) {
    console.error('Erreur EmailJS:', error);
    return { success: false, error };
  }
}
