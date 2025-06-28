
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Encontrar este site foi meu primeiro passo para sair de uma situação abusiva. As informações claras me ajudaram a entender que eu não estava sozinha e que existia um caminho para mim.",
      author: "Ana M.",
      city: "Rio de Janeiro"
    },
    {
      quote: "Graças às orientações sobre como buscar proteção legal, consegui obter uma medida protetiva. Hoje me sinto mais segura e estou reconstruindo minha vida um passo de cada vez.",
      author: "Claudia S.",
      city: "Niterói"
    },
    {
      quote: "Os relatos de outras sobreviventes me deram força para seguir em frente. Ver que outras mulheres conseguiram superar situações semelhantes me trouxe esperança.",
      author: "Patrícia L.",
      city: "São Gonçalo"
    }
  ];

  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title">Depoimentos de Sobreviventes</h2>
        <p className="section-subtitle">
          Histórias reais de pessoas que encontraram força para romper o ciclo da violência
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm card-hover">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-3xl text-brand-400 mb-4">"</div>
                <p className="italic text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
            <Link to="/testimonials">Mais Histórias</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
