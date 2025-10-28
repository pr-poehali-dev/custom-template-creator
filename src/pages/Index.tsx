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
      icon: 'Users',
      title: 'Корпоративные мероприятия',
      description: 'Конференции, форумы, презентации продуктов, тимбилдинги, годовые отчёты компаний'
    },
    {
      icon: 'Heart',
      title: 'Свадьбы',
      description: 'Создание тёплой атмосферы для самого важного дня в вашей жизни'
    },
    {
      icon: 'Sparkles',
      title: 'Частные мероприятия',
      description: 'Дни рождения, юбилеи, семейные праздники в уютном формате'
    },
    {
      icon: 'Award',
      title: 'Церемонии награждения',
      description: 'Торжественные вручения премий, дипломов, благодарностей'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/047df3fb-da22-420e-8461-44538fb23d6a.jpg',
      title: 'Корпоративный форум "Инновации 2024"',
      type: 'Корпоратив',
      guests: '800 гостей'
    },
    {
      image: 'https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/1ffbcb24-68ca-4b88-8933-a45e90bd0fb4.jpg',
      title: 'Свадьба Александра и Екатерины',
      type: 'Свадьба',
      guests: '120 гостей'
    },
    {
      image: 'https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/047df3fb-da22-420e-8461-44538fb23d6a.jpg',
      title: 'Премия "Лучший сотрудник года"',
      type: 'Церемония',
      guests: '300 гостей'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-xl font-semibold tracking-tight">Андрей Буриков</div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'about', label: 'О себе' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button onClick={() => scrollToSection('contact')} size="sm">Обсудить проект</Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {[
                { id: 'about', label: 'О себе' },
                { id: 'services', label: 'Услуги' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/09db6d7e-1d95-4f5b-9b62-5e0b4fa6dd8d/files/fbcf9ba4-e7f3-4866-80b0-4e11f4baaf39.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Андрей Буриков
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-3 opacity-90">
              ведущий | сценарист | креатор
            </p>
            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl">
              Опытный ведущий для интеллигентных людей, которые ценят своё время, комфорт и креатив.
            </p>
            <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-white text-primary hover:bg-white/90">
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">О себе</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Здравствуйте! Меня зовут Андрей Буриков, и я профессиональный ведущий мероприятий. 
              За последние 12 лет я провёл более 500 событий по всей России — от камерных свадеб на 30 человек 
              до масштабных корпоративных форумов на 2000 участников.
            </p>
            <p>
              Моя философия работы строится на трёх принципах: <strong className="text-foreground">внимание к деталям</strong>, 
              <strong className="text-foreground"> уважение к гостям</strong> и <strong className="text-foreground">креативный подход</strong>. 
              Я не использую шаблонные сценарии — каждое мероприятие разрабатывается индивидуально под задачи заказчика.
            </p>
            <p>
              Работаю с крупнейшими российскими компаниями, event-агентствами и частными клиентами. 
              Если вам нужен ведущий, который умеет чувствовать аудиторию и создавать нужную атмосферу — 
              я буду рад обсудить ваше мероприятие.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">мероприятий</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">городов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Услуги</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-none bg-white hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 leading-tight">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Портфолио</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{project.type}</span>
                    <span>•</span>
                    <span>{project.guests}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Контакты</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку, и я свяжусь с вами в течение часа, чтобы обсудить детали вашего мероприятия.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">Ваше имя *</label>
                  <Input id="name" placeholder="Иван Иванов" className="border-border" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">Телефон *</label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" className="border-border" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="ivan@example.com" className="border-border" />
                </div>
                <div>
                  <label htmlFor="event" className="block text-sm font-medium mb-2 text-foreground">Тип мероприятия</label>
                  <Input id="event" placeholder="Например: корпоратив, свадьба" className="border-border" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">Дополнительная информация</label>
                  <Textarea id="message" rows={4} placeholder="Дата, место, количество гостей..." className="border-border" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-10 pt-10 border-t border-border">
                <div className="grid sm:grid-cols-2 gap-6">
                  <a href="tel:+79991234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="Phone" size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Телефон</div>
                      <div className="font-medium text-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </a>
                  <a href="mailto:info@andreyburikov.ru" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="Mail" size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Email</div>
                      <div className="font-medium text-foreground">info@andreyburikov.ru</div>
                    </div>
                  </a>
                  <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="Send" size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Telegram</div>
                      <div className="font-medium text-foreground">@username</div>
                    </div>
                  </a>
                  <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name="MessageCircle" size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">WhatsApp</div>
                      <div className="font-medium text-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Андрей Буриков. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
