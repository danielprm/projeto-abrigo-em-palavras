import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Legal = () => {
  const faqItems = [
    {
      question: "O que é considerado violência doméstica segundo a lei?",
      answer: "De acordo com a Lei Maria da Penha, violência doméstica é qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico e dano moral ou patrimonial à mulher, no âmbito da unidade doméstica, da família ou em qualquer relação íntima de afeto."
    },
    {
      question: "Quem pode ser considerado agressor pela Lei Maria da Penha?",
      answer: "A Lei Maria da Penha pode ser aplicada quando o agressor é cônjuge, companheiro, namorado, ex-namorado, ou qualquer pessoa com quem a vítima tenha convivência doméstica e familiar, independentemente de coabitação. A lei também pode ser aplicada em casos de violência contra mulheres trans ou cis."
    },
    {
      question: "Como solicitar uma medida protetiva de urgência?",
      answer: "Para solicitar uma medida protetiva, a vítima deve: 1) Registrar um boletim de ocorrência em qualquer delegacia (preferencialmente em uma DEAM); 2) Informar ao delegado o desejo de solicitar medidas protetivas; 3) O pedido será encaminhado ao juiz, que deverá decidir em até 48 horas. A vítima também pode fazer o pedido diretamente ao juiz ou por meio do Ministério Público."
    },
    {
      question: "Por quanto tempo vale uma medida protetiva?",
      answer: "Não há um prazo fixo definido em lei. A medida protetiva permanece válida enquanto houver situação de risco para a vítima, podendo ser mantida, modificada ou revogada pelo juiz a qualquer tempo. Com a alteração da Lei Maria da Penha em 2019, o juiz deve reavaliar a necessidade de manutenção da medida a cada 6 meses."
    },
    {
      question: "Se eu denunciar, precisarei necessariamente enfrentar o agressor em juízo?",
      answer: "Não necessariamente. A Lei Maria da Penha prevê que a vítima seja acompanhada por advogado ou defensor em todos os atos processuais. Em audiências, pode-se solicitar medidas para evitar o contato visual com o agressor, como uso de videoconferência. Além disso, a vítima tem direito a atendimento policial e judicial especializado."
    },
    {
      question: "Posso retirar a denúncia depois de feita?",
      answer: "Em crimes que dependem de representação da vítima, é possível desistir da representação até o recebimento da denúncia pelo juiz. No entanto, em casos mais graves como lesão corporal (mesmo leve) em contexto de violência doméstica, o processo continua independentemente da vontade da vítima, pois são considerados de ação penal pública incondicionada."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="maria-da-penha" className="bg-soft-blue py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Leis de Proteção</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Conheça as leis que protegem vítimas de violência doméstica no Brasil
            </p>
          </div>
        </section>
        
        {/* Maria da Penha Law Section */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Lei Maria da Penha</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <p className="text-lg mb-6">
                      A Lei Maria da Penha (Lei nº 11.340/2006) é considerada pela ONU como uma das três melhores legislações do mundo no enfrentamento à violência contra as mulheres.
                    </p>
                    <p className="mb-6">
                      Esta lei criou mecanismos para prevenir e coibir a violência doméstica e familiar contra a mulher, estabelecendo medidas de assistência e proteção às vítimas, além de dispor sobre a criação dos Juizados de Violência Doméstica e Familiar contra a Mulher.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">A lei define cinco formas de violência:</h3>
                    <ul className="space-y-4 list-disc pl-6">
                      <li>
                        <strong>Física:</strong> Qualquer conduta que ofenda a integridade ou saúde corporal da mulher.
                      </li>
                      <li>
                        <strong>Psicológica:</strong> Condutas que causem dano emocional, diminuição da autoestima, ou que prejudiquem o desenvolvimento da mulher.
                      </li>
                      <li>
                        <strong>Sexual:</strong> Qualquer conduta que constranja a mulher a presenciar, manter ou participar de relação sexual não desejada.
                      </li>
                      <li>
                        <strong>Patrimonial:</strong> Qualquer conduta que configure retenção, subtração ou destruição de objetos, documentos pessoais, bens e recursos econômicos.
                      </li>
                      <li>
                        <strong>Moral:</strong> Qualquer conduta que configure calúnia, difamação ou injúria.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="h-full bg-gray-50 border-0">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Principais avanços da Lei Maria da Penha</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">1</div>
                        <p>Tipificação e definição da violência doméstica e familiar contra a mulher.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">2</div>
                        <p>Criação de medidas protetivas de urgência.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">3</div>
                        <p>Proibição de penas pecuniárias (pagamento de multas ou cestas básicas).</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">4</div>
                        <p>Criação dos Juizados de Violência Doméstica e Familiar contra a Mulher.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">5</div>
                        <p>A violência doméstica passa a ser uma agravante de pena no Código Penal.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-brand-600 text-white rounded-full w-6 h-6 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">6</div>
                        <p>Possibilidade de prisão preventiva do agressor em casos de riscos à integridade física da mulher.</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Protective Measures Section */}
        <section id="protective-measures" className="section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Medidas Protetivas de Urgência</h2>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  As medidas protetivas são ordens judiciais que visam proteger a vítima de violência doméstica, garantindo sua segurança e bem-estar. Elas podem ser solicitadas na delegacia no momento do registro da ocorrência.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Medidas que obrigam o agressor</h3>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Afastamento do lar, domicílio ou local de convivência com a vítima</li>
                      <li>Proibição de aproximação da ofendida, seus familiares e testemunhas</li>
                      <li>Proibição de contato com a ofendida, seus familiares e testemunhas por qualquer meio</li>
                      <li>Proibição de frequentar determinados lugares</li>
                      <li>Restrição ou suspensão de visitas aos dependentes menores</li>
                      <li>Prestação de alimentos provisórios ou provisórios</li>
                      <li>Comparecimento a programas de recuperação e reeducação</li>
                      <li>Acompanhamento psicossocial do agressor</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Medidas de proteção à vítima</h3>
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Encaminhamento a programa de proteção ou atendimento</li>
                      <li>Recondução ao domicílio após afastamento do agressor</li>
                      <li>Afastamento da ofendida do lar, sem prejuízo dos direitos relativos a bens, guarda dos filhos e alimentos</li>
                      <li>Separação de corpos</li>
                      <li>Restituição de bens indevidamente subtraídos</li>
                      <li>Proibição temporária de celebração de atos e contratos</li>
                      <li>Suspensão de procurações conferidas pela ofendida ao agressor</li>
                      <li>Prestação de caução provisória por perdas e danos materiais</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-soft-peach p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4">Como solicitar medidas protetivas</h3>
                  <ol className="space-y-3 list-decimal pl-6">
                    <li>Compareça a uma delegacia (preferencialmente uma DEAM) e registre um boletim de ocorrência</li>
                    <li>Informe expressamente seu desejo de solicitar medidas protetivas</li>
                    <li>O pedido será encaminhado ao juiz, que deve decidir em até 48 horas</li>
                    <li>As medidas serão comunicadas ao agressor, que deverá cumpri-las imediatamente</li>
                    <li>Em caso de descumprimento, comunique imediatamente às autoridades, pois isso configura crime</li>
                  </ol>
                </div>
                
                <p className="text-brand-700 font-semibold">
                  O pedido de medidas protetivas é gratuito e não exige advogado.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Other Laws Section */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-6">Outras Leis Importantes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lei do Feminicídio (Lei 13.104/2015)</h3>
                  <p className="mb-4">
                    Alterou o Código Penal para incluir o feminicídio como circunstância qualificadora do crime de homicídio, quando o crime é praticado contra a mulher por razões da condição do sexo feminino (violência doméstica e familiar ou menosprezo/discriminação à condição de mulher).
                  </p>
                  <p>
                    A pena prevista é de reclusão de 12 a 30 anos, sendo aumentada de 1/3 até a metade se o crime for praticado: durante a gestação ou nos 3 meses posteriores ao parto; contra menor de 14 anos, maior de 60 ou pessoa com deficiência; na presença de descendente ou ascendente da vítima.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lei do Minuto Seguinte (Lei 12.845/2013)</h3>
                  <p className="mb-4">
                    Dispõe sobre o atendimento obrigatório e integral às pessoas vítimas de violência sexual. Os hospitais devem oferecer às vítimas atendimento emergencial, integral e multidisciplinar.
                  </p>
                  <p>
                    O atendimento inclui: diagnóstico e tratamento de lesões, apoio psicológico, profilaxia da gravidez, profilaxia de doenças sexualmente transmissíveis, coleta de material para exame de DNA e fornecimento de informações às vítimas sobre seus direitos legais.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lei do Stalking (Lei 14.132/2021)</h3>
                  <p className="mb-4">
                    Incluiu no Código Penal o crime de perseguição (stalking), que consiste em perseguir alguém, reiteradamente e por qualquer meio, ameaçando sua integridade física ou psicológica, restringindo sua locomoção ou invadindo ou perturbando sua esfera de liberdade ou privacidade.
                  </p>
                  <p>
                    A pena prevista é de reclusão de 6 meses a 2 anos e multa, sendo aumentada se o crime for cometido contra criança, adolescente ou idoso; contra mulher por razões da condição do sexo feminino; mediante concurso de duas ou mais pessoas; ou com uso de arma.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Lei Joanna Maranhão (Lei 12.650/2012)</h3>
                  <p className="mb-4">
                    Alterou o Código Penal para modificar as regras de contagem do prazo prescricional nos crimes contra a dignidade sexual praticados contra crianças e adolescentes.
                  </p>
                  <p>
                    De acordo com esta lei, a contagem do prazo prescricional dos crimes contra a dignidade sexual praticados contra crianças e adolescentes começa a correr da data em que a vítima completa 18 anos, salvo se a esse tempo já houver sido proposta a ação penal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-10 text-center">Perguntas Frequentes</h2>
            
            <Card className="border-0 shadow-md max-w-3xl mx-auto">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-4">
                      <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                      <AccordionContent className="pt-4 text-gray-700">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
