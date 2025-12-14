import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
            Portfolio
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">Sobre</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition font-medium">Habilidades</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition font-medium">Projetos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contato</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-blue-600 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-700 hover:text-blue-600 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-700 hover:text-blue-600 transition">
              <Mail size={20} />
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition font-medium"
               onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-600 transition font-medium"
               onClick={() => setIsMenuOpen(false)}>Habilidades</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition font-medium"
               onClick={() => setIsMenuOpen(false)}>Projetos</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition font-medium"
               onClick={() => setIsMenuOpen(false)}>Contato</a>
          </div>
        )}
      </nav>
    </header>
  );
}
