
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Shield, Users } from 'lucide-react';

const Resources = () => {
  const emergencyContacts = [
    {
      name: 'Central de Atendimento à Mulher',
      description: 'Serviço de utilidade pública que orienta mulheres em situação de violência.',
      phone: '180',
      hours: '24 horas por dia, todos os dias'
    },
    {
      name: 'Polícia Militar',
      description: 'Para situações de emergência imediata.',
      phone: '190',
      hours: '24 horas por dia, todos os dias'
    },
    {
      name: 'Polícia Civil (DEAM)',
      description: 'Contato da Delegacia Especializada de Atendimento à Mulher.',
      phone: '(21) 2332-9977',
      hours: 'Segunda a sexta, das 9h às 18h'
    },
    {
      name: 'Defensoria Pública - NUDEM',
      description: 'Núcleo Especial de Defesa dos Direitos da Mulher.',
      phone: '(21) 2332-6371',
      hours: 'Segunda a sexta, das 10h às 17h'
    }
  ];

  const supportCenters = [
    {
      name: 'DEAM Centro (Rio de Janeiro)',
      address: 'Rua Visconde do Rio Branco, 12, Centro',
      phone: '(21) 2334-9859',
      services: 'Registro de ocorrências, medidas protetivas, orientações'
    },
    {
      name: 'DEAM Oeste (Campo Grande)',
      address: 'Estrada do Mendanha, 1672, Campo Grande',
      phone: '(21) 2332-2578',
      services: 'Registro de ocorrências, medidas protetivas, orientações'
    },
    {
      name: 'Centro de Referência Suely Souza de Almeida',
      address: 'Rua Álvaro Alvim, 21, 2º andar, Centro',
      phone: '(21) 3938-0600',
      services: 'Atendimento social, psicológico e jurídico'
    },
    {
      name: 'Centro de Referência da Mulher Suely Souza de Almeida (CRM-SSA)',
      address: 'Praça Jorge Machado Moreira, 100, Cidade Universitária, Ilha do Fundão',
      phone: '(21) 3938-5300',
      services: 'Apoio psicológico, social e jurídico para mulheres vítimas'
    },
    {
      name: 'Casa da Mulher Carioca Tia Doca',
      address: 'Rua Limites, s/n, Realengo',
      phone: '(21) 2333-4020',
      services: 'Assistência social, psicológica, orientação jurídica'
    },
    {
      name: 'Casa da Mulher Carioca Dinah Coutinho',
      address: 'Rua Júlio do Carmo, 84, Centro',
      phone: '(21) 2517-5858',
      services: 'Assistência social, psicológica, orientação jurídica'
    }
  ];

  const organizations = [
    {
      name: 'Instituto Maria da Penha',
      description: 'ONG dedicada a enfrentar a violência doméstica e familiar contra a mulher.',
      website: 'www.institutomariadapenha.org.br',
      phone: '(21) 3598-4987'
    },
    {
      name: 'CEPIA - Cidadania, Estudo, Pesquisa, Informação e Ação',
      description: 'Desenvolve projetos voltados para a promoção dos direitos humanos e da cidadania.',
      website: 'www.cepia.org.br',
      phone: '(21) 2558-6115'
    },
    {
      name: 'SOS Mulher',
      description: 'Serviço de acolhimento e orientação para mulheres vítimas de violência.',
      website: 'www.sosmulher.org.br',
      phone: '(21) 2544-0808'
    },
    {
      name: 'Movimento de Mulheres',
      description: 'Organização que atua na defesa dos direitos das mulheres no Rio de Janeiro.',
      website: 'www.movimentomulheres.org.br',
      phone: '(21) 3572-2089'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-brand-100 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Onde Buscar Ajuda</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Conheça os recursos disponíveis para vítimas de violência doméstica no Rio de Janeiro. Em caso de emergência, ligue para 190 imediatamente.
            </p>
          </div>
        </section>
        
        {/* Emergency Contacts Section */}
        <section id="emergency" className="section bg-white">
          <div className="container mx-auto">
            <div className="flex items-center mb-8">
              <Phone className="h-8 w-8 text-brand-600 mr-4" />
              <h2 className="text-3xl font-serif font-semibold">Contatos de Emergência</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
                    <p className="text-gray-600 mb-4">{contact.description}</p>
                    <p className="text-xl font-bold text-brand-600 mb-2">{contact.phone}</p>
                    <p className="text-sm text-gray-500">{contact.hours}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Support Centers Section */}
        <section id="centers" className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="flex items-center mb-8">
              <MapPin className="h-8 w-8 text-brand-600 mr-4" />
              <h2 className="text-3xl font-serif font-semibold">Centros de Apoio no Rio</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {supportCenters.map((center, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{center.name}</h3>
                    <div className="mb-4">
                      <p className="text-gray-600"><strong>Endereço:</strong> {center.address}</p>
                      <p className="text-gray-600"><strong>Telefone:</strong> {center.phone}</p>
                    </div>
                    <p className="text-sm bg-soft-blue p-3 rounded-md">
                      <strong>Serviços:</strong> {center.services}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Organizations Section */}
        <section id="organizations" className="section bg-white">
          <div className="container mx-auto">
            <div className="flex items-center mb-8">
              <Users className="h-8 w-8 text-brand-600 mr-4" />
              <h2 className="text-3xl font-serif font-semibold">Organizações de Apoio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizations.map((org, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
                    <p className="text-gray-600 mb-4">{org.description}</p>
                    <p className="text-gray-700"><strong>Website:</strong> {org.website}</p>
                    <p className="text-gray-700"><strong>Telefone:</strong> {org.phone}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Safety Tips */}
        <section className="section gradient-bg">
          <div className="container mx-auto">
            <div className="flex items-center mb-8 justify-center">
              <Shield className="h-8 w-8 text-brand-600 mr-4" />
              <h2 className="text-3xl font-serif font-semibold">Dicas de Segurança</h2>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4 list-disc pl-6">
                  <li className="text-gray-700">
                    Em situações de perigo imediato, procure um local seguro e ligue para 190.
                  </li>
                  <li className="text-gray-700">
                    Tenha sempre os números de emergência salvos em seu telefone.
                  </li>
                  <li className="text-gray-700">
                    Se possível, informe a pessoas de confiança sobre sua situação.
                  </li>
                  <li className="text-gray-700">
                    Prepare uma bolsa de emergência com documentos essenciais e itens de primeira necessidade.
                  </li>
                  <li className="text-gray-700">
                    Observe cuidadosamente sua privacidade digital, alterando senhas e verificando configurações de localização em dispositivos.
                  </li>
                  <li className="text-gray-700">
                    Documente as agressões (fotos, registros médicos, testemunhas) para eventual processo judicial.
                  </li>
                  <li className="text-gray-700">
                    Procure ajuda especializada, tanto jurídica quanto psicológica, para orientação adequada ao seu caso.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
