
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-soft-purple/30 via-soft-blue/30 to-soft-pink/30">
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-800">
            Um abrigo para quem precisa de apoio
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Informação, acolhimento e recursos para enfrentar a violência doméstica no Rio de Janeiro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg">
              <Link to="/resources">Encontre Ajuda</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg border-brand-600 text-brand-600">
              <Link to="/support">Como Agir</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
