import { Code2, Database, Layout, Server, Cloud, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Front-end',
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'HTML5/CSS3']
    },
    {
      icon: Server,
      title: 'Back-end',
      color: 'from-green-500 to-emerald-500',
      skills: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'FastAPI', 'REST APIs', 'GraphQL']
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      color: 'from-orange-500 to-red-500',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Prisma']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-cyan-500 to-blue-500',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Nginx']
    },
    {
      icon: Code2,
      title: 'Outras Linguagens',
      color: 'from-pink-500 to-rose-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'SQL']
    },
    {
      icon: GitBranch,
      title: 'Ferramentas',
      color: 'from-slate-500 to-gray-600',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Jira']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Domínio de tecnologias modernas e ferramentas essenciais para desenvolvimento profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <Icon className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
