CREATE TYPE "public"."stay_duration" AS ENUM('day', 'month', 'year');--> statement-breakpoint
ALTER TABLE "buildings" ALTER COLUMN "images" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "buildings" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
ALTER TABLE "buildings" ADD COLUMN "image_url" text NOT NULL;