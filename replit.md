# Overview

This is a corporate website for UniCup Company (유니컵컴퍼니), a franchise headquarters and F&B tech corporation. The project is built as a static React application using Vite with TypeScript, featuring a premium dark-themed design with Korean content. The website serves as a corporate showcase highlighting the company's franchise business model, brand consistency, and operational excellence in the coffee and food service industry.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with Vite as the build tool and development server
- **Routing**: Wouter for lightweight client-side routing with pages for Home, About, Business, News, and Contact
- **Styling**: Tailwind CSS with custom brand colors and design system based on UniCup's blue color palette
- **UI Components**: Shadcn/ui component library providing consistent, accessible React components
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **Typography**: Custom font stack using Pretendard for Korean text and Inter for English UI elements

## Component Structure
- **Layout System**: Centralized Layout component with Header and Footer
- **Section-based Architecture**: Homepage composed of modular sections (Hero, AboutUC, BusinessLines, etc.)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Accessibility**: ARIA labels and semantic HTML structure throughout

## Backend Architecture
- **Server Framework**: Express.js with TypeScript for API routes
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot module replacement and error overlay for development experience

## State Management
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Local State**: React hooks for component-level state
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## External Dependencies

### Core Technologies
- **Neon Database**: Serverless PostgreSQL database hosting via @neondatabase/serverless
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Wouter**: Lightweight routing library for React applications

### UI and Styling
- **Radix UI**: Accessible component primitives (@radix-ui/react-* packages)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Animation library for React components
- **Lucide React**: Icon library providing consistent iconography

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Static typing for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Additional Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Date-fns**: Date utility library for formatting and manipulation
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Fonts and Assets
- **Google Fonts**: Inter font family for English UI elements
- **Pretendard**: Korean web font via CDN for Korean text content
- **Static Assets**: Images stored in public/images directory for franchise and brand visuals