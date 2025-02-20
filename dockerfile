# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Installation des dépendances pour les paquets natifs
RUN apk add --no-cache libc6-compat python3 make g++ curl

COPY package*.json ./
RUN npm install --legacy-peer-deps

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ajout d'un fichier robots.txt
RUN echo "User-agent: *\nAllow: /" > ./public/robots.txt

# Ajout d'un favicon.ico par défaut
RUN touch ./public/favicon.ico

# Variables d'environnement de build
ARG SENDGRID_API_KEY
ARG RECIPIENT_EMAIL
ARG SENDER_EMAIL

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV SENDGRID_API_KEY=${SENDGRID_API_KEY}
ENV RECIPIENT_EMAIL=${RECIPIENT_EMAIL}
ENV SENDER_EMAIL=${SENDER_EMAIL}
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Build de l'application
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=80
ENV HOSTNAME="0.0.0.0"

# Création d'un utilisateur non-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copie de tous les fichiers nécessaires
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/package.json ./package.json

# Configuration des permissions
RUN chown -R nextjs:nodejs /app

# Passage à l'utilisateur non-root
USER nextjs

# Exposition du port
EXPOSE 3000

# Healthcheck plus simple
HEALTHCHECK --interval=30s --timeout=30s --start-period=60s --retries=5 \
    CMD node -e "require('http').get('http://localhost:3000/', res => res.statusCode === 200 ? process.exit(0) : process.exit(1))" || exit 1

# Ajout d'une commande pour vérifier le contenu
RUN ls -la

# Démarrage de l'application
CMD ["node", "server.js"]