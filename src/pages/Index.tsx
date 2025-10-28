import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'portfolio', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const experiences = [
    {
      period: '2022 - Настоящее время',
      position: 'Senior Frontend Developer',
      company: 'Tech Solutions',
      description: 'Разработка масштабируемых веб-приложений с использованием React и TypeScript'
    },
    {
      period: '2020 - 2022',
      position: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Создание интерактивных пользовательских интерфейсов для крупных клиентов'
    },
    {
      period: '2018 - 2020',
      position: 'Junior Developer',
      company: 'StartUp Inc',
      description: 'Участие в разработке MVP продуктов, изучение современных технологий'
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 92 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'Git', level: 88 }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Полнофункциональная платформа электронной коммерции с корзиной, оплатой и админ-панелью',
      technologies: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Аналитическая панель для управления социальными сетями с real-time обновлениями',
      technologies: ['React', 'Firebase', 'Charts.js']
    },
    {
      title: 'Task Management App',
      description: 'Приложение для управления задачами с drag-and-drop и командной работой',
      technologies: ['React', 'TypeScript', 'Supabase']
    }
  ];

  const contacts = [
    { icon: 'Mail', label: 'Email', value: 'hello@example.com', link: 'mailto:hello@example.com' },
    { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67', link: 'tel:+79991234567' },
    { icon: 'Github', label: 'GitHub', value: 'github.com/username', link: 'https://github.com' },
    { icon: 'Linkedin', label: 'LinkedIn', value: 'linkedin.com/in/username', link: 'https://linkedin.com' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-primary">Портфолио</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'experience', label: 'Опыт' },
                { id: 'skills', label: 'Навыки' },
                { id: 'portfolio', label: 'Проекты' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
              <Icon name="User" size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Иван Иванов
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Frontend Developer | UX Enthusiast | Tech Lover
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('portfolio')} className="group">
              Мои проекты
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding bg-card/30">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center">Обо мне</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Привет! Я frontend-разработчик с 5+ летним опытом создания современных веб-приложений. 
                Специализируюсь на React, TypeScript и создании отзывчивых пользовательских интерфейсов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Моя страсть — превращать сложные задачи в простые и интуитивно понятные решения. 
                Я верю в чистый код, красивый дизайн и постоянное обучение.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Когда я не кодирую, я изучаю новые технологии, читаю техническую литературу 
                и делюсь знаниями с сообществом разработчиков.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="experience" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Опыт работы</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-padding bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Навыки и технологии</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-lg">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Портфолио проектов</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Code2" size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="section-padding bg-card/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <p className="text-center text-lg text-muted-foreground mb-8">
                Свяжитесь со мной для обсуждения проектов или просто для знакомства
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={contact.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">{contact.label}</p>
                      <p className="text-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Иван Иванов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
