export type ContentBlock =
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'callout'; label: string; text: string }
  | { t: 'table'; headers: string[]; rows: string[][] }

export interface BlogContent {
  slug: string
  blocks: ContentBlock[]
}

export const BLOG_CONTENTS: BlogContent[] = [
  {
    slug: 'polling-sse-websockets',
    blocks: [
      { t: 'h2', text: 'The Core Problem: The Web is Stateless' },
      { t: 'p', text: 'The internet was originally built to be boring. In the standard HTTP model, communication is always initiated by the client. You ask for a page (GET /home), the server delivers it, and then the server immediately hangs up. The connection is closed. The server forgets who you are.' },
      { t: 'p', text: 'But modern users expect real-time experiences — Uber drivers moving on a map, Slack messages appearing without refreshing, stock prices ticking millisecond-by-millisecond. To achieve this, we have to cheat the standard HTTP model. There are three primary patterns to solve this: Polling, Server-Sent Events (SSE), and WebSockets. Choosing the wrong one can lead to server crashes, high latency, or rapid battery drain.' },

      { t: 'h2', text: 'Polling: The "Are We There Yet?" Approach' },
      { t: 'callout', label: 'Analogy', text: 'Imagine a child in the backseat of a car asking "Are we there yet?" every 5 seconds. Most of the time, the answer is no.' },
      { t: 'p', text: 'Polling is the oldest and simplest technique. The client asks the server for updates on a fixed interval. Short Polling sends a request every X seconds — wasteful, but predictable. Long Polling holds the connection open until the server actually has new data or a timeout occurs.' },
      { t: 'h3', text: 'Pros' },
      { t: 'ul', items: [
        'Simplest to implement — works with any backend (PHP, Python, Node, Java)',
        'Robustness — standard HTTP, never blocked by corporate firewalls or proxies',
        'Auto-recovery — if the connection fails, the next poll happens automatically with no extra code',
      ]},
      { t: 'h3', text: 'Cons' },
      { t: 'ul', items: [
        'Latency — there is always a delay between data changing and the next poll firing',
        'Server load — thousands of clients polling creates massive header overhead for zero data transferred',
        'Wasted resources — Long Polling holding thousands of open threads can exhaust server memory',
      ]},
      { t: 'h3', text: 'Best Use Cases' },
      { t: 'ul', items: [
        'Dashboard refresh — updating a sales dashboard every 5 minutes',
        'Long-running tasks — checking if a PDF export or video rendering job is finished',
        'MVPs and prototypes — when you need "kind of" real-time but cannot afford the complexity of WebSockets',
      ]},

      { t: 'h2', text: 'Server-Sent Events (SSE): The "Radio Station"' },
      { t: 'callout', label: 'Analogy', text: 'It is like listening to the radio. The station (server) broadcasts to you continuously, but you cannot speak back to the station over the same channel.' },
      { t: 'p', text: 'SSE is often the Goldilocks solution — not as heavy as WebSockets, but faster than polling. The client opens a connection with the header Accept: text/event-stream. The server keeps the HTTP connection open and pushes text-based messages down the wire whenever an event occurs.' },
      { t: 'h3', text: 'Pros' },
      { t: 'ul', items: [
        'Built-in reconnection — the browser EventSource API automatically reconnects if the connection drops, with no extra code',
        'Lightweight — uses standard HTTP, easier to inspect in the Network tab than WebSockets',
        'Firewall friendly — since it is just HTTP, it passes through almost all corporate proxies',
      ]},
      { t: 'h3', text: 'Cons' },
      { t: 'ul', items: [
        'Uni-directional — the server can push to the client, but the client cannot send back over the same connection',
        'Text only — designed for UTF-8 text; sending binary data requires Base64 encoding, which adds overhead',
        'Connection limits — browsers cap SSE connections at roughly 6 per domain under HTTP/1.1',
      ]},
      { t: 'h3', text: 'Best Use Cases' },
      { t: 'ul', items: [
        'Live feeds — stock tickers, crypto prices, news feeds',
        'Notifications — "you have a new like" or "order shipped" alerts',
        'System logs — streaming server logs to a monitoring dashboard in real time',
      ]},

      { t: 'h2', text: 'WebSockets: The "Phone Call"' },
      { t: 'callout', label: 'Analogy', text: 'A phone call. Once the line is open, both parties can talk simultaneously, as fast as they want, in either direction.' },
      { t: 'p', text: 'WebSockets are the gold standard for truly interactive, bi-directional applications. A WebSocket starts as a normal HTTP request but performs a specialized handshake to upgrade the protocol from HTTP to a raw TCP socket. After the handshake, data is sent as lightweight binary frames with minimal overhead.' },
      { t: 'h3', text: 'Pros' },
      { t: 'ul', items: [
        'Full duplex — bi-directional; client and server can send messages simultaneously',
        'Low latency — lowest possible latency on the web with no HTTP header overhead after the handshake',
        'Efficiency — ideal for high-frequency messages such as 60 updates per second in a game or live editor',
      ]},
      { t: 'h3', text: 'Cons' },
      { t: 'ul', items: [
        'Complexity — requires a specialized backend and you must manage connection state, heartbeats, and ping/pong',
        'No auto-reconnect — if the connection drops you must write reconnect logic manually',
        'Scaling difficulty — WebSockets are stateful; scaling across multiple servers requires a message broker like Redis',
      ]},
      { t: 'h3', text: 'Best Use Cases' },
      { t: 'ul', items: [
        'Chat apps — WhatsApp, Slack, Discord',
        'Multiplayer games — browser-based FPS and strategy games',
        'Collaborative tools — Google Docs, Figma, where multiple users edit the same document simultaneously',
        'Location tracking — Uber and Lyft driver position updates',
      ]},

      { t: 'h2', text: 'Summary: The Cheat Sheet' },
      { t: 'table', headers: ['Feature', 'Polling', 'SSE', 'WebSockets'], rows: [
        ['Data Flow', 'Client ⇄ Server', 'Server → Client', 'Bi-Directional'],
        ['Latency', 'High', 'Low', 'Lowest'],
        ['Complexity', 'Very Low', 'Medium', 'High'],
        ['Reconnection', 'Manual', 'Auto (Built-in)', 'Manual'],
        ['Firewalls', 'Friendly', 'Friendly', 'Often Blocked'],
        ['Best For', 'Dashboards, Email', 'News, Stocks, Scores', 'Chat, Games, Collab'],
      ]},
      { t: 'p', text: 'Start with Polling if you are unsure — it is easy to delete later. Use SSE if you just need the server to push updates to the UI. Use WebSockets only when you need high-frequency, two-way interaction like a game or a live collaborative editor.' },
    ],
  },

  {
    slug: 'spring-security-architecture',
    blocks: [
      { t: 'h2', text: 'Introduction' },
      { t: 'p', text: 'We have all been there. You add spring-boot-starter-security to your project, the app restarts, and suddenly — magic — you have a login form. But what just happened? For many developers, Spring Security feels like a black box. You paste some configuration code, hope it works, and dread the moment you need to customise it.' },
      { t: 'p', text: 'In this post we are going to smash that black box open. We will trace the journey of a single HTTP request from the moment it hits your server until it reaches your controller, explaining every component in the Spring Security Filter Chain along the way.' },

      { t: 'h2', text: 'The Analogy: The High-Secure Office Building' },
      { t: 'callout', label: 'Mental Model', text: 'Your application is a high-security office building. The HTTP request is a visitor trying to enter. Tomcat is the revolving door at the entrance. Spring Security is the security checkpoint in the lobby. The Controller is the CEO\'s office at the destination. The Authentication Token is the visitor\'s ID badge.' },

      { t: 'h2', text: 'Phase 1: The Setup — The Wall' },
      { t: 'p', text: 'Spring Security sits between the client and your application logic. It uses a DelegatingFilterProxy — a bridge that hands control from the standard Servlet container over to the Spring application context. Before a request can touch any of your custom logic, it must first pass through this gateway.' },

      { t: 'h2', text: 'Phase 2: The Filter Chain — The Gauntlet' },
      { t: 'p', text: 'Spring Security is not a single check. It is an ordered sequence of roughly 15 to 20 distinct filters that every request passes through. Here are the most critical ones, in order:' },
      { t: 'ul', items: [
        'SecurityContextHolderFilter — The Memory. Checks whether this user has been seen before, typically via a Session ID or a token in the Authorization header.',
        'UsernamePasswordAuthenticationFilter — The Login Form. Listens specifically for POST requests to /login and extracts username and password.',
        'BearerTokenAuthenticationFilter — The API Guard. Extracts and validates JWT or OAuth2 Bearer tokens on every API request.',
        'ExceptionTranslationFilter — The Safety Net. Catches 401 Unauthorized and 403 Forbidden errors and formats the HTTP response.',
        'FilterSecurityInterceptor — The Bouncer. The final gatekeeper that decides whether the authenticated user is allowed to access the specific URL they requested.',
      ]},
      { t: 'p', text: 'The critical insight is that these filters run in a fixed, predetermined order. You can insert custom filters at specific positions, but the built-in order is fixed. Understanding this order explains why, for example, you see a 401 before your business logic even runs.' },

      { t: 'h2', text: 'Phase 3: Authentication — Who Are You?' },
      { t: 'p', text: 'This is where most developers get confused. Authentication involves three players. The AuthenticationFilter extracts the raw credentials from the request. The AuthenticationManager orchestrates the validation logic and delegates to the right provider. The AuthenticationProvider does the actual credential comparison.' },
      { t: 'callout', label: 'Critical Distinction', text: 'The UserDetailsService does NOT check passwords. Its only job is to load a UserDetails object from the database. The AuthenticationProvider is the component that actually compares the submitted password against the stored hash. Confusing these two is the single most common Spring Security mistake.' },
      { t: 'p', text: 'Once credentials are validated, Spring creates a fully-populated Authentication object and stores it in the SecurityContextHolder — the in-memory badge that persists for the duration of the current request thread and is cleared when the request completes.' },

      { t: 'h2', text: 'Phase 4: Authorization — Can You Do This?' },
      { t: 'p', text: 'After the user is authenticated, their request reaches FilterSecurityInterceptor. This component compares the user\'s Authorities — the list of permissions stored inside their Authentication object — against the access rules configured for the URL they are requesting.' },
      { t: 'p', text: 'Authentication answers "I am John." Authorization answers "Is John allowed to access DELETE /documents?" If the authorities match the rules, the request passes through to the Controller. If not, ExceptionTranslationFilter catches the AccessDeniedException and returns HTTP 403.' },

      { t: 'h2', text: 'Summary: The Complete Request Lifecycle' },
      { t: 'ol', items: [
        'Request enters the Filter Chain via DelegatingFilterProxy',
        'SecurityContextHolderFilter checks for an existing session or token',
        'The appropriate AuthenticationFilter extracts raw credentials from the request',
        'AuthenticationManager delegates to the correct AuthenticationProvider',
        'AuthenticationProvider validates credentials; UserDetailsService loads the user from the database',
        'SecurityContext is populated — the user is now considered authenticated for this request thread',
        'FilterSecurityInterceptor checks whether the user\'s authorities permit the requested URL',
        'Request passes to the Controller, which executes business logic and returns a response',
      ]},
    ],
  },

  {
    slug: 'api-latency-40-percent',
    blocks: [
      { t: 'h2', text: 'The Problem' },
      { t: 'p', text: 'When I joined Physics Wallah as a Backend Developer Intern, the platform was serving over a million students across India. The backend was growing fast — new features shipped every week — but API response times were creeping upward, and debugging a slow endpoint meant digging through an undocumented, tangled codebase for hours.' },
      { t: 'p', text: 'The two biggest pain points: slow API response times under load, and a codebase where a single bug could take three engineers half a day to locate. These are not separate problems. They have the same root cause — a lack of structural discipline.' },

      { t: 'h2', text: 'The Diagnosis: Profile Before You Optimise' },
      { t: 'p', text: 'Before writing a single line of fix, I profiled. The bottlenecks were obvious once measured:' },
      { t: 'ul', items: [
        'N+1 query patterns — Prisma relations were being traversed lazily, firing one query per record in a loop instead of a single join',
        'Missing database indexes — foreign key columns used in every WHERE clause had no index, causing full table scans on large tables',
        'Scattered authentication logic — every route handler was rolling its own auth check, and some were doing it incorrectly',
        'No API documentation — Swagger was either missing or months out of date, so debugging meant reading source code line by line',
      ]},

      { t: 'h2', text: 'Fix 1: Modular Monolith Architecture' },
      { t: 'p', text: 'The first change was structural. I refactored the flat file structure into a modular monolith: each domain (users, courses, assessments, auth) became a self-contained module with its own routes, services, and types. Modules could only communicate through defined service interfaces, not by directly importing files from each other\'s internals.' },
      { t: 'p', text: 'This enforced separation of concerns and made it obvious where a bug lived. A user authentication issue was in the auth module — full stop. A new engineer could understand one module without needing to know the whole system. Debugging time dropped significantly before I had even touched a query.' },

      { t: 'h2', text: 'Fix 2: Prisma ORM and Schema Discipline' },
      { t: 'p', text: 'The N+1 problem was fixed by auditing every Prisma query and converting lazy relation traversals into explicit include statements. Where a route was fetching a user and then fetching their courses in a loop, I rewrote it as a single join query with the appropriate nested include.' },
      { t: 'p', text: 'Schema discipline meant adding proper indexes on all foreign key columns and every column appearing in WHERE clauses. This single change accounted for the majority of the latency improvement — an index miss on a table with millions of rows is extremely expensive, and it is one of the easiest problems to fix once you know it exists.' },

      { t: 'h2', text: 'Fix 3: Centralised RBAC Middleware' },
      { t: 'p', text: 'Instead of every route checking permissions independently, I built a single RBAC middleware that reads the user\'s role from the JWT payload, maps it against a permission configuration, and gates access before the route handler executes. This eliminated the class of bugs where a developer forgot to add an auth check to a newly created route.' },
      { t: 'p', text: 'The middleware was applied at the router level, not the individual route level. Every new route was secure by default — you had to explicitly opt out (for public endpoints) rather than opt in, which is the safer pattern.' },

      { t: 'h2', text: 'Fix 4: Swagger Documentation as a Debugging Tool' },
      { t: 'p', text: 'Documentation is not a latency optimisation, but it cut debugging time by 50%. When every API endpoint is documented with its expected inputs, outputs, and error codes, a developer can trace a bug from a frontend error message to the exact backend route in seconds rather than minutes of source reading.' },
      { t: 'p', text: 'I upgraded and standardised the Swagger setup and made schema annotations a code review requirement for every new route. It was enforced in process, not just aspirationally documented in a wiki that nobody reads.' },

      { t: 'h2', text: 'Results' },
      { t: 'ul', items: [
        '40% reduction in API response times — primarily from eliminating N+1 queries and adding missing database indexes',
        '30% faster response times on common endpoints through structured Prisma schema and join optimisation',
        '50% reduction in developer onboarding time from the modular structure and current Swagger documentation',
        'Zero auth bypass bugs post-centralisation — the RBAC middleware became the single source of truth for all permission checks',
      ]},
      { t: 'callout', label: 'The Lesson', text: 'Profile before you optimise. Applying generic caching on top of an N+1 query just makes the wrong thing faster. Find the actual bottleneck, fix it at the root, and measure again before reaching for the next tool.' },
    ],
  },

  {
    slug: 'kafka-payments-platform',
    blocks: [
      { t: 'h2', text: 'Why Event-Driven for Payments?' },
      { t: 'p', text: 'When I designed this PayPal-like payments platform, the first architectural decision was the hardest: should this be a straightforward REST-based monolith, or something more ambitious? The answer became clear once I mapped out the domain.' },
      { t: 'p', text: 'Payments are inherently event-driven. A user initiates a transfer — that is an event. The wallet service validates the balance — another event. Fraud detection runs asynchronously. The notification service sends a receipt. Each step can fail independently, retry independently, and scale independently. A synchronous REST chain couples all of these together and makes the system fragile — a slow fraud check blocks the entire transaction.' },

      { t: 'h2', text: 'Architecture: Seven Independent Services' },
      { t: 'ul', items: [
        'API Gateway — JWT validation, RBAC enforcement, rate limiting, and request routing. The only public-facing entry point.',
        'Auth Service — user registration, login, and JWT token management',
        'Wallet Service — balance management, atomic balance updates, multi-currency support',
        'Transaction Service — transfer initiation and transaction lifecycle state machine',
        'Fraud Service — asynchronous risk scoring, pattern detection, and automatic flagging',
        'Notification Service — email and SMS receipts, consumed from Kafka topics',
        'Reporting Service — aggregated dashboards and financial reconciliation',
      ]},

      { t: 'h2', text: 'Kafka at the Centre' },
      { t: 'p', text: 'Apache Kafka sits at the heart of the architecture. When a transaction is initiated, the Transaction Service publishes a TransactionInitiated event to a Kafka topic. The Fraud Service consumes this event asynchronously, scores the transaction, and publishes either a FraudCleared or FraudFlagged result event. The Transaction Service consumes the fraud result and either completes or cancels the transfer accordingly.' },
      { t: 'p', text: 'The key benefit is decoupling. If the Fraud Service goes down, transactions queue in Kafka and get processed when it recovers — there is no cascading failure. Each service scales independently based on its own throughput requirements.' },
      { t: 'callout', label: 'Atomic Balances', text: 'The hardest problem in payments is atomicity. If the debit succeeds but the credit fails, money is lost. The Wallet Service uses database transactions with row-level locking combined with idempotency keys on every operation to guarantee exactly-once semantics, even when a Kafka message is replayed due to consumer failure.' },

      { t: 'h2', text: 'gRPC for Synchronous Inter-Service Calls' },
      { t: 'p', text: 'Not all communication goes through Kafka. For synchronous, low-latency calls — like the API Gateway querying the Auth Service to validate a token on every incoming request — I used gRPC over REST. gRPC uses Protocol Buffers (binary encoding) instead of JSON, which makes it significantly faster for high-frequency inter-service calls.' },
      { t: 'p', text: 'Service contracts are defined in .proto files and compiled into type-safe clients and server stubs. This makes the API contract between services explicit and versioned, unlike REST where you rely on documentation and hope both sides agree on the field names.' },

      { t: 'h2', text: 'Lessons Learned' },
      { t: 'ul', items: [
        'Define the event schema first — getting Kafka topic structure right is much harder to change after services are built around it',
        'Idempotency keys are non-negotiable — always design for at-least-once delivery and handle duplicate messages gracefully',
        'Circuit breakers on every downstream call — wrap all external dependencies with a timeout and a fallback',
        'Distributed tracing from day one — correlating a single transaction across seven services without trace IDs is a debugging nightmare',
        'Schema registry for Kafka — as the system evolves, a registry prevents producer/consumer breaking changes',
      ]},
    ],
  },

  {
    slug: 'cqrs-pattern-nodejs',
    blocks: [
      { t: 'h2', text: 'What is CQRS?' },
      { t: 'p', text: 'Command Query Responsibility Segregation (CQRS) is an architectural pattern that separates read operations (queries) from write operations (commands). Instead of one model serving both reads and writes, you maintain two: a write model optimised for consistency and a read model optimised for query performance.' },
      { t: 'callout', label: 'The Core Rule', text: 'Every method should either change state (a Command) or return data (a Query) — but never both. Applying this at the architectural level changes everything about how you design services and scale them independently.' },

      { t: 'h2', text: 'Why E-Commerce Needs It' },
      { t: 'p', text: 'E-commerce has a fundamental asymmetry: reads outnumber writes by an enormous margin. For every order placed, there might be 100 product page views, 50 search queries, and 20 cart interactions. If the same database model serves all of these, you are forced into trade-offs that hurt on both sides. The write model needs strong consistency (no overselling inventory). The read model needs speed (users do not wait two seconds for a product page).' },
      { t: 'p', text: 'In the UrbanSole project, the product catalogue is queried thousands of times per minute. The inventory system needs strict locking on writes to prevent race conditions when multiple users buy the last item simultaneously. CQRS lets you optimise each side independently without compromise.' },

      { t: 'h2', text: 'The Write Side: Commands' },
      { t: 'p', text: 'Commands represent intent to change state: PlaceOrder, AddToCart, UpdateInventory, ProcessPayment. Each command handler validates input, enforces business rules, and writes to the primary store (PostgreSQL). The write model prioritises consistency — every inventory update runs inside a database transaction with row-level locking.' },
      { t: 'p', text: 'After a write succeeds, an event is emitted — OrderPlaced, InventoryDecremented. These events drive the read model update, keeping the two sides eventually in sync.' },

      { t: 'h2', text: 'The Read Side: Queries' },
      { t: 'p', text: 'The read model is optimised for query patterns, not for normalisation. Product listings are pre-joined and cached in MongoDB — a document store where fetching a product with all its variants, reviews, and availability in a single query requires no JOIN at read time, because the data was denormalised when it was written from the event.' },
      { t: 'p', text: 'The read model is eventually consistent. When an order is placed, the displayed product availability might take a few milliseconds to update as the event propagates. For most e-commerce scenarios, this lag is imperceptible and the performance trade-off is well worth it.' },

      { t: 'h2', text: 'Implementation in Node.js' },
      { t: 'p', text: 'The separation is clean at the service layer. Command handlers in /commands interact with PostgreSQL. Query handlers in /queries interact with MongoDB read models. An event bus (Node.js EventEmitter in development, Kafka in production) connects the two.' },
      { t: 'ul', items: [
        'PlaceOrderCommand → PostgreSQL transaction with row lock → emits OrderPlaced event',
        'OrderPlaced event → updates MongoDB order-summary document → updates product availability count',
        'GetProductListingQuery → reads from MongoDB with no JOIN and no lock → returns fast at any scale',
      ]},

      { t: 'h2', text: 'Trade-offs to Understand Before You Start' },
      { t: 'ul', items: [
        'Eventual consistency is a real trade-off, not just a theoretical one — users may briefly see stale data',
        'Two stores means two sets of schema migrations, backups, and operational monitors',
        'Debugging is harder — a bug might live in the command handler, the event, or the read model projection',
        'CQRS adds complexity that a simple CRUD API does not have — only introduce it where the scale and query asymmetry justify the overhead',
      ]},
    ],
  },

  {
    slug: 'bullmq-redis-queues',
    blocks: [
      { t: 'h2', text: 'The Bottleneck: Synchronous Third-Party Calls in the Request Path' },
      { t: 'p', text: 'At Summentors PRO, the backend had a pattern that is extremely common and extremely harmful. When a user signed up, the server would synchronously call the WhatsApp Business API and the email provider, wait for both to respond, and only then return 200 OK to the client. If either call was slow due to network latency, rate limiting, or a provider outage, the entire signup request timed out.' },
      { t: 'p', text: 'The impact showed clearly in the logs. P99 response times for the signup endpoint were over 4 seconds on busy days. Users were watching spinners. Some abandoned the flow entirely.' },

      { t: 'h2', text: 'The Fix: BullMQ Job Queue' },
      { t: 'p', text: 'BullMQ is a Node.js queue library backed by Redis. The pattern is simple. Instead of calling the WhatsApp API inline during a request, the server adds a job to a Redis-backed queue and immediately returns to the client. A separate worker process picks up the job from the queue and handles the API call asynchronously. If the call fails, BullMQ automatically retries with configurable exponential backoff.' },
      { t: 'callout', label: 'Key Properties', text: 'Durable — jobs survive server restarts because they live in Redis, not memory. Retryable — automatic backoff on failure with configurable attempt limits. Monitorable — Bull Board provides a built-in dashboard for inspecting queues. Scalable — add more workers simply by running more worker processes.' },

      { t: 'h2', text: 'Queue Architecture' },
      { t: 'p', text: 'Three queues, each with settings tuned to its provider and use case:' },
      { t: 'ul', items: [
        'whatsapp-queue — concurrency 5 (WhatsApp Business API rate limit), retries 3, exponential backoff starting at 30 seconds',
        'email-queue — concurrency 10, retries 5, priority flag for transactional emails (receipts, OTPs) over marketing emails',
        'analytics-queue — fire-and-forget, concurrency 20, best-effort delivery for Mixpanel events',
      ]},
      { t: 'p', text: 'The API server adds jobs to queues and returns immediately. Workers run in a separate Node.js process so a slow third-party call or a crashed worker cannot block API request handling.' },

      { t: 'h2', text: 'Handling Permanent Failures' },
      { t: 'p', text: 'The most important design decision is what happens when a job exhausts all its retries. BullMQ moves permanently failed jobs to a dedicated failed set in Redis. We set up a daily review process: the engineering team is alerted via Slack with a count of failed jobs, the underlying cause is diagnosed (was it a provider outage? a malformed payload?), and jobs can be replayed once the issue is resolved.' },
      { t: 'p', text: 'This meant no message was ever silently dropped. Every failed WhatsApp notification was eventually delivered once the queue was drained after a provider outage.' },

      { t: 'h2', text: 'Results' },
      { t: 'ul', items: [
        '35% improvement in system throughput — the main request path was no longer blocked by third-party call latency',
        'P99 signup response time dropped from over 4 seconds to under 400ms',
        'Zero message loss during provider outages — jobs waited in Redis and processed automatically when the provider recovered',
        '20 hours per month saved by automating outreach campaigns that were previously triggered manually',
      ]},
      { t: 'callout', label: 'The Rule', text: 'If you are calling a third-party API from a synchronous request path and you do not need the result immediately, put it in a queue. Email, SMS, webhooks, file processing, PDF generation — all of these belong in a queue, not inline.' },
    ],
  },

  {
    slug: 'funnel-tracking-mixpanel',
    blocks: [
      { t: 'h2', text: 'What is Funnel Tracking and Why It Matters' },
      { t: 'p', text: 'A funnel is the sequence of steps a user must complete to reach a goal — land on the page, sign up, verify email, complete onboarding, make a purchase. Funnel tracking means measuring how many users complete each step, and more importantly, where they drop off and stop.' },
      { t: 'p', text: 'At Summentor Pro, we had a gut feeling that users were abandoning somewhere during onboarding, but we had no data to confirm it. We were running WhatsApp and email campaigns with no way to measure whether they actually moved the needle. Funnel tracking was the first step toward making decisions based on evidence rather than instinct.' },

      { t: 'h2', text: 'Setting Up Mixpanel' },
      { t: 'p', text: 'Mixpanel is an event-based analytics platform. Unlike Google Analytics which defaults to page views, Mixpanel tracks named user actions — clicks, form submissions, API calls — as events with structured properties. Setup on a Node.js backend took about a day: create a project, install the Mixpanel Node.js SDK, and define an event taxonomy.' },
      { t: 'callout', label: 'Event Taxonomy', text: 'The hardest part of analytics is not the code — it is deciding what to track and what to name it. Events should be verb-based actions: user_signed_up, email_verified, onboarding_step_completed, course_purchased. Properties should be specific and consistent: { step: "profile_photo", source: "google_ads", duration_ms: 4200 }. Getting this right on day one saves months of confusion later.' },

      { t: 'h2', text: 'Defining the Funnel' },
      { t: 'p', text: 'The registration-to-active funnel had five steps: visited landing page → clicked sign up → completed registration form → verified email → completed onboarding profile → made first purchase. We instrumented all five steps with Mixpanel events fired from the backend rather than the frontend. Server-side events are more reliable — they cannot be blocked by browser ad blockers and they fire even when the user closes the tab mid-flow.' },

      { t: 'h2', text: 'What the Data Revealed' },
      { t: 'p', text: 'The funnel report was immediately revealing. The largest single drop-off — 62% of registered users — happened at email verification. Users were completing registration but never verifying. The second significant drop-off was at onboarding step 3, which required filling in a learning profile.' },
      { t: 'ul', items: [
        'Landing page → Registration: 34% conversion (normal for a paid landing page)',
        'Registration → Email verified: 38% — meaning 62% abandoned at this step alone',
        'Email verified → Onboarding complete: 71% (acceptable)',
        'Onboarding complete → First purchase: 43% (room for improvement)',
      ]},

      { t: 'h2', text: 'Acting on the Data' },
      { t: 'p', text: 'With clear data, the fix was straightforward. We ran two changes in parallel: first, we moved the verification email to our BullMQ queue so it sent within seconds of registration rather than after a 5–10 minute batch delay. Second, we added a WhatsApp nudge 24 hours after signup for any user who had registered but not verified.' },
      { t: 'p', text: 'The near-instant send moved email verification from 38% to 47%. The WhatsApp nudge added another 4 percentage points over the following weeks. After eight weeks of iterating on the funnel with this data-driven process, overall lead conversion had improved by 12%.' },

      { t: 'h2', text: 'What I Would Do Differently' },
      { t: 'ul', items: [
        'Instrument earlier — we were six months into the product before adding analytics; the right time to start is before the first user',
        'Track the why, not just the what — exit surveys on dropped steps provide the qualitative context that quantitative data alone cannot give you',
        'Set up regression alerts — if email verification drops below 30%, alert the engineering team immediately rather than discovering it in a monthly review',
        'Segment by acquisition channel from day one — funnel conversion varies enormously between organic, paid, and referral traffic',
      ]},
    ],
  },

  {
    slug: 'docker-nodejs-deployment',
    blocks: [
      { t: 'h2', text: 'The Problem with "Works on My Machine"' },
      { t: 'p', text: 'Every backend developer has experienced this: code works perfectly in local development, gets deployed to staging, and immediately breaks. The Node.js version differs by a minor release. An environment variable is missing. A native dependency compiled for macOS cannot run on the Linux server. Docker eliminates this class of problem by packaging your application and all its dependencies into a single, reproducible image that runs identically across every environment.' },

      { t: 'h2', text: 'Writing a Production Dockerfile' },
      { t: 'p', text: 'A production Dockerfile is not the same as a development one. The goal is a small, secure, and reproducible image. The most important technique is a multi-stage build: one stage installs all dependencies and compiles TypeScript, and a second stage copies only the compiled output and production dependencies into a clean minimal base image.' },
      { t: 'ul', items: [
        'Use node:20-alpine as the base image — Alpine Linux brings the image down from ~900MB to under 100MB',
        'Multi-stage build: build stage (with devDependencies and tsc) → runtime stage (only dist/ and production node_modules)',
        'Run as a non-root user — the default Node Docker image runs as root, which is a security vulnerability',
        'Set NODE_ENV=production — this removes development-only checks and can noticeably cut startup time',
        '.dockerignore your node_modules, .env files, and .git — never bake local dependencies or secrets into the image',
      ]},

      { t: 'h2', text: 'Docker Compose for Local Development' },
      { t: 'p', text: 'For local development, Docker Compose lets you define and start your entire stack in a single command. Instead of manually launching a PostgreSQL instance, a Redis server, and your Node.js API separately and in the right order, you run docker compose up and everything starts together in an isolated network.' },
      { t: 'p', text: 'The Compose file defines services, their images, environment variables loaded from a .env file, port mappings, volume mounts for data persistence, and health check dependencies so the API waits for the database to be ready before accepting connections.' },

      { t: 'h2', text: 'Environment Variables and Secrets' },
      { t: 'p', text: 'Never bake secrets into your Docker image. Environment variables are passed at runtime — in development via a .env file read by Docker Compose, in production via your hosting platform\'s secret management (AWS Secrets Manager, Railway variables, Vercel environment settings). The built image itself must contain zero credentials.' },
      { t: 'callout', label: 'Security Rule', text: 'If you can read a secret by running docker inspect on your image, you have done it wrong. Secrets belong in runtime environment variables injected by your deployment platform, not in the Dockerfile, not in the image, and certainly not committed to source control.' },

      { t: 'h2', text: 'Health Checks and Graceful Shutdown' },
      { t: 'p', text: 'A production container needs two non-negotiable behaviours. First, a /health endpoint that returns 200 OK with a simple status payload, so the container orchestrator knows the service is alive and ready to accept traffic. Second, graceful shutdown handling so in-flight requests complete before the container stops.' },
      { t: 'p', text: 'Node.js exits immediately on SIGTERM by default. You must override this: stop accepting new connections, wait for open requests to drain (with a timeout of around 30 seconds), then exit cleanly. Without this, deployments will occasionally drop live requests mid-response.' },
      { t: 'ul', items: [
        'Add GET /health returning { "status": "ok" } — used by Docker, Kubernetes, and load balancers to route traffic',
        'Handle process.on("SIGTERM") to stop accepting new requests and drain open connections before exiting',
        'Add a HEALTHCHECK instruction in the Dockerfile so Docker knows when to restart an unhealthy container automatically',
        'Set a shutdown timeout of 30 seconds — a stuck request should not block a deployment indefinitely',
      ]},

      { t: 'h2', text: 'Deploying to Production' },
      { t: 'p', text: 'Once your image builds and runs correctly with Compose locally, deploying is straightforward. Push the image to a container registry (Docker Hub, AWS ECR, GitHub Container Registry). Configure your hosting platform to pull and run the image with the appropriate environment variables.' },
      { t: 'p', text: 'I have deployed Dockerised Node.js services to Railway, Render, and AWS ECS. Railway is the fastest path for getting a Dockerised app live — connect your repository, point it at your Dockerfile, set environment variables in the dashboard, and you are deployed in minutes with automatic redeploys on every push.' },

      { t: 'h2', text: 'Key Takeaways' },
      { t: 'ul', items: [
        'Multi-stage builds keep your production image small and prevent development secrets and tooling from ending up in production',
        'Never put secrets in Docker images — use runtime environment variables injected by your platform',
        'Health checks and graceful shutdown are production requirements, not optional polish',
        'Docker Compose eliminates the "works on my machine" problem across your entire team for local development',
      ]},
    ],
  },
]
