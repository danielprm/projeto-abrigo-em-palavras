
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Abrigo em Palavras</h3>
            <p className="text-gray-600 mb-4">
              Um espaço seguro para informação, apoio e acolhimento para vítimas de violência doméstica no Rio de Janeiro.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-brand-600">Início</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-brand-600">Onde Buscar Ajuda</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-brand-600">Depoimentos</Link></li>
              <li><Link to="/legal" className="text-gray-600 hover:text-brand-600">Leis de Proteção</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-brand-600">Como Agir</Link></li>
              <li><Link to="/references" className="text-gray-600 hover:text-brand-600">Referências</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatos de Emergência</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Central de Atendimento à Mulher: <span className="font-semibold">Ligue 180</span></li>
              <li className="text-gray-600">Polícia Militar: <span className="font-semibold">190</span></li>
              <li className="text-gray-600">Polícia Civil (DEAM): <span className="font-semibold">(21) 2332-9977</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Aviso</h4>
            <p className="text-gray-600">
              Este site contém informações sobre violência doméstica que podem ser sensíveis para alguns leitores. Em caso de emergência, entre em contato com as autoridades imediatamente.
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} Abrigo em Palavras. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Este site foi criado com o objetivo de informar e ajudar vítimas de violência doméstica no Rio de Janeiro.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
