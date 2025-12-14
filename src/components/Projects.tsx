import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho, pagamento integrado, painel administrativo e gestão de estoque em tempo real.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management System',
      description: 'Sistema de gerenciamento de tarefas com colaboração em tempo real, notificações push e integração com calendário.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard analítico com visualização de dados em tempo real, gráficos interativos e relatórios customizáveis para tomada de decisão.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Python', 'FastAPI', 'MongoDB', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Social Media App',
      description: 'Aplicação social com feed de notícias, chat em tempo real, stories, notificações e sistema de amizades.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Node.js', 'Socket.io', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'AI Content Generator',
      description: 'Gerador de conteúdo alimentado por IA com suporte para múltiplos idiomas, templates personalizados e exportação em vários formatos.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Python', 'OpenAI', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'DevOps Pipeline',
      description: 'Pipeline CI/CD completo com testes automatizados, deploy multi-ambiente, monitoramento e rollback automático.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projetos em Destaque</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seleção de projetos que demonstram expertise técnica e capacidade de resolver problemas complexos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
