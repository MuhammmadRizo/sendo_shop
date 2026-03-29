# SENDO — Water Filtration E-Commerce
## Full Architecture Blueprint

> Reverse-engineered from homepage screenshot. Production-ready implementation plan.

---

## 1. PROJECT OVERVIEW

**Website Name:** SENDO (Sendo-Aqua product line)
**Purpose:** E-commerce platform for selling reverse osmosis water filtration systems directly to consumers (B2C), with informational content to educate buyers and drive conversions.

**Target Users:**
- Homeowners looking for under-sink or countertop water filters
- Apartment dwellers in regions with poor water quality (CIS markets — Russian-language UI)
- Small businesses seeking office water solutions
- Repeat customers needing replacement cartridges

**Main Product Category:** Reverse osmosis water filtration systems (Sendo Aqua A7, A12, A7 Boost, A12 Boost, 3DC, 3DE), replacement cartridges, and filter bundles.

**Primary Website Goals:**
1. Drive product sales through catalog + featured placements on homepage
2. Build trust via reviews, stats (20,000+ customers, 3+ years), and FAQ
3. Reduce support load via self-service FAQ + installation videos
4. Capture organic SEO traffic through blog and product structured data
5. Serve as the canonical brand hub linking to marketplace listings (Яндекс.Маркет, OZON, СберМегаМаркет)

---

## 2. COMPLETE WEBSITE PAGES STRUCTURE

### Public Pages

| Page | Route | Purpose |
|------|--------|---------|
| **Home** | `/` | Hero + featured products + trust signals + blog preview |
| **Catalog** | `/catalog` | Filterable product grid, all SKUs |
| **Category Page** | `/catalog/[category-slug]` | Pre-filtered view — e.g. "Фильтры с обратным осмосом", "Картриджи" |
| **Product Details** | `/product/[slug]` | Full product page: specs, photos, reviews, videos, buy CTA |
| **Cart** | `/cart` | Review items, quantities, subtotal |
| **Checkout** | `/checkout` | Shipping address + payment method + order summary |
| **Order Confirmation** | `/checkout/success` | Order ID, summary, next steps |
| **Delivery & Payment** | `/delivery` | Shipping methods, costs, timeframes, payment options |
| **Warranty & Service** | `/service` | Warranty terms, cartridge replacement schedule, filter maintenance |
| **About Company** | `/about` | Brand story, mission, manufacturing, certifications |
| **Blog** | `/blog` | Article grid with category filters |
| **Blog Article** | `/blog/[slug]` | Full article with related posts |
| **FAQ** | `/faq` | Accordion-based Q&A grouped by topic |
| **Contacts** | `/contacts` | Phone, address, map, contact form |
| **Installation Videos** | `/videos` | Full video library with filters |
| **Promotions** | `/promo` | Active deals and bundle offers |
| **Marketplace Partners** | Linked externally | Redirect pages to Яндекс.Маркет, OZON, СберМегаМаркет |
| **Support** | `/support` | Help request form + live chat entry point |

### Auth Pages

| Page | Route | Purpose |
|------|--------|---------|
| **Login** | `/auth/login` | Customer authentication |
| **Register** | `/auth/register` | New account creation |
| **Forgot Password** | `/auth/reset` | Password recovery |

### Account Pages (Protected)

| Page | Route | Purpose |
|------|--------|---------|
| **My Orders** | `/account/orders` | Order history + status tracking |
| **Order Detail** | `/account/orders/[id]` | Single order detail + re-order |
| **Profile Settings** | `/account/profile` | Name, phone, email, password |
| **Saved Addresses** | `/account/addresses` | Manage delivery addresses |
| **Wishlist** | `/account/wishlist` | Saved products |
| **My Reviews** | `/account/reviews` | Reviews submitted by user |

### Admin Pages (Protected, Role: Admin)

| Page | Route | Purpose |
|------|--------|---------|
| **Dashboard** | `/admin` | KPIs: orders, revenue, new customers |
| **Products** | `/admin/products` | CRUD for all products |
| **Categories** | `/admin/categories` | Manage category tree |
| **Orders** | `/admin/orders` | All orders, status updates |
| **Customers** | `/admin/customers` | Customer list, details |
| **Reviews** | `/admin/reviews` | Moderate/approve reviews |
| **Blog** | `/admin/blog` | Post editor (rich text) |
| **FAQ** | `/admin/faq` | Edit FAQ entries |
| **Videos** | `/admin/videos` | Upload/manage installation videos |
| **Promotions** | `/admin/promotions` | Create/manage discounts and banners |
| **Settings** | `/admin/settings` | Store config, shipping rates, payment keys |

---

## 3. HOME PAGE SECTION BREAKDOWN

Sections listed top-to-bottom as visible in the screenshot:

---

### 3.1 Top Utility Bar
- **Purpose:** Quick access to secondary navigation and contact info
- **Elements:** Phone number (clickable tel: link), "В наличии", "Акции", "Блог", "Доставка", "Как купить", "Гарантия", "Поддержка", cart icon with item count
- **Interactions:** Sticky on scroll; cart icon opens mini-cart drawer

---

### 3.2 Header / Main Navigation
- **Purpose:** Primary brand navigation and product discovery
- **Elements:** SENDO logo, main nav links (В каталог, Акции, Доставка, Блог, Как купить, Гарантия, Поддержка), search bar, cart button, phone number
- **Interactions:** Sticky header; search bar expands on focus; cart opens flyout; mobile: hamburger menu

---

### 3.3 Hero Section
- **Purpose:** Primary conversion CTA — value proposition for reverse osmosis filters
- **Elements:**
  - Headline: "Фильтры обратного осмоса №1* по соотношению цена/качество"
  - Subheadline: brief explanation copy
  - Two CTA buttons: "Перейти в каталог" (primary), "Подобрать фильтр" (secondary)
  - Stats strip: "8 лет — среднее время без замены воды", "830+ постоянных клиентов"
  - Featured product card (Sendo Aqua A7): image, name, price (14452 ₽), "В корзину" + "Подробнее" buttons
- **Interactions:** Primary CTA scrolls to or routes to catalog; secondary CTA opens a product quiz/selector modal; product card links to product detail page

---

### 3.4 Popular Products Section
- **Purpose:** Surface bestselling SKUs directly on homepage for quick purchase
- **Elements:**
  - Section title: "Популярные товары"
  - Horizontal scrollable row of Product Cards: Sendo Aqua A7, A12, A7 Boost, A12 Boost
  - Each card: product image, name, short description, price, "В корзину" + "Подробнее" buttons
- **Interactions:** Horizontal scroll on mobile; "В корзину" adds to cart with toast notification; "Подробнее" routes to `/product/[slug]`

---

### 3.5 Brand Advantages Strip
- **Purpose:** Build trust — two highlighted benefits with icons
- **Elements:** Two icon+text blocks: "Стали партнёром SENDO-Aqua" and "Стали резидентами программы лояльности SENDO-family"; "Узнать подробнее" links
- **Interactions:** Links route to `/about` or `/service`

---

### 3.6 Customer Reviews Section
- **Purpose:** Social proof through verified buyer testimonials
- **Elements:**
  - Section title: "Отзывы. Прочитайте что о нас говорят клиенты."
  - Three review cards side-by-side: reviewer name, location (e.g., "Ванна", "Кухня"), review text, star rating
  - Navigation arrows or pagination dots
- **Interactions:** Carousel on mobile; clicking reviewer name may link to full review; "Все отзывы" CTA

---

### 3.7 About Company Section
- **Purpose:** Brand credibility and mission statement
- **Elements:**
  - Section title: "О компании"
  - Body copy about Sendo brand history, positioning
  - Numbered list of key company facts / differentiators
  - Company image or diagram
- **Interactions:** Static; "Подробнее" links to `/about`

---

### 3.8 Statistics Section
- **Purpose:** Quantify scale and credibility with animated counters
- **Elements:**
  - "20 000+ — Счастливых клиентов"
  - "3+ — Зарегистрированных продукта"
  - "Миссия компании" text block
- **Interactions:** Numbers animate (count up) when scrolled into viewport

---

### 3.9 Product Categories Section
- **Purpose:** Help users navigate to specific product types
- **Elements:**
  - Section title: "Товары. Выберите нужную категорию товара."
  - Category cards: "Фильтры воды с обратным осмосом", "Корпус для колб", "Расходники и картриджи"
  - Below: product cards for Sendo Aqua 3DC, 3DE with prices and CTAs
- **Interactions:** Category card click routes to `/catalog/[category]`; product cards behave same as Popular Products

---

### 3.10 FAQ Section
- **Purpose:** Answer pre-purchase objections and reduce support volume
- **Elements:**
  - Section title: "Общие вопросы и ответы."
  - Left panel: Chatbot/AI recommendation widget (blue card — "Сайтфон ОАС предлагает тут услуги")
  - Accordion list of Q&A items (expandable rows)
  - Right panel: "Нужна консультация?" CTA card with phone/chat option
- **Interactions:** Accordion expand/collapse; chatbot CTA opens chat widget; consultant CTA opens contact modal or phone link

---

### 3.11 Installation Videos Section
- **Purpose:** Reduce installation anxiety and demonstrate product ease-of-use
- **Elements:**
  - Section title: "Видео с установкой. Посмотрите видео про установку наших фильтров."
  - Two video thumbnail cards: каждый с preview image, title, play button overlay
- **Interactions:** Click opens video in modal lightbox or expands inline player (YouTube embed); "Все видео" CTA routes to `/videos`

---

### 3.12 Promotional Products Section
- **Purpose:** Drive conversions with discounted bundles/kits
- **Elements:**
  - Section title: "Товары по акции"
  - Product cards with "АКЦИЯ" badge: bundle (Комплект Sendo Aqua A7 + Картриджи), standalone units with price + old price strikethrough
- **Interactions:** Same as product card interactions; old price visible for discount signal

---

### 3.13 Service Features Section
- **Purpose:** Reduce post-purchase anxiety; highlight aftersales support
- **Elements:**
  - Section title: "Обслуживание продукции"
  - Three feature blocks with icons: "Замена картриджей", "Промывка со специальным составом", "Диагностика и ремонт"
  - Short descriptions + "Подробнее" links per feature
- **Interactions:** Links route to `/service`

---

### 3.14 Marketplace Partners Section
- **Purpose:** Capture buyers who prefer purchasing via trusted marketplaces
- **Elements:**
  - Section title: "Площадки. Покупайте удобным способом прямо сейчас."
  - Logo cards: Яндекс.Маркет, OZON, СберМегаМаркет
- **Interactions:** Clicking each logo opens external marketplace listing in new tab

---

### 3.15 Blog Preview Section
- **Purpose:** SEO content hub + educate buyers + build brand authority
- **Elements:**
  - Section title: "Блог"
  - 2–3 blog preview cards: thumbnail image, article title, short excerpt, date
  - "Посмотреть все" CTA button
- **Interactions:** Card click routes to `/blog/[slug]`; CTA routes to `/blog`

---

### 3.16 Footer
- **Purpose:** Global navigation, legal links, contact, social proof
- **Elements:**
  - Four columns: Компания (links), Информация (links), Каталог (product category links), Контакты (phone, address, social icons)
  - Copyright line
- **Interactions:** All links navigate to respective pages; phone is `tel:` link; social icons open external profiles

---

## 4. COMPONENT ARCHITECTURE

### Core Layout Components

| Component | File | Reuse |
|-----------|------|-------|
| `<Header>` | `components/layout/Header.tsx` | Every page |
| `<Footer>` | `components/layout/Footer.tsx` | Every page |
| `<MobileMenu>` | `components/layout/MobileMenu.tsx` | Header (mobile breakpoint) |
| `<PageWrapper>` | `components/layout/PageWrapper.tsx` | Wraps all pages with consistent padding |

### Product Components

| Component | Props | Reuse Locations |
|-----------|-------|----------------|
| `<ProductCard>` | `product`, `variant: 'default' \| 'promo' \| 'compact'` | Homepage, Catalog, Search results |
| `<ProductImageGallery>` | `images[]` | Product Detail Page |
| `<ProductPrice>` | `price`, `oldPrice?`, `discount?` | ProductCard, ProductDetail, Cart |
| `<AddToCartButton>` | `productId`, `quantity` | ProductCard, ProductDetail |
| `<ProductBadge>` | `type: 'sale' \| 'new' \| 'bestseller'` | ProductCard overlay |
| `<ProductRating>` | `rating`, `reviewCount` | ProductCard, ProductDetail |

### Catalog Components

| Component | Props | Reuse |
|-----------|-------|-------|
| `<CategoryCard>` | `category`, `image`, `slug` | Homepage categories, Catalog sidebar |
| `<FilterSidebar>` | `filters`, `activeFilters`, `onChange` | Catalog page |
| `<SortDropdown>` | `options`, `value`, `onChange` | Catalog page |
| `<Pagination>` | `total`, `page`, `perPage`, `onChange` | Catalog, Blog |
| `<SearchBar>` | `placeholder`, `onSearch` | Header, Catalog |

### Content Components

| Component | Props | Reuse |
|-----------|-------|-------|
| `<ReviewCard>` | `author`, `location`, `text`, `rating`, `date` | Homepage, Product Detail |
| `<ReviewCarousel>` | `reviews[]` | Homepage |
| `<FAQAccordion>` | `items: {question, answer}[]` | Homepage, FAQ page |
| `<VideoCard>` | `thumbnail`, `title`, `videoUrl` | Homepage, Videos page |
| `<VideoModal>` | `videoUrl`, `isOpen`, `onClose` | Triggered by VideoCard |
| `<BlogCard>` | `post`, `variant: 'preview' \| 'full'` | Homepage, Blog page |
| `<StatCounter>` | `value`, `label`, `animateOnView` | Homepage stats strip |
| `<MarketplaceCard>` | `name`, `logo`, `url` | Homepage partners section |

### UI Primitives

| Component | Variants | Reuse |
|-----------|----------|-------|
| `<Button>` | `primary`, `secondary`, `ghost`, `danger` | Everywhere |
| `<Badge>` | `sale`, `new`, `info` | ProductCard, Blog |
| `<Modal>` | — | Cart, Video, Product selector quiz |
| `<Toast>` | `success`, `error`, `info` | Cart add, form submit |
| `<Breadcrumb>` | `items[]` | Product, Category, Blog, FAQ pages |
| `<Skeleton>` | matches any card shape | Loading states |
| `<SectionTitle>` | `title`, `subtitle?` | All homepage sections |

### Cart & Checkout

| Component | Notes |
|-----------|-------|
| `<MiniCartDrawer>` | Slide-in from right, shows items + subtotal + checkout CTA |
| `<CartItem>` | Quantity stepper, remove button, item total |
| `<OrderSummary>` | Sidebar on checkout: items, shipping, total |
| `<CheckoutForm>` | Shipping address + payment method selection |

---

## 5. PRODUCT SYSTEM ARCHITECTURE

### Product Data Schema

```
Product {
  product_id:          UUID (PK)
  slug:                string (unique, URL-safe)
  name:                string
  short_description:   string (shown on card)
  description:         text (rich HTML, shown on detail page)
  price:               decimal
  old_price:           decimal | null
  discount_percent:    integer | null  (computed or manual override)
  category_id:         UUID (FK → Categories)
  brand:               string (default: "SENDO")
  sku:                 string (unique)
  images:              string[] (ordered array of CDN URLs)
  main_image:          string (CDN URL, first image shortcut)
  rating:              decimal (1–5, computed average)
  reviews_count:       integer
  features:            JSON { key: string, value: string }[]
  installation_type:   enum: 'under_sink' | 'countertop' | 'inline'
  filtration_stages:   integer
  installation_video:  string | null (YouTube video ID)
  stock_status:        enum: 'in_stock' | 'low_stock' | 'out_of_stock'
  stock_qty:           integer
  is_featured:         boolean (appears on homepage Popular Products)
  is_promo:            boolean (appears in Promo section)
  is_active:           boolean
  meta_title:          string
  meta_description:    string
  created_at:          timestamp
  updated_at:          timestamp
}
```

### How Products Appear Per Context

**Homepage — Popular Products:** `is_featured = true`, shows: main_image, name, short_description, price, old_price, "В корзину" + "Подробнее" buttons. Maximum 4–6 cards, sorted by `sort_order`.

**Homepage — Promo Section:** `is_promo = true`, shows АКЦИЯ badge, discount percentage, old price strikethrough. Maximum 3–4 cards.

**Catalog Page:** Full product grid. Shows: main_image, name, short_description, price, rating stars, reviews_count, AddToCart button. Supports filtering and sorting.

**Product Detail Page:** Full data — image gallery, name, price, features table, full description (rich text), reviews section, installation_video embed, related products, AddToCart with quantity selector.

---

## 6. CATALOG SYSTEM

### URL Structure
```
/catalog                                → All products
/catalog?category=reverse-osmosis       → Category filter
/catalog?price_min=5000&price_max=20000 → Price filter
/catalog?sort=price_asc                 → Sorted
/catalog?page=2                         → Paginated
```

### Filter Specification

| Filter | Type | Values |
|--------|------|--------|
| **Price** | Range slider | 0 – 50,000 ₽ |
| **Category** | Multi-select checkbox | Фильтры обратного осмоса, Картриджи, Корпуса для колб, Комплекты |
| **Filtration Stages** | Checkbox | 3-ступенчатый, 5-ступенчатый, 7-ступенчатый |
| **Installation Type** | Radio | Под мойку, Настольный, Встраиваемый |
| **Stock** | Toggle | Только в наличии |
| **Promotion** | Toggle | Только акционные |

### Sorting Options

| Label | Query param value |
|-------|-------------------|
| По популярности | `sort=popular` |
| Цена: по возрастанию | `sort=price_asc` |
| Цена: по убыванию | `sort=price_desc` |
| Новинки | `sort=newest` |
| По рейтингу | `sort=rating` |

### Pagination
- Default: 12 products per page
- Options: 12 / 24 / 48
- Infinite scroll as optional enhancement for mobile

### Search
- Full-text search on: name, short_description, sku, features values
- Debounced (300ms) client-side filtering for catalog; server-side for global search
- Search suggestions dropdown: top 5 matching products + "Показать все результаты" link

---

## 7. USER INTERACTION FLOW

### Primary Purchase Flow
```
1. User lands on Homepage
2. Reads hero value prop → clicks "Подобрать фильтр" (opens product selector quiz: budget + installation type)
   OR clicks "Перейти в каталог"
3. Browses catalog → applies filters (price, installation type)
4. Opens Product Detail Page
5. Views photos, reads specs, watches installation video
6. Reads customer reviews (scrolls down)
7. Clicks "В корзину" → MiniCart drawer opens with item confirmation
8. Clicks "Оформить заказ" in drawer → /checkout
9. Enters shipping address + selects payment method
10. Clicks "Подтвердить заказ" → /checkout/success
11. Receives order confirmation email
```

### FAQ Flow
```
1. User has a question (pre-purchase doubt)
2. Sees FAQ section on homepage → clicks accordion item
3. If not answered → clicks "Нужна консультация?" CTA
4. Opens contact modal or phone link
```

### Blog / Educational Flow
```
1. User arrives via Google organic search on water quality topic
2. Lands on /blog/[slug] article
3. Article contains inline product recommendations (linked ProductCards)
4. User clicks product → Product Detail Page → Purchase
```

### Installation Video Flow
```
1. User purchased product (post-purchase email includes video link)
2. OR user browses homepage, sees video section
3. Clicks thumbnail → VideoModal opens with YouTube embed
4. Watches full installation
5. Has questions → FAQ or support link in modal footer
```

---

## 8. DATABASE STRUCTURE

### users
```sql
id              UUID PRIMARY KEY
email           VARCHAR(255) UNIQUE NOT NULL
phone           VARCHAR(20)
password_hash   VARCHAR(255) NOT NULL
first_name      VARCHAR(100)
last_name       VARCHAR(100)
role            ENUM('customer', 'admin') DEFAULT 'customer'
is_verified     BOOLEAN DEFAULT FALSE
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### categories
```sql
id              UUID PRIMARY KEY
name            VARCHAR(255) NOT NULL
slug            VARCHAR(255) UNIQUE NOT NULL
description     TEXT
image_url       VARCHAR(500)
parent_id       UUID REFERENCES categories(id)  -- supports nested cats
sort_order      INTEGER DEFAULT 0
is_active       BOOLEAN DEFAULT TRUE
meta_title      VARCHAR(255)
meta_description VARCHAR(500)
created_at      TIMESTAMP
```

### products
```sql
id                  UUID PRIMARY KEY
slug                VARCHAR(255) UNIQUE NOT NULL
sku                 VARCHAR(100) UNIQUE NOT NULL
name                VARCHAR(255) NOT NULL
short_description   TEXT
description         TEXT  -- rich HTML
price               DECIMAL(10,2) NOT NULL
old_price           DECIMAL(10,2)
category_id         UUID REFERENCES categories(id)
brand               VARCHAR(100) DEFAULT 'SENDO'
rating              DECIMAL(3,2) DEFAULT 0
reviews_count       INTEGER DEFAULT 0
installation_type   VARCHAR(50)
filtration_stages   INTEGER
installation_video  VARCHAR(100)  -- YouTube video ID
stock_qty           INTEGER DEFAULT 0
stock_status        VARCHAR(20) DEFAULT 'in_stock'
is_featured         BOOLEAN DEFAULT FALSE
is_promo            BOOLEAN DEFAULT FALSE
is_active           BOOLEAN DEFAULT TRUE
sort_order          INTEGER DEFAULT 0
meta_title          VARCHAR(255)
meta_description    VARCHAR(500)
created_at          TIMESTAMP
updated_at          TIMESTAMP
```

### product_images
```sql
id              UUID PRIMARY KEY
product_id      UUID REFERENCES products(id) ON DELETE CASCADE
url             VARCHAR(500) NOT NULL
alt_text        VARCHAR(255)
sort_order      INTEGER DEFAULT 0
is_main         BOOLEAN DEFAULT FALSE
```

### product_features
```sql
id              UUID PRIMARY KEY
product_id      UUID REFERENCES products(id) ON DELETE CASCADE
feature_key     VARCHAR(100)
feature_value   VARCHAR(255)
sort_order      INTEGER DEFAULT 0
```

### orders
```sql
id              UUID PRIMARY KEY
order_number    VARCHAR(50) UNIQUE NOT NULL  -- e.g. SENDO-2024-00123
user_id         UUID REFERENCES users(id)
status          ENUM('pending','confirmed','processing','shipped','delivered','cancelled')
total_amount    DECIMAL(10,2) NOT NULL
shipping_cost   DECIMAL(10,2) DEFAULT 0
discount_amount DECIMAL(10,2) DEFAULT 0
payment_method  VARCHAR(50)
payment_status  ENUM('pending','paid','refunded')
shipping_address JSON  -- {name, phone, city, street, apt, zip}
notes           TEXT
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### order_items
```sql
id              UUID PRIMARY KEY
order_id        UUID REFERENCES orders(id) ON DELETE CASCADE
product_id      UUID REFERENCES products(id)
product_name    VARCHAR(255)  -- snapshot at time of order
product_sku     VARCHAR(100)
quantity        INTEGER NOT NULL
unit_price      DECIMAL(10,2) NOT NULL
total_price     DECIMAL(10,2) NOT NULL
```

### reviews
```sql
id              UUID PRIMARY KEY
product_id      UUID REFERENCES products(id) ON DELETE CASCADE
user_id         UUID REFERENCES users(id)
author_name     VARCHAR(100)
location        VARCHAR(100)  -- "Ванна", "Кухня", city name
rating          SMALLINT CHECK (rating BETWEEN 1 AND 5)
title           VARCHAR(255)
body            TEXT NOT NULL
is_verified     BOOLEAN DEFAULT FALSE  -- verified purchase
is_approved     BOOLEAN DEFAULT FALSE  -- admin moderation
created_at      TIMESTAMP
```

### blog_posts
```sql
id              UUID PRIMARY KEY
slug            VARCHAR(255) UNIQUE NOT NULL
title           VARCHAR(255) NOT NULL
excerpt         TEXT
content         TEXT  -- rich HTML
thumbnail_url   VARCHAR(500)
author_id       UUID REFERENCES users(id)
category        VARCHAR(100)
tags            TEXT[]
is_published    BOOLEAN DEFAULT FALSE
published_at    TIMESTAMP
views_count     INTEGER DEFAULT 0
meta_title      VARCHAR(255)
meta_description VARCHAR(500)
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### faq
```sql
id              UUID PRIMARY KEY
question        TEXT NOT NULL
answer          TEXT NOT NULL
category        VARCHAR(100)  -- grouping label
sort_order      INTEGER DEFAULT 0
is_active       BOOLEAN DEFAULT TRUE
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### videos
```sql
id              UUID PRIMARY KEY
title           VARCHAR(255) NOT NULL
description     TEXT
youtube_id      VARCHAR(50) NOT NULL
thumbnail_url   VARCHAR(500)
product_id      UUID REFERENCES products(id)  -- nullable, general or product-specific
category        VARCHAR(100)  -- 'installation', 'maintenance', 'overview'
sort_order      INTEGER DEFAULT 0
is_active       BOOLEAN DEFAULT TRUE
created_at      TIMESTAMP
```

### addresses
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id) ON DELETE CASCADE
label           VARCHAR(50)  -- 'Home', 'Work'
recipient_name  VARCHAR(100)
phone           VARCHAR(20)
city            VARCHAR(100)
street          VARCHAR(255)
apartment       VARCHAR(50)
zip_code        VARCHAR(20)
is_default      BOOLEAN DEFAULT FALSE
```

### wishlists
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id) ON DELETE CASCADE
product_id      UUID REFERENCES products(id) ON DELETE CASCADE
created_at      TIMESTAMP
UNIQUE(user_id, product_id)
```

---

## 9. ADMIN PANEL STRUCTURE

### Dashboard
- KPI cards: Today's revenue, Orders today, New customers this week, Low stock alerts
- Revenue chart: last 30 days (line chart)
- Recent orders table (last 10)
- Top products by sales (bar chart)

### Product Management `/admin/products`
- Searchable, sortable product table
- Create/Edit product form: all fields, image uploader (drag-drop, reorder), feature key-value editor
- Bulk actions: activate/deactivate, set promo flag, delete
- Stock quantity editor (inline)

### Category Management `/admin/categories`
- Tree view of category hierarchy
- Add/edit/delete categories
- Drag-drop reordering

### Order Management `/admin/orders`
- Filter by status, date range, payment status
- Order detail view: items, customer info, shipping address
- Status update dropdown (with email notification trigger)
- Export to CSV

### Customer Management `/admin/customers`
- Customer list with order count, total spend
- View individual customer: profile, order history, reviews

### Review Moderation `/admin/reviews`
- Queue of pending reviews
- Approve / reject with one click
- Edit review text if needed
- Filter by product or rating

### Blog Management `/admin/blog`
- Post list: title, status, published date, views
- Rich-text editor (TipTap or similar)
- Slug auto-generation from title
- Tag management
- Publish / schedule / unpublish

### FAQ Management `/admin/faq`
- CRUD for FAQ items
- Drag-drop reorder within categories
- Category management

### Video Management `/admin/videos`
- Add video: YouTube ID, title, description, linked product, category
- Reorder, activate/deactivate

### Promotions `/admin/promotions`
- Create discount rules: % off, fixed amount, specific products or categories
- Set validity dates
- Promo codes management

### Settings `/admin/settings`
- Store name, contact info, social links
- Shipping rates by city/region
- Payment gateway keys (Stripe / YooKassa)
- Email templates (order confirmation, shipping, review request)

---

## 10. API ARCHITECTURE

All endpoints use REST. Base URL: `/api/v1`

### Products

```
GET    /products                        # List all (query: page, limit, sort, filters)
GET    /products/featured               # Featured products for homepage
GET    /products/promo                  # Promo products for homepage
GET    /products/:slug                  # Product detail by slug
GET    /products/:id/reviews            # Reviews for a product (paginated)
GET    /products/search?q=              # Full-text product search
POST   /products                        # [Admin] Create product
PUT    /products/:id                    # [Admin] Update product
DELETE /products/:id                    # [Admin] Delete product
PATCH  /products/:id/stock              # [Admin] Update stock qty
```

### Categories

```
GET    /categories                      # Full category tree
GET    /categories/:slug/products       # Products in category (with filters)
POST   /categories                      # [Admin] Create
PUT    /categories/:id                  # [Admin] Update
DELETE /categories/:id                  # [Admin] Delete
```

### Cart (session-based or user-based)

```
GET    /cart                            # Get current cart
POST   /cart/items                      # Add item { productId, quantity }
PUT    /cart/items/:productId           # Update quantity
DELETE /cart/items/:productId           # Remove item
DELETE /cart                            # Clear cart
```

### Orders

```
POST   /orders                          # Create order from cart
GET    /orders                          # [Admin] All orders (paginated)
GET    /orders/my                       # [Auth] Current user's orders
GET    /orders/:id                      # Order detail (admin or owner)
PATCH  /orders/:id/status               # [Admin] Update order status
```

### Reviews

```
GET    /reviews?productId=              # Reviews for a product
POST   /reviews                         # [Auth] Submit review
PUT    /reviews/:id/approve             # [Admin] Approve review
DELETE /reviews/:id                     # [Admin] Delete review
```

### Blog

```
GET    /blog                            # Posts list (query: page, category, tag)
GET    /blog/:slug                      # Single post
GET    /blog/related?postId=            # Related posts
POST   /blog                            # [Admin] Create post
PUT    /blog/:id                        # [Admin] Update post
DELETE /blog/:id                        # [Admin] Delete post
```

### FAQ

```
GET    /faq                             # All active FAQ items (grouped by category)
POST   /faq                             # [Admin] Create
PUT    /faq/:id                         # [Admin] Update
DELETE /faq/:id                         # [Admin] Delete
```

### Videos

```
GET    /videos                          # All active videos
GET    /videos?productId=               # Videos for a specific product
POST   /videos                          # [Admin] Add video
PUT    /videos/:id                      # [Admin] Update
DELETE /videos/:id                      # [Admin] Delete
```

### Auth

```
POST   /auth/register                   # Register { email, password, name }
POST   /auth/login                      # Login → JWT access + refresh tokens
POST   /auth/logout                     # Invalidate refresh token
POST   /auth/refresh                    # Refresh access token
POST   /auth/forgot-password            # Send reset email
POST   /auth/reset-password             # Confirm new password
GET    /auth/me                         # [Auth] Current user profile
```

### Users (Account)

```
GET    /users/me/orders                 # [Auth] My orders
GET    /users/me/wishlist               # [Auth] My wishlist
POST   /users/me/wishlist               # [Auth] Add to wishlist
DELETE /users/me/wishlist/:productId    # [Auth] Remove from wishlist
PUT    /users/me/profile                # [Auth] Update profile
GET    /users/me/addresses              # [Auth] My addresses
POST   /users/me/addresses              # [Auth] Add address
PUT    /users/me/addresses/:id          # [Auth] Update address
DELETE /users/me/addresses/:id          # [Auth] Delete address
```

---

## 11. SEO STRUCTURE

### URL Structure

```
/                                           # Home
/catalog                                    # All products
/catalog/filtry-obratnogo-osmosa            # Category (Cyrillic transliterated slugs)
/product/sendo-aqua-a7                      # Product (brand+model slug)
/blog                                       # Blog index
/blog/kak-vybrat-filtr-obratnogo-osmosa     # Blog article
/faq                                        # FAQ page
/about                                      # About
/delivery                                   # Delivery & Payment
/service                                    # Warranty & Service
```

### Meta Tags (per page)

- **Home:** title = "SENDO — Фильтры обратного осмоса №1 по цене/качеству"; description = benefits + main CTA
- **Product:** title = "{productName} — купить за {price} ₽ | SENDO"; description = short_description with key specs
- **Category:** title = "{categoryName} — каталог фильтров | SENDO"
- **Blog Article:** title = "{articleTitle} | Блог SENDO"; description = excerpt
- All pages: `<link rel="canonical">`, `<meta property="og:*">`, `<meta name="twitter:*">`

### Structured Data (JSON-LD)

```
Home:     Organization, WebSite (SearchAction)
Product:  Product (name, image, description, offers, aggregateRating)
Blog:     Article, BreadcrumbList
FAQ:      FAQPage (Question + Answer per item)
Breadcrumbs: BreadcrumbList on all inner pages
```

### Additional SEO

- `sitemap.xml` auto-generated: all active products, categories, blog posts, static pages
- `robots.txt`: allow all except `/admin`, `/api`, `/cart`, `/checkout`, `/account`
- Image alt text: `"{productName} — фото {index}"` pattern
- Blog internal linking: embed related product cards with anchor text
- Hreflang: if multilingual version added (ru / kz / uz)
- Core Web Vitals: LCP target < 2.5s; CLS < 0.1; FID < 100ms

---

## 12. PERFORMANCE OPTIMIZATION PLAN

### Image Optimization
- Use `next/image` with automatic WebP conversion and srcset generation
- Serve images from CDN (Cloudflare Images or AWS CloudFront + S3)
- Hero image: preloaded with `<link rel="preload">`; LCP candidate
- Product images: lazy-loaded except above-fold main image
- Blur placeholder (LQIP — Low Quality Image Placeholder) for all product images

### Code Splitting & Loading
- Next.js App Router automatic route-based code splitting
- `dynamic()` imports for: VideoModal, MiniCartDrawer, ProductSelectorQuiz, Admin rich-text editor
- Suspense boundaries with `<Skeleton>` components for deferred data

### API Caching Strategy

| Endpoint | Cache Strategy | TTL |
|----------|---------------|-----|
| `/products/featured` | ISR (Incremental Static Regen) | 10 min |
| `/categories` | SSG + revalidate on admin update | 1 hour |
| `/products/:slug` | ISR | 5 min |
| `/blog/:slug` | ISR | 30 min |
| `/faq` | SSG + on-demand revalidation | Static until changed |
| `/cart`, `/orders` | No cache (real-time) | — |

- Redis cache layer for session cart data
- HTTP cache headers on static assets: `Cache-Control: public, max-age=31536000, immutable`

### Rendering Strategy (Next.js App Router)

| Page | Strategy | Reason |
|------|----------|--------|
| Home | SSR + ISR | Dynamic featured products, but cacheable |
| Catalog | SSR | Filter state varies per request |
| Product Detail | ISR (5 min) | Price/stock changes, but not every second |
| Blog Article | ISR (30 min) | Mostly static |
| Cart / Checkout | CSR | Fully user-specific |
| Admin Panel | CSR | Dynamic, auth-gated |

### Infrastructure
- **CDN:** Cloudflare — edge caching for static assets, images, ISR pages
- **Database:** Connection pooling via PgBouncer for PostgreSQL
- **API:** Rate limiting on auth endpoints (10 req/min per IP)
- Bundle analyzer: `@next/bundle-analyzer` to audit JS chunk sizes; target < 150KB initial JS

---

## 13. RECOMMENDED TECH STACK

### Frontend
```
Framework:     Next.js 14+ (App Router)
Language:      TypeScript (strict mode)
Styling:       Tailwind CSS + CSS Modules for complex components
State Mgmt:    Zustand (cart, UI state) + TanStack Query (server state)
Forms:         React Hook Form + Zod validation
Icons:         lucide-react
Animation:     Framer Motion (counter animation, modal transitions)
Video:         react-youtube (YouTube embed wrapper)
Rich Text:     TipTap (blog editor in admin)
Testing:       Vitest + React Testing Library + Playwright (E2E)
```

### Backend
```
Runtime:       Node.js 20+
Framework:     NestJS (modular, TypeScript-first, built-in DI)
ORM:           Prisma (type-safe DB access, migrations)
Auth:          JWT (access + refresh tokens) + bcrypt
Validation:    class-validator + class-transformer
File Upload:   Multer → S3 (presigned URLs)
Email:         Nodemailer + AWS SES (or SendGrid)
Queue:         BullMQ + Redis (order confirmation emails, review moderation notifications)
```

### Database & Cache
```
Primary DB:    PostgreSQL 16
Cache:         Redis 7 (sessions, cart, API cache)
Search:        PostgreSQL full-text search (sufficient for this scale; upgrade to MeiliSearch if needed)
File Storage:  AWS S3 + CloudFront
```

### Infrastructure
```
Containerization:  Docker + Docker Compose (local dev)
Orchestration:     Kubernetes (production) OR Railway / Render (simpler deployment)
CI/CD:             GitHub Actions
Monitoring:        Sentry (errors) + Grafana + Prometheus (metrics)
Logging:           Winston → CloudWatch or Loki
SSL:               Let's Encrypt (auto-renewed)
```

### Payment
```
Primary:       YooKassa (ЮKassa) — standard for Russian market
Alternative:   Stripe (for international customers)
```

---

## 14. FOLDER STRUCTURE PROPOSAL

```
sendo-ecommerce/
├── frontend/                          # Next.js application
│   ├── app/                           # App Router
│   │   ├── (public)/                  # Public route group
│   │   │   ├── page.tsx               # Home /
│   │   │   ├── catalog/
│   │   │   │   ├── page.tsx           # /catalog
│   │   │   │   └── [category]/
│   │   │   │       └── page.tsx       # /catalog/[category]
│   │   │   ├── product/[slug]/
│   │   │   │   └── page.tsx           # /product/[slug]
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── faq/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── delivery/page.tsx
│   │   │   ├── service/page.tsx
│   │   │   ├── contacts/page.tsx
│   │   │   └── videos/page.tsx
│   │   ├── (auth)/                    # Auth route group
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   └── reset/page.tsx
│   │   ├── (account)/                 # Protected account pages
│   │   │   ├── layout.tsx             # Auth guard
│   │   │   ├── orders/page.tsx
│   │   │   ├── profile/page.tsx
│   │   │   └── wishlist/page.tsx
│   │   ├── (admin)/                   # Admin panel
│   │   │   ├── layout.tsx             # Admin auth guard + sidebar
│   │   │   ├── page.tsx               # Dashboard
│   │   │   ├── products/page.tsx
│   │   │   ├── orders/page.tsx
│   │   │   ├── reviews/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   └── settings/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── checkout/
│   │   │   ├── page.tsx
│   │   │   └── success/page.tsx
│   │   ├── layout.tsx                 # Root layout
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── PageWrapper.tsx
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductImageGallery.tsx
│   │   │   ├── ProductPrice.tsx
│   │   │   ├── ProductRating.tsx
│   │   │   ├── ProductBadge.tsx
│   │   │   └── AddToCartButton.tsx
│   │   ├── catalog/
│   │   │   ├── FilterSidebar.tsx
│   │   │   ├── SortDropdown.tsx
│   │   │   ├── CategoryCard.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── cart/
│   │   │   ├── MiniCartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── OrderSummary.tsx
│   │   ├── content/
│   │   │   ├── ReviewCard.tsx
│   │   │   ├── ReviewCarousel.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── VideoCard.tsx
│   │   │   ├── VideoModal.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── StatCounter.tsx
│   │   │   └── MarketplaceCard.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Modal.tsx
│   │       ├── Toast.tsx
│   │       ├── Breadcrumb.tsx
│   │       ├── Skeleton.tsx
│   │       ├── Pagination.tsx
│   │       └── SectionTitle.tsx
│   ├── sections/                      # Homepage section components
│   │   ├── HeroSection.tsx
│   │   ├── PopularProductsSection.tsx
│   │   ├── AdvantagesSection.tsx
│   │   ├── ReviewsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── VideosSection.tsx
│   │   ├── PromoSection.tsx
│   │   ├── ServiceSection.tsx
│   │   ├── MarketplaceSection.tsx
│   │   └── BlogPreviewSection.tsx
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useWishlist.ts
│   │   ├── useProducts.ts
│   │   ├── useIntersectionObserver.ts  # For StatCounter animation
│   │   └── useAuth.ts
│   ├── store/
│   │   ├── cartStore.ts               # Zustand
│   │   └── uiStore.ts                 # modal states, drawer open/close
│   ├── lib/
│   │   ├── api.ts                     # API client (fetch wrapper)
│   │   ├── formatters.ts              # currency, date formatters
│   │   ├── validators.ts              # Zod schemas
│   │   └── constants.ts
│   ├── types/
│   │   ├── product.ts
│   │   ├── order.ts
│   │   ├── user.ts
│   │   └── api.ts
│   └── public/
│       ├── images/                    # Static assets (logos, icons)
│       └── fonts/
│
├── backend/                           # NestJS application
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── modules/
│   │   │   ├── products/
│   │   │   │   ├── products.controller.ts
│   │   │   │   ├── products.service.ts
│   │   │   │   ├── products.module.ts
│   │   │   │   └── dto/
│   │   │   ├── categories/
│   │   │   ├── orders/
│   │   │   ├── reviews/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── blog/
│   │   │   ├── faq/
│   │   │   ├── videos/
│   │   │   └── upload/
│   │   ├── common/
│   │   │   ├── guards/                # AuthGuard, RolesGuard
│   │   │   ├── decorators/            # @CurrentUser, @Roles
│   │   │   ├── filters/               # Global exception filter
│   │   │   ├── interceptors/          # Logging, transform response
│   │   │   └── pipes/                 # ValidationPipe
│   │   └── config/
│   │       ├── database.config.ts
│   │       ├── jwt.config.ts
│   │       └── redis.config.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── test/
│
├── docker-compose.yml                 # PostgreSQL + Redis + backend + frontend
├── .github/
│   └── workflows/
│       ├── ci.yml                     # Test on PR
│       └── deploy.yml                 # Deploy on main merge
└── README.md
```

---

## 15. SCALABILITY STRATEGY

### Large Product Catalog (10,000+ SKUs)

- **Database indexes** on: `products.category_id`, `products.is_featured`, `products.is_active`, `products.price`, full-text index on `name + description`
- **Cursor-based pagination** instead of OFFSET for deep catalog pages (prevents N+1 performance degradation)
- **Elasticsearch / MeiliSearch** integration as catalog grows beyond 5,000 products for faceted search performance
- Product images served from CDN with multiple size variants generated on upload (thumbnail 300px, card 600px, detail 1200px)
- Consider separate read replica PostgreSQL instance for catalog queries to offload writes

### High Traffic

- **Horizontal scaling:** Deploy multiple Node.js instances behind a load balancer (Nginx or AWS ALB)
- **ISR + CDN edge caching:** Homepage and product pages cached at Cloudflare edge — reduces origin hits by ~90%
- **Redis cluster** for cart session data and API response caching
- **Database connection pooling:** PgBouncer in transaction mode (max 20 connections per app instance)
- **Rate limiting + DDoS protection:** Cloudflare + NestJS `@nestjs/throttler`
- **Queue system (BullMQ):** Offload email sending, review notifications, sitemap regeneration from request cycle

### International Customers

- **i18n:** Next.js built-in internationalization (`next.config.js` locales: `['ru', 'kz', 'uz', 'en']`); `next-intl` library for message management
- **Multi-currency:** Store prices in RUB as base; conversion via exchange rate API (CBR for CIS currencies); display in user's local currency
- **Multi-region deployment:** Primary region Russia (e.g., Yandex Cloud Moscow); secondary nodes in Kazakhstan (Almaty), Uzbekistan (Tashkent) using CDN routing
- **Payment methods by region:** YooKassa (RU), Kaspi Pay (KZ), Payme/Click (UZ)
- **Shipping zones:** Configure shipping rate matrix in admin settings per country/city
- **Legal compliance:** Separate privacy policy and terms per jurisdiction; cookie consent banner

---

*Blueprint version 1.0 — SENDO Water Filtration E-Commerce*
*Generated from homepage screenshot analysis*
