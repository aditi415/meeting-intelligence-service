import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meeting Intelligence Service API",
      version: "1.0.0",
      description: "Hintro Backend Assignment API"
    },
    servers: [
      {
        url: process.env.RENDER_EXTERNAL_URL || "http://localhost:5000"
      }
    ]
  },
  apis: ["./src/routes/*.ts", "./src/modules/**/*.ts"]
});
