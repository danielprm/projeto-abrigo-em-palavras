
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Durante três anos, vivi um relacionamento abusivo sem perceber. Achava que o ciúme excessivo, o controle e as cobranças eram 'normais'. Quando encontrei informações sobre violência psicológica neste site, finalmente entendi que o que eu vivia não era amor. Busquei ajuda no CEAM do Centro e hoje estou reconstruindo minha vida, fazendo terapia e me reconectando com amigos e família.",
      author: "Maria C.",
      city: "Rio de Janeiro - Tijuca",
      age: 32
    },
    {
      quote: "Após anos sofrendo agressões verbais e físicas, encontrei forças para denunciar meu ex-companheiro depois que uma amiga me mostrou os recursos disponíveis na DEAM. Consegui uma medida protetiva e, com o apoio psicológico do Centro de Referência, estou aprendendo a lidar com o trauma e a construir uma nova vida para mim e meus filhos.",
      author: "Janaína S.",
      city: "Niterói",
      age: 45
    },
    {
      quote: "Eu não sabia que violência patrimonial era uma forma de abuso até ler sobre isso. Meu ex-marido controlava todo o dinheiro, me dava 'mesada' insuficiente e me impedia de trabalhar. Com a orientação jurídica que recebi na Casa da Mulher Carioca, consegui recuperar meus bens e retomar minha independência financeira.",
      author: "Adriana M.",
      city: "Rio de Janeiro - Madureira",
      age: 41
    },
    {
      quote: "Quando meu ex-companheiro começou a me ameaçar após o término, não sabia o que fazer. Através deste site, descobri como solicitar medidas protetivas. O processo foi mais simples do que imaginei e hoje me sinto mais segura, podendo focar na minha recuperação emocional.",
      author: "Roberta L.",
      city: "Duque de Caxias",
      age: 29
    },
    {
      quote: "Como mulher trans, tinha medo de não ser acolhida nos serviços de proteção. Mas quando a violência em casa escalou, não tive escolha a não ser procurar ajuda. Fui surpreendida positivamente pelo atendimento respeitoso que recebi na DEAM e no Centro de Referência. Hoje faço parte de um grupo de apoio e estou ajudando outras mulheres trans a buscarem seus direitos.",
      author: "Pamela R.",
      city: "São Gonçalo",
      age: 34
    },
    {
      quote: "Por anos, acreditei que não podia deixar meu relacionamento abusivo por causa dos meus filhos e dependência financeira. Após conhecer os serviços de apoio disponíveis no Rio, entendi que existem recursos para mulheres na minha situação. Hoje tenho um trabalho, meus filhos estão recebendo acompanhamento psicológico e estamos reconstruindo nossas vidas livres do medo.",
      author: "Luciana B.",
      city: "Rio de Janeiro - Campo Grande",
      age: 37
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-soft-purple py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Depoimentos</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Histórias reais de mulheres que encontraram força para romper o ciclo da violência e reconstruir suas vidas
            </p>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="section bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                Os depoimentos compartilhados abaixo são baseados em histórias reais, mas nomes e detalhes identificáveis foram alterados para proteger a privacidade das sobreviventes. Estas histórias mostram que, apesar das dificuldades, é possível encontrar um caminho para uma vida livre de violência.
              </p>
              <div className="p-4 bg-soft-peach rounded-lg mb-8">
                <p className="text-gray-700">
                  <strong>Nota:</strong> Alguns relatos contêm descrições de situações de violência que podem ser emocionalmente difíceis para alguns leitores.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="text-4xl text-brand-300 mb-6">"</div>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="border-t pt-6 mt-auto">
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.city}, {testimonial.age} anos</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Share Your Story Section */}
        <section className="section gradient-bg">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-serif font-semibold mb-6">Compartilhe Sua História</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Seu depoimento pode inspirar e ajudar outras pessoas que estão passando por situações semelhantes
            </p>
            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="p-8 text-left">
                <p className="mb-6">
                  Se você é uma sobrevivente de violência doméstica e gostaria de compartilhar sua história de superação, entre em contato conosco através do e-mail: <span className="font-semibold text-brand-700">depoimentos@abrigoempalavras.org.br</span>
                </p>
                <p className="mb-6">
                  Sua identidade será protegida, e você pode escolher quais detalhes deseja compartilhar. Sua história será revisada antes da publicação.
                </p>
                <p>
                  Ao compartilhar sua jornada, você ajuda a quebrar o silêncio e mostra a outras vítimas que elas não estão sozinhas e que há esperança.
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

export default Testimonials;
