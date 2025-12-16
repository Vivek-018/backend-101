DO $$ BEGIN
 CREATE TYPE "public"."artist_state" AS ENUM('deleted', 'active');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."auction_order_status" AS ENUM('win', 'bid');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."resale_status" AS ENUM('ongoing', 'closed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."bank_acc_type" AS ENUM('saving', 'current');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."txn_type" AS ENUM('collectible_create', 'collectible_transfer', 'contract_interaction');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."blockchain_type" AS ENUM('evm', 'non_evm');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."buy_asset_reference" AS ENUM('buy_tickets', 'buy_collectibles');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."order_type" AS ENUM('auction', 'direct', 'resale');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."collectible_rarity" AS ENUM('legendary', 'epic', 'rare', 'common');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."collectible_state" AS ENUM('active', 'deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."collectible_sub_types" AS ENUM('no_subtype', 'achievement', 'unique', 'astrix_point');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."collectible_types" AS ENUM('no_type', 'avatar', 'cupon', 'badge', 'tribe_point', 'user_connection', 'event_intro', 'event_identity', 'event_air_drop', 'carbon_credit', 'event_attendee');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."enum_cupon_resources" AS ENUM('tickets', 'collectibles', 'events');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."event_state" AS ENUM('deleted', 'freezed', 'active', 'hidden');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('private', 'public');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."event_type" AS ENUM('music', 'comedy', 'sports', 'e-gaming', 'culture', 'culinary', 'conference', 'seminar', 'workshop', 'exhibition', 'festival', 'carnival', 'private_event', 'experience', 'other', 'comic_books', 'anime_and_manga', 'meetup');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."gateway" AS ENUM('stripe', 'razorpay', 'paypal', 'rsvp', 'cashfree', 'juspay', 'internal', 'payu');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."order_status" AS ENUM('pending', 'success', 'failed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."passkey_role" AS ENUM('executive', 'owner', 'manager');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."passkey_state" AS ENUM('deleted', 'active');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."post_react_enum" AS ENUM('like', 'angry', 'sad', 'laugh', 'excited', 'surprised', 'dislike');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."post_status" AS ENUM('public', 'private');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."post_type" AS ENUM('default_post', 'tribe');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."promotion_items" AS ENUM('events');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."promotion_status" AS ENUM('active', 'inactive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."question_activity_state_type" AS ENUM('active', 'deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."question_activity_type" AS ENUM('quiz', 'poll', 'ticket_form');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."question_options_content_type" AS ENUM('active', 'deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."question_state" AS ENUM('active', 'deleted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."question_type" AS ENUM('short_answer', 'long_answer', 'multiple_choice', 'drop_down', 'date', 'time', 'date_time');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."redeem_resource" AS ENUM('tickets', 'collectibles', 'events');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."resale_types" AS ENUM('auction', 'resale');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."ticket_state" AS ENUM('deleted', 'freezed', 'active', 'hidden', 'coming_soon');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_action_act_as" AS ENUM('default_tribe_action', 'point');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_action_enum" AS ENUM('events', 'tickets', 'post', 'collectibles', 'question_activity');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_action_state" AS ENUM('active', 'inactive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_join_rules_asset_type" AS ENUM('collectibles');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_join_rules_status" AS ENUM('active', 'deleted', 'not_active');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_members_role" AS ENUM('member', 'moderator', 'admin', 'artist', 'brand');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_member_status" AS ENUM('active', 'banned', 'removed');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_point_awards_activity_type" AS ENUM('default_tribe_point_awards_activity_type', 'post_like', 'post_comment', 'event_like', 'event_comment', 'answered');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_state" AS ENUM('deleted', 'active');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_status" AS ENUM('public', 'private');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_types" AS ENUM('general', 'gaming', 'entertainment', 'musical');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."tribe_wait_list_enum" AS ENUM('pending', 'approved', 'rejected');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."account_status" AS ENUM('deleted', 'active', 'banned');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."activity" AS ENUM('post_like', 'post_comment', 'create_post', 'login', 'create_collectible', 'create_event', 'event_like', 'event_comment', 'buy_ticket', 'buy_collectible', 'events', 'event_users_connection', 'event_identity', 'event_air_drop', 'default_xp_user_activity');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('fan', 'artist', 'organiser', 'brand');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role_change_status" AS ENUM('pending', 'rejected', 'approved', 'in_review', 'upload_documents');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
  CREATE TYPE "cupon_type" AS ENUM ('discount', 'other');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
  CREATE TYPE "discount_currency_type" AS ENUM ('percentage', 'inr');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auction_orders_book" (
	"id" serial NOT NULL,
	"buyid" integer,
	"user_id" integer,
	"price" integer,
	"ref_table" "buy_asset_reference" NOT NULL,
	"status" "auction_order_status" DEFAULT 'bid',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "auction_orders_book_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blockchain" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255),
	"explorer_url" varchar(255),
	"type" "blockchain_type" NOT NULL,
	"chain_id" varchar(255),
	CONSTRAINT "blockchain_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blockchain_txns" (
	"id" serial NOT NULL,
	"from_address" varchar NOT NULL,
	"to_address" varchar NOT NULL,
	"quantity" integer NOT NULL,
	"tx_hash" varchar(255) NOT NULL,
	"collectible_id" integer NOT NULL,
	"txn_type" "txn_type" NOT NULL,
	"blockchain_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "blockchain_txns_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "buy_collectibles" (
	"buy_id" serial NOT NULL,
	"collectible_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"price" integer DEFAULT 0,
	"order_quantity" integer DEFAULT 0,
	"success_quantity" integer DEFAULT 0,
	"failed_quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"status" "order_status" DEFAULT 'pending',
	"hash" varchar(255),
	"ref_id" integer,
	"order_id" varchar(255) NOT NULL,
	"order_type" "order_type" DEFAULT 'direct',
	"gateway" "gateway" DEFAULT 'razorpay',
	"remarks" varchar,
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	"cupon_id" integer DEFAULT null,
	"useragent" varchar,
	"blockchain_txn_id" integer,
	CONSTRAINT "buy_collectibles_buy_id_pk" PRIMARY KEY("buy_id"),
	CONSTRAINT "buy_collectibles_buy_id_unique" UNIQUE("buy_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "buy_tickets" (
	"buy_id" serial NOT NULL,
	"ticket_id" integer,
	"user_id" integer,
	"price" integer DEFAULT 0,
	"order_quantity" integer DEFAULT 0,
	"success_quantity" integer DEFAULT 0,
	"failed_quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"status" "order_status" DEFAULT 'pending',
	"hash" varchar(255),
	"ref_id" integer,
	"order_id" varchar(255) NOT NULL,
	"gateway" "gateway" DEFAULT 'razorpay',
	"remarks" varchar,
	"order_type" "order_type" DEFAULT 'direct',
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	"cupon_id" integer DEFAULT null,
	"useragent" varchar,
	"blockchain_txn_id" integer,
	CONSTRAINT "buy_tickets_buy_id_pk" PRIMARY KEY("buy_id"),
	CONSTRAINT "buy_tickets_buy_id_unique" UNIQUE("buy_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "carbon_credit_txn" (
	"email" varchar(255),
	"hash" varchar(255),
	"is_awarded" boolean DEFAULT false,
	CONSTRAINT "carbon_credit_txn_email_pk" PRIMARY KEY("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "collectibles" (
	"collectible_id" serial NOT NULL,
	"public_id" uuid DEFAULT gen_random_uuid(),
	"collection_id" integer,
	"user_id" integer NOT NULL,
	"event_id" integer,
	"name" varchar(255),
	"description" varchar(5000),
	"assets" jsonb,
	"images" jsonb,
	"issue_qty" integer DEFAULT 1,
	"price" integer DEFAULT 0,
	"benifits" json,
	"resale_royalty" integer DEFAULT 0,
	"meta_data" jsonb,
	"points" integer DEFAULT 0,
	"redeemable" boolean DEFAULT false,
	"transferable" boolean DEFAULT false,
	"redeem_status" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"hash" varchar(255) NOT NULL,
	"c_id" varchar(255) NOT NULL,
	"showcase" boolean DEFAULT false,
	"available_qty" integer DEFAULT 1,
	"resale" boolean DEFAULT false,
	"max_qty" integer DEFAULT 1,
	"free_collectible" boolean DEFAULT false,
	"freeze" boolean DEFAULT false,
	"type" "collectible_types" DEFAULT 'no_type',
	"subtype" "collectible_sub_types" DEFAULT 'no_subtype',
	"state" "collectible_state" DEFAULT 'active',
	"rarity" "collectible_rarity" DEFAULT 'common',
	"blockchain_id" integer,
	CONSTRAINT "collectibles_collectible_id_pk" PRIMARY KEY("collectible_id"),
	CONSTRAINT "collectibles_collectible_id_unique" UNIQUE("collectible_id"),
	CONSTRAINT "collectibles_user_id_name_collection_id_unique" UNIQUE("user_id","name","collection_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "collection" (
	"collection_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"collection_name" varchar(255),
	"collection_img" varchar(500),
	"description" varchar(5000),
	"tags" jsonb,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "collection_collection_id_pk" PRIMARY KEY("collection_id"),
	CONSTRAINT "collection_collection_id_unique" UNIQUE("collection_id"),
	CONSTRAINT "collection_user_id_collection_name_unique" UNIQUE("user_id","collection_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cupon" (
	"id" serial NOT NULL,
	"code" varchar(255),
	"type" "cupon_type",
	"valid_from" timestamp,
	"valid_until" timestamp,
	"new_user" boolean DEFAULT false,
	"quantity" integer,
	"max_avail" integer,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "cupon_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "unique_code" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cupon_redeem" (
	"cupon_id" integer,
	"user_id" integer,
	"quantity" integer,
	CONSTRAINT "cupon_redeem_cupon_id_user_id_pk" PRIMARY KEY("cupon_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cupon_resource" (
	"id" serial NOT NULL,
	"cupon_id" integer,
	"resource" "enum_cupon_resources",
	"resource_id" integer,
	CONSTRAINT "cupon_resource_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "discount_cupon" (
	"id" serial NOT NULL,
	"code_id" integer,
	"currency" "discount_currency_type",
	"amount" integer,
	CONSTRAINT "discount_cupon_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event_artist" (
	"id" serial NOT NULL,
	"artist_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"event_id" integer NOT NULL,
	"start_time" timestamp,
	"socials" jsonb,
	"end_time" timestamp,
	"description" text,
	"name" varchar(255),
	"avatar" varchar,
	"state" "artist_state" DEFAULT 'active',
	CONSTRAINT "event_artist_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event_attendee_id" (
	"id" serial NOT NULL,
	"public_id" uuid DEFAULT gen_random_uuid(),
	"user_id" integer,
	"special_drop_claimed" jsonb DEFAULT '[]'::jsonb,
	"event_id" integer NOT NULL,
	CONSTRAINT "event_attendee_id_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "event_attendee_id_id_unique" UNIQUE("id"),
	CONSTRAINT "event_attendee_id_user_id_event_id_unique" UNIQUE("user_id","event_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event_comments" (
	"id" serial NOT NULL,
	"comment_id" varchar(100) NOT NULL,
	"event_id" integer,
	"user_id" integer,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"parent_id" integer,
	CONSTRAINT "event_comments_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "event_comments_comment_id_event_id_user_id_unique" UNIQUE("comment_id","event_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event_likes" (
	"like" boolean DEFAULT true NOT NULL,
	"user_id" integer,
	"event_id" integer,
	"reaction" "post_react_enum" DEFAULT 'like',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "event_likes_user_id_event_id_pk" PRIMARY KEY("user_id","event_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event_users_connect" (
	"id" serial NOT NULL,
	"connecting_id" integer,
	"connected_id" integer,
	"event_id" integer,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "event_users_connect_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "event_users_connect_connected_id_event_id_unique" UNIQUE("connected_id","event_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event_users_connection" (
	"id" serial NOT NULL,
	"scanning_user_id" integer NOT NULL,
	"scanned_user_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "event_users_connection_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "event_users_connection_id_unique" UNIQUE("id"),
	CONSTRAINT "event_users_connection_scanning_user_id_scanned_user_id_event_id_unique" UNIQUE("scanning_user_id","scanned_user_id","event_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "events" (
	"id" serial NOT NULL,
	"event_id" varchar(100) NOT NULL,
	"public_id" uuid DEFAULT gen_random_uuid(),
	"name" varchar(255),
	"start_date" timestamp NOT NULL,
	"end_date" timestamp NOT NULL,
	"venue" varchar(255),
	"location" varchar(255),
	"images" jsonb,
	"type" "event_type" DEFAULT 'other',
	"description" varchar(5000),
	"tags" jsonb,
	"promote" boolean DEFAULT false,
	"event_data" jsonb,
	"meta_data" jsonb DEFAULT '{"style":{"font":"mulish","color":"#af8cff"},"showEndDate":false,"permission":{"isPhoneRequired":false}}'::jsonb,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"comment_count" integer DEFAULT 0,
	"like_count" integer DEFAULT 0,
	"user_engagement_count" integer DEFAULT 0,
	"status" "status" DEFAULT 'public',
	"convenience_fee" integer DEFAULT 10,
	"state" "event_state" DEFAULT 'active',
	"terms_and_conditions" varchar(10000),
	"super_event_id" integer,
	CONSTRAINT "events_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "events_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guest_list" (
	"id" serial NOT NULL,
	"ticket_id" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"attended" boolean DEFAULT false,
	CONSTRAINT "guest_list_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "guest_list_id_unique" UNIQUE("id"),
	CONSTRAINT "unique_ticket_id_email" UNIQUE("email","ticket_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "organiser_documents" (
	"id" serial NOT NULL,
	"application_id" integer,
	"bank_name" varchar(60),
	"account_number" varchar,
	"ifsc" varchar,
	"pan" varchar,
	"company_name" varchar(100),
	"company_address" varchar(255),
	"company_state" varchar(50),
	"company_country" varchar(50),
	"gst" varchar,
	"is_gst_available" boolean,
	"is_itr_filled" boolean,
	"account_type" "bank_acc_type",
	"bank_branch" varchar(100),
	"beneficiary_name" varchar(255),
	"pan_img" varchar,
	"bank_statement_img" varchar,
	"mobile_number" varchar(20),
	"email" varchar(100),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "organiser_documents_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "organiser_documents_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "owned_collectibles" (
	"user_id" integer NOT NULL,
	"collectible_id" integer NOT NULL,
	"quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"showcase" boolean DEFAULT false,
	"redemmed" boolean DEFAULT false,
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "owned_collectibles_user_id_collectible_id_pk" PRIMARY KEY("user_id","collectible_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "owned_tickets" (
	"user_id" integer NOT NULL,
	"ticket_id" integer NOT NULL,
	"quantity" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"showcase" boolean DEFAULT false,
	"redemmed" boolean DEFAULT false,
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "owned_tickets_user_id_ticket_id_pk" PRIMARY KEY("user_id","ticket_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post" (
	"id" serial NOT NULL,
	"title" varchar(100),
	"post_id" varchar(100) NOT NULL,
	"user_id" integer,
	"content" text,
	"type" "post_type" DEFAULT 'default_post',
	"image" jsonb,
	"comment_count" integer DEFAULT 0,
	"badge_award_id" integer,
	"like_count" integer DEFAULT 0,
	"is_deleted" boolean DEFAULT false NOT NULL,
	"status" "post_status" DEFAULT 'public',
	"tags" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "post_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_comments" (
	"id" serial NOT NULL,
	"comment_id" varchar(100) NOT NULL,
	"post_id" integer,
	"user_id" integer,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"parent_id" integer,
	CONSTRAINT "post_comments_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "post_comments_comment_id_post_id_user_id_unique" UNIQUE("comment_id","post_id","user_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_like" (
	"like" boolean DEFAULT true NOT NULL,
	"user_id" integer,
	"post_id" integer,
	"reaction" "post_react_enum" DEFAULT 'like',
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "post_like_user_id_post_id_pk" PRIMARY KEY("user_id","post_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "promotion" (
	"id" serial NOT NULL,
	"resource" "promotion_items",
	"resource_id" integer,
	"status" "promotion_status" DEFAULT 'active',
	"created_at" timestamp DEFAULT now(),
	"active_till" timestamp,
	CONSTRAINT "promotion_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question" (
	"id" serial NOT NULL,
	"question_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"content" text,
	"type" "question_type",
	"activity_id" integer,
	"is_required" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"state" "question_state" DEFAULT 'active',
	CONSTRAINT "question_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question_activity" (
	"id" serial NOT NULL,
	"post_id" integer,
	"ticket_id" integer,
	"title" varchar(255),
	"description" varchar(2500),
	"question_activity_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"type" "question_activity_type" NOT NULL,
	"user_id" integer,
	"created_at" timestamp DEFAULT now(),
	"state" "question_activity_state_type" DEFAULT 'active',
	CONSTRAINT "question_activity_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question_answers" (
	"id" serial NOT NULL,
	"user_id" integer,
	"question_option_id" integer,
	"content" varchar(1200),
	"question_id" integer,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "question_answers_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question_options" (
	"id" serial NOT NULL,
	"question_id" integer,
	"question_options_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"content_type" "question_options_content_type" DEFAULT 'text',
	"content" text,
	"is_answer" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"state" "question_options_content_type" DEFAULT 'active',
	CONSTRAINT "question_options_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "redeem" (
	"id" serial NOT NULL,
	"user_id" integer,
	"resource_id" integer,
	"resource" "redeem_resource",
	"quantity" integer,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "redeem_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ticket_auction_listings" (
	"id" serial NOT NULL,
	"buy_id" integer,
	"price" integer NOT NULL,
	"quantity" integer NOT NULL,
	"sold_quantity" integer DEFAULT 0,
	"sell_type" "resale_types" DEFAULT 'resale',
	"status" "resale_status" DEFAULT 'ongoing',
	"ref_table" "buy_asset_reference" NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"end_at" timestamp,
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "ticket_auction_listings_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "resale_map" (
	"id" serial NOT NULL,
	"parent" integer,
	"resale_id" integer,
	"buy_id" integer,
	"ref_table" "buy_asset_reference" NOT NULL,
	CONSTRAINT "resale_map_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "role_change_application" (
	"id" serial NOT NULL,
	"user_id" integer,
	"role" "user_role",
	"status" "role_change_status" DEFAULT 'pending',
	"remarks" varchar(255),
	"documents" jsonb,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "role_change_application_id_pk" PRIMARY KEY("id"),
	CONSTRAINT "role_change_application_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "super_event" (
	"id" serial NOT NULL,
	"super_event_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer,
	"name" varchar(255),
	"description" varchar(5000),
	"start_date" timestamp,
	"end_date" timestamp,
	"status" "status" DEFAULT 'public',
	"images" jsonb,
	"type" "event_type" DEFAULT 'other',
	"meta_data" jsonb,
	CONSTRAINT "super_event_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tickets" (
	"ticket_id" serial NOT NULL,
	"event_id" integer NOT NULL,
	"user_id" integer NOT NULL,
	"name" varchar(255),
	"description" varchar(5000),
	"image" varchar(500),
	"issue_qty" integer DEFAULT 0,
	"rsvp" boolean DEFAULT false,
	"price" integer DEFAULT 0,
	"resale_royalty" integer DEFAULT 0,
	"resalable" boolean DEFAULT false,
	"transferable" boolean DEFAULT false,
	"redeemable" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"hash" varchar(255),
	"c_id" varchar(255),
	"max_qty" integer DEFAULT 1,
	"available_qty" integer DEFAULT 0,
	"t_id" varchar(100) DEFAULT null,
	"state" "ticket_state" DEFAULT 'active',
	"rules" text,
	"flex_price" boolean DEFAULT false,
	"approve_only" boolean DEFAULT false,
	"physical_redeemable" boolean DEFAULT false,
	"meta_data" jsonb DEFAULT '{"addons":{"purchaseForm":false}}'::jsonb,
	CONSTRAINT "tickets_ticket_id_pk" PRIMARY KEY("ticket_id"),
	CONSTRAINT "tickets_ticket_id_unique" UNIQUE("ticket_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tickets_to_collectibles" (
	"ticket_id" integer NOT NULL,
	"collectible_id" integer NOT NULL,
	"quantity" integer DEFAULT 1,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "tickets_to_collectibles_ticket_id_collectible_id_pk" PRIMARY KEY("ticket_id","collectible_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe" (
	"id" serial NOT NULL,
	"tribe_id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255),
	"description" varchar(255),
	"type" "tribe_types" DEFAULT 'general',
	"user_id" integer,
	"image" varchar(255),
	"super" boolean DEFAULT false,
	"loyality_points" boolean DEFAULT true,
	"join_approval" boolean DEFAULT false,
	"tags" jsonb,
	"state" "tribe_state" DEFAULT 'active',
	"status" "tribe_status" DEFAULT 'public',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "tribe_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe_action" (
	"id" serial NOT NULL,
	"tribe_id" integer,
	"action_type" "tribe_action_enum",
	"action_id" integer,
	"act_as" "tribe_action_act_as" DEFAULT 'default_tribe_action',
	"state" "tribe_action_state" DEFAULT 'active',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "tribe_action_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe_badge_awards" (
	"id" serial NOT NULL,
	"tribe_id" integer,
	"awarding_user_id" integer,
	"awared_user_id" integer,
	"collectible_id" integer,
	"hash" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tribe_badge_awards_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe_join_rules" (
	"id" serial NOT NULL,
	"tribe_id" integer,
	"asset_id" integer NOT NULL,
	"status" "tribe_join_rules_status" DEFAULT 'active',
	"asset_type" "tribe_join_rules_asset_type" DEFAULT 'collectibles',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "tribe_join_rules_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe_members" (
	"id" serial NOT NULL,
	"tribe_id" integer,
	"user_id" integer,
	"status" "tribe_member_status" DEFAULT 'active',
	"role" "tribe_members_role" DEFAULT 'member',
	"points" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "tribe_members_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe_point_awards" (
	"id" serial NOT NULL,
	"tribe_id" integer,
	"user_id" integer,
	"points" integer DEFAULT 1,
	"collectible_id" integer,
	"hash" varchar(255),
	"remarks" varchar,
	"activity_type" "tribe_point_awards_activity_type" DEFAULT 'default_tribe_point_awards_activity_type',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "tribe_point_awards_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tribe_wait_list" (
	"id" serial NOT NULL,
	"tribe_id" integer,
	"user_id" integer,
	"status" varchar DEFAULT 'pending',
	"message" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	CONSTRAINT "tribe_wait_list_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_experience" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"xp_point" real NOT NULL,
	"activity" "activity" DEFAULT 'default_xp_user_activity' NOT NULL,
	"collectibe_id" integer,
	"hash" varchar(255),
	"source" integer DEFAULT null,
	"created_at" timestamp,
	CONSTRAINT "user_experience_pk" PRIMARY KEY("id"),
	CONSTRAINT "user_experience_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_logs" (
	"id" serial NOT NULL,
	"user_id" integer,
	"activity" varchar,
	"resource_id" integer,
	"resource" varchar,
	"ip" varchar,
	"useragent" varchar,
	"visitor_id" varchar,
	"created_at" timestamp,
	CONSTRAINT "user_logs_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "passkey" (
	"user_id" integer NOT NULL,
	"event_id" integer NOT NULL,
	"passkey" varchar,
	"role" "passkey_role",
	"otp" varchar,
	"state" "passkey_state" DEFAULT 'active',
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "passkey_user_id_event_id_pk" PRIMARY KEY("user_id","event_id"),
	CONSTRAINT "passkey_user_id_event_id_unique" UNIQUE("user_id","event_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial NOT NULL,
	"public_id" uuid DEFAULT gen_random_uuid(),
	"username" varchar(255),
	"name" varchar(255),
	"gender" varchar(20),
	"role" "user_role" DEFAULT 'fan',
	"dob" varchar(20),
	"email" varchar(255),
	"preferences" jsonb,
	"socials" jsonb,
	"phone" varchar(16),
	"description" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"avatar" varchar(255),
	"private_key" varchar(3000),
	"address" varchar(255),
	"locality" varchar(255),
	"city" varchar(50),
	"pincode" varchar(20),
	"state" varchar(50),
	"country" varchar(50),
	"is_onboarded" boolean DEFAULT false,
	"verified" boolean DEFAULT false,
	"follower_count" integer DEFAULT 0,
	"following_count" integer DEFAULT 0,
	"cover_img" varchar(501),
	"xp" real DEFAULT 0,
	"account_status" "account_status" DEFAULT 'active',
	"last_login" timestamp DEFAULT now(),
	CONSTRAINT "users_user_id_username_pk" PRIMARY KEY("user_id","username"),
	CONSTRAINT "users_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_followers" (
	"follower_id" integer NOT NULL,
	"following_id" integer NOT NULL,
	"follow" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "user_follower_pk" PRIMARY KEY("follower_id","following_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wallet" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"blockchain_id" integer,
	"type" "blockchain_type" NOT NULL,
	"address" varchar NOT NULL,
	"private_key" varchar NOT NULL,
	"auth_tag" varchar(255) NOT NULL,
	"iv" varchar(32) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "wallet_id_pk" PRIMARY KEY("id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auction_orders_book" ADD CONSTRAINT "auction_orders_book_buyid_users_user_id_fk" FOREIGN KEY ("buyid") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auction_orders_book" ADD CONSTRAINT "auction_orders_book_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blockchain_txns" ADD CONSTRAINT "blockchain_txns_collectible_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectible_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blockchain_txns" ADD CONSTRAINT "blockchain_txns_blockchain_id_blockchain_id_fk" FOREIGN KEY ("blockchain_id") REFERENCES "public"."blockchain"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_collectibles" ADD CONSTRAINT "buy_collectibles_collectible_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectible_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_collectibles" ADD CONSTRAINT "buy_collectibles_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_collectibles" ADD CONSTRAINT "buy_collectibles_ref_id_buy_collectibles_buy_id_fk" FOREIGN KEY ("ref_id") REFERENCES "public"."buy_collectibles"("buy_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_collectibles" ADD CONSTRAINT "buy_collectibles_cupon_id_cupon_id_fk" FOREIGN KEY ("cupon_id") REFERENCES "public"."cupon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_collectibles" ADD CONSTRAINT "buy_collectibles_blockchain_txn_id_blockchain_txns_id_fk" FOREIGN KEY ("blockchain_txn_id") REFERENCES "public"."blockchain_txns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_tickets" ADD CONSTRAINT "buy_tickets_ticket_id_tickets_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("ticket_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_tickets" ADD CONSTRAINT "buy_tickets_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_tickets" ADD CONSTRAINT "buy_tickets_ref_id_buy_collectibles_buy_id_fk" FOREIGN KEY ("ref_id") REFERENCES "public"."buy_collectibles"("buy_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_tickets" ADD CONSTRAINT "buy_tickets_cupon_id_cupon_id_fk" FOREIGN KEY ("cupon_id") REFERENCES "public"."cupon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "buy_tickets" ADD CONSTRAINT "buy_tickets_blockchain_txn_id_blockchain_txns_id_fk" FOREIGN KEY ("blockchain_txn_id") REFERENCES "public"."blockchain_txns"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collectibles" ADD CONSTRAINT "collectibles_collection_id_collection_collection_id_fk" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("collection_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collectibles" ADD CONSTRAINT "collectibles_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collectibles" ADD CONSTRAINT "collectibles_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collectibles" ADD CONSTRAINT "collectibles_blockchain_id_blockchain_id_fk" FOREIGN KEY ("blockchain_id") REFERENCES "public"."blockchain"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collection" ADD CONSTRAINT "collection_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cupon_redeem" ADD CONSTRAINT "cupon_redeem_cupon_id_cupon_id_fk" FOREIGN KEY ("cupon_id") REFERENCES "public"."cupon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cupon_redeem" ADD CONSTRAINT "cupon_redeem_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cupon_resource" ADD CONSTRAINT "cupon_resource_cupon_id_cupon_id_fk" FOREIGN KEY ("cupon_id") REFERENCES "public"."cupon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "discount_cupon" ADD CONSTRAINT "discount_cupon_code_id_cupon_id_fk" FOREIGN KEY ("code_id") REFERENCES "public"."cupon"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_artist" ADD CONSTRAINT "event_artist_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_attendee_id" ADD CONSTRAINT "event_attendee_id_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_attendee_id" ADD CONSTRAINT "event_attendee_id_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_comments" ADD CONSTRAINT "event_comments_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_comments" ADD CONSTRAINT "event_comments_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_comments" ADD CONSTRAINT "event_comments_parent_id_event_comments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."event_comments"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_likes" ADD CONSTRAINT "event_likes_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_likes" ADD CONSTRAINT "event_likes_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_users_connect" ADD CONSTRAINT "event_users_connect_connecting_id_users_user_id_fk" FOREIGN KEY ("connecting_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_users_connect" ADD CONSTRAINT "event_users_connect_connected_id_users_user_id_fk" FOREIGN KEY ("connected_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_users_connect" ADD CONSTRAINT "event_users_connect_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_users_connection" ADD CONSTRAINT "event_users_connection_scanning_user_id_users_user_id_fk" FOREIGN KEY ("scanning_user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_users_connection" ADD CONSTRAINT "event_users_connection_scanned_user_id_users_user_id_fk" FOREIGN KEY ("scanned_user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event_users_connection" ADD CONSTRAINT "event_users_connection_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "events" ADD CONSTRAINT "events_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "events" ADD CONSTRAINT "events_super_event_id_super_event_id_fk" FOREIGN KEY ("super_event_id") REFERENCES "public"."super_event"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "guest_list" ADD CONSTRAINT "guest_list_ticket_id_tickets_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("ticket_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "organiser_documents" ADD CONSTRAINT "organiser_documents_application_id_role_change_application_id_fk" FOREIGN KEY ("application_id") REFERENCES "public"."role_change_application"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "owned_collectibles" ADD CONSTRAINT "owned_collectibles_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "owned_collectibles" ADD CONSTRAINT "owned_collectibles_collectible_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectible_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "owned_tickets" ADD CONSTRAINT "owned_tickets_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "owned_tickets" ADD CONSTRAINT "owned_tickets_ticket_id_tickets_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("ticket_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post" ADD CONSTRAINT "post_badge_award_id_tribe_badge_awards_id_fk" FOREIGN KEY ("badge_award_id") REFERENCES "public"."tribe_badge_awards"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_post_id_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_comments" ADD CONSTRAINT "post_comments_parent_id_post_comments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."post_comments"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_like" ADD CONSTRAINT "post_like_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "post_like" ADD CONSTRAINT "post_like_post_id_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question" ADD CONSTRAINT "question_activity_id_question_activity_id_fk" FOREIGN KEY ("activity_id") REFERENCES "public"."question_activity"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_activity" ADD CONSTRAINT "question_activity_post_id_post_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."post"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_activity" ADD CONSTRAINT "question_activity_ticket_id_tickets_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("ticket_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_activity" ADD CONSTRAINT "question_activity_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_answers" ADD CONSTRAINT "question_answers_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_answers" ADD CONSTRAINT "question_answers_question_option_id_question_options_id_fk" FOREIGN KEY ("question_option_id") REFERENCES "public"."question_options"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_answers" ADD CONSTRAINT "question_answers_question_id_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."question"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_options" ADD CONSTRAINT "question_options_question_id_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."question"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "redeem" ADD CONSTRAINT "redeem_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "role_change_application" ADD CONSTRAINT "role_change_application_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "super_event" ADD CONSTRAINT "super_event_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tickets" ADD CONSTRAINT "tickets_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tickets" ADD CONSTRAINT "tickets_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tickets_to_collectibles" ADD CONSTRAINT "tickets_to_collectibles_ticket_id_tickets_ticket_id_fk" FOREIGN KEY ("ticket_id") REFERENCES "public"."tickets"("ticket_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tickets_to_collectibles" ADD CONSTRAINT "tickets_to_collectibles_collectible_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectible_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe" ADD CONSTRAINT "tribe_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_action" ADD CONSTRAINT "tribe_action_tribe_id_tribe_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribe"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_badge_awards" ADD CONSTRAINT "tribe_badge_awards_tribe_id_tribe_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribe"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_badge_awards" ADD CONSTRAINT "tribe_badge_awards_awarding_user_id_users_user_id_fk" FOREIGN KEY ("awarding_user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_badge_awards" ADD CONSTRAINT "tribe_badge_awards_awared_user_id_users_user_id_fk" FOREIGN KEY ("awared_user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_badge_awards" ADD CONSTRAINT "tribe_badge_awards_collectible_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectible_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_join_rules" ADD CONSTRAINT "tribe_join_rules_tribe_id_tribe_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribe"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_members" ADD CONSTRAINT "tribe_members_tribe_id_tribe_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribe"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_members" ADD CONSTRAINT "tribe_members_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_point_awards" ADD CONSTRAINT "tribe_point_awards_tribe_id_tribe_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribe"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_point_awards" ADD CONSTRAINT "tribe_point_awards_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_point_awards" ADD CONSTRAINT "tribe_point_awards_collectible_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectible_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_wait_list" ADD CONSTRAINT "tribe_wait_list_tribe_id_tribe_id_fk" FOREIGN KEY ("tribe_id") REFERENCES "public"."tribe"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tribe_wait_list" ADD CONSTRAINT "tribe_wait_list_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_collectibe_id_collectibles_collectible_id_fk" FOREIGN KEY ("collectibe_id") REFERENCES "public"."collectibles"("collectible_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_experience" ADD CONSTRAINT "user_experience_source_users_user_id_fk" FOREIGN KEY ("source") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "passkey" ADD CONSTRAINT "passkey_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "passkey" ADD CONSTRAINT "passkey_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_followers" ADD CONSTRAINT "users_followers_follower_id_users_user_id_fk" FOREIGN KEY ("follower_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_followers" ADD CONSTRAINT "users_followers_following_id_users_user_id_fk" FOREIGN KEY ("following_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wallet" ADD CONSTRAINT "wallet_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "wallet" ADD CONSTRAINT "wallet_blockchain_id_blockchain_id_fk" FOREIGN KEY ("blockchain_id") REFERENCES "public"."blockchain"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "buy_collectible_id_index" ON "buy_collectibles" USING btree ("collectible_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "buy_collectible_user_id_index" ON "buy_collectibles" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "order_id_index_buy_collectibles" ON "buy_collectibles" USING btree ("order_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ticket_id_index_buy" ON "buy_tickets" USING btree ("ticket_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "order_id_index_buy_tickets" ON "buy_tickets" USING btree ("order_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_index_buy_tickets" ON "buy_tickets" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "collection_id_index" ON "collectibles" USING btree ("collection_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "collectible_user_id_index" ON "collectibles" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "collectible_name_index" ON "collectibles" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "showcase_index" ON "collectibles" USING btree ("showcase");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "collection_userid_index" ON "collection" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "collection_name_index" ON "collection" USING btree ("collection_name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "event_id_index_comment" ON "event_comments" USING btree ("comment_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "event_id_index_like" ON "event_likes" USING btree ("event_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_event_index" ON "events" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_index" ON "guest_list" USING btree ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "owned_collectible_id_index" ON "owned_collectibles" USING btree ("collectible_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "owned_collectible_user_id_index" ON "owned_collectibles" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "post_index" ON "post" USING btree ("post_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "comment_index" ON "post_comments" USING btree ("comment_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "poll_activity_id_index" ON "question" USING btree ("activity_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "quiz_user_id_index" ON "question_activity" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "question_answers_user_id_index" ON "question_answers" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "question_answers_question_option_id_index" ON "question_answers" USING btree ("question_option_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "question_answers_question_id_index" ON "question_answers" USING btree ("question_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "question_options_poll_id_index" ON "question_options" USING btree ("question_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "redeem_resource_index" ON "redeem" USING btree ("resource");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "redeem_resource_id_index" ON "redeem" USING btree ("resource_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_id_index" ON "role_change_application" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_owned_id_index" ON "tribe" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_action_tribe_id_index" ON "tribe_action" USING btree ("tribe_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_badge_awards_tribe_index" ON "tribe_badge_awards" USING btree ("tribe_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_badge_awards_tribe_user_id" ON "tribe_badge_awards" USING btree ("awared_user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_join_rules_asset_id_asset_type" ON "tribe_join_rules" USING btree ("asset_id","asset_type");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_members_user_id_index" ON "tribe_members" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_point_awards_tribe_index" ON "tribe_point_awards" USING btree ("tribe_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_point_awards_user_id" ON "tribe_point_awards" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "tribe_wait_list_user_id_index" ON "tribe_wait_list" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_logs_visitor_id_index" ON "user_logs" USING btree ("visitor_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_logs_userId_index" ON "user_logs" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_name_index" ON "users" USING btree ("username");