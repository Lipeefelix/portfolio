import { Github, Linkedin, Mail,} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Portfolio</h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor full stack apaixonado por criar experiências digitais incríveis e soluções inovadoras.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">Sobre</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition">Habilidades</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">Projetos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm mt-2">
            {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
