CREATE TABLE IF NOT EXISTS "feedbacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"message" varchar,
	"created_at" timestamp DEFAULT now()
);
