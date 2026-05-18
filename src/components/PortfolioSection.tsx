import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Нежный омбре",
    category: "Гелевое покрытие",
    image: "/placeholder.jpg",
    description:
      "Плавный переход от нюдового к розовому — идеальный вариант для романтического образа. Стойкость до 4 недель.",
    tags: ["Омбре", "Гель-лак", "Нюд"],
  },
  {
    title: "Французский маникюр",
    category: "Классика",
    image: "/placeholder.jpg",
    description:
      "Безупречный французский маникюр с идеально ровной улыбкой. Универсальный вариант для любого повода.",
    tags: ["Французский", "Классика", "Элегантность"],
  },
  {
    title: "Цветочный nail-art",
    category: "Авторский дизайн",
    image: "/placeholder.jpg",
    description:
      "Ручная роспись с цветочными мотивами и деталями из фольги. Каждый ноготь — маленькое произведение искусства.",
    tags: ["Nail-art", "Роспись", "Цветы"],
  },
  {
    title: "Стразы и глиттер",
    category: "Праздничный маникюр",
    image: "/placeholder.jpg",
    description:
      "Эффектное праздничное оформление со стразами Swarovski и зеркальной втиркой для особых случаев.",
    tags: ["Стразы", "Глиттер", "Праздник"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждый маникюр — это отражение вашей индивидуальности. Посмотрите на работы наших мастеров.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium text-foreground">{project.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
