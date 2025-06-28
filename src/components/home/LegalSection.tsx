
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const LegalSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Conheça os seus Direitos</h2>
        <p className="section-subtitle">
          Informações sobre leis e direitos que protegem vítimas de violência doméstica
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <Card className="border border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-60 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lei Maria da Penha</h3>
                  <p className="text-gray-600 mb-6">
                    A Lei Maria da Penha (Lei nº 11.340/2006) é uma das principais ferramentas de proteção contra a violência doméstica no Brasil, criando mecanismos para prevenir e coibir a violência contra a mulher.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/legal#maria-da-penha">Entenda a Lei</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-60 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Medidas Protetivas</h3>
                  <p className="text-gray-600 mb-6">
                    Medidas protetivas são ordens judiciais que visam proteger a vítima e podem incluir o afastamento do agressor, proibição de contato e outras providências de proteção.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to="/legal#protective-measures">Como Solicitar</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
            <Link to="/legal">Saiba Mais sobre seus Direitos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
