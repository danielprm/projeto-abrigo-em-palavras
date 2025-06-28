
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ResourcesSection from '@/components/home/ResourcesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LegalSection from '@/components/home/LegalSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ResourcesSection />
        <TestimonialsSection />
        <LegalSection />
        
        {/* Call to Action Section */}
        <section className="section gradient-bg">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Você não está sozinha
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Se você está enfrentando uma situação de violência doméstica, saiba que há pessoas prontas para ajudar. Dê o primeiro passo para uma vida livre de violência.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg">
                <Link to="/resources">Buscar Ajuda Agora</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg border-brand-600 text-brand-600">
                <Link to="/support">Saiba Como Agir</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
