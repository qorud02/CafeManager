import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import contactRoutes from "./routes/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.use("/api", contactRoutes);

  const httpServer = createServer(app);

  return httpServer;
}
