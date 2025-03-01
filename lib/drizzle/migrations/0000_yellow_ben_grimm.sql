CREATE TYPE "public"."account_type" AS ENUM('student', 'vendor', 'owner');--> statement-breakpoint
CREATE TABLE "buildings" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"name" text NOT NULL,
	"price" numeric NOT NULL,
	"images" json DEFAULT '[]'::json NOT NULL,
	CONSTRAINT "buildings_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "institution" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "institution_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "property_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	CONSTRAINT "property_type_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(200) NOT NULL,
	"wallet_amount" numeric DEFAULT '0.00' NOT NULL,
	"email_address" varchar(100) NOT NULL,
	"account_type" "account_type" NOT NULL,
	"institution_id" integer,
	"phone_number" varchar(20) NOT NULL,
	"property_id" integer
);
--> statement-breakpoint
ALTER TABLE "buildings" ADD CONSTRAINT "buildings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_property_id_property_type_id_fk" FOREIGN KEY ("property_id") REFERENCES "public"."property_type"("id") ON DELETE no action ON UPDATE no action;