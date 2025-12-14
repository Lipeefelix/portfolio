import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Briefcase, label: 'Anos de Experiência', value: '2+' },
    { icon: Award, label: 'Projetos Concluídos', value: '13+' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '9+' },
    { icon: GraduationCap, label: 'Certificações', value: '5+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Me chamo Felipe Felix sou um desenvolvedor full stack apaixonado por criar soluções tecnológicas inovadoras
              e eficientes. Com mais de 2 anos de experiência, trabalhei em projetos desafiadores
              que vão desde startups até grandes empresas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Minha expertise abrange desenvolvimento front-end moderno com React e TypeScript,
              back-end robusto com Node.js e Python, além de experiência sólida em bancos de dados,
              arquitetura de sistemas, cloud computing e práticas DevOps.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
