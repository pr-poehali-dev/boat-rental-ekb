import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedBoat, setSelectedBoat] = useState('');

  const boats = [
    {
      id: 'celebrity-180br',
      name: 'Celebrity 180BR',
      description: 'Премиальный катер для комфортного отдыха',
      image: 'https://cdn.poehali.dev/projects/49b3c60f-340c-4b78-a6d6-69cdecd24126/files/fca9d133-e6eb-4801-a16d-7a832fa7e2f8.jpg',
      capacity: '6 человек',
      power: '150 л.с.',
      price: '15 000 ₽/час',
      features: ['GPS навигация', 'Музыкальная система', 'Тент от солнца', 'Холодильник']
    },
    {
      id: 'bayliner-175',
      name: 'Bayliner 175',
      description: 'Спортивный катер для активного отдыха',
      image: 'https://cdn.poehali.dev/projects/49b3c60f-340c-4b78-a6d6-69cdecd24126/files/b28d298a-8f15-46c9-8cd2-3bba20b15863.jpg',
      capacity: '5 человек',
      power: '135 л.с.',
      price: '12 000 ₽/час',
      features: ['Водные лыжи', 'Музыка', 'Эхолот', 'Спортивное управление']
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Отличный сервис! Катер в идеальном состоянии, персонал профессиональный. Провели незабываемый день на воде!',
      date: '15 декабря 2024'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Арендовали Celebrity для семейной прогулки. Все понравилось! Комфортно, безопасно, красиво.',
      date: '8 декабря 2024'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      text: 'Bayliner - отличный выбор для рыбалки. Мощный, управляемый, есть всё необходимое.',
      date: '1 декабря 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Anchor" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">AquaRent</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#boats" className="text-foreground hover:text-primary transition-colors">Катера</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Бронирование</a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (343) 123-45-67
          </Button>
        </div>
      </nav>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-100/50"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves)"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Star" size={14} className="mr-1" />
              Лучший сервис аренды в Екатеринбурге
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">
              Аренда катеров в Екатеринбурге
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Celebrity 180BR и Bayliner 175 — комфорт и свобода на воде
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('boats')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Ship" size={20} className="mr-2" />
                Наши катера
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="boats" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши катера</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современный флот для вашего комфортного отдыха на воде
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {boats.map((boat) => (
              <Card key={boat.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale">
                <div className="relative h-64 overflow-hidden">
                  <img src={boat.image} alt={boat.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-primary">
                    {boat.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{boat.name}</CardTitle>
                  <CardDescription className="text-base">{boat.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span className="text-sm">{boat.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-primary" />
                      <span className="text-sm">{boat.power}</span>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    {boat.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6" size="lg" onClick={() => {
                    setSelectedBoat(boat.id);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Выбрать катер
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Тарифы</h2>
            <p className="text-lg text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">
                  <Icon name="Clock" size={32} className="mx-auto mb-2 text-primary" />
                  1 час
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">от 12 000 ₽</p>
                <p className="text-muted-foreground">Минимальная аренда</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow border-primary border-2">
              <CardHeader>
                <Badge className="mb-2 mx-auto">Популярно</Badge>
                <CardTitle className="text-center">
                  <Icon name="Clock3" size={32} className="mx-auto mb-2 text-primary" />
                  4 часа
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">от 45 000 ₽</p>
                <p className="text-muted-foreground">Скидка 5%</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">
                  <Icon name="Calendar" size={32} className="mx-auto mb-2 text-primary" />
                  Полный день
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-3xl font-bold text-secondary mb-2">от 85 000 ₽</p>
                <p className="text-muted-foreground">Скидка 10%</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" size={16} className="text-primary mt-0.5" />
                    <span>В стоимость входит: топливо, страховка, инструктаж</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Info" size={16} className="text-primary mt-0.5" />
                    <span>Залог: 20 000 ₽ (возвращается после аренды)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Info" size={16} className="text-primary mt-0.5" />
                    <span>Капитан по запросу: +3 000 ₽/час</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши гости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-8 bg-primary/10 px-8 py-4 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Средний рейтинг</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Бронирование</h2>
            <p className="text-lg text-muted-foreground">Заполните форму и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card className="max-w-2xl mx-auto shadow-2xl">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="boat">Выберите катер</Label>
                  <Select value={selectedBoat} onValueChange={setSelectedBoat}>
                    <SelectTrigger id="boat">
                      <SelectValue placeholder="Выберите катер" />
                    </SelectTrigger>
                    <SelectContent>
                      {boats.map((boat) => (
                        <SelectItem key={boat.id} value={boat.id}>
                          {boat.name} — {boat.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Длительность</Label>
                  <Select>
                    <SelectTrigger id="duration">
                      <SelectValue placeholder="Выберите длительность" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 час</SelectItem>
                      <SelectItem value="2">2 часа</SelectItem>
                      <SelectItem value="4">4 часа</SelectItem>
                      <SelectItem value="8">Полный день (8 часов)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий (необязательно)</Label>
                  <Textarea id="comment" placeholder="Особые пожелания или вопросы" />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (343) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00 - 21:00</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@aquarent-ekb.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Верх-Исетский пруд</p>
                <p className="text-sm text-muted-foreground mt-1">Екатеринбург</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Anchor" size={32} />
                <span className="text-2xl font-bold">AquaRent</span>
              </div>
              <p className="text-white/80">Аренда катеров премиум-класса в Екатеринбурге</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2 text-white/80">
                <a href="#boats" className="block hover:text-white transition-colors">Катера</a>
                <a href="#prices" className="block hover:text-white transition-colors">Цены</a>
                <a href="#reviews" className="block hover:text-white transition-colors">Отзывы</a>
                <a href="#contacts" className="block hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (343) 123-45-67</p>
                <p>info@aquarent-ekb.ru</p>
                <p>Верх-Исетский пруд, Екатеринбург</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <div className="text-center text-white/60 text-sm">
            <p>© 2024 AquaRent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
