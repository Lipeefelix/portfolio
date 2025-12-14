import { Code2, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 text-sm font-medium">
              <Code2 size={16} />
              <span>Desenvolvedor Full Stack Disponível</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformando Ideias em
              <span className="text-blue-600"> Soluções Digitais</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Desenvolvedor especializado em criar aplicações web modernas, escaláveis e de alto desempenho
              usando as mais recentes tecnologias do mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                Ver Projetos
                <ArrowRight size={20} />
              </a>
              <a href="#contact"
                 className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition shadow-md">
                <Download size={20} />
                Baixar CV
              </a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-600">
                      <span className="text-blue-600">const</span> developer = {'{'}
                    </div>
                    <div className="text-gray-600 ml-4">
                      name: <span className="text-green-600">'Professional Dev'</span>,
                    </div>
                    <div className="text-gray-600 ml-4">
                      skills: [<span className="text-green-600">'React'</span>, <span className="text-green-600">'Node.js'</span>, <span className="text-green-600">'Python'</span>],
                    </div>
                    <div className="text-gray-600 ml-4">
                      experience: <span className="text-orange-600">2</span> years,
                    </div>
                    <div className="text-gray-600 ml-4">
                      passion: <span className="text-green-600">'coding'</span>
                    </div>
                    <div className="text-gray-600">{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
