
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Shield, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesSection = () => {
  const resources = [
    {
      title: 'Contatos de Emergência',
      description: 'Números de telefone e contatos para situações de emergência relacionadas à violência doméstica.',
      icon: <Phone className="h-10 w-10 text-brand-600" />,
      link: '/resources#emergency'
    },
    {
      title: 'Centros de Apoio no Rio',
      description: 'Locais onde buscar ajuda presencial, como delegacias especializadas e centros de acolhimento.',
      icon: <MapPin className="h-10 w-10 text-brand-600" />,
      link: '/resources#centers'
    },
    {
      title: 'Leis de Proteção',
      description: 'Informações sobre a Lei Maria da Penha e outras legislações que protegem vítimas de violência.',
      icon: <Shield className="h-10 w-10 text-brand-600" />,
      link: '/legal'
    },
    {
      title: 'Guias e Materiais',
      description: 'Materiais educativos sobre como reconhecer sinais, documentar abusos e buscar ajuda.',
      icon: <Book className="h-10 w-10 text-brand-600" />,
      link: '/support'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Onde Buscar Ajuda</h2>
        <p className="section-subtitle">
          Conheça os recursos disponíveis para vítimas de violência doméstica no Rio de Janeiro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {resources.map((resource, index) => (
            <Card key={index} className="border border-gray-200 card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link to={resource.link}>Saiba Mais</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
            <Link to="/resources">Ver Todos os Recursos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
