import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function useContact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'General Portfolio Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'General Portfolio Inquiry',
      message: '',
    });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (loading) return false;

    // Validate all fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError('Please fill in all the fields.');
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }

    setLoading(true);
    setError(null);

    // Safely retrieve environment variables and resolve any leftover placeholders or older template versions
    const envServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const envTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const envPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const serviceId = envServiceId && envServiceId !== "your_service_id" ? envServiceId : "service_k4urm6o";
    const templateId = envTemplateId && envTemplateId !== "your_template_id" && envTemplateId !== "template_o6xlmex" ? envTemplateId : "template_6xt2crl";
    const publicKey = envPublicKey && envPublicKey !== "your_public_key" ? envPublicKey : "XeL1noFXVubzXod7_";

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            // Support both custom property names and standard EmailJS default parameters
            name: formData.name.trim(),
            from_name: formData.name.trim(),
            
            email: formData.email.trim(),
            from_email: formData.email.trim(),
            reply_to: formData.email.trim(),
            
            phone: formData.phone.trim(),
            phone_number: formData.phone.trim(),
            from_phone: formData.phone.trim(),
            
            service: formData.service,
            subject: `New Portfolio Inquiry: ${formData.service}`,
            
            message: formData.message.trim(),
            message_html: formData.message.trim()
          },
          publicKey
        );

        // Persistent safe backup copy
        try {
          const savedMessages = JSON.parse(localStorage.getItem('mif_contact_messages') || '[]');
          savedMessages.push({ ...formData, date: new Date().toISOString() });
          localStorage.setItem('mif_contact_messages', JSON.stringify(savedMessages));
        } catch (storageErr) {
          console.error('Storage Backup Error:', storageErr);
        }

        setSubmitted(true);
        resetForm();
        return true;
      } else {
        throw new Error("Missing EmailJS credentials");
      }
    } catch (err: any) {
      console.error('EmailJS Transmission Failure:', err);
      // Capture and present the exact error message from the EmailJS API response for easier debugging
      const errorDetail = err?.text || err?.message || (typeof err === 'string' ? err : '');
      const defaultMsg = 'Something went wrong. Please check your credentials or network and try again.';
      setError(errorDetail ? `EmailJS Error: ${errorDetail}` : defaultMsg);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    submitted,
    error,
    handleChange,
    sendEmail,
    setSubmitted,
    setError,
  };
}
