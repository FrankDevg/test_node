FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
ENV PORT=3000
ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S appuser -u 1001
USER appuser
EXPOSE $PORT
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget -q --spider http://localhost:$PORT/health || exit 1
CMD [ "npm", "start" ]
