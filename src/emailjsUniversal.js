import emailjs from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = 'service_zjphp6o';
export const EMAILJS_TEMPLATE_ID = 'template_gtp8jpp';
export const EMAILJS_PUBLIC_KEY = 'vP3oWQf-NZAqonwNB';

export async function sendUniversalSubmission({
  type,
  user_email,
  first_name = '',
  last_name = '',
  subject = '',
  message = '',
}) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      type,
      user_email: user_email ?? '',
      first_name: first_name ?? '',
      last_name: last_name ?? '',
      subject: subject ?? '',
      message: message ?? '',
    },
    EMAILJS_PUBLIC_KEY
  );
}
