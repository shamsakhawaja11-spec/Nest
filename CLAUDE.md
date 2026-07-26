# AI CRM API — Project Memory

## What This Is
An AI-powered CRM backend built with NestJS + TypeScript. Production-grade, multi-tenant SaaS.

## Tech Stack
- Framework: NestJS + TypeScript
- Database: PostgreSQL + Prisma ORM
- Vector Search: pgvector (PostgreSQL extension)
- Cache: Redis (ioredis)
- Queue: BullMQ
- LLM: Anthropic Claude API
- Embeddings: OpenAI text-embedding-3-small
- Real-time: Socket.io (@nestjs/websockets)
- Search: Meilisearch
- Email: Resend
- File Storage: Cloudinary
- Auth: JWT + Passport.js
- Docs: Swagger (@nestjs/swagger)
- Containers: Docker + Docker Compose
- CI/CD: GitHub Actions

## GitHub Repo
https://github.com/shamsakhawaja11-spec/ai-crm-api

## What's Done
- Docker Compose — PostgreSQL (pgvector/pg16) + Redis running
- Prisma connected, ai_crm_db created
- src/config/configuration.ts — typed env factory
- src/config/config.module.ts — Joi validation
- src/database/prisma.service.ts — lifecycle hooks, query logging, healthCheck
- src/database/database.module.ts — global module
- src/common/filters/http-exception.filter.ts
- src/common/interceptors/transform.interceptor.ts
- src/common/interceptors/logging.interceptor.ts
- src/common/interceptors/timeout.interceptor.ts
- src/common/interceptors/audit.interceptor.ts — stubbed
- src/common/pipes/validation.pipe.ts
- src/common/middleware/request-id.middleware.ts
- src/common/exceptions/business.exception.ts
- src/main.ts — global prefix v1, CORS, all pipes/filters/interceptors
- Prisma migration: User + RefreshToken models
- src/modules/auth/dto/register.dto.ts
- src/modules/auth/dto/login.dto.ts

## What's In Progress
- Auth module (refresh-token.dto, strategies, service, controller, module)

## What's Next (in order)
1. Finish Auth module
2. Full Prisma schema (all models)
3. Users module
4. Teams module
5. Contacts module
6. Companies module
7. Leads module
8. Deals module
9. Pipeline module
10. Activities, Tasks, Notes
11. Emails module
12. Notifications
13. AI module (LLM, embeddings, RAG, lead scoring, email drafting, sentiment, forecasting, summarization, NLP search, next-action, insights)
14. Queues (BullMQ)
15. Real-time (Socket.io gateway)
16. Reports, Webhooks, Admin
17. Shared services (Redis, Storage, Email, Search)
18. Tests (e2e)
19. Docker + CI/CD finalization

## Key Conventions
- All routes prefixed with /v1
- Response shape: { data, meta, pagination } via transform.interceptor
- Error shape: uniform via http-exception.filter
- Multi-tenant: workspace/team isolation on every query
- Roles: ADMIN, SALES_REP, MANAGER
- Never use TypeORM — Prisma only
- Always send git commit command after every file addition/modification