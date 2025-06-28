
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const References = () => {
  const references = [
    {
      author: "ANTUNES, D. H. C.",
      title: "Violência doméstica contra homens: perspectivas de vítimas e técnicos",
      type: "Dissertação de Mestrado",
      institution: "Universidade Lusófona de Humanidades e Tecnologias, Instituto de Serviço Social",
      location: "Lisboa, Portugal",
      year: "2022"
    },
    {
      author: "Azevedo, M. A. & Guerra, V.",
      title: "Violência doméstica na infância e na adolescência",
      publisher: "São Paulo: Robe Editorial",
      year: "1995"
    },
    {
      author: "BRASIL",
      title: "Lei nº 11.340, de 7 de agosto de 2006. Cria mecanismos para coibir a violência doméstica e familiar contra a mulher e estabelece medidas de assistência e proteção",
      publication: "Diário Oficial da União: seção 1, Brasília, DF, 1, 8 ago. 2006",
      url: "http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11340.htm",
      access: "4 set. 2024"
    },
    {
      author: "BRASIL",
      title: "Lei nº 12.737, de 30 de novembro de 2012. Dispõe sobre a tipificação criminal de delitos informáticos",
      publication: "Diário Oficial da União: seção 1, Brasília, DF, 30 nov. 2012",
      url: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12737.htm",
      access: "4 set. 2024"
    },
    {
      author: "BRASIL",
      title: "Lei nº 12.845, de 1º de agosto de 2013. Dispõe sobre o atendimento obrigatório e integral de pessoas em situação de violência sexual",
      publication: "Diário Oficial da União: seção 1, Brasília, DF, 2 ago. 2013",
      url: "http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12845.htm",
      access: "4 set. 2024"
    },
    {
      author: "BRASIL",
      title: "Lei nº 12.650, de 17 de maio de 2012. Altera o Decreto-Lei nº 2.848, de 7 de dezembro de 1940 (Código Penal), para dispor sobre o início da contagem do prazo de prescrição dos crimes contra a dignidade sexual de crianças e adolescentes",
      publication: "Diário Oficial da União: seção 1, Brasília, DF, 18 maio 2012",
      note: "Disponível em: [URL incompleta na fonte original]",
      access: "4 set. 2024"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-soft-blue py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Referências Bibliográficas</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Fontes acadêmicas e legais que fundamentam as informações apresentadas neste site
            </p>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                As informações apresentadas no site "Abrigo em Palavras" são baseadas em pesquisas acadêmicas, 
                legislação brasileira e fontes confiáveis sobre violência doméstica. Abaixo estão listadas as 
                principais referências utilizadas para fundamentar o conteúdo disponibilizado.
              </p>
            </div>
          </div>
        </section>
        
        {/* References Section */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Bibliografia</h2>
            
            <Card className="border-0 shadow-md max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {references.map((ref, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <div className="text-sm text-gray-600 mb-2">Referência {index + 1}</div>
                      
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">{ref.author}</p>
                        
                        <p className="text-gray-800 italic">{ref.title}</p>
                        
                        {ref.type && (
                          <p className="text-gray-700">{ref.type}</p>
                        )}
                        
                        {ref.institution && (
                          <p className="text-gray-700">{ref.institution}</p>
                        )}
                        
                        {ref.publisher && (
                          <p className="text-gray-700">{ref.publisher}</p>
                        )}
                        
                        {ref.publication && (
                          <p className="text-gray-700">{ref.publication}</p>
                        )}
                        
                        {ref.location && (
                          <p className="text-gray-700">{ref.location}, {ref.year}</p>
                        )}
                        
                        {!ref.location && ref.year && (
                          <p className="text-gray-700">{ref.year}</p>
                        )}
                        
                        {ref.url && (
                          <p className="text-gray-700">
                            Disponível em: 
                            <a 
                              href={ref.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-brand-600 hover:text-brand-700 ml-1 break-all"
                            >
                              {ref.url}
                            </a>
                          </p>
                        )}
                        
                        {ref.note && (
                          <p className="text-gray-600 text-sm">{ref.note}</p>
                        )}
                        
                        {ref.access && (
                          <p className="text-gray-600">Acesso em: {ref.access}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Additional Information */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <Card className="max-w-3xl mx-auto border-0 shadow-sm bg-soft-peach">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Nota Importante</h3>
                <p className="mb-4">
                  Este site foi desenvolvido com fins educativos e informativos. As informações aqui apresentadas 
                  não substituem orientação profissional especializada.
                </p>
                <p>
                  Para situações de emergência, entre em contato imediatamente com os órgãos competentes: 
                  <span className="font-semibold"> Polícia Militar (190), Central de Atendimento à Mulher (180)</span> 
                  ou procure a delegacia mais próxima.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default References;
