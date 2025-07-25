# replit.md

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Express.js. The application showcases a personal portfolio for Kapil Kashyap, featuring a contact form, session booking system, and comprehensive information about his background, skills, and achievements. The project follows a monorepo structure with separate client and server directories, utilizing modern web development practices and a component-based architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **UI Components**: Radix UI primitives with custom styling
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme**: Custom dark/light theme system with CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: In-memory storage fallback for development
- **Validation**: Zod schemas for request validation
- **Session Management**: Session-based storage capabilities

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared types, schemas, and utilities
- `migrations/` - Database migration files

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Sections**: Modular components for About, Experience, Education, Projects, Skills, Achievements, Positions, Booking, and Contact
- **UI Components**: Complete shadcn/ui component library implementation
- **Theme Provider**: Context-based theme management
- **Forms**: Contact form and session booking form with validation

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database persistence
- **Route Handlers**: RESTful API endpoints for contacts and bookings
- **Middleware**: Request logging, error handling, and static file serving
- **Development Server**: Vite integration for hot reloading in development

### Database Schema
- **Contacts Table**: Stores contact form submissions (id, name, email, subject, message, created_at)
- **Bookings Table**: Stores session booking requests (id, name, email, topic, preferred_date, preferred_time, message, amount, currency, status, created_at)

## Data Flow

### Contact Form Flow
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. POST request sent to `/api/contact`
4. Server validates and stores contact in database
5. Success/error response returned to frontend
6. Toast notification displayed to user

### Session Booking Flow
1. User selects session topic and fills booking form
2. Form data validated with booking schema
3. POST request sent to `/api/book-session`
4. Server creates booking with default pricing (₹150 INR)
5. Booking stored with "pending" status
6. Confirmation response sent to frontend

### Admin Data Access
- GET `/api/contacts` - Retrieve all contact submissions
- GET `/api/bookings` - Retrieve all session bookings
- PUT `/api/bookings/:id/status` - Update booking status

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Routing**: wouter
- **State Management**: @tanstack/react-query
- **UI Components**: @radix-ui/* components
- **Styling**: tailwindcss, class-variance-authority, clsx
- **Animations**: framer-motion
- **Form Handling**: @hookform/resolvers
- **Utilities**: date-fns, lucide-react icons

### Backend Dependencies
- **Server**: express
- **Database**: drizzle-orm, @neondatabase/serverless
- **Validation**: zod, drizzle-zod
- **Session Storage**: connect-pg-simple
- **Development**: tsx, vite, esbuild

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type coverage
- **Database**: Drizzle Kit for migrations
- **Development**: Hot reloading and error overlay

## Deployment Strategy

### Build Process
1. Frontend built using Vite to `dist/public`
2. Backend bundled using esbuild to `dist/index.js`
3. Static files served from built frontend
4. Database migrations applied using `drizzle-kit push`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment setting (development/production)
- **REPL_ID**: Replit-specific configuration

### Production Setup
- Express server serves built React application
- API routes handle backend functionality
- PostgreSQL database for persistence
- Environment variables for configuration

### Development Setup
- Vite dev server with HMR for frontend
- Express server with TypeScript compilation
- In-memory storage fallback option
- Integrated error handling and logging