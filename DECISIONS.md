# Technical Decisions

## Database Choice

PostgreSQL was selected because it provides strong relational modeling for meetings, transcripts, analyses, and action items.

Alternatives Considered:

* MongoDB
* MySQL

Trade-off:
PostgreSQL requires schema management but provides better relational integrity.

## Authentication

JWT authentication was chosen because it is stateless and easy to deploy in cloud environments.

Alternatives Considered:

* Session-based authentication

Trade-off:
JWT requires token management but scales better.

## ORM

Prisma was selected because it provides type-safe database access and migration support.

## External Integration

Telegram Bot API was selected because it is free, easy to configure, and suitable for reminder notifications.
