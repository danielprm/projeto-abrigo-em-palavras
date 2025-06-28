
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Support = () => {
  const supportSteps = [
    {
      title: "Reconheça a situação",
      description: "O primeiro passo para buscar ajuda é reconhecer que você está em uma situação de violência doméstica. Violência não é apenas física — ela pode ser psicológica, sexual, patrimonial ou moral.",
      tipList: [
        "Pergunte a si mesma: Você sente medo do seu parceiro?",
        "Ele controla onde você vai, com quem fala, ou como você se veste?",
        "Ele humilha você em público ou em privado?",
        "Ele controla suas finanças ou acesso a dinheiro?",
        "Ele já ameaçou você ou seus filhos?",
        "Ele já destruiu suas coisas ou machucou seus animais de estimação?"
      ]
    },
    {
      title: "Planeje sua segurança",
      description: "Caso você identifique que está em uma situação de risco, é importante criar um plano de segurança para você e seus dependentes.",
      tipList: [
        "Tenha documentos importantes (identidade, CPF, certidões) em local seguro e de fácil acesso.",
        "Guarde algum dinheiro de emergência, se possível.",
        "Tenha anotados os números de emergência e contatos de apoio.",
        "Combine sinais ou palavras-código com vizinhos ou amigos de confiança.",
        "Identifique rotas de fuga e locais seguros para onde ir em caso de emergência.",
        "Prepare uma bolsa com itens essenciais (roupas, medicamentos, itens de higiene)."
      ]
    },
    {
      title: "Busque apoio",
      description: "Você não precisa enfrentar essa situação sozinha. Existem diversas redes de apoio disponíveis no Rio de Janeiro.",
      tipList: [
        "Compartilhe sua situação com pessoas de confiança (amigos, familiares).",
        "Entre em contato com serviços especializados, como o Centro de Referência da Mulher.",
        "Ligue para a Central de Atendimento à Mulher - 180 (serviço gratuito e confidencial).",
        "Acesse grupos de apoio para mulheres em situação de violência.",
        "Busque orientação jurídica gratuita na Defensoria Pública ou em ONGs especializadas.",
        "Considere acompanhamento psicológico para ajudar no processo de recuperação."
      ]
    },
    {
      title: "Formalize a denúncia",
      description: "Denunciar formalmente o agressor é um direito seu e pode ajudar a garantir sua proteção.",
      tipList: [
        "Vá a uma Delegacia Especializada de Atendimento à Mulher (DEAM) ou qualquer delegacia.",
        "Registre um Boletim de Ocorrência detalhando os fatos.",
        "Solicite medidas protetivas de urgência, se necessário.",
        "Leve testemunhas, se houver, ou indique seus contatos.",
        "Apresente provas como fotos, mensagens, laudos médicos, se disponíveis.",
        "Peça uma cópia do B.O. e mantenha-a em local seguro."
      ]
    },
    {
      title: "Cuide de sua saúde",
      description: "A violência doméstica afeta tanto o corpo quanto a mente. Cuidar da sua saúde física e emocional é fundamental.",
      tipList: [
        "Procure atendimento médico para tratar lesões físicas, mesmo que pareçam leves.",
        "Busque apoio psicológico para lidar com o trauma e fortalecer sua autoestima.",
        "Pratique o autocuidado: alimentação saudável, sono adequado e atividades prazerosas.",
        "Conecte-se com grupos de apoio e outras sobreviventes.",
        "Permita-se o tempo necessário para se recuperar; cada pessoa tem seu próprio ritmo.",
        "Lembre-se: o que aconteceu não foi sua culpa."
      ]
    },
    {
      title: "Reconstrua sua vida",
      description: "Após sair de uma situação de violência, é importante reconstruir sua vida com segurança e independência.",
      tipList: [
        "Busque programas de capacitação profissional e geração de renda.",
        "Informe-se sobre benefícios sociais disponíveis (como o Aluguel Social).",
        "Continue com o acompanhamento psicológico durante o processo de reconstrução.",
        "Estabeleça novos objetivos e projetos de vida.",
        "Construa uma nova rede de apoio social.",
        "Celebre cada conquista, por menor que pareça."
      ]
    }
  ];

  const documentsToCollect = [
    "Boletim de Ocorrência (cópia)",
    "Fotografias de lesões ou danos (com data, se possível)",
    "Mensagens de texto, e-mails ou áudios com ameaças",
    "Registros médicos de atendimentos relacionados à violência",
    "Nome e contato de possíveis testemunhas",
    "Relatórios de visitas policiais anteriores à residência",
    "Cópia de medidas protetivas anteriores (se houver)",
    "Registros de ligações ou chamadas perdidas insistentes"
  ];

  const helpChildren = [
    "Mantenha uma rotina estável para as crianças, na medida do possível",
    "Evite falar negativamente do agressor na frente das crianças",
    "Explique a situação de forma adequada à idade, sem detalhes traumáticos",
    "Busque apoio psicológico especializado para crianças e adolescentes",
    "Garanta que a escola ou creche esteja ciente da situação para proteção adicional",
    "Ensine às crianças como pedir ajuda em situações de emergência",
    "Inclua as necessidades das crianças no seu plano de segurança",
    "Verifique recursos específicos para crianças nos centros de apoio"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-soft-peach py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Como Agir</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Guia prático para quem está vivendo uma situação de violência doméstica ou conhece alguém nessa situação
            </p>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Sair de uma situação de violência doméstica pode parecer um desafio imenso, mas existem caminhos e pessoas prontas para ajudar. Este guia foi desenvolvido para orientar cada passo desse processo.
              </p>
              <p className="text-lg mb-6">
                Lembre-se: você não está sozinha, não é culpada pela violência que sofre, e merece uma vida livre e segura.
              </p>
              <div className="bg-brand-100 p-6 rounded-lg">
                <p className="text-brand-800 font-semibold">
                  Em caso de perigo imediato, ligue para 190 (Polícia Militar) ou dirija-se ao local seguro mais próximo.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Steps Section */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title">Passos para Buscar Ajuda</h2>
            <div className="space-y-12 mt-10">
              {supportSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="bg-brand-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0 mx-auto md:mx-0">
                    {index + 1}
                  </div>
                  <Card className="flex-grow border-0 shadow-sm w-full">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-serif font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-700 mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.tipList.map((tip, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brand-600 mr-2">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Evidence Collection */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">Documentando a Violência</h2>
                <p className="text-lg mb-6">
                  Reunir evidências pode ser crucial para processos judiciais e para obtenção de medidas protetivas. Confira o que pode ser útil documentar:
                </p>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {documentsToCollect.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-600 mr-3">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">Apoiando Crianças</h2>
                <p className="text-lg mb-6">
                  Crianças que presenciam ou vivenciam violência doméstica também são vítimas e precisam de apoio especial:
                </p>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {helpChildren.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-600 mr-3">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Safety Plan */}
        <section className="section gradient-bg">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Plano de Segurança</h2>
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Um plano de segurança é um conjunto de estratégias preparadas com antecedência para aumentar sua segurança em diferentes situações. Considere criar o seu plano incluindo:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Durante um incidente</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Identifique quais áreas da casa têm saídas e não têm armas</li>
                        <li>Tenha uma palavra-código com amigos/vizinhos para pedir ajuda</li>
                        <li>Proteja seu corpo em caso de ataque</li>
                        <li>Confie no seu instinto sobre quando sair</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Se estiver se preparando para sair</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Guarde dinheiro em local seguro ou com pessoa de confiança</li>
                        <li>Tenha uma bolsa preparada em local fácil de acessar</li>
                        <li>Memorize números de telefone importantes</li>
                        <li>Revise e pratique seu plano de fuga</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Após a separação</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Troque fechaduras e instale sistema de segurança, se possível</li>
                        <li>Informe pessoas de confiança sobre sua situação</li>
                        <li>Altere suas rotinas frequentemente</li>
                        <li>Obtenha medidas protetivas se necessário</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">No ambiente de trabalho</h3>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Informe a segurança ou colegas de confiança</li>
                        <li>Forneça uma foto do agressor para recepção/segurança</li>
                        <li>Peça para alguém acompanhá-la até o transporte</li>
                        <li>Varie a rota para o trabalho, se possível</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-soft-blue rounded-lg">
                  <p className="text-gray-800">
                    <strong>Lembre-se:</strong> Cada situação é única. Adapte estas sugestões à sua realidade e confie em seu julgamento sobre o que é mais seguro para você.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">
              Você não precisa enfrentar isso sozinha
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Existem pessoas e instituições preparadas para ajudar você a trilhar o caminho para uma vida livre de violência
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg">
                <Link to="/resources">Encontrar Ajuda</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg border-brand-600 text-brand-600">
                <Link to="/testimonials">Ler Depoimentos</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
