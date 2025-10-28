import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const services = [
    {
      icon: 'Mic',
      title: 'Ведущий мероприятий',
      description: 'Профессиональное проведение корпоративных мероприятий, конференций и бизнес-событий'
    },
    {
      icon: 'Heart',
      title: 'Свадьбы и торжества',
      description: 'Создание незабываемой атмосферы на вашем важнейшем празднике'
    },
    {
      icon: 'Briefcase',
      title: 'Корпоративные события',
      description: 'Организация и проведение деловых мероприятий любого масштаба'
    },
    {
      icon: 'Pen',
      title: 'Сценарии и концепции',
      description: 'Разработка уникальных сценариев под ваши задачи и аудиторию'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/047df3fb-da22-420e-8461-44538fb23d6a.jpg',
      title: 'Корпоративный форум Tech Summit 2024',
      description: '1000+ участников, 3 дня мероприятий'
    },
    {
      image: 'https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/1ffbcb24-68ca-4b88-8933-a45e90bd0fb4.jpg',
      title: 'Свадьба Александра и Марии',
      description: '200 гостей, ресторан Belmond'
    },
    {
      image: 'https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/047df3fb-da22-420e-8461-44538fb23d6a.jpg',
      title: 'Годовой отчёт компании "Инновации"',
      description: 'Гала-ужин для 300 топ-менеджеров'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Проведённых мероприятий' },
    { number: '12', label: 'Лет опыта' },
    { number: '98%', label: 'Довольных клиентов' },
    { number: '50+', label: 'Городов России' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold">Имя Фамилия</div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')}>Связаться</Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-foreground/70 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ведущий, сценарист, креатор
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Опытный ведущий для интеллигентных людей, которые ценят своё время, комфорт и креатив.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('portfolio')}>
                  Портфолио
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Обсудить проект
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/62bdce86-fac1-4586-b3dc-fad26f6f870d.jpg" 
                alt="Профессиональное фото" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{item.number}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Здравствуйте! Меня зовут [Ваше имя], и я профессиональный ведущий мероприятий с более чем 12-летним опытом. 
              За это время я провёл более 500 событий по всей России — от камерных свадеб до масштабных корпоративных форумов.
            </p>
            <p>
              Моя философия проста: каждое мероприятие — это уникальная история, которую нужно рассказать правильно. 
              Я не просто веду события, я создаю атмосферу, в которой каждый гость чувствует себя частью чего-то особенного.
            </p>
            <p>
              Работаю с крупнейшими компаниями и частными клиентами, создавая сценарии и концепции под конкретные задачи. 
              Моя цель — сделать так, чтобы ваше мероприятие запомнилось надолго.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding bg-muted/30">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Связаться со мной</h2>
          <Card className="border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea id="message" rows={5} placeholder="Расскажите о вашем мероприятии..." />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  <a href="tel:+79991234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Phone" size={20} />
                    <span>+7 (999) 123-45-67</span>
                  </a>
                  <a href="mailto:hello@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Mail" size={20} />
                    <span>hello@example.com</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Instagram" size={20} />
                    <span>@username</span>
                  </a>
                  <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="Send" size={20} />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container-custom text-center text-sm text-muted-foreground">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
