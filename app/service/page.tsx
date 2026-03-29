"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  XCircle,
  Wrench,
  Droplets,
  Stethoscope,
  Clock,
  Phone,
  ChevronDown,
  Star,
  CalendarDays,
  AlertTriangle,
  ArrowRight,
  Zap,
  Users,
} from "lucide-react";
import FAQPage from "../faq/page";

// ─── DATA ────────────────────────────────────────────────────────────────────

const WARRANTY_INCLUDED = [
  "Заводской брак корпуса и механических компонентов",
  "Неисправность крана (монтажный кран для питьевой воды)",
  "Дефекты сборки, обнаруженные при первом запуске",
  "Выход из строя помпы давления (модели Boost)",
  "Неисправность реле давления и поплавкового клапана",
  "Утечки по вине производителя в первые 90 дней",
];

const WARRANTY_EXCLUDED = [
  "Механические повреждения при транспортировке или монтаже",
  "Неправильная самостоятельная установка",
  "Использование несовместимых картриджей",
  "Естественный износ расходных материалов (картриджи, мембрана)",
  "Повреждения из-за перепадов давления свыше 6 бар",
  "Вмешательство в конструкцию сторонними мастерами",
];

const CARTRIDGE_SCHEDULE = [
  {
    step: "1",
    name: "Предфильтр PP",
    desc: "Полипропиленовый картридж. Задерживает механические частицы, ржавчину, осадок.",
    interval: "6–8 мес.",
    color: "#0A4BDE",
    bg: "#EEF1F8",
    urgency: "high",
  },
  {
    step: "2",
    name: "Угольный картридж",
    desc: "Активированный уголь. Удаляет хлор, запахи, органические соединения.",
    interval: "6–8 мес.",
    color: "#0A4BDE",
    bg: "#EEF1F8",
    urgency: "high",
  },
  {
    step: "3",
    name: "Блок-угольный картридж",
    desc: "Прессованный уголь. Тонкая механическая и химическая доочистка перед мембраной.",
    interval: "6–8 мес.",
    color: "#0A4BDE",
    bg: "#EEF1F8",
    urgency: "high",
  },
  {
    step: "М",
    name: "Мембрана обратного осмоса",
    desc: "Полупроницаемая мембрана 0.0001 мкм. Задерживает 99.9% загрязнений.",
    interval: "2–3 года",
    color: "#00C2FF",
    bg: "#E0F7FF",
    urgency: "low",
  },
  {
    step: "5",
    name: "Постфильтр (минерализатор)",
    desc: "Восстанавливает минеральный баланс воды после мембраны. Улучшает вкус.",
    interval: "12 мес.",
    color: "#F5B800",
    bg: "#FFFBE0",
    urgency: "medium",
  },
];

const SERVICE_TYPES = [
  {
    icon: Wrench,
    title: "Замена картриджей",
    price: "Бесплатно*",
    priceSub: "* при покупке картриджей у нас",
    desc: "Выезд специалиста на дом, замена всего комплекта картриджей, промывка системы, проверка качества воды тест-полоской.",
    time: "30–45 мин.",
    color: "#0A4BDE",
    bg: "#EEF1F8",
    steps: [
      "Заявка онлайн или по телефону",
      "Согласование даты и времени",
      "Выезд специалиста",
      "Замена + тест воды",
    ],
  },
  {
    icon: Droplets,
    title: "Промывка системы",
    price: "от 990 ₽",
    priceSub: "включает дезинфицирующий состав",
    desc: "Полная дезинфекция корпусов колб и внутренних магистралей специальным составом. Рекомендуется раз в 1–2 года.",
    time: "60–90 мин.",
    color: "#00C2FF",
    bg: "#E0F7FF",
    steps: [
      "Слив воды из бака",
      "Обработка дезинфектором",
      "Промывка до чистой воды",
      "Установка новых картриджей",
    ],
  },
  {
    icon: Stethoscope,
    title: "Диагностика и ремонт",
    price: "от 490 ₽",
    priceSub: "диагностика бесплатна при ремонте",
    desc: "Полная проверка давления, герметичности, производительности. Замена вышедших из строя компонентов с гарантией на работу.",
    time: "от 1 часа",
    color: "#FF4D00",
    bg: "#FFF0EB",
    steps: [
      "Диагностика системы",
      "Определение причины",
      "Замена компонента",
      "Проверка работы",
    ],
  },
];

const LOYALTY_BENEFITS = [
  {
    icon: Zap,
    title: "Скидка 15%",
    desc: "На все картриджи и расходники при подписке SENDO-family",
  },
  {
    icon: Droplets,
    title: "Бесплатная доставка",
    desc: "Картриджи привозим курьером без доплаты каждые 6 месяцев",
  },
  {
    icon: Star,
    title: "Приоритетный выезд",
    desc: "Специалист приедет в течение 24 часов, не 3–5 дней",
  },
  {
    icon: Users,
    title: "Личный менеджер",
    desc: "Один человек знает вашу систему и историю обслуживания",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Подайте заявку",
    desc: "Онлайн на сайте или по телефону 8 (800) 555-35-35 — бесплатно",
  },
  {
    num: "02",
    title: "Согласуем дату",
    desc: "Специалист свяжется в течение 2 часов и выберет удобное время",
  },
  {
    num: "03",
    title: "Выезд мастера",
    desc: "Приедем в назначенное время с инструментами и расходниками",
  },
  {
    num: "04",
    title: "Сервис + проверка",
    desc: "Проведём работы и проверим качество воды тест-полоской прямо при вас",
  },
];

const FAQ_SERVICE = [
  {
    q: "Как понять, что пора менять картриджи?",
    a: "Главные признаки: изменился вкус или запах воды, снизился напор из крана фильтра, прошло 6–8 месяцев с последней замены. Если вы сомневаетесь — позвоните нам, мы подскажем по дате последнего обслуживания.",
  },
  {
    q: "Можно ли менять картриджи самостоятельно?",
    a: "Да! К каждому фильтру прилагается инструкция и видеогайд. Для моделей A7 и A12 это занимает 15–20 минут. Если не хотите делать сами — вызовите специалиста. Монтаж бесплатен при покупке картриджей у нас.",
  },
  {
    q: "Что будет, если не менять картриджи вовремя?",
    a: "Перегруженные картриджи перестают очищать воду — загрязнения начинают проходить насквозь. Кроме того, засорённый предфильтр увеличивает нагрузку на мембрану и сокращает её ресурс. Своевременная замена — это экономия на мембране.",
  },
  {
    q: "На какой срок распространяется гарантия?",
    a: "24 месяца на корпус и механические компоненты, 12 месяцев на электронику (помпа, реле). Расходные материалы — картриджи, мембрана — гарантии не подлежат, так как являются расходниками с конечным ресурсом.",
  },
  {
    q: "Работаете ли вы в моём городе?",
    a: "Выездной сервис доступен в Москве, Санкт-Петербурге, Казани, Екатеринбурге, Новосибирске и ещё 40+ городах. Во всех остальных регионах мы организуем почтовую доставку картриджей и предоставляем подробные видеоинструкции.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-[#F5F7FC]">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0D1226] overflow-hidden">
        {/* bg decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#0A4BDE]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C2FF]/10 rounded-full blur-3xl" />
          {/* grid pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 py-20 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#4A5270] mb-8">
            <Link href="/" className="hover:text-[#8E97B0] transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-[#8E97B0]">Гарантия и сервис</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0A4BDE]/20 border border-[#0A4BDE]/30 text-[#00C2FF] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                <Shield size={12} /> Официальная гарантия SENDO
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                Гарантия <span className="text-[#00C2FF]">24 месяца</span> и
                профессиональный сервис
              </h1>
              <p className="text-[#8E97B0] text-base leading-relaxed mb-8 max-w-lg">
                Мы несём ответственность за каждый проданный фильтр. Бесплатный
                ремонт, выездной сервис и поддержка на весь срок эксплуатации.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "24 мес.", label: "Гарантия на корпус" },
                  { value: "40+", label: "Городов выездного сервиса" },
                  { value: "2 ч.", label: "Ответ на заявку" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <div className="text-xl font-extrabold text-white">
                      {value}
                    </div>
                    <div className="text-xs text-[#8E97B0] mt-1 leading-tight">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#service-request"
                  className="inline-flex items-center gap-2 bg-[#0A4BDE] text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#3A6EFF] transition-colors shadow-[0_4px_20px_rgba(10,75,222,0.4)]"
                >
                  Вызвать мастера <ArrowRight size={15} />
                </a>
                <a
                  href="tel:+78005553535"
                  className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Phone size={15} /> Позвонить
                </a>
              </div>
            </div>

            {/* Visual card */}
            <div className="hidden lg:block">
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      text: "Гарантия 24 месяца на корпус",
                      check: true,
                    },
                    {
                      icon: Wrench,
                      text: "Бесплатный выездной ремонт",
                      check: true,
                    },
                    {
                      icon: Droplets,
                      text: "Замена картриджей за 30 минут",
                      check: true,
                    },
                    {
                      icon: Clock,
                      text: "Ответ на заявку в течение 2 часов",
                      check: true,
                    },
                    {
                      icon: Star,
                      text: "Программа лояльности SENDO-family",
                      check: true,
                    },
                  ].map(({ icon: Icon, text, check }) => (
                    <div
                      key={text}
                      className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3"
                    >
                      <div className="w-8 h-8 bg-[#0A4BDE]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-[#00C2FF]" />
                      </div>
                      <span className="text-white text-sm flex-1">{text}</span>
                      {check && (
                        <CheckCircle
                          size={15}
                          className="text-[#00C2FF] flex-shrink-0"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WARRANTY TERMS ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1226]">
              Условия гарантии
            </h2>
            <p className="text-[#8E97B0] mt-2 text-sm">
              Прочитайте, что входит в гарантийное обслуживание
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Included */}
            <div className="bg-[#F0FFF4] border border-green-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle size={20} color="white" />
                </div>
                <h3 className="font-extrabold text-[#0D1226] text-lg">
                  Входит в гарантию
                </h3>
              </div>
              <ul className="space-y-3">
                {WARRANTY_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#4A5270]"
                  >
                    <CheckCircle
                      size={15}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="bg-[#FFF5F5] border border-red-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FF4D00] rounded-xl flex items-center justify-center">
                  <XCircle size={20} color="white" />
                </div>
                <h3 className="font-extrabold text-[#0D1226] text-lg">
                  Не входит в гарантию
                </h3>
              </div>
              <ul className="space-y-3">
                {WARRANTY_EXCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#4A5270]"
                  >
                    <XCircle
                      size={15}
                      className="text-[#FF4D00] flex-shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Warranty periods */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              {
                period: "24 месяца",
                label: "Корпус и механика",
                color: "#0A4BDE",
                bg: "#EEF1F8",
              },
              {
                period: "12 месяцев",
                label: "Электроника и помпа",
                color: "#F5B800",
                bg: "#FFFBE0",
              },
              {
                period: "Не действует",
                label: "Расходники (картриджи)",
                color: "#8E97B0",
                bg: "#F5F7FC",
              },
            ].map(({ period, label, color, bg }) => (
              <div
                key={label}
                className="rounded-2xl p-5 text-center"
                style={{ background: bg }}
              >
                <div className="text-xl font-extrabold mb-1" style={{ color }}>
                  {period}
                </div>
                <div className="text-xs text-[#8E97B0] font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-3 bg-[#FFFBE0] border border-[#F5B800]/30 rounded-2xl p-4">
            <AlertTriangle
              size={18}
              className="text-[#F5B800] flex-shrink-0 mt-0.5"
            />
            <p className="text-sm text-[#4A5270]">
              <strong className="text-[#0D1226]">Важно:</strong> Гарантийный
              ремонт производится только при наличии чека или подтверждения
              заказа. Сохраняйте документы о покупке.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARTRIDGE SCHEDULE ───────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#F5F7FC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1226]">
              График замены картриджей
            </h2>
            <p className="text-[#8E97B0] mt-2 text-sm max-w-xl mx-auto">
              Своевременная замена расходников — залог чистой воды и долгой
              службы мембраны
            </p>
          </div>

          <div className="space-y-4">
            {CARTRIDGE_SCHEDULE.map((cart, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#EEF1F8] p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-[0_4px_20px_rgba(10,75,222,0.08)] transition-shadow"
              >
                {/* Step badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-extrabold text-lg"
                  style={{ background: cart.bg, color: cart.color }}
                >
                  {cart.step}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0D1226] text-sm">
                    {cart.name}
                  </h3>
                  <p className="text-xs text-[#8E97B0] mt-0.5 leading-relaxed">
                    {cart.desc}
                  </p>
                </div>

                {/* Interval badge */}
                <div className="flex-shrink-0">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm"
                    style={{ background: cart.bg, color: cart.color }}
                  >
                    <CalendarDays size={14} />
                    {cart.interval}
                  </div>
                </div>

                {/* Urgency dot */}
                <div className="flex-shrink-0 hidden sm:flex items-center gap-1.5 text-xs font-medium text-[#8E97B0]">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      cart.urgency === "high"
                        ? "bg-[#FF4D00]"
                        : cart.urgency === "medium"
                          ? "bg-[#F5B800]"
                          : "bg-[#00C2FF]"
                    }`}
                  />
                  {cart.urgency === "high"
                    ? "Часто"
                    : cart.urgency === "medium"
                      ? "Ежегодно"
                      : "Редко"}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 bg-[#0A4BDE] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white text-center sm:text-left">
              <div className="font-bold text-base">
                Нужны картриджи для вашей модели?
              </div>
              <div className="text-white/70 text-sm mt-0.5">
                Подберём комплект и привезём в удобное время
              </div>
            </div>
            <Link
              href="/catalog"
              className="flex-shrink-0 bg-white text-[#0A4BDE] font-bold px-6 py-3 rounded-xl hover:bg-[#EEF1F8] transition-colors text-sm whitespace-nowrap"
            >
              Выбрать картриджи →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE TYPES ────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1226]">
              Виды обслуживания
            </h2>
            <p className="text-[#8E97B0] mt-2 text-sm">
              Выберите нужную услугу
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {SERVICE_TYPES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  activeService === i
                    ? "text-white shadow-[0_4px_16px_rgba(10,75,222,0.3)]"
                    : "bg-[#F5F7FC] text-[#4A5270] hover:bg-[#EEF1F8]"
                }`}
                style={activeService === i ? { background: s.color } : {}}
              >
                <s.icon size={15} />
                {s.title}
              </button>
            ))}
          </div>

          {/* Active service detail */}
          {(() => {
            const s = SERVICE_TYPES[activeService];
            return (
              <div className="grid md:grid-cols-2 gap-8 bg-[#F5F7FC] rounded-3xl p-8 md:p-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: s.bg }}
                    >
                      <s.icon size={22} style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0D1226] text-lg">
                        {s.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[#8E97B0] mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock size={10} /> {s.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#4A5270] leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  <div className="flex items-end gap-2 mb-5">
                    <span
                      className="text-3xl font-extrabold"
                      style={{ color: s.color }}
                    >
                      {s.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#8E97B0]">{s.priceSub}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#0D1226] text-sm mb-4">
                    Как проходит услуга:
                  </h4>
                  <div className="space-y-3">
                    {s.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                          style={{ background: s.color }}
                        >
                          {i + 1}
                        </div>
                        <span className="text-sm text-[#4A5270]">{step}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#service-request"
                    className="mt-6 inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
                    style={{ background: s.color }}
                  >
                    Заказать услугу <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── HOW TO CONTACT ───────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#0D1226] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A4BDE]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Как вызвать мастера
            </h2>
            <p className="text-[#8E97B0] mt-2 text-sm">
              Четыре простых шага до чистой воды
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#0A4BDE]/30 z-0"
                    style={{ width: "calc(100% - 2rem)" }}
                  />
                )}
                <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#0A4BDE]/40 transition-all">
                  <div className="text-4xl font-extrabold text-[#0A4BDE]/40 mb-4 leading-none">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#8E97B0] text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOYALTY PROGRAM ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5B800]/15 border border-[#F5B800]/30 text-[#F5B800] text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                <Star size={11} className="fill-[#F5B800]" /> Программа
                лояльности
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1226] mb-4">
                SENDO-family —<br />
                забота без забот
              </h2>
              <p className="text-[#4A5270] text-sm leading-relaxed mb-6">
                Подпишитесь на программу обслуживания SENDO-family и больше не
                думайте о картриджах. Мы сами напомним, привезём и установим —
                со скидкой.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {LOYALTY_BENEFITS.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-9 h-9 bg-[#FFFBE0] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#F5B800]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0D1226] text-sm">
                        {title}
                      </div>
                      <div className="text-xs text-[#8E97B0] mt-0.5 leading-relaxed">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#service-request"
                className="mt-8 inline-flex items-center gap-2 bg-[#F5B800] text-[#0D1226] font-extrabold px-6 py-3.5 rounded-xl hover:bg-[#F0B000] transition-colors shadow-[0_4px_16px_rgba(245,184,0,0.4)]"
              >
                Подключить SENDO-family <ArrowRight size={15} />
              </a>
            </div>

            {/* Price card */}
            <div className="bg-gradient-to-br from-[#0D1226] to-[#1A2340] rounded-3xl p-8 text-white">
              <div className="text-center mb-6">
                <div className="text-xs text-[#8E97B0] mb-1">
                  Стоимость подписки
                </div>
                <div className="text-5xl font-extrabold text-white">
                  490 <span className="text-xl">₽/мес.</span>
                </div>
                <div className="text-[#8E97B0] text-xs mt-1">
                  или 4 900 ₽/год (экономия 2 месяцев)
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Картриджи со скидкой 15%",
                  "Бесплатная курьерская доставка",
                  "Напоминания о замене по SMS/email",
                  "Приоритетный выезд мастера",
                  "Личный менеджер по сервису",
                  "Скидка 10% на ремонтные работы",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle
                      size={14}
                      className="text-[#00C2FF] flex-shrink-0"
                    />
                    <span className="text-[#D8DCE8]">{item}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[#F5B800] text-[#0D1226] font-extrabold py-3.5 rounded-xl hover:bg-[#F0B000] transition-colors">
                Оформить подписку
              </button>
              <p className="text-center text-xs text-[#4A5270] mt-3">
                Без обязательств. Отмена в любой момент.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE REQUEST FORM ─────────────────────────────── */}
      <section id="service-request" className="py-16 md:py-20 bg-[#F5F7FC]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0D1226]">
              Оставить заявку
            </h2>
            <p className="text-[#8E97B0] mt-2 text-sm">
              Заполните форму — специалист свяжется в течение 2 часов
            </p>
          </div>

          <ServiceRequestForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="space-y-3">
            {/* {FAQ_SERVICE.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${isOpen ? "border-[#0A4BDE]/30 shadow-[0_4px_16px_rgba(10,75,222,0.08)]" : "border-[#EEF1F8]"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span
                      className={`font-semibold text-sm leading-snug ${isOpen ? "text-[#0A4BDE]" : "text-[#0D1226]"}`}
                    >
                      {item.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#0A4BDE]" : "text-[#8E97B0]"}`}
                    />
                  </button>
                  <div
                    className={`faq-content px-5 ${isOpen ? "open pb-5" : ""}`}
                  >
                    <p className="text-sm text-[#4A5270] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })} */}
            <FAQPage />
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#8E97B0] text-sm mb-3">Не нашли ответ?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:+78005553535"
                className="inline-flex items-center gap-2 bg-[#0A4BDE] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#072FA0] transition-colors"
              >
                <Phone size={14} /> +7 (800) 555-35-35
              </a>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 border border-[#D8DCE8] text-[#4A5270] font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-[#0A4BDE] hover:text-[#0A4BDE] transition-colors"
              >
                Все вопросы и ответы <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── SERVICE REQUEST FORM ─────────────────────────────────────────────────────

function ServiceRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    model: "",
    serviceType: "",
    comment: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-[#EEF1F8] p-10 text-center">
        <div className="w-16 h-16 bg-[#EEF1F8] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-[#0A4BDE]" />
        </div>
        <h3 className="text-xl font-extrabold text-[#0D1226] mb-2">
          Заявка принята!
        </h3>
        <p className="text-[#8E97B0] text-sm max-w-xs mx-auto">
          Наш специалист перезвонит вам в течение 2 рабочих часов для
          согласования времени выезда.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => setSubmitted(false)}
            className="border border-[#D8DCE8] text-[#4A5270] font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-[#0A4BDE] hover:text-[#0A4BDE] transition-colors"
          >
            Новая заявка
          </button>
          <Link
            href="/"
            className="bg-[#0A4BDE] text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-[#072FA0] transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-[#EEF1F8] p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            id: "name",
            label: "Ваше имя",
            type: "text",
            placeholder: "Иван Иванов",
            required: true,
          },
          {
            id: "phone",
            label: "Телефон",
            type: "tel",
            placeholder: "+7 (___) ___-__-__",
            required: true,
          },
          {
            id: "city",
            label: "Город",
            type: "text",
            placeholder: "Москва",
            required: true,
          },
          {
            id: "model",
            label: "Модель фильтра",
            type: "text",
            placeholder: "Sendo Aqua A7",
            required: false,
          },
        ].map(({ id, label, type, placeholder, required }) => (
          <div key={id}>
            <label className="text-xs font-semibold text-[#4A5270] block mb-1.5">
              {label} {required && <span className="text-[#FF4D00]">*</span>}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              required={required}
              value={form[id as keyof typeof form]}
              onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
              className="w-full border border-[#D8DCE8] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A4BDE] transition-colors"
            />
          </div>
        ))}
      </div>

      {/* Service type */}
      <div>
        <label className="text-xs font-semibold text-[#4A5270] block mb-2">
          Тип услуги <span className="text-[#FF4D00]">*</span>
        </label>
        <div className="grid sm:grid-cols-3 gap-2">
          {SERVICE_TYPES.map((s) => (
            <label
              key={s.title}
              className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors text-sm ${
                form.serviceType === s.title
                  ? "border-[#0A4BDE] bg-[#EEF1F8] text-[#0A4BDE] font-semibold"
                  : "border-[#EEF1F8] text-[#4A5270] hover:border-[#D8DCE8]"
              }`}
            >
              <input
                type="radio"
                name="serviceType"
                value={s.title}
                required
                checked={form.serviceType === s.title}
                onChange={() =>
                  setForm((f) => ({ ...f, serviceType: s.title }))
                }
                className="sr-only"
              />
              <s.icon size={14} />
              {s.title}
            </label>
          ))}
        </div>
      </div>

      {/* Comment */}
      <div>
        <label className="text-xs font-semibold text-[#4A5270] block mb-1.5">
          Комментарий
        </label>
        <textarea
          rows={3}
          placeholder="Опишите проблему или уточните детали заказа..."
          value={form.comment}
          onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
          className="w-full border border-[#D8DCE8] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#0A4BDE] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0A4BDE] text-white font-extrabold py-4 rounded-xl hover:bg-[#072FA0] transition-colors shadow-[0_4px_20px_rgba(10,75,222,0.35)] text-sm"
      >
        Отправить заявку
      </button>
      <p className="text-center text-xs text-[#8E97B0]">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <Link href="/privacy" className="underline hover:text-[#0A4BDE]">
          политикой конфиденциальности
        </Link>
      </p>
    </form>
  );
}
