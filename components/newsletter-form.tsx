'use client';

import { FormEvent, useState } from 'react';

export function NewsletterForm() {
  const [message, setMessage] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') ?? '').trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Por favor, informe um e-mail válido.');
      return;
    }

    setMessage('Inscrição realizada com sucesso. Em breve você receberá novidades do PME.');
    form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Nome (opcional)</label>
          <input id="name" name="name" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-institutional-blue" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">E-mail</label>
          <input required id="email" name="email" type="email" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-institutional-blue" />
        </div>
      </div>
      <button className="rounded-lg bg-institutional-blue px-5 py-2 font-medium text-white transition hover:bg-blue-900" type="submit">
        Quero receber novidades
      </button>
      {message ? <p className="text-sm text-slate-700">{message}</p> : null}
    </form>
  );
}
