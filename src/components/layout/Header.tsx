import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import EmergencyModal from '../EmergencyModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEmergencyClick = () => {
    setIsEmergencyModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                Abrigo em Palavras
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-brand-600 font-medium">
                Início
              </Link>
              <Link to="/resources" className="text-gray-700 hover:text-brand-600 font-medium">
                Onde Buscar Ajuda
              </Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-brand-600 font-medium">
                Depoimentos
              </Link>
              <Link to="/legal" className="text-gray-700 hover:text-brand-600 font-medium">
                Leis de Proteção
              </Link>
              <Link to="/support" className="text-gray-700 hover:text-brand-600 font-medium">
                Como Agir
              </Link>
              <Button 
                className="bg-brand-600 hover:bg-brand-700"
                onClick={handleEmergencyClick}
              >
                Emergência
              </Button>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-brand-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Início
                </Link>
                <Link 
                  to="/resources" 
                  className="text-gray-700 hover:text-brand-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Onde Buscar Ajuda
                </Link>
                <Link 
                  to="/testimonials" 
                  className="text-gray-700 hover:text-brand-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Depoimentos
                </Link>
                <Link 
                  to="/legal" 
                  className="text-gray-700 hover:text-brand-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Leis de Proteção
                </Link>
                <Link 
                  to="/support" 
                  className="text-gray-700 hover:text-brand-600 font-medium py-2"
                  onClick={toggleMenu}
                >
                  Como Agir
                </Link>
                <Button 
                  className="bg-brand-600 hover:bg-brand-700 w-full"
                  onClick={handleEmergencyClick}
                >
                  Emergência
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <EmergencyModal 
        isOpen={isEmergencyModalOpen} 
        onClose={() => setIsEmergencyModalOpen(false)} 
      />
    </>
  );
};

export default Header;
