import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-blue-400 border-blue-400/50 bg-blue-500/10 text-sm px-4 py-1">Реализованный проект</Badge>,
    title: "Шкаф управления центрифугой",
    content: (
      <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-2 text-neutral-400">
        Комплексное решение для автоматизации промышленных центрифуг — от проектирования до ввода в эксплуатацию
      </p>
    ),
    showButton: true,
    buttonText: 'Подробнее'
  },
  {
    id: 'about',
    title: 'О проекте',
    content: (
      <div className="space-y-6 max-w-3xl">
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Мы разработали и внедрили шкаф управления для промышленной центрифуги, обеспечивающий полностью автоматизированный цикл работы оборудования.
        </p>
        <p className="text-base md:text-lg text-neutral-400 leading-relaxed">
          Проект включал проектирование электрической схемы, подбор компонентов, сборку шкафа, программирование контроллера и пусконаладочные работы. Решение обеспечивает стабильную работу центрифуги в режиме 24/7 с минимальным участием оператора.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-neutral-500 mt-1">Режим работы</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400">ПЛК</div>
            <div className="text-sm text-neutral-500 mt-1">Управление</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400">IP54</div>
            <div className="text-sm text-neutral-500 mt-1">Степень защиты</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-400">HMI</div>
            <div className="text-sm text-neutral-500 mt-1">Панель оператора</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'features',
    title: 'Преимущества',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mt-2">
        {[
          { icon: "Shield", title: "Надёжность", desc: "Промышленные компоненты ведущих производителей с увеличенным ресурсом" },
          { icon: "Zap", title: "Энергоэффективность", desc: "Частотное регулирование снижает потребление электроэнергии до 30%" },
          { icon: "Monitor", title: "Удобное управление", desc: "Интуитивная HMI-панель с визуализацией всех параметров процесса" },
          { icon: "Lock", title: "Безопасность", desc: "Многоуровневая система защит от аварийных ситуаций и перегрузок" },
          { icon: "Settings", title: "Гибкая настройка", desc: "Адаптация параметров под различные режимы и типы продукции" },
          { icon: "Headphones", title: "Сервис и поддержка", desc: "Удалённая диагностика и оперативное сервисное обслуживание" },
        ].map((item) => (
          <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
              <Icon name={item.icon} size={20} className="text-blue-400" />
            </div>
            <h3 className="text-white font-semibold text-base mb-1.5">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'industries',
    title: 'Отрасли применения',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mt-2">
        {[
          { icon: "FlaskConical", title: "Химическая промышленность", desc: "Разделение суспензий, очистка химических растворов" },
          { icon: "Wheat", title: "Пищевая промышленность", desc: "Производство сахара, масла, молочной продукции" },
          { icon: "Pill", title: "Фармацевтика", desc: "Очистка субстанций, разделение биологических сред" },
          { icon: "Fuel", title: "Нефтегазовая отрасль", desc: "Очистка буровых растворов, сепарация нефтепродуктов" },
          { icon: "Mountain", title: "Горнодобыча", desc: "Обезвоживание концентратов, обогащение руд" },
          { icon: "Droplets", title: "Водоочистка", desc: "Обработка осадков, очистка промышленных стоков" },
        ].map((item) => (
          <div key={item.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.08] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
              <Icon name={item.icon} size={20} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
]
