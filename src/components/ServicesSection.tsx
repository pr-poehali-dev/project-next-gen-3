import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Hand",
    title: "Классический маникюр",
    description:
      "Идеальный уход за руками: придание формы ногтям, обработка кутикулы, увлажнение и покрытие на ваш выбор. Создаём аккуратный и элегантный образ.",
  },
  {
    icon: "Sparkles",
    title: "Гелевое покрытие",
    description:
      "Стойкое гелевое покрытие до 4 недель без сколов и потёртостей. Широкая палитра оттенков, включая трендовые новинки сезона.",
  },
  {
    icon: "Flower2",
    title: "Nail-art и дизайн",
    description:
      "Авторские рисунки, французский маникюр, омбре, втирки и стразы. Воплощаем любые идеи — от минимализма до яркого арт-маникюра.",
  },
  {
    icon: "Footprints",
    title: "Педикюр",
    description:
      "Комплексный уход за стопами: обработка огрубевшей кожи, придание формы ногтям, расслабляющий массаж и покрытие. Мягкость и красота надолго.",
  },
  {
    icon: "Gem",
    title: "Наращивание ногтей",
    description:
      "Профессиональное наращивание на типсы или формы с использованием гелей и акрила премиум-класса. Крепкий и натуральный результат.",
  },
  {
    icon: "Heart",
    title: "SPA-уход",
    description:
      "Питательные маски, парафинотерапия и расслабляющий массаж рук и ног. Позаботьтесь о себе в уютной атмосфере нашей студии.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для красоты{" "}
          <span className="text-primary">ваших рук и ног</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Профессиональный уход, модные тренды и индивидуальный подход — в уютной студии в самом центре города.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Sparkles" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
