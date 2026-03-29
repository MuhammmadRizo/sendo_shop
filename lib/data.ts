import { Product, Review, FAQItem, BlogPost, Category, VideoItem } from '@/types';
import AquaA7 from "../assets/SendoAquaA7.png"
import AquaA12 from "../assets/SendoAquaA12.png"
import AquaA7Boost from "../assets/SendoAquaA7Boost.png"
import AquaA12Boost from "../assets/SendoAquaA12Boost.png"
import Aqua3DC from "../assets/SendoAqua3DC.png"
import Aqua3DE from "../assets/SendoAqua3DE.png"
import AquaKomplekt from "../assets/KomplektKarridji.png"
import Video from "../assets/InstallSENDOAQUAA12BOOST.jpg"
import blog from "../assets/IliZachemUstanovlivat.png"
import blog1 from "../assets/OchistkaVodi.png"
import Kar4d from "../assets/Karridji4d.png"
import filtri from "../assets/filtri.png"
import qiz from "../assets/qiz.png"






export const PRODUCTS: Product[] = [
  {
    id: '1', slug: 'sendo-aqua-a7',
    name: 'Sendo Aqua A7',
    shortDescription: '5-ступенчатая система очистки воды. Установка под мойку.',
    price: 14452, oldPrice: 17900, discountPercent: 19,
    mainImage: AquaA7,
    rating: 4.9, reviewsCount: 312, stockStatus: 'in_stock',
    isFeatured: true, badge: 'bestseller', filtrationStages: 5, installationType: 'under_sink',
    categoryId: "1"
  },
  {
    id: '2', slug: 'sendo-aqua-a12',
    name: 'Sendo Aqua A12',
    shortDescription: '7-ступенчатая фильтрация. Минерализация воды.',
    price: 19900, oldPrice: 24500, discountPercent: 19,
    mainImage: AquaA12,
    rating: 4.8, reviewsCount: 187, stockStatus: 'in_stock',
    isFeatured: true, badge: 'new', filtrationStages: 7, installationType: 'under_sink',
    categoryId: "1"
  },
  {
    id: '3', slug: 'sendo-aqua-a7-boost',
    name: 'Sendo Aqua A7 Boost',
    shortDescription: '5 ступеней + насос повышения давления.',
    price: 17200, oldPrice: 21000,
    mainImage: AquaA7Boost,
    rating: 4.7, reviewsCount: 94, stockStatus: 'in_stock',
    isFeatured: true, filtrationStages: 5, installationType: 'under_sink',
    categoryId: "1"
  },
  {
    id: '4', slug: 'sendo-aqua-a12-boost',
    name: 'Sendo Aqua A12 Boost',
    shortDescription: '7 ступеней + насос + УФ-лампа для максимальной защиты.',
    price: 23500, oldPrice: 28900,
    mainImage: AquaA12Boost,
    rating: 4.9, reviewsCount: 58, stockStatus: 'in_stock',
    isFeatured: true, filtrationStages: 7, installationType: 'under_sink',
    categoryId: "1"
  },
  {
    id: '5', slug: 'sendo-aqua-3dc',
    name: 'Sendo Aqua 3DC',
    shortDescription: '3-ступенчатый настольный фильтр для квартиры.',
    price: 8990, oldPrice: 11500, discountPercent: 22,
    mainImage: Aqua3DC,
    rating: 4.6, reviewsCount: 143, stockStatus: 'in_stock',
    isPromo: true, badge: 'sale', filtrationStages: 3, installationType: 'countertop',
    categoryId: "2"
  },
  {
    id: '6', slug: 'sendo-aqua-3de',
    name: 'Sendo Aqua 3DE',
    shortDescription: '3 ступени + электронный индикатор замены картриджа.',
    price: 10990, oldPrice: 13500, discountPercent: 19,
    mainImage: Aqua3DE,
    rating: 4.7, reviewsCount: 76, stockStatus: 'in_stock',
    isPromo: true, badge: 'sale', filtrationStages: 3, installationType: 'countertop',
    categoryId: "2"
  },
  {
    id: '7', slug: 'sendo-aqua-a7-kartridzhi-komplekt',
    name: 'Комплект картриджей A7',
    shortDescription: 'Набор картриджей для Sendo Aqua A7 на 1 год.',
    price: 3490, oldPrice: 4900,
    mainImage: AquaKomplekt,
    rating: 4.8, reviewsCount: 221, stockStatus: 'in_stock',
    isPromo: true, badge: 'sale',
    categoryId: "3"
  },
  {
    id: '8', slug: 'kartridji-3dona',
    name: 'Картриджи, 3 шт.',
    shortDescription: 'Для периодического обслуживания фильтров обратного осмоса',
    price: 1990, oldPrice: 4390,
    mainImage: AquaKomplekt,
    rating: 4.8, reviewsCount: 221, stockStatus: 'in_stock',
    isPromo: true, badge: 'sale',
    categoryId: "3"
  },
  {
    id: '9', slug: 'kartridji-4dona',
    name: 'Картриджи, 4 шт.',
    shortDescription: 'Для периодического обслуживания фильтров обратного осмоса',
    price: 4390, oldPrice: 7480,
    mainImage: Kar4d,
    rating: 4.8, reviewsCount: 221, stockStatus: 'in_stock',
    isPromo: true, badge: 'sale',
    categoryId: "3"
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.isFeatured);
export const PROMO_PRODUCTS = PRODUCTS.filter(p => p.isPromo);

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Фильтры обратного осмоса', slug: 'FiltrOsmosa', image: AquaA12, productCount: 6 },
  { id: '2', name: 'Корпус для колб', slug: 'korpus-dlya-kolb', image: Aqua3DE, productCount: 4 },
  { id: '3', name: 'Расходники и картриджи', slug: 'kartridzhi', image: AquaKomplekt, productCount: 12 },
];

export const REVIEWS: Review[] = [
  { id: '1', authorName: 'Анна М.', location: 'Кухня', rating: 5, text: 'Отличный фильтр! Вода стала заметно вкуснее, семья очень довольна. Установка заняла всего 40 минут — следовала видеоинструкции. Рекомендую всем!', date: '12 ноя 2024' },
  { id: '2', authorName: 'Сергей К.', location: 'Ванная', rating: 5, text: 'Брал Aqua A12 Boost. Качество сборки отличное, вода чистая как родниковая. Картриджи доступны по цене. Служба поддержки помогла с вопросами по установке.', date: '3 дек 2024' },
  { id: '3', authorName: 'Елена В.', location: 'Офис', rating: 5, text: 'Заказали два фильтра A7 для офиса. Монтажники пришли вовремя, всё установили чисто. Коллеги перестали покупать бутилированную воду — экономия очевидна.', date: '18 янв 2025' },
  { id: '4', authorName: 'Дмитрий Л.', location: 'Кухня', rating: 4, text: 'Пользуюсь полгода, всем доволен. Единственное — хотелось бы более тихую помпу у Boost-версии, но к качеству воды претензий нет совсем.', date: '29 янв 2025' },
];

export const FAQ_ITEMS: FAQItem[] = [
  { id: '1', question: 'Как часто нужно менять картриджи?', answer: 'Предфильтры (картриджи 1–3) рекомендуется менять каждые 6–8 месяцев в зависимости от качества воды. Мембрана обратного осмоса служит 2–3 года. Постфильтр — 12 месяцев. В комплект картриджей на год входит всё необходимое.', category: 'Обслуживание' },
  { id: '2', question: 'Трудно ли установить фильтр самостоятельно?', answer: 'Нет. Каждый фильтр поставляется с подробной инструкцией и видеогайдом. Большинство клиентов устанавливают самостоятельно за 30–60 минут. Вам понадобится только ключ и отвёртка. Также доступна услуга профессиональной установки.', category: 'Установка' },
  { id: '3', question: 'Подходит ли фильтр для моей квартиры?', answer: 'Модели A7 и A12 устанавливаются под мойку и требуют минимум 30 см свободного пространства в шкафчике. Модели 3DC и 3DE — настольные, подходят для любого помещения. Если не уверены — напишите нам, подберём оптимальную модель.', category: 'Выбор модели' },
  { id: '4', question: 'Какую гарантию вы предоставляете?', answer: '24 месяца на корпус фильтра и все механические компоненты. 12 месяцев на электронные компоненты (помпа, реле, кран). На расходные материалы (картриджи, мембрана) гарантия не распространяется — они являются расходниками.', category: 'Гарантия' },
  { id: '5', question: 'Как быстро осуществляется доставка?', answer: 'По Москве и Санкт-Петербургу — 1–2 рабочих дня. По России (СДЭК, Почта России) — 3–7 рабочих дней. При заказе до 14:00 отправка осуществляется в тот же день.', category: 'Доставка' },
];

export const BLOG_POSTS: BlogPost[] = [
  // { id: '1', slug: 'kak-vybrat-filtr-obratnogo-osmosa', title: 'Как выбрать фильтр обратного осмоса: полный гайд 2025', excerpt: 'Разбираем всё: от принципа работы мембраны до критериев выбора модели для вашего дома. Сравниваем 5 и 7 ступеней очистки.', thumbnail: blog, date: '15 фев 2025', category: 'Руководства' },
  { id: '4', slug: 'kachestvo-vody-v-rossii', title: '«Как фильтры SENDO спасли меня от серьёзных проблем с здоровьем»', excerpt: 'История 26-ти летнего мужчины из Оренбурга, как фильтры обратного осмоса…', thumbnail: filtri, date: '10 мар 2025', category: 'Аналитика' },
  { id: '2', slug: 'zamena-kartridzhej', title: 'Замена картриджей: пошаговая инструкция за 15 минут', excerpt: 'Подробный видеогайд и текстовая инструкция по самостоятельной замене картриджей. Инструменты, порядок действий, советы.', thumbnail: blog1, date: '2 мар 2025', category: 'Обслуживание' },
  { id: '3', slug: 'kachestvo-vody-v-rossii', title: 'Качество воды в российских городах: что показывает анализ', excerpt: 'Мы проанализировали данные Роспотребнадзора по 20 крупнейшим городам. Результаты вас удивят — и заставят задуматься.', thumbnail: blog1, date: '10 мар 2025', category: 'Аналитика' },
  { id: '5', slug: 'kachestvo-vody-v-rossii', title: 'Качество воды в российских городах: что показывает анализ', excerpt: 'Мы проанализировали данные Роспотребнадзора по 20 крупнейшим городам. Результаты вас удивят — и заставят задуматься.', thumbnail: blog1, date: '10 мар 2025', category: 'Аналитика' },
  // { id: '6', slug: 'kachestvo-vody-v-rossii', title: 'Качество воды в российских городах: что показывает анализ', excerpt: 'Мы проанализировали данные Роспотребнадзора по 20 крупнейшим городам. Результаты вас удивят — и заставят задуматься.', thumbnail: qiz, date: '10 мар 2025', category: 'Аналитика' },
  { id: '7', slug: 'kachestvo-vody-v-rossii', title: 'Качество воды в российских городах: что показывает анализ', excerpt: 'Мы проанализировали данные Роспотребнадзора по 20 крупнейшим городам. Результаты вас удивят — и заставят задуматься.', thumbnail: blog1, date: '10 мар 2025', category: 'Аналитика' },
];

export const VIDEOS: VideoItem[] = [
  { id: '1', title: 'Установка Sendo Aqua A7 под мойку', thumbnail: Video, youtubeId: 'dQw4w9WgXcQ', duration: '8:24' },
  { id: '2', title: 'Замена картриджей: полная инструкция', thumbnail: Video, youtubeId: 'dQw4w9WgXcQ', duration: '5:12' },
];
