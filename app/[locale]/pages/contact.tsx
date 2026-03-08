'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    console.log("aaa")
    console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
    console.log("Template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
    console.log("Public Key:", process.env.NEXT_PUBLIC_PUBLIC_KEY);
    setIsSending(true);
    if (!process.env.NEXT_PUBLIC_SERVICE_ID || !process.env.NEXT_PUBLIC_TEMPLATE_ID || !process.env.NEXT_PUBLIC_PUBLIC_KEY) {
      alert("Erro ao enviar mensagem, por favor tente envie um e-mail para ferreiraalencoi1@gmail.com!");
      setIsSending(false);
      return;
    }
    // Substitua pelos seus IDs do painel do EmailJS
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID ,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      formRef.current, 
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem.");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <main id="contact" className="flex mb-[100px] py-[100px] h-[590px] md:py-[350px] flex-row md:items-center justify-center gap-8 px-8 md:h-screen 2xl:w-full 2xl:max-h-[900px]">
      <div className="flex flex-col items-start justify-start w-full max-w-[900px] bg-black min-h-[550px] rounded-2xl md:w-7/12 p-8 gap-6 shadow-2xl">
        
        <div className="flex flex-col w-full justify-center items-center gap-2">
          <p className="text-3xl font-bold text-white uppercase tracking-tight">
            {t('contactme')}
          </p>
          <div className="h-1 w-20 bg-blue-600 rounded-full mb-6"></div>
        </div>

        {/* Formulário de Contato */}
        <form 
          ref={formRef} 
          onSubmit={sendEmail} 
          className="flex flex-col w-full gap-5"
        >
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <input
              type="text"
              name="user_name"
              placeholder="Nome"
              required
              className="w-full bg-zinc-900 text-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full bg-zinc-900 text-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <textarea
            name="message"
            placeholder="Sua mensagem..."
            required
            rows={5}
            className="w-full bg-zinc-900 text-white border border-zinc-800 p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={isSending}
            className="w-full md:w-max px-12 py-4 bg-white text-black font-bold rounded-lg uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:bg-zinc-700"
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </main>
  );
}