import { Github, LinkedIn } from './svgImages'

// Navbar Data
export const menuData = {
  logoLight: '/images/logo.svg',
  logoDark: '/images/logo-light.svg',
  menuContent: [
    {
      id: 1,
      title: 'Главная',
      path: '/',
      newTab: false,
    },
    {
      id: 2,
      title: 'Услуги',
      path: '/services',
      newTab: false,
    },
    {
      id: 3,
      title: 'Блог',
      path: '/blog',
      newTab: false,
    },
    {
      id: 4,
      title: 'О нас',
      path: '/about',
      newTab: false,
    },
  ],
}
// Clients
export const ClientData = [
  {
    id: 1,
    imageLight: '/images/clients/group.svg',
    imageDark: '/images/clients/group-dark.svg',
  },
  {
    id: 2,
    imageLight: '/images/clients/infinity.svg',
    imageDark: '/images/clients/infinity-dark.svg',
  },
  {
    id: 3,
    imageLight: '/images/clients/artifact.svg',
    imageDark: '/images/clients/artifact-dark.svg',
  },
  {
    id: 4,
    imageLight: '/images/clients/caudile.svg',
    imageDark: '/images/clients/caudile-dark.svg',
  },
  {
    id: 5,
    imageLight: '/images/clients/axeptio.svg',
    imageDark: '/images/clients/axeptio-dark.svg',
  },
  {
    id: 6,
    imageLight: '/images/clients/mfinity.svg',
    imageDark: '/images/clients/mfinity-dark.svg',
  },
]

export const ServiceData = [
  {
    id: 1,
    slug: 'investment-bank',
    title: 'Investment Banks',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/investment.svg',
    iconDark: '/images/services/investment-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 2,
    slug: 'sales',
    title: 'Sales & Trading',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/sales.svg',
    iconDark: '/images/services/sales-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 3,
    slug: 'mortage-loan',
    title: 'Mortgage Loans',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/loan.svg',
    iconDark: '/images/services/loan-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 4,
    slug: 'finance-analyse',
    title: 'Finance Analysis',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/finance.svg',
    iconDark: '/images/services/finance-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 5,
    slug: 'effeciency',
    title: 'Increased Efficiency',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/effeciency.svg',
    iconDark: '/images/services/effeciency-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
  {
    id: 6,
    slug: 'fund',
    title: 'Fundraising Advice',
    excerpt: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
    iconLight: '/images/services/fund.svg',
    iconDark: '/images/services/fund-dark.svg',
    featureImage: '/images/services/service-single1.png',
    videoLink: 'https://www.youtube.com/embed/YE7VzlLtp-4?si=XvNRN6ztByvZQzqh',
    serviceDetails:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectation:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceExpectationList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
    serviceQualifications:
      'Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    serviceQualificationsList: [
      {
        item: "It's scalable and secure",
      },
      {
        item: 'Artificial Intelligence Feature',
      },
      {
        item: 'Offline version available',
      },
    ],
  },
]

export const CounterData = [
  {
    id: 1,
    number: '60',
    rightIcon: '%',
    text: 'Project Completed',
  },
  {
    id: 2,
    number: '30',
    rightIcon: '+',
    text: 'Team Members',
  },
  {
    id: 3,
    number: '40',
    rightIcon: 'K',
    text: 'Satisfied Clients',
  },
]

export const FAQData = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'Что такое бизнес-агентство?',
    answer:
      'Бизнес-агентство - это компания, которая предоставляет профессиональные услуги для развития и оптимизации бизнеса клиентов.',
  },
  {
    id: 2,
    type: ['general'],
    question: 'Какие услуги предоставляет бизнес-агентство?',
    answer:
      'Мы предоставляем широкий спектр услуг, включая IT-консалтинг, разработку программного обеспечения, оптимизацию бизнес-процессов и техническую поддержку.',
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'Как часто нужно обновлять веб-сайт?',
    answer:
      'Рекомендуется регулярно обновлять контент и функционал веб-сайта, минимум раз в месяц, чтобы поддерживать его актуальность и эффективность.',
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'Как работает подписка?',
    answer:
      'Наша система подписки предоставляет гибкие планы обслуживания с ежемесячной или годовой оплатой, включающие различные уровни поддержки и услуг.',
  },
  {
    id: 5,
    type: ['changelog', 'terms'],
    question: 'С какими сервисами вы совместимы?',
    answer:
      'Мы работаем со всеми основными платформами и технологиями, обеспечивая полную интеграцию с вашей существующей инфраструктурой.',
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'Какие дополнительные сервисы вы предлагаете?',
    answer:
      'Мы предлагаем широкий спектр дополнительных услуг, включая облачные решения, кибербезопасность и аналитику данных.',
  },
]

export const TestimonialData = [
  {
    id: 1,
    logoLight: '/images/testimonial/bodygroup.svg',
    logoDark: '/images/testimonial/bodygroup-dark.svg',
    testimonial:
      'Отличный сервис! Команда профессионалов помогла нам оптимизировать IT-инфраструктуру и значительно повысить эффективность работы.',
    rating: 4,
    author: {
      name: 'Роберт Фрост',
      designation: 'Ведущий разработчик',
      image: '/images/testimonial/avatar1.png',
    },
  },
  {
    id: 2,
    logoLight: '/images/testimonial/caudile.svg',
    logoDark: '/images/testimonial/caudile-dark.svg',
    testimonial:
      'Благодаря Komek Me мы смогли модернизировать нашу IT-систему и улучшить безопасность данных. Рекомендуем!',
    rating: 5,
    author: {
      name: 'Гай Хокинс',
      designation: 'Разработчик',
      image: '/images/testimonial/avatar2.png',
    },
  },
  {
    id: 3,
    logoLight: '/images/testimonial/axeptio.svg',
    logoDark: '/images/testimonial/axeptio-dark.svg',
    testimonial: 'Профессиональный подход и отличное качество услуг. Помогли нам решить сложные технические задачи.',
    rating: 3,
    author: {
      name: 'Коди Фишер',
      designation: 'UI Дизайнер',
      image: '/images/testimonial/avatar3.png',
    },
  },
  {
    id: 4,
    logoLight: '/images/testimonial/infinity.svg',
    logoDark: '/images/testimonial/infinity-dark.svg',
    testimonial: 'Отзывчивая команда и индивидуальный подход к каждому клиенту. Всегда находят оптимальные решения.',
    rating: 2,
    author: {
      name: 'Альберт Флорес',
      designation: 'Старший разработчик',
      image: '/images/testimonial/avatar4.png',
    },
  },
  {
    id: 5,
    logoLight: '/images/testimonial/mfinity.svg',
    logoDark: '/images/testimonial/mfinity-dark.svg',
    testimonial:
      'Отличный сервис с профессиональным подходом к решению задач. Рекомендую всем, кто ищет надежного IT-партнера.',
    rating: 1,
    author: {
      name: 'Михаил Федоров',
      designation: 'Младший дизайнер',
      image: '/images/testimonial/avatar5.png',
    },
  },
  {
    id: 6,
    logoLight: '/images/testimonial/coolchat.svg',
    logoDark: '/images/testimonial/coolchat-dark.svg',
    testimonial:
      'Команда всегда оперативно реагирует на наши запросы и предлагает эффективные решения для оптимизации IT-инфраструктуры.',
    rating: 5,
    author: {
      name: 'Елена Петрова',
      designation: 'Менеджер',
      image: '/images/testimonial/avatar6.png',
    },
  },
]

export const PaymentRatingData = [
  {
    id: 1,
    rating: 4.7,
    name: 'Capterra',
    desc: 'Top Customer Fulfilment',
  },
  {
    id: 2,
    rating: 4.6,
    name: 'Capterra',
    desc: 'Best Payment Software',
  },
  {
    id: 3,
    rating: 4.9,
    name: 'Trustpilot',
    desc: 'Top Payment Company',
  },
]

export const CoreFeatures = [
  {
    id: 1,
    title: 'Полезные функции',
    iconLight: '/images/payment/invoice.svg',
    iconDark: '/images/payment/invoice-dark.svg',
    desc: 'Инновационные решения для оптимизации вашего бизнеса',
  },
  {
    id: 2,
    title: 'Аналитика и отчеты',
    iconLight: '/images/payment/insight.svg',
    iconDark: '/images/payment/insight-dark.svg',
    desc: 'Подробная аналитика и отчетность для принятия решений',
  },
  {
    id: 3,
    title: 'Управление ресурсами',
    iconLight: '/images/payment/inventory.svg',
    iconDark: '/images/payment/inventory-dark.svg',
    desc: 'Эффективное управление IT-ресурсами компании',
  },
  {
    id: 4,
    title: 'Контроль расходов',
    iconLight: '/images/payment/expens.svg',
    iconDark: '/images/payment/expens-dark.svg',
    desc: 'Оптимизация и контроль IT-расходов',
  },
  {
    id: 5,
    title: 'Управление документами',
    iconLight: '/images/payment/receipts.svg',
    iconDark: '/images/payment/receipts-dark.svg',
    desc: 'Эффективная система управления документацией',
  },
  {
    id: 6,
    title: 'Мобильное приложение',
    iconLight: '/images/payment/app.svg',
    iconDark: '/images/payment/app-dark.svg',
    desc: 'Доступ к сервисам с мобильных устройств',
  },
]

export const PaymentFeaturesData = [
  {
    id: 1,
    iconLight: '/images/payment/paymentFeature.svg',
    iconDark: '/images/payment/paymentFeature-dark.svg',
    title: 'Удобные функции',
    desc: 'Интуитивно понятный интерфейс и полезные инструменты',
  },
  {
    id: 2,
    iconLight: '/images/payment/payementSecure.svg',
    iconDark: '/images/payment/payementSecure-dark.svg',
    title: '100% Безопасность',
    desc: 'Надежная защита данных и транзакций',
  },
  {
    id: 3,
    iconLight: '/images/payment/paymentCashback.svg',
    iconDark: '/images/payment/paymentCashback-dark.svg',
    title: 'Программа лояльности',
    desc: 'Выгодные условия для постоянных клиентов',
  },
]

export const PricingData = [
  {
    id: 1,
    featured: false,
    title: 'Basic',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '19.00',
    priceYearly: '230.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 2,
    featured: true,
    title: 'Standard',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '32.00',
    priceYearly: '350.00',
    save: '40%',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
  {
    id: 3,
    featured: false,
    title: 'Premium',
    desc: 'The prevailing view assumed lorem ipsum was born as a nonsense text.',
    priceMonthly: '48.00',
    priceYearly: '530.00',
    save: '',
    priceList: [
      {
        name: 'Track income & expenses',
      },
      {
        name: 'Send custom invoices & quotes',
      },
      {
        name: 'Connect your bank',
      },
      {
        name: 'Insights & reports',
      },
    ],
  },
]

export const BankingServicesData = [
  {
    id: 1,
    iconLight: '/images/banking/agent.svg',
    iconDark: '/images/banking/agent-dark.svg',
    title: 'Agent Banking',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    iconLight: '/images/banking/savings.svg',
    iconDark: '/images/banking/savings-dark.svg',
    title: 'Savings Account',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    iconLight: '/images/banking/interest.svg',
    iconDark: '/images/banking/interest-dark.svg',
    title: 'Low Interest',
    desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const teamData = [
  {
    id: 1,
    name: 'Cody Fisher',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team1.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 2,
    name: 'Kristin Coper',
    designation: 'Project Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team2.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    designation: 'Lead Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team3.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 4,
    name: 'Wade Wareen',
    designation: 'Designer',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team4.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 5,
    name: 'Bessie Cooper',
    designation: 'Product Manager',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team5.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
  {
    id: 6,
    name: 'Jacob Jones',
    designation: 'Art Director',
    fbLink: '#',
    dribbleInLink: '#',
    gitHubLink: '#',
    linkedInLink: '#',
    image: '/images/team/team6.png',
    details:
      'Lorem ipsum dolor sit amet consectetur. Nullam blandit dui gravida aliquam enim eu. Adipiscing viverra vulputate curabitur est. <br /> <br /> Morbi lorem proin morbi tempor risus. Nisl lobortis diam id faucibus pretium vitae suspendisse sed accumsan. Sodales morbi tristique elit cursus gravida. Ullamcorper commodo eget pulvinar pretium. Condimentum rhoncus commodo amet nec auctor nibh vel mi blandit. <br /> <br />Neque ultrices nunc condimentum morbi risus tincidunt. Vel arcu lacus non ornare. Porttitor in rhoncus magna augue adipiscing.',
    email: 'team@gmail.com',
    phone: '+3 230 705 5448',
  },
]

export const AboutFeaturesData = [
  {
    id: 1,
    iconLight: '/images/about/passion.svg',
    iconDark: '/images/about/passion-dark.svg',
    title: 'Наша страсть',
    desc: 'Мы увлечены технологиями и инновациями',
  },
  {
    id: 2,
    iconLight: '/images/about/transparency.svg',
    iconDark: '/images/about/transparency-dark.svg',
    title: 'Прозрачность',
    desc: 'Честные и открытые отношения с клиентами',
  },
  {
    id: 3,
    iconLight: '/images/about/mission.svg',
    iconDark: '/images/about/mission-dark.svg',
    title: 'Наша миссия',
    desc: 'Помогать бизнесу расти через технологии',
  },
]

export const AboutImages = [
  {
    id: 1,
    image: '/images/about/about1.png',
  },
  {
    id: 2,
    image: '/images/about/about2.png',
  },
  {
    id: 3,
    image: '/images/about/about3.png',
  },
]

export const IntegrationData = [
  {
    id: 1,
    image: '/images/figma.svg',
    title: 'Figma',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 2,
    image: '/images/dropbox.svg',
    title: 'Dropbox',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 3,
    image: '/images/twitter.svg',
    title: 'Twitter/X',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 4,
    image: '/images/slack.svg',
    title: 'Slack',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 5,
    image: '/images/google-drive.svg',
    title: 'Google Drive',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
  {
    id: 6,
    image: '/images/asana.svg',
    title: 'Asana',
    details: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
  },
]

export const FooterData = {
  logo: '/images/logo-mini.png',
  logoDark: '/images/logo-mini.png',
  footerText: 'Мы помогаем компаниям оптимизировать их IT-инфраструктуру и достигать максимальной эффективности.',
  copyright: `${new Date().getFullYear()} Komek Me. Все права защищены`,
  email: 'admin@komek.me',
  phone: '+3 230 705 5448',
  expolre: [
    {
      id: 1,
      name: 'О нас',
      link: '/about',
    },
    {
      id: 2,
      name: 'Услуги',
      link: '/services',
    },
    {
      id: 3,
      name: 'Цены',
      link: '/price',
    },
    {
      id: 4,
      name: 'Вопросы',
      link: '/faq',
    },
    {
      id: 5,
      name: 'Контакты',
      link: '/contact',
    },
  ],
  resources: [
    {
      id: 1,
      name: 'Блог',
      link: '/blog',
    },
    {
      id: 2,
      name: 'Вход',
      link: '/login',
    },
    {
      id: 3,
      name: 'Регистрация',
      link: '/signup',
    },
  ],

  socialLinks: [
    {
      id: 1,
      name: <Github />,
      link: '#',
    },
    {
      id: 3,
      name: <LinkedIn />,
      link: '#',
    },
  ],
}
