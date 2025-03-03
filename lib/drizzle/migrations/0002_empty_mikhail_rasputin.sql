ALTER TABLE "buildings" ALTER COLUMN "images" SET NOT NULL;--> statement-breakpoint
CREATE INDEX "email_idx" ON "users" USING btree ("email_address");