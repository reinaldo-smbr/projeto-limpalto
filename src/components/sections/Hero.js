import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import imgFundo from'../../../src/assets/images/banner_inicial_01.webp'

export const Hero = () => (
  <section id="início" className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={imgFundo}
        alt="Limpalto - Cuidados premium para o seu patrimônio" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-900/80" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="text-amber-500 font-bold tracking-[0.2em] text-sm mb-4 block uppercase">
          Terceirização Inteligente para Condomínios e Empresas
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
          Cuidado Premium para o seu Patrimônio. <br/>
          <span className="text-amber-500">Tranquilidade</span> para Você.
        </h1>
        <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-2xl">
          Há 11 anos transformando ambientes com excelência em Paisagismo, Limpeza e Portaria no Rio de Janeiro.
        </p>
        <a href='https://wa.me/5521998739149?text=Olá! gostaria de mais informações!' target='_blank'>
        <Button variant="primary" className="text-lg px-8 py-6 h-auto">
          <MessageCircle className="fill-current" /> Solicitar Orçamento Rápido
        </Button></a>
      </motion.div>
    </div>
  </section>
);