DO $$ BEGIN
 CREATE TYPE "public"."coupon_type" AS ENUM('discount', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TYPE "user_role" ADD VALUE 'admin';--> statement-breakpoint
ALTER TYPE "user_role" ADD VALUE 'user';--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "audit_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"action" varchar(255) NOT NULL,
	"metadata" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "coupons" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar(100) NOT NULL,
	"type" "coupon_type" NOT NULL,
	"quantity" integer DEFAULT 0,
	"valid_from" timestamp,
	"valid_until" timestamp,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "coupon_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"full_name" varchar(255),
	"bio" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_coupons" (
	"user_id" integer NOT NULL,
	"coupon_id" integer NOT NULL,
	"redeemed_at" timestamp,
	CONSTRAINT "user_coupons_user_id_coupon_id_pk" PRIMARY KEY("user_id","coupon_id")
);
--> statement-breakpoint
DROP TABLE "auction_orders_book";--> statement-breakpoint
DROP TABLE "blockchain";--> statement-breakpoint
DROP TABLE "blockchain_txns";--> statement-breakpoint
DROP TABLE "buy_collectibles";--> statement-breakpoint
DROP TABLE "buy_tickets";--> statement-breakpoint
DROP TABLE "carbon_credit_txn";--> statement-breakpoint
DROP TABLE "collectibles";--> statement-breakpoint
DROP TABLE "collection";--> statement-breakpoint
DROP TABLE "cupon";--> statement-breakpoint
DROP TABLE "cupon_redeem";--> statement-breakpoint
DROP TABLE "cupon_resource";--> statement-breakpoint
DROP TABLE "discount_cupon";--> statement-breakpoint
DROP TABLE "event_artist";--> statement-breakpoint
DROP TABLE "event_attendee_id";--> statement-breakpoint
DROP TABLE "event_comments";--> statement-breakpoint
DROP TABLE "event_likes";--> statement-breakpoint
DROP TABLE "event_users_connect";--> statement-breakpoint
DROP TABLE "event_users_connection";--> statement-breakpoint
DROP TABLE "events";--> statement-breakpoint
DROP TABLE "guest_list";--> statement-breakpoint
DROP TABLE "organiser_documents";--> statement-breakpoint
DROP TABLE "owned_collectibles";--> statement-breakpoint
DROP TABLE "owned_tickets";--> statement-breakpoint
DROP TABLE "post";--> statement-breakpoint
DROP TABLE "post_comments";--> statement-breakpoint
DROP TABLE "post_like";--> statement-breakpoint
DROP TABLE "promotion";--> statement-breakpoint
DROP TABLE "question";--> statement-breakpoint
DROP TABLE "question_activity";--> statement-breakpoint
DROP TABLE "question_answers";--> statement-breakpoint
DROP TABLE "question_options";--> statement-breakpoint
DROP TABLE "redeem";--> statement-breakpoint
DROP TABLE "ticket_auction_listings";--> statement-breakpoint
DROP TABLE "resale_map";--> statement-breakpoint
DROP TABLE "role_change_application";--> statement-breakpoint
DROP TABLE "super_event";--> statement-breakpoint
DROP TABLE "tickets";--> statement-breakpoint
DROP TABLE "tickets_to_collectibles";--> statement-breakpoint
DROP TABLE "tribe";--> statement-breakpoint
DROP TABLE "tribe_action";--> statement-breakpoint
DROP TABLE "tribe_badge_awards";--> statement-breakpoint
DROP TABLE "tribe_join_rules";--> statement-breakpoint
DROP TABLE "tribe_members";--> statement-breakpoint
DROP TABLE "tribe_point_awards";--> statement-breakpoint
DROP TABLE "tribe_wait_list";--> statement-breakpoint
DROP TABLE "user_experience";--> statement-breakpoint
DROP TABLE "user_logs";--> statement-breakpoint
DROP TABLE "passkey";--> statement-breakpoint
DROP TABLE "users_followers";--> statement-breakpoint
DROP TABLE "wallet";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_user_id_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_username_unique";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_phone_unique";--> statement-breakpoint
DROP INDEX IF EXISTS "user_name_index";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_user_id_username_pk";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'user';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "id" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "is_active" boolean DEFAULT true;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "audit_logs" ADD CONSTRAINT "audit_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_coupons" ADD CONSTRAINT "user_coupons_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_coupons" ADD CONSTRAINT "user_coupons_coupon_id_coupons_id_fk" FOREIGN KEY ("coupon_id") REFERENCES "public"."coupons"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "public_id";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "username";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "name";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "gender";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "dob";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "preferences";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "socials";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "phone";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "description";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "avatar";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "private_key";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "address";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "locality";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "city";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "pincode";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "state";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "country";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "is_onboarded";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "verified";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "follower_count";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "following_count";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "cover_img";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "xp";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "account_status";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "last_login";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");