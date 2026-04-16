import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const About = () => (
  <section id="quem-somos" className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img 
            src="https://images.unsplash.com/photo-1600880212319-462706e2327f?q=80&w=2070&auto=format&fit=crop" 
            alt="Time Profissional" 
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold mb-6">11 ANOS DE HISTÓRIA</span>
          <h2 className="text-4xl font-bold text-emerald-900 mb-6">Muito mais que prestação de serviços. Somos parceiros estratégicos.</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            A Limpalto nasceu para entregar soluções reais para síndicos e empresários. Com forte atuação em Campo Grande e Barra da Tijuca, preparamos nossa equipe para superar o padrão de exigência dos novos empreendimentos.
          </p>
          <Button variant="dark">Fale com um Consultor</Button>
        </motion.div>
      </div>
    </div>
  </section>
);