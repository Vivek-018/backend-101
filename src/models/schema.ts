// import {
//   serial,
//   real,
//   varchar,
//   timestamp,
//   integer,
//   pgTable,
//   jsonb,
//   primaryKey,
//   boolean,
//   index,
//   unique,
//   text,
//   json,
//   pgEnum,
//   check,
//   uuid,
// } from "drizzle-orm/pg-core";
// import { gt, relations, sql } from "drizzle-orm";

// export const userAccountStatus = pgEnum("account_status", [
//   "deleted",
//   "active",
//   "banned",
// ]);
// import {
//   ArtistState,
//   AuctionOrderStatus,
//   bankAccType,
//   blockchainTxnType,
//   blockchainType,
//   BuyAssetReference,
//   BuyOrderType,
//   collectibleRarity,
//   collectibleState,
//   collectibleSubTypes,
//   collectibleTypes,
//   CuponResources,
//   CuponType,
//   DiscountCurrency,
//   documentNames,
//   EventState,
//   EventStatus,
//   eventType,
//   imageRatio,
//   OrderStatus,
//   Passkey_roles,
//   PaymentGateway,
//   postReaction,
//   postStatus,
//   postType,
//   promoteItems,
//   promoteStatus,
//   questionActivityState,
//   questionActivityType,
//   questionOptionsContentType,
//   questionOptionsState,
//   questionState,
//   questionType,
//   RedeemTable,
//   ResaleStatus,
//   ResaleTypes,
//   themeFont,
//   TicketState,
//   tribeActionActAs,
//   tribeActions,
//   tribeActionState,
//   tribeJoinRulesAssetType,
//   tribeJoinRulesStatus,
//   tribeMemberRole,
//   tribeMemberStatus,
//   tribePointAwardsActivityType,
//   tribeState,
//   tribeStatus,
//   tribeTypes,
//   tribeWaitListOptions,
//   uploadDocType,
//   UserRoles,
//   userRoleStatus,
//   Xp_User_Activity,
// } from "../enums";
// import Constants from "../config/constants";
// import { artistsSocials, spotifyPlaylistData, spotifyTrackData } from "../interfaces";

// export const userRolesEnum = pgEnum("user_role", Object.values(UserRoles) as [string,...string[]]);
// export const postReactEnum = pgEnum("post_react_enum",Object.values(postReaction) as [string,...string[]]);

// export const users = pgTable(
//   "users",
//   {
//     userId: serial("user_id").unique(),
//     publicId: uuid("public_id").default(sql`gen_random_uuid()`),
//     username: varchar("username", { length: 255 }).unique(),
//     name: varchar("name", { length: 255 }),
//     gender: varchar("gender", { length: 20 }),
//     role: userRolesEnum("role").default(UserRoles.FAN),
//     dob: varchar("dob", { length: 20 }),
//     email: varchar("email", { length: 255 }),
//     preferences: jsonb("preferences").$type<string[]>(),
//     socials: jsonb("socials").$type<{
//       instagram: string,
//       spotify: string
//     }>(),
//     phone: varchar("phone", { length: 16 }).unique(),
//     description: varchar("description", { length: 255 }),
//     createdAt: timestamp("created_at").defaultNow(),
//     avatar: varchar("avatar", { length: 255 }),
//     privateKey: varchar("private_key", { length: 3000 }),
//     address: varchar("address", { length: 255 }),
//     locality: varchar('locality',{length: 255}),
//     city: varchar("city", { length: 50 }),
//     pincode: varchar("pincode",{length: 20}),
//     state: varchar("state",{length: 50}),
//     country: varchar("country",{length: 50}),
//     isOnboarded: boolean("is_onboarded").default(false),
//     verified: boolean("verified").default(false),
//     followerCount: integer("follower_count").default(0),
//     followingCount: integer("following_count").default(0),
//     coverImg: varchar("cover_img", { length: 501 }),
//     xp: real("xp").default(0),
//     accountStatus: userAccountStatus("account_status").default("active"),
//     lastLogin: timestamp("last_login").defaultNow(),
//   },
//   (table) => ({
//     pk: primaryKey({ columns: [table.userId, table.username] }),
//     userNameIndex: index("user_name_index").on(table.username),
//     emailOrPhoneCheck: check(
//       "email_or_phone_check",
//       sql`("email" IS NOT NULL OR "phone" IS NOT NULL)`
//     ),
//   })
// );

// export const verifyUserRoles = pgEnum("role_change_status", Object.values(userRoleStatus) as [string,...string[]]);
// export const bankAccountType = pgEnum("bank_acc_type", Object.values(bankAccType) as [string,...string[]]);

// export const roleChangeApplication = pgTable("role_change_application",{
//   id: serial("id").unique(),
//   userId: integer("user_id").references(()=>users.userId),
//   role: userRolesEnum('role'),
//   status: verifyUserRoles('status').default(userRoleStatus.PENDING),
//   remarks: varchar('remarks',{length: 255}),
//   documents: jsonb("documents").$type<{
//     type: string,
//     link: string
//   }[]>(),
//   createdAt: timestamp("created_at").defaultNow(),
//   updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
// },
// (table)=>({
//   pk: primaryKey({columns: [table.id]}),
//   userId: index("user_id_index").on(table.userId)
// })
// )

// export const organiserDocuments = pgTable("organiser_documents",{
//   id: serial("id").unique(),
//   applicationId: integer("application_id").references(()=>roleChangeApplication.id),
//   tag: varchar('bank_name',{length:60}),
//   accountNumber: varchar("account_number"),
//   ifsc: varchar("ifsc"),
//   pan: varchar("pan"),
//   companyName: varchar("company_name",{length:100}),
//   companyAddress: varchar("company_address",{length:255}),
//   companyState: varchar("company_state",{length:50}),
//   companyCountry: varchar("company_country",{length:50}),
//   gst: varchar("gst"),
//   isGstAvailable: boolean('is_gst_available'),
//   isItrFilled:boolean('is_itr_filled'),
//   accountType: bankAccountType('account_type'),
//   bankBranch: varchar('bank_branch', {length: 100}),
//   beneficiaryName: varchar('beneficiary_name',{length: 255}),
//   panImg: varchar('pan_img'),
//   bankStatementImg: varchar('bank_statement_img'),
//   mobileNumber: varchar('mobile_number',{length: 20}),
//   email: varchar('email',{length: 100}),
//   createdAt: timestamp("created_at").defaultNow()
// },
// (table)=>({
//   pk: primaryKey({columns: [table.id]}),
// })
// )

// export const userLogs = pgTable("user_logs",{
//   id: serial("id").unique(),
//   userId: integer("user_id"),
//   activity: varchar("activity"),
//   resourceId: integer("resource_id"),
//   resource: varchar("resource"),
//   ip: varchar('ip'),
//   useragent: varchar('useragent'),
//   visitorId: varchar('visitor_id'),
//   createdAt: timestamp("created_at")
// },(table) => {
//   return {
//     visitorIdIndex: index("user_logs_visitor_id_index").on(table.visitorId),
//     userIdIndex: index("user_logs_userId_index").on(table.userId),
//   };
// });

// export const guestList = pgTable("guest_list",{
//   id: serial("id").unique(),
//   ticketId: integer("ticket_id").notNull().references(()=>tickets.ticketId),
//   email: varchar("email", { length: 255 }).notNull(),
//   attended: boolean("attended").default(false)
// },
// (table)=>({
//   pk: primaryKey({columns: [table.id]}),
//   uniqueCombination: unique("unique_ticket_id_email").on(table.email,table.ticketId),
//   emailIndex: index("email_index").on(table.email)
// })
// )

// export const usersFollowers = pgTable(
//   "users_followers",
//   {
//     followerId: integer("follower_id")
//       .notNull()
//       .references(() => users.userId),
//     followingId: integer("following_id")
//       .notNull()
//       .references(() => users.userId),
//     follow: boolean("follow").default(true),
//     createdAt: timestamp("created_at").defaultNow(),
//   },
//   (table) => ({
//     pk: primaryKey({
//       name: "user_follower_pk",
//       columns: [table.followerId, table.followingId],
//     }),
//   })
// );

// export const userActivity = pgEnum(
//   "activity",
//   Object.values(Xp_User_Activity) as [string, ...string[]]
// );
// export const userExperience = pgTable(
//   "user_experience",
//   {
//     id: serial("id").unique(),
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     xpPoint: real("xp_point").notNull(),
//     activity: userActivity("activity").default(Xp_User_Activity.DEFAULT).notNull(),
//     colllectibleId: integer('collectibe_id').references(()=>collectibles.collectibleId),
//     hash: varchar('hash',{length:255}),
//     source: integer("source")
//       .default(null)
//       .references(() => users.userId),
//     createdAt: timestamp("created_at"),
//   },
//   (table) => ({
//     pk: primaryKey({ name: "user_experience_pk", columns: [table.id] }),
//   })
// );

// export const collection = pgTable(
//   "collection",
//   {
//     collectionId: serial("collection_id").unique(),
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     collectionName: varchar("collection_name", { length: 255 }),
//     collectionImg: varchar("collection_img", { length: 500 }),
//     description: varchar("description", { length: 5000 }),
//     tags: jsonb("tags").$type<string[]>(),
//     createdAt: timestamp("created_at").defaultNow(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.collectionId] }),
//       collectionUserIndex: index("collection_userid_index").on(table.userId),
//       collectionNameIndex: index("collection_name_index").on(
//         table.collectionName
//       ),
//       unqUserIdName: unique().on(table.userId, table.collectionName),
//     };
//   }
// );

// export const collectibleTypesEnum = pgEnum(
//   "collectible_types",
//   Object.values(collectibleTypes) as [string, ...string[]]
// );

// export const collectibleSubTypesEnum = pgEnum(
//   "collectible_sub_types",
//   Object.values(collectibleSubTypes) as [string, ...string[]]
// );

// export const collectibleStateEnum = pgEnum(
//   "collectible_state",
//   Object.values(collectibleState) as [string, ...string[]]
// );

// export const collectibleRarityEnum = pgEnum(
//   "collectible_rarity",
//   Object.values(collectibleRarity) as [string, ...string[]]
// );

// export const collectibles = pgTable(
//   "collectibles",
//   {
//     collectibleId: serial("collectible_id").unique(),
//     publicId: uuid('public_id').default(sql`gen_random_uuid()`),
//     collectionId: integer("collection_id")
//       .references(() => collection.collectionId),
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     eventId:integer('event_id').references(()=>events.id),
//     name: varchar("name", { length: 255 }),
//     description: varchar("description", { length: 5000 }),
//     assets: jsonb("assets").$type<string[]>(),
//     images: jsonb("images").$type<{
//         [imageRatio.FIVEFOUR]:string[],
//         [imageRatio.SIXTEENNINE]:string[]
//       }>(), //TODO: we need to move assets images to this field and format it according to image ratio because for now data in assets is in different format
//     issueQty: integer("issue_qty").default(1),
//     price: integer("price").default(0),
//     benefits: json("benifits").$type<{ description: string; url: string }>(),
//     resaleRoyalty: integer("resale_royalty").default(0),
//     metaData: jsonb("meta_data").$type<any>(), //because metadata is not defined yet
//     points: integer('points').default(0),
//     redeemable: boolean("redeemable").default(false),
//     transferable: boolean("transferable").default(false),
//     redeemStatus: boolean("redeem_status").default(false),
//     createdAt: timestamp("created_at").defaultNow(),
//     hash: varchar("hash", { length: 255 }).notNull(),
//     cId: varchar("c_id", { length: 255 }).notNull(),//TODO: cId will not be unique anymore because we are integrating multiple blockchains, cId will be unique on a blockchain network so change logic accordingly
//     showcase: boolean("showcase").default(false),
//     availableQty: integer("available_qty").default(1),
//     resale: boolean("resale").default(false),
//     maxQty: integer("max_qty").default(1),
//     freeCollectible: boolean("free_collectible").default(false),
//     freeze: boolean("freeze").default(false),
//     type: collectibleTypesEnum('type').default(collectibleTypes.NOTYPE),
//     subType: collectibleSubTypesEnum('subtype').default(collectibleSubTypes.NOSUBTYPE),
//     state: collectibleStateEnum('state').default(collectibleState.ACTIVE),
//     rarity: collectibleRarityEnum('rarity').default(collectibleRarity.COMMON),
//     blockchainId: integer('blockchain_id').references(()=>blockchain.id)
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.collectibleId] }),
//       collectionIdIndex: index("collection_id_index").on(table.collectionId),
//       collectibleUserIndex: index("collectible_user_id_index").on(table.userId),
//       collectibleNameIndex: index("collectible_name_index").on(table.name),
//       showCaseIndex: index("showcase_index").on(table.showcase),
//       unqUserIdNameCollectionId: unique().on(
//         table.userId,
//         table.name,
//         table.collectionId
//       ),
//     };
//   }
// );


// export const tribeBadgeAwards = pgTable(
//   "tribe_badge_awards",
//   {
//     id: serial("id"),
//     tribeId: integer('tribe_id').references(()=>tribe.id),
//     awardingUserId: integer('awarding_user_id').references(()=>users.userId),
//     awardedUserId: integer('awared_user_id').references(()=>users.userId),
//     collectibleId: integer('collectible_id').references(()=>collectibles.collectibleId),
//     hash: text('hash'),
//     createdAt: timestamp("created_at").defaultNow().notNull()
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       tribeIndex: index("tribe_badge_awards_tribe_index").on(table.tribeId),
//       userId: index("tribe_badge_awards_tribe_user_id").on(table.awardedUserId),
//     };
//   }
// );

// export const tribePointAwardsActivityTypeEnum = pgEnum("tribe_point_awards_activity_type", Object.values(tribePointAwardsActivityType) as [string,...string[]]);
// export const tribePointAwards = pgTable(
//   "tribe_point_awards",
//   {
//     id: serial("id"),
//     tribeId: integer('tribe_id').references(()=>tribe.id),
//     userId: integer('user_id').references(()=>users.userId),
//     points: integer('points').default(1),
//     collectibleId: integer('collectible_id').references(()=>collectibles.collectibleId),
//     hash: varchar('hash',{length:255}),
//     remarks: varchar('remarks'),
//     activityType: tribePointAwardsActivityTypeEnum('activity_type').default(tribePointAwardsActivityType.DEFAULT),
//     createdAt: timestamp("created_at").defaultNow().notNull(),
//     updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       tribeIndex: index("tribe_point_awards_tribe_index").on(table.tribeId),
//       userId: index("tribe_point_awards_user_id").on(table.userId),
//       pointsPositive: sql`CHECK (${table.points} > 0)`
//     };
//   }
// );

// export const gateway = pgEnum("gateway", Object.values(PaymentGateway) as [string,...string[]]);

// export const orderStatus = pgEnum("order_status",Object.values(OrderStatus) as [string,...string[]])
// export const buyOrderType = pgEnum("order_type",Object.values(BuyOrderType)as [string,...string[]])

// export const buyCollectibles = pgTable(
//   "buy_collectibles",
//   {
//     buyId: serial("buy_id").unique(),
//     collectibleId: integer("collectible_id")
//       .notNull()
//       .references(() => collectibles.collectibleId),
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     price: integer("price").default(0),
//     orderQuantity: integer("order_quantity").default(0),
//     successQuantity: integer("success_quantity").default(0),
//     failedQuantity: integer("failed_quantity").default(0),
//     createdAt: timestamp("created_at").defaultNow(),
//     status: orderStatus("status").default(OrderStatus.PENDING),
//     hash: varchar("hash", { length: 255 }),
//     refId: integer("ref_id").references(() => buyCollectibles.buyId),
//     orderId: varchar("order_id", { length: 255 }).notNull(),
//     orderType: buyOrderType("order_type").default(BuyOrderType.DIRECT),
//     gateway: gateway("gateway").default(PaymentGateway.RAZORPAY),
//     remarks: varchar("remarks"),
//     updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
//     cuponId: integer('cupon_id').references(()=>cupon.id).default(null),
//     useragent: varchar('useragent'),
//     blockchainTxnId: integer('blockchain_txn_id').references(()=>blockchainTxns.id)
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.buyId] }),
//       buyCollectibleIdIndex: index("buy_collectible_id_index").on(
//         table.collectibleId
//       ),
//       buyCollectibleUserIdIndex: index("buy_collectible_user_id_index").on(
//         table.userId
//       ),
//       orderIdIndexBuyCollectibles: index("order_id_index_buy_collectibles").on(table.orderId),
//     };
//   }
// );

// export const ownedCollectibles = pgTable(
//   "owned_collectibles",
//   {
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     collectibleId: integer("collectible_id")
//       .notNull()
//       .references(() => collectibles.collectibleId),
//     quantity: integer("quantity").default(0),
//     createdAt: timestamp("created_at").defaultNow(),
//     showCase: boolean("showcase").default(false),
//     redemmed: boolean("redemmed").default(false),
//     updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.userId, table.collectibleId] }),
//       ownedCollectibleIdIndex: index("owned_collectible_id_index").on(
//         table.collectibleId
//       ),
//       ownedCollectibleUserIdIndex: index("owned_collectible_user_id_index").on(
//         table.userId
//       ),
//     };
//   }
// );

// // ************************** Post Section ***************************

// export const postTypeEnum = pgEnum("post_type",Object.values(postType)as [string,...string[]])
// export const postStatusEnum = pgEnum("post_status",Object.values(postStatus) as [string,...string[]])
// export const post = pgTable(
//   "post",
//   {
//     id: serial("id"),
//     title: varchar('title', {length: 100}),
//     postId: varchar("post_id", { length: 100 }).notNull(),
//     userId: integer("user_id").references(() => users.userId),
//     content: text("content"),
//     type: postTypeEnum('type').default(postType.DEFAULT),
//     image: jsonb("image").$type<string[]>(),
//     commentCount: integer("comment_count").default(0),
//     badgeAwardId: integer('badge_award_id').references(()=>tribeBadgeAwards.id),
//     likeCount: integer("like_count").default(0),
//     isDeleted: boolean("is_deleted").notNull().default(false),
//     status: postStatusEnum('status').default(postStatus.PUBLIC),
//     tags: jsonb("tags").$type<string[]>(),
//     createdAt: timestamp("created_at").defaultNow().notNull(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       postIndex: index("post_index").on(table.postId),
//     };
//   }
// );

// export const postcomment = pgTable(
//   "post_comments",
//   {
//     id: serial("id"),
//     commentId: varchar("comment_id", { length: 100 }).notNull(),
//     postId: integer("post_id").references(() => post.id, {
//       onDelete: "cascade",
//     }),
//     userId: integer("user_id").references(() => users.userId, {
//       onDelete: "cascade",
//     }),
//     content: text("content").notNull(),
//     createdAt: timestamp("created_at").defaultNow(),
//     parentId: integer("parent_id").references(() => postcomment.id),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       commentIndex: index("comment_index").on(table.commentId),
//       uniquePostCommentId: unique().on(
//         table.commentId,
//         table.postId,
//         table.userId
//       ),
//     };
//   }
// );

// export const postlike = pgTable(
//   "post_like",
//   {
//     like: boolean("like").notNull().default(true),
//     userId: integer("user_id").references(() => users.userId, {
//       onDelete: "cascade",
//     }),
//     postId: integer("post_id").references(() => post.id, {
//       onDelete: "cascade",
//     }),
//     reaction: postReactEnum('reaction').default(postReaction.LIKE),
//     createdAt: timestamp("createdAt").defaultNow()
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.userId, table.postId] }),
//     };
//   }
// );

// // ************************** MARKETPLACE ***************************
// // TODO: set appropriate indexes
// export const buyAssetReferenceTale = pgEnum("buy_asset_reference",Object.values(BuyAssetReference) as [string,...string[]]);
// export const resaleTypeEnums = pgEnum("resale_types",Object.values(ResaleTypes) as [string,...string[]]);
// export const auctionResaleStatus = pgEnum("resale_status",Object.values(ResaleStatus) as [string,...string[]]);
// // TODO add constraint in table that soldquantity cannot be greater than quantity to avoid concurrency issues
// export const resaleListings = pgTable("ticket_auction_listings",{
// id: serial("id"),
// buyId: integer("buy_id"),
// price: integer("price").notNull(),
// quantity: integer("quantity").notNull(),
// soldQuantity: integer("sold_quantity").default(0),
// sellType: resaleTypeEnums("sell_type").default(ResaleTypes.RESALE),
// status: auctionResaleStatus("status").default(ResaleStatus.ONGOING),
// refTable: buyAssetReferenceTale("ref_table").notNull(),
// createdAt: timestamp("created_at").defaultNow(),
// endAt: timestamp("end_at"),
// updatedAt: timestamp("updated_at",{mode:"string"})
//     .notNull()
//     .default(sql`(CURRENT_TIMESTAMP)`)
//     .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
// },(table)=>({
// pk: primaryKey({columns:[table.id]})
// }));

// export const auctionOrderStatus = pgEnum("auction_order_status", Object.values(AuctionOrderStatus) as [string,...string[]]);
// export const auctionOrdersBook = pgTable("auction_orders_book",{
// id: serial("id"),
// buyId: integer("buyid").references(()=>users.userId),
// userId: integer("user_id").references(()=>users.userId),
// price: integer("price"),
// refTable: buyAssetReferenceTale("ref_table").notNull(),
// status: auctionOrderStatus("status").default(AuctionOrderStatus.BID),
// createdAt: timestamp("created_at").defaultNow()
// },(table)=>({
// pk: primaryKey({columns:[table.id]})
// }));

// export const resaleMap = pgTable("resale_map",{
// id: serial("id"),
// parent: integer("parent"),
// resaleId: integer("resale_id"),
// buyId: integer("buy_id"),
// refTable: buyAssetReferenceTale("ref_table").notNull(),
// },(table)=>({
// pk: primaryKey({columns:[table.id]})
// }));

// // ************************** EVENTS SECTION ***************************

// export const eventStatus = pgEnum("status", [
//   EventStatus.PRIVATE,
//   EventStatus.PUBLIC,
// ]);
// export const eventState = pgEnum("event_state", Object.values(EventState) as [string,...string[]]);
// export const ticketState = pgEnum("ticket_state", Object.values(TicketState) as [string,...string[]]);
// export const eventTypeEnum = pgEnum("event_type", Object.values(eventType) as [string,...string[]]);
// export const passKeyState = pgEnum("passkey_state", ["deleted", "active"]);
// export const passKeyRole = pgEnum(
//   "passkey_role",
//   Object.values(Passkey_roles) as [string, ...string[]]
// );

// export const superEvent = pgTable("super_event",{
//   id: serial("id"),
//   superEventId: uuid('super_event_id').notNull().default(sql`gen_random_uuid()`),
//   userId: integer('user_id').references(()=>users.userId),
//   name: varchar("name", { length: 255 }),
//   description: varchar('description', {length: 5000}),
//   startDate: timestamp('start_date'),
//   endDate: timestamp('end_date'),
//   status: eventStatus('status').default(EventStatus.PUBLIC),
//   images: jsonb("images").$type<{
//     [imageRatio.FIVEFOUR]:string[],
//     [imageRatio.SIXTEENNINE]:string[]
//   }>(),
//   type: eventTypeEnum('type').default(eventType.OTHER),
//   metaData: jsonb('meta_data').$type<{
//     imagesGallery?: {
//       [imageRatio.FIVEFOUR]:string[],
//       [imageRatio.SIXTEENNINE]:string[]
//     },
//   }>(),
//   },(table)=>({
//   pk: primaryKey({columns:[table.id]})
//   }));

//   export const events = pgTable(
//     "events",
//     {
//       id: serial("id").unique(),
//       eventId: varchar("event_id", { length: 100 }).notNull(),
//       publicId: uuid("public_id").default(sql`gen_random_uuid()`),
//       name: varchar("name", { length: 255 }),
//       startDate: timestamp("start_date").notNull(),
//       endDate: timestamp("end_date").notNull(),
//       venue: varchar("venue", { length: 255 }),
//       location: varchar("location", { length: 255 }),
//       images: jsonb("images").$type<{
//         [imageRatio.FIVEFOUR]:string[],
//         [imageRatio.SIXTEENNINE]:string[]
//       }>(),
//       type: eventTypeEnum('type').default(eventType.OTHER),
//       description: varchar("description", { length: 5000 }),
//       tags: jsonb("tags").$type<string[]>(),
//       promote: boolean('promote').default(false),
//       eventData: jsonb("event_data").$type<{
//         dayNumber?: number;
//         dateTime?: Date;
//         endTime?: Date;
//         Description?: string;
//         ArtistDetails?: {
//           name: string;
//           username: string;
//           duration: string;
//           venue: string;
//           Description: string;
//           avatar: string;
//           startTime: string;
//         }[];
//       }>(),
//       metaData: jsonb('meta_data').$type<{
//         imagesGallery?: {
//           [imageRatio.FIVEFOUR]:string[],
//           [imageRatio.SIXTEENNINE]:string[]
//         },
//         style:{
//           color?: string;
//           font: themeFont;
//           background?:{
//             image?:string,
//             solid?:string,
//             gradient?:string[]
//           },
//         },
//         spotify?:{
//           playlists?:spotifyPlaylistData[],
//           tracks?:spotifyTrackData[],
//           showTracks?: boolean
//         },
//         showEndDate:boolean,
//         permission:{
//           isPhoneRequired: boolean
//         }
//         }>().default({style:{
//           font: themeFont.MULISH,
//           color: "#af8cff",
//         },
//         showEndDate:false,
//         permission:{
//           isPhoneRequired: false
//         }
//       }),
//       userId: integer("user_id")
//         .notNull()
//         .references(() => users.userId),
//       createdAt: timestamp("created_at").defaultNow(),
//       commentCount: integer("comment_count").default(0),
//       likeCount: integer("like_count").default(0),
//       userEngagementCount: integer("user_engagement_count").default(0),
//       status: eventStatus("status").default(EventStatus.PUBLIC),
//       convenienceFee: integer('convenience_fee').default(10),
//       state: eventState("state").default("active"),
//       termsAndConditions: varchar('terms_and_conditions',{length: 10000}),
//       superEventId: integer('super_event_id').references(()=>superEvent.id)
//     },
//     (table) => {
//       return {
//         pk: primaryKey({ columns: [table.id] }),
//         userIdEventIndex: index("user_id_event_index").on(table.userId),
//       };
//     }
//   );

// export const eventAttendeeId = pgTable(
//   "event_attendee_id",
//   {
//     id: serial('id').unique(),
//     public_id: uuid('public_id').default(sql`gen_random_uuid()`),
//     userId: integer('user_id').references(()=>users.userId),
//     specialDropClaimed: jsonb('special_drop_claimed').$type<string[]>().default([]),
//     eventId: integer("event_id")
//       .notNull()
//       .references(() => events.id),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       uniqueUserEventId: unique().on(table.userId, table.eventId),
//     };
//   }
// );

// export const eventUsersConnection = pgTable(
//   "event_users_connection",
//   {
//     id: serial('id').unique(),
//     scanningUserId: integer("scanning_user_id")
//       .notNull()
//       .references(() => users.userId),
//     scannedUserId: integer("scanned_user_id")
//       .notNull()
//       .references(() => users.userId),
//     eventId: integer("event_id")
//       .notNull()
//       .references(() => events.id),
//     createdAt: timestamp("created_at").defaultNow(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       uniqueScannedScanningId: unique().on(table.scanningUserId, table.scannedUserId, table.eventId),
//     };
//   }
// );

// export const artistState = pgEnum("artist_state", Object.values(ArtistState) as [string,...string[]]);
// export const eventArtists = pgTable(
//   "event_artist",
//   {
//     id: serial('id'),
//     artistId: uuid('artist_id').notNull().default(sql`gen_random_uuid()`),
//     // userId: integer("user_id")
//     //   .notNull()
//     //   .references(() => users.userId),
//     eventId: integer("event_id")
//       .notNull()
//       .references(() => events.id),
//     startTime: timestamp("start_time"),
//     socials: jsonb("socials").$type<artistsSocials>(),
//     endTime: timestamp("end_time"),
//     description: text('description'),
//     name: varchar("name", { length: 255 }),
//     avatar: varchar('avatar'),
//     state: artistState("state").default("active"),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       userIdIndex: index('user_id_event_artist'),
//       eventIdIndex: index('event_id_event_artist'),
//     };
//   }
// );

// export const promotionItems = pgEnum("promotion_items", Object.values(promoteItems) as [string,...string[]]);
// export const promotionStatus = pgEnum("promotion_status",Object.values(promoteStatus) as [string,...string[]]);
// // TODO: we can later add remarks
// export const promotion = pgTable("promotion",{
//   id: serial("id").unique(),
//   resource: promotionItems("resource"),
//   resourceId: integer("resource_id"),
//   status: promotionStatus("status").default(promoteStatus.ACTIVE),
//   createdAt: timestamp("created_at").defaultNow(),
//   activeTill: timestamp("active_till")
// });

// export const userPasskey = pgTable(
//   "passkey",
//   {
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     eventId: integer("event_id")
//       .notNull()
//       .references(() => events.id),
//     passKey: varchar("passkey"),
//     role: passKeyRole("role"),
//     otp: varchar("otp"),
//     state: passKeyState("state").default("active"),
//     createdAt: timestamp("created_at").defaultNow(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.userId, table.eventId] }),
//       uniqueUserIdandEventId: unique().on(table.userId, table.eventId),
//     };
//   }
// );

// export const eventComments = pgTable(
//   "event_comments",
//   {
//     id: serial("id"),
//     commentId: varchar("comment_id", { length: 100 }).notNull(),
//     eventId: integer("event_id").references(() => events.id, {
//       onDelete: "cascade",
//     }),
//     userId: integer("user_id").references(() => users.userId, {
//       onDelete: "cascade",
//     }),
//     content: text("content").notNull(),
//     createdAt: timestamp("created_at").defaultNow(),
//     parentId: integer("parent_id").references(() => eventComments.id),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.id] }),
//       eventIdIndexComment: index("event_id_index_comment").on(table.commentId),
//       uniqueEventCommentId: unique().on(
//         table.commentId,
//         table.eventId,
//         table.userId
//       ),
//     };
//   }
// );

// export const eventLikes = pgTable(
//   "event_likes",
//   {
//     like: boolean("like").notNull().default(true),
//     userId: integer("user_id").references(() => users.userId, {
//       onDelete: "cascade",
//     }),
//     eventId: integer("event_id").references(() => events.id, {
//       onDelete: "cascade",
//     }),
//     reaction: postReactEnum('reaction').default(postReaction.LIKE),
//     createdAt: timestamp("created_at").defaultNow(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.userId, table.eventId] }),
//       eventIdIndexLike: index("event_id_index_like").on(table.eventId),
//     };
//   }
// );

// export const tickets = pgTable(
//   "tickets",
//   {
//     ticketId: serial("ticket_id").unique().notNull(),
//     eventId: integer("event_id")
//       .notNull()
//       .references(() => events.id),
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     name: varchar("name", { length: 255 }),
//     description: varchar("description", { length: 5000 }),
//     image: varchar("image", { length: 500 }),
//     issueQty: integer("issue_qty").default(0),
//     rsvp: boolean("rsvp").default(false),
//     price: integer("price").default(0),
//     resaleRoyalty: integer("resale_royalty").default(0),
//     resalable: boolean("resalable").default(false),
//     transferable: boolean("transferable").default(false),
//     redeemable: boolean("redeemable").default(false),
//     createdAt: timestamp("created_at").defaultNow(),
//     hash: varchar("hash", { length: 255 }),
//     cId: varchar("c_id", { length: 255 }),
//     maxQty: integer("max_qty").default(1),
//     availableQty: integer("available_qty").default(0),
//     tId: varchar("t_id", { length: 100 }).default(null),
//     state: ticketState("state").default("active"),
//     rules: text('rules'),
//     flexPrice: boolean("flex_price").default(false),
//     approveOnly: boolean("approve_only").default(false),
//     physicalRedeemable: boolean("physical_redeemable").default(false),
//     metaData: jsonb('meta_data').$type<{
//       addons:{
//         purchaseForm: boolean
//       }
//     }>().default({
//       addons:{
//         purchaseForm: false
//       }
//     })
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.ticketId] }),
//     };
//   }
// );

// export const buyTickets = pgTable(
//   "buy_tickets",
//   {
//     buyId: serial("buy_id").unique(),
//     ticketId: integer("ticket_id").references(() => tickets.ticketId),
//     userId: integer("user_id").references(() => users.userId),
//     price: integer("price").default(0),
//     orderQuantity: integer("order_quantity").default(0),
//     successQuantity: integer("success_quantity").default(0),
//     failedQuantity: integer("failed_quantity").default(0),
//     createdAt: timestamp("created_at").defaultNow(),
//     status: orderStatus("status").default(OrderStatus.PENDING),
//     hash: varchar("hash", { length: 255 }),
//     refId: integer("ref_id").references(() => buyCollectibles.buyId),
//     orderId: varchar("order_id", { length: 255 }).notNull(),
//     gateway: gateway("gateway").default(PaymentGateway.RAZORPAY),
//     remarks: varchar("remarks"),
//     orderType: buyOrderType("order_type").default(BuyOrderType.DIRECT),
//     updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
//     cuponId: integer('cupon_id').references(()=>cupon.id).default(null),
//     useragent: varchar('useragent'),
//     blockchainTxnId: integer('blockchain_txn_id').references(()=>blockchainTxns.id)
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.buyId] }),
//       ticketIdIndexBuy: index("ticket_id_index_buy").on(table.ticketId),
//       orderIdIndexBuyTickets: index("order_id_index_buy_tickets").on(table.orderId),
//       userIdIndexBuyTickets: index("user_id_index_buy_tickets").on(
//         table.userId
//       ),
//     };
//   }
// );

// export const ownedTickets = pgTable(
//   "owned_tickets",
//   {
//     userId: integer("user_id")
//       .notNull()
//       .references(() => users.userId),
//     ticketId: integer("ticket_id")
//       .notNull()
//       .references(() => tickets.ticketId),
//     quantity: integer("quantity").default(0),
//     createdAt: timestamp("created_at").defaultNow(),
//     showCase: boolean("showcase").default(false),
//     redemmed: boolean("redemmed").default(false),
//     updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.userId, table.ticketId] }),
//     };
//   }
// );

// export const ticketsToCollectibles = pgTable(
//   "tickets_to_collectibles",
//   {
//     ticketId: integer("ticket_id")
//       .notNull()
//       .references(() => tickets.ticketId),
//     collectibleId: integer("collectible_id")
//       .notNull()
//       .references(() => collectibles.collectibleId),
//       quantity: integer("quantity").default(1),
//     createdAt: timestamp("created_at").defaultNow(),
//   },
//   (table) => {
//     return {
//       pk: primaryKey({ columns: [table.ticketId, table.collectibleId] }),
//     };
//   }
// );

// const enumCuponTypes = pgEnum('cupon_type',Object.values(CuponType) as [string,...string[]]);
// const discountCurrencyTypes = pgEnum('discount_currency_type',Object.values(DiscountCurrency) as [string,...string[]]);

// // TODO: make code index
// export const cupon = pgTable("cupon",{
//   id: serial('id'),
//   code: varchar('code',{length:255}),
//   type: enumCuponTypes('type'),
//   valid_from: timestamp('valid_from'),
//   valid_until: timestamp('valid_until'),
//   newUser: boolean('new_user').default(false),
//   quantity: integer('quantity'),
//   maxAvail: integer('max_avail'),
//   createdAt: timestamp('created_at').defaultNow(),
// },
// (table)=>({
//   pk: primaryKey({ columns: [table.id] }),
//   uniqueCode: unique('unique_code').on(table.code)
// }));

// export const discountCupon = pgTable("discount_cupon",{
//   id: serial('id'),
//   codeId: integer('code_id').references(()=>cupon.id),
//   currency: discountCurrencyTypes('currency'),
//   amount: integer('amount'),
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//   };
// }
// );

// export const enumCuponResources = pgEnum('enum_cupon_resources',Object.values(CuponResources) as [string,...string[]]);

// export const cuponResource = pgTable("cupon_resource",{
//   id: serial('id'),
//   cuponId: integer('cupon_id').references(()=>cupon.id),
//   resource: enumCuponResources('resource'),
//   resourceId: integer('resource_id')
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//   };
// }
// );

// // suggestion: in future we might need to redeem same cupon to multiple resources or specify a redeem quantity to each resource in that we cannot satisfy userId and cuponId unique constraint
// export const cuponRedeem = pgTable("cupon_redeem",{
//   cuponId: integer('cupon_id').references(()=>cupon.id),
//   userId: integer('user_id').references(()=>users.userId),
//   quantity: integer('quantity')
// },
// (table)=>({
//   pk: primaryKey({ columns: [table.cuponId,table.userId] }),
//   checkQuantity: check('check_quantity', gt(table.quantity,0))
// })
// );

// export const redeemTables = pgEnum('redeem_resource',Object.values(RedeemTable) as [string,...string[]]);

// export const redeem = pgTable('redeem',{
//   id: serial('id'),
//   userId: integer('user_id').references(()=>users.userId),
//   resourceId: integer('resource_id'),
//   resource: redeemTables('resource'),
//   quantity: integer('quantity'),  
//   createdAt: timestamp('created_at').defaultNow()
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     resourceIndex: index("redeem_resource_index").on(table.resource),
//     resourceIdIndex: index("redeem_resource_id_index").on(table.resourceId),
//   };
// }
// );

// export const eventUsersConnect = pgTable('event_users_connect',{
//   id: serial('id'),
//   connectingId: integer('connecting_id').references(()=>users.userId),
//   connectedId: integer('connected_id').references(()=>users.userId),
//   eventId: integer('event_id').references(()=>events.id),
//   createdAt: timestamp('created_at').defaultNow()
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     uniqueConnection: unique().on(
//       table.connectedId,
//       table.eventId
//     ),
//   };
// }
// );

// // ************* Tribe *************
// export const tribeTypesEnum = pgEnum('tribe_types',Object.values(tribeTypes) as [string,...string[]]);
// export const tribeStateEnum = pgEnum('tribe_state',Object.values(tribeState) as [string,...string[]]);
// export const tribeStatusEnum = pgEnum('tribe_status',Object.values(tribeStatus) as [string,...string[]]);

// export const tribe = pgTable('tribe',{
//   id: serial('id'),
//   tribeId: uuid('tribe_id').notNull().default(sql`gen_random_uuid()`),
//   name: varchar('name',{length: 255}),
//   description: varchar('description',{length:255}),
//   type: tribeTypesEnum('type').default(tribeTypes.GENERAL),
//   userId: integer('user_id').references(()=>users.userId),
//   image: varchar('image',{length: 255}),
//   super: boolean('super').default(false),
//   loyalityPoints: boolean('loyality_points').default(true),
//   joinApproval: boolean('join_approval').default(false),
//   tags: jsonb("tags").$type<string[]>(),
//   // parents: jsonb("parents").$type<number[]>(),
//   state: tribeStateEnum('state').default(tribeState.ACTIVE),
//   status: tribeStatusEnum('status').default(tribeStatus.PUBLIC),
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     ownerIdIndex: index("tribe_owned_id_index").on(table.userId)
//   };
// }
// );

// export const tribeMemberRoleEnum = pgEnum('tribe_members_role',Object.values(tribeMemberRole) as [string,...string[]]);
// export const tribeMemberStatusEnum = pgEnum('tribe_member_status',Object.values(tribeMemberStatus) as [string,...string[]]);

// export const tribeMembers = pgTable('tribe_members',{
//   id: serial('id'),
//   tribeId: integer('tribe_id').references(()=>tribe.id),
//   userId: integer('user_id').references(()=>users.userId),
//   status: tribeMemberStatusEnum('status').default(tribeMemberStatus.ACTIVE),
//   role: tribeMemberRoleEnum('role').default(tribeMemberRole.MEMBER),
//   points: integer('points').default(0),
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     userIdIndex: index("tribe_members_user_id_index").on(table.userId)
//   };
// }
// );

// export const tribeJoinRulesStatusEnum = pgEnum('tribe_join_rules_status',Object.values(tribeJoinRulesStatus) as [string,...string[]]);
// export const tribeJoinRulesAssetTypeEnum = pgEnum('tribe_join_rules_asset_type',Object.values(tribeJoinRulesAssetType) as [string,...string[]]);

// export const tribeJoinRules = pgTable('tribe_join_rules',{
//   id: serial('id'),
//   tribeId: integer('tribe_id').references(()=>tribe.id),
//   assetId: integer('asset_id').notNull(),
//   status: tribeJoinRulesStatusEnum('status').default(tribeJoinRulesStatus.ACTIVE),
//   assetType: tribeJoinRulesAssetTypeEnum('asset_type').default(tribeJoinRulesAssetType.COLLECTIBLES),
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     userIdIndex: index("tribe_join_rules_asset_id_asset_type").on(table.assetId,table.assetType)
//   };
// }
// );

// // create a trigger to automatically join a user in tribe whens status is changed
// export const tribeWaitListEnum = pgEnum('tribe_wait_list_enum',Object.values(tribeWaitListOptions) as [string,...string[]]);
// export const tribeWaitList = pgTable('tribe_wait_list',{
//   id: serial('id'),
//   tribeId: integer('tribe_id').references(()=>tribe.id),
//   userId: integer('user_id').references(()=>users.userId),
//   status: varchar('status').default(tribeWaitListOptions.PENDING),
//   message: varchar('message'),
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`),
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     userIdIndex: index("tribe_wait_list_user_id_index").on(table.userId)
//   };
// }
// );

// // export const tribePointRedeemption = pgTable('tribe_point_redeemption',{
// //   id: serial('id'),
// //   tribeId: integer('tribe_id').references(()=>tribe.id),
// //   userId: integer('user_id').references(()=>users.userId),
// //   pointsRedeemed: integer('points_redeemed'),
// //   reward: varchar('reward'),
// //   createdAt: timestamp('created_at').defaultNow()
// // },
// // (table) => {
// //   return {
// //     pk: primaryKey({ columns: [table.id] }),
// //     userIdIndex: index("tribe_point_redeemption_user_id_index").on(table.userId),
// //     tribeIdIndex: index("tribe_point_redeemption_tribe_id_index").on(table.tribeId)
// //   };
// // }
// // );

// export const tribeActionEnum = pgEnum('tribe_action_enum',Object.values(tribeActions) as [string,...string[]]);
// export const tribeActionActAsEnum = pgEnum('tribe_action_act_as',Object.values(tribeActionActAs) as [string,...string[]]);
// export const tribeActionStateEnum = pgEnum('tribe_action_state',Object.values(tribeActionState) as [string,...string[]]);

// export const tribeAction = pgTable('tribe_action',{
//   id: serial('id'),
//   tribeId: integer('tribe_id').references(()=>tribe.id),
//   actionType: tribeActionEnum('action_type'),
//   actionId: integer('action_id'),
//   actAs: tribeActionActAsEnum('act_as').default(tribeActionActAs.DEFAULT),
//   state: tribeActionStateEnum('state').default(tribeActionState.ACTIVE),
//   createdAt: timestamp('created_at').defaultNow()
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     tribeIdIndex: index("tribe_action_tribe_id_index").on(table.tribeId),
//   };
// }
// );

// // export const tribeEdges = pgTable('tribe_edges',{
// //   id: serial('id'),
// //   parent: integer('parent').references(()=>tribe.id),
// //   child: integer('child').references(()=>tribe.id),
// // },
// // (table) => {
// //   return {
// //     pk: primaryKey({ columns: [table.id] })
// //   };
// // }
// // );

// // // TODO: either we can give numbers to reactions or we can create enums
// // export const postReactions = pgTable('post_reactions',{
// //   id: serial('id'),
// //   postId: integer('post_id').references(()=>post.id),
// //   userId: integer('user_id').references(()=>users.userId),
// //   tribeId: integer('tribe_id').references(()=>tribe.id),
// //   type: integer('type').default(1),
// //   createdAt: timestamp('created_at').defaultNow()
// // },
// // (table) => {
// //   return {
// //     pk: primaryKey({ columns: [table.id] }),
// //     userIdIndex: index("tribe_members_user_id_index").on(table.userId)
// //   };
// // }
// // );

// export const questionActivityTypeEnum = pgEnum('question_activity_type',Object.values(questionActivityType) as [string,...string[]]);
// export const questionActivityStateEnum = pgEnum('question_activity_state_type',Object.values(questionActivityState) as [string,...string[]]);
// export const questionActivity = pgTable('question_activity',{
//   id: serial('id'),
//   postId:integer('post_id').references(()=>post.id),
//   ticketId: integer('ticket_id').references(()=>tickets.ticketId),
//   title: varchar('title',{length:255}),
//   description: varchar('description',{length:2500}),
//   questionActivityId:uuid('question_activity_id').notNull().default(sql`gen_random_uuid()`),
//   type: questionActivityTypeEnum('type').notNull(),
//   userId: integer('user_id').references(()=>users.userId),
//   createdAt: timestamp('created_at').defaultNow(),
//   state: questionActivityStateEnum('state').default(questionActivityState.ACTIVE)
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     userIdIndex: index("quiz_user_id_index").on(table.userId)
//   };
// }
// );

// export const questionTypeEnum = pgEnum('question_type',Object.values(questionType) as [string,...string[]]);
// export const questionStateEnum = pgEnum('question_state',Object.values(questionState) as [string,...string[]]);
// export const question = pgTable('question',{
//   id: serial('id'),
//   questionId:uuid('question_id').notNull().default(sql`gen_random_uuid()`),
//   content: text('content'),
//   type: questionTypeEnum('type'),
//   activityId: integer('activity_id').references(()=>questionActivity.id),
//   isRequired: boolean('is_required').default(false),
//   createdAt: timestamp('created_at').defaultNow(),
//   state: questionStateEnum('state').default(questionState.ACTIVE)
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     userIdIndex: index("poll_activity_id_index").on(table.activityId)
//   };
// }
// );

// export const questionOptionsContentTypeEnum = pgEnum('question_options_content_type',Object.values(questionOptionsContentType) as [string,...string[]]);
// export const questionOptionsStateEnum = pgEnum('question_options_content_type',Object.values(questionOptionsState) as [string,...string[]]);

// export const questionOptions = pgTable('question_options',{
//   id: serial('id'),
//   questionId: integer('question_id').references(()=>question.id),
//   questionOptionsId: uuid('question_options_id').notNull().default(sql`gen_random_uuid()`),
//   contentType:questionOptionsContentTypeEnum('content_type').default(questionOptionsContentType.TEXT),
//   content: text('content'),
//   isAnswer: boolean('is_answer').default(false),
//   createdAt: timestamp('created_at').defaultNow(),
//   state: questionOptionsStateEnum('state').default(questionOptionsState.ACTIVE)
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     questionIdIndex: index("question_options_poll_id_index").on(table.questionId)
//   };
// }
// );

// export const questionAnswers = pgTable('question_answers',{
//   id: serial('id'),
//   userId: integer('user_id').references(()=>users.userId),
//   questionOptionId: integer('question_option_id').references(()=>questionOptions.id),
//   content: varchar('content',{length:1200}),
//   questionId: integer('question_id').references(()=>question.id),
//   createdAt: timestamp('created_at').defaultNow()
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//     userIdIndex: index("question_answers_user_id_index").on(table.userId),
//     questionOptionIdIndex: index("question_answers_question_option_id_index").on(table.questionOptionId),
//     questionIdIndex: index("question_answers_question_id_index").on(table.questionId),
//   };
// }
// );


// export const carbonCreditTxns = pgTable('carbon_credit_txn',{
//   email: varchar('email',{length:255}),
//   hash: varchar('hash',{length: 255}),
//   isAwarded: boolean('is_awarded').default(false)
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.email] }),
//   };
// }
// );


// export const blockchainTypeEnum = pgEnum('blockchain_type',Object.values(blockchainType) as [string,...string[]]);

// export const blockchainTxnTypeEnum = pgEnum('txn_type',Object.values(blockchainTxnType) as [string,...string[]]);

// export const blockchainTxns = pgTable('blockchain_txns',{
//   id: serial('id'),
//   fromAddress: varchar('from_address').notNull(),
//   toAddress: varchar('to_address').notNull(),
//   quantity: integer('quantity').notNull(),
//   txHash: varchar('tx_hash',{length:255}).notNull(),
//   collectibleId: integer('collectible_id').notNull().references(()=>collectibles.collectibleId),
//   txnType: blockchainTxnTypeEnum('txn_type').notNull(),
//   blockchainId: integer('blockchain_id').references(()=>blockchain.id).notNull(),
//   createdAt: timestamp('created_at').defaultNow(),
//   updatedAt: timestamp("updated_at",{mode:"string"})
//       .notNull()
//       .default(sql`(CURRENT_TIMESTAMP)`)
//       .$onUpdate(() => sql`(CURRENT_TIMESTAMP)`)
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] }),
//   };
// }
// );

// export const blockchain = pgTable('blockchain',{
//   id: serial('id'),
//   name: varchar('name',{length: 255}).notNull(),
//   description: varchar('description',{length: 255}),
//   explorerUrl: varchar('explorer_url',{length: 255}),
//   type: blockchainTypeEnum('type').notNull(),
//   chainId: varchar('chain_id',{length: 255})
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] })
//   };
// }
// );

// export const wallet = pgTable('wallet',{
//   id: serial('id'),
//   userId: integer('user_id').notNull().references(()=>users.userId),
//   blockchainId: integer('blockchain_id').references(()=>blockchain.id),
//   type: blockchainTypeEnum('type').notNull(),
//   address: varchar('address').notNull(),
//   privateKey: varchar('private_key').notNull(),
//   authTag: varchar('auth_tag',{length: 255}).notNull(),
//   iv: varchar('iv',{length: 32}).notNull(),
//   createdAt: timestamp('created_at').defaultNow()
// },
// (table) => {
//   return {
//     pk: primaryKey({ columns: [table.id] })
//   };
// }
// );

// // ************* RELATIONS *************

// export const guestListRelations = relations(guestList,({one})=>({
//   ticket: one(tickets,{fields: [guestList.ticketId],
//     references: [tickets.ticketId],
//     relationName: "eventGuestRelation"})
// }))

// export const userRelations = relations(users, ({ many }) => ({
//   posts: many(post),
//   collectibles: many(collectibles, { relationName: "createdCollectibles" }),
//   collections: many(collection, { relationName: "createdCollections" }),
//   followers: many(usersFollowers, {
//     relationName: "followers",
//   }),
//   following: many(usersFollowers, {
//     relationName: "following",
//   }),
//   ownedCollectibles: many(ownedCollectibles, {
//     relationName: "ownedCollectibles",
//   }),
//   // eventArtist: many(eventArtists,{relationName: "eventArtistToArtist"}),
//   events: many(events, { relationName: "createdEvents" }),
//   tickets: many(tickets, { relationName: "createdTickets" }),
//   ownedTickets: many(ownedTickets, { relationName: "ownedTickets" }),
//   redeem: many(redeem,{relationName: 'usersToRedeem'}),
//   roleChange: many(roleChangeApplication,{relationName: 'usersToRoleChangeApplication'})
// }));

// export const usersToRedeem = relations(redeem, ({one})=>({
//   user: one(users,{
//     fields: [redeem.userId],
//     references: [users.userId],
//     relationName: 'usersToRedeem'
//   })
// }))

// export const roleChangeApplicationRelations = relations(roleChangeApplication, ({one})=>({
//   user: one(users,{
//     fields: [roleChangeApplication.userId],
//     references: [users.userId],
//     relationName: 'usersToRoleChangeApplication'
//   })
// }))

// export const usersToFollowerRelations = relations(
//   usersFollowers,
//   ({ one }) => ({
//     follower: one(users, {
//       fields: [usersFollowers.followerId],
//       references: [users.userId],
//       relationName: "following",
//     }),
//     following: one(users, {
//       fields: [usersFollowers.followingId],
//       references: [users.userId],
//       relationName: "followers",
//     }),
//   })
// );

// export const collectionRelations = relations(collection, ({ one, many }) => ({
//   user: one(users, {
//     fields: [collection.userId],
//     references: [users.userId],
//     relationName: "createdCollections",
//   }),
//   collectible: many(collectibles, {
//     relationName: "collectionCollectibles",
//   }),
// }));

// export const collectiblesRelations = relations(
//   collectibles,
//   ({ one, many }) => ({
//     collection: one(collection, {
//       fields: [collectibles.collectionId],
//       references: [collection.collectionId],
//       relationName: "collectionCollectibles",
//     }),
//     owner: one(users, {
//       fields: [collectibles.userId],
//       references: [users.userId],
//       relationName: "createdCollectibles",
//     }),
//     tickets: many(ticketsToCollectibles, {
//       relationName: "collectibleToTickets",
//     }),
//     boughtBy: many(ownedCollectibles, {
//       relationName: "ownedCollectibleToCollectible",
//     }),
//   })
// );

// export const buyCollectiblesRelations = relations(
//   buyCollectibles,
//   ({ one, many }) => ({
//     collectible: one(collectibles, {
//       fields: [buyCollectibles.collectibleId],
//       references: [collectibles.collectibleId],
//     }),
//     user: one(users, {
//       fields: [buyCollectibles.userId],
//       references: [users.userId],
//     }),
//     parent: one(buyCollectibles, {
//       fields: [buyCollectibles.refId],
//       references: [buyCollectibles.buyId],
//       relationName: "parentChild",
//     }),
//     children: many(buyCollectibles, {
//       relationName: "parentChild",
//     }),
//   })
// );

// export const ownedCollectiblesRelations = relations(
//   ownedCollectibles,
//   ({ one }) => ({
//     collectible: one(collectibles, {
//       fields: [ownedCollectibles.collectibleId],
//       references: [collectibles.collectibleId],
//       relationName: "ownedCollectibleToCollectible",
//     }),
//     user: one(users, {
//       fields: [ownedCollectibles.userId],
//       references: [users.userId],
//       relationName: "ownedCollectibles",
//     }),
//   })
// );

// export const postRelations = relations(post, ({ many, one }) => ({
//   likes: many(postlike),
//   comments: many(postcomment),
//   user: one(users, {
//     fields: [post.userId],
//     references: [users.userId],
//   }),
// }));

// export const commentPostRelations = relations(postcomment, ({ one, many }) => ({
//   post: one(post, {
//     fields: [postcomment.postId],
//     references: [post.id],
//   }),
//   user: one(users, {
//     fields: [postcomment.userId],
//     references: [users.userId],
//   }),
//   parent: one(postcomment, {
//     fields: [postcomment.parentId],
//     references: [postcomment.id],
//     relationName: "parentChild",
//   }),
//   children: many(postcomment, {
//     relationName: "parentChild",
//   }),
// }));

// export const postlikeRelations = relations(postlike, ({ one }) => ({
//   post: one(post, {
//     fields: [postlike.postId],
//     references: [post.id],
//   }),
//   user: one(users, {
//     fields: [postlike.userId],
//     references: [users.userId],
//   }),
// }));

// export const eventArtistsRelations = relations(eventArtists,({one})=>({
//   // artist: one(users,{
//   //   fields: [eventArtists.userId],
//   //   references: [users.userId],
//   //   relationName: "eventArtistToArtist"
//   // }),
//   event: one(events,{
//     fields: [eventArtists.eventId],
//     references: [events.id],
//     relationName: "eventArtistToEvent"
//   }),
// }))

// export const eventRelations = relations(events, ({ one, many }) => ({
//   likes: many(eventLikes),
//   comments: many(eventComments),
//   promote: many(promotion),
//   artists: many(eventArtists,{relationName:"eventArtistToEvent"}),
//   superEvent: one(superEvent,{
//     fields: [events.superEventId],
//     references: [superEvent.id],
//     relationName: "parentsuperevent",
//   }),
//   user: one(users, {
//     fields: [events.userId],
//     references: [users.userId],
//     relationName: "createdEvents",
//   }),
//   tickets: many(tickets, { relationName: "eventTickets" })
// }));

// export const superEventRelation = relations(superEvent,({many})=> ({
//   events: many(events,{relationName: "parentsuperevent"})
// }))

// export const promotionRelation = relations(promotion,({one})=> ({
//   event: one(events,{
//     fields: [promotion.resourceId],
//     references: [events.id],
//     relationName: "eventPromotion",
//   })
// }))

// export const ticketsRelations = relations(tickets, ({ one, many }) => ({
//   event: one(events, {
//     fields: [tickets.eventId],
//     references: [events.id],
//     relationName: "eventTickets",
//   }),
//   creator: one(users, {
//     fields: [tickets.userId],
//     references: [users.userId],
//     relationName: "createdTickets",
//   }),
//   collectibles: many(ticketsToCollectibles, {
//     relationName: "ticketsToCollectibles",
//   }),
//   boughtBy: many(ownedTickets, { relationName: "ticketParentChild" }),
//   guests: many(guestList, {relationName: "eventGuestRelation"}),
//   purchaseForm: one(questionActivity,{
//     fields: [tickets.ticketId],
//     references: [questionActivity.ticketId],
//     relationName: "ticketPurchaseForm"
//   })
// }));

// export const ticketsToCollectiblesRelations = relations(
//   ticketsToCollectibles,
//   ({ one }) => ({
//     ticket: one(tickets, {
//       fields: [ticketsToCollectibles.ticketId],
//       references: [tickets.ticketId],
//       relationName: "ticketsToCollectibles",
//     }),
//     collectible: one(collectibles, {
//       fields: [ticketsToCollectibles.collectibleId],
//       references: [collectibles.collectibleId],
//       relationName: "collectibleToTickets",
//     }),
//   })
// );

// export const eventCommentsRelations = relations(
//   eventComments,
//   ({ one, many }) => ({
//     event: one(events, {
//       fields: [eventComments.eventId],
//       references: [events.id],
//     }),
//     user: one(users, {
//       fields: [eventComments.userId],
//       references: [users.userId],
//     }),
//     parent: one(eventComments, {
//       fields: [eventComments.parentId],
//       references: [eventComments.id],
//       relationName: "parentChild",
//     }),
//     children: many(eventComments, {
//       relationName: "parentChild",
//     }),
//   })
// );

// export const eventLikesRelations = relations(eventLikes, ({ one }) => ({
//   user: one(users, {
//     fields: [eventLikes.userId],
//     references: [users.userId],
//   }),
//   event: one(events, {
//     fields: [eventLikes.eventId],
//     references: [events.id],
//   }),
// }));

// export const buyTicketsRelations = relations(buyTickets, ({ one, many }) => ({
//   ticket: one(tickets, {
//     fields: [buyTickets.ticketId],
//     references: [tickets.ticketId],
//   }),
//   user: one(users, {
//     fields: [buyTickets.userId],
//     references: [users.userId],
//   }),
//   parent: one(buyTickets, {
//     fields: [buyTickets.refId],
//     references: [buyTickets.buyId],
//     relationName: "ticketParentChild",
//   }),
//   children: many(buyTickets, {
//     relationName: "ticketParentChild",
//   }),
// }));

// export const ownedTicketsRelations = relations(ownedTickets, ({ one }) => ({
//   ticket: one(tickets, {
//     fields: [ownedTickets.ticketId],
//     references: [tickets.ticketId],
//   }),
//   user: one(users, {
//     fields: [ownedTickets.userId],
//     references: [users.userId],
//     relationName: "ownedTickets",
//   }),
//   boughtBy: one(tickets, {
//     fields: [ownedTickets.ticketId],
//     references: [tickets.ticketId],
//     relationName: "ticketParentChild",
//   }),
// }));

// export const questionActivityRelations = relations(questionActivity, ({ one, many }) => ({
//   question: many(question, {
//     relationName: "questionActivityQuestion",
//   }),
//   ticket: one(tickets, {
//     fields: [questionActivity.ticketId],
//     references: [tickets.ticketId],
//     relationName: "questionActivityTicket",
//   }),
// }));

// export const questionRelations = relations(question, ({ one, many }) => ({
//   options: many(questionOptions, {
//     relationName: "questionQuestionOptions",
//   }),
//   questionActivity: one(questionActivity,{
//     fields: [question.activityId],
//     references: [questionActivity.id],
//     relationName: "questionActivityQuestion",
//   })
// }));

// export const questionOptionRelations = relations(questionOptions, ({ one, many }) => ({
//   question: one(question, {
//     fields: [questionOptions.questionId],
//     references: [question.id],
//     relationName: "questionQuestionOptions",
//   })
// }));

// export type BuyTicket = typeof buyTickets.$inferSelect;
// export type BuyTicketInsert = typeof buyTickets.$inferInsert;
// export type EventLike = typeof eventLikes.$inferSelect;
// export type EventLikeInsert = typeof eventLikes.$inferInsert;
// export type Ticket = typeof tickets.$inferSelect;
// export type TicketInsert = typeof tickets.$inferInsert;
// export type EventComment = typeof eventComments.$inferSelect;
// export type EventCommentInsert = typeof eventComments.$inferInsert;
// export type Collectible = typeof collectibles.$inferSelect;
// export type CollectibleInsert = typeof collectibles.$inferInsert;
// export type Collection = typeof collection.$inferSelect;
// export type CollectionInsert = typeof collection.$inferInsert;
// export type User = typeof users.$inferSelect;
// export type UserInsert = typeof users.$inferInsert;
// export type UserFollower = typeof usersFollowers.$inferSelect;
// export type UserFollowerInsert = typeof usersFollowers.$inferInsert;
// export type BuyCollectible = typeof buyCollectibles.$inferSelect;
// export type BuyCollectibleInsert = typeof buyCollectibles.$inferInsert;
// export type Post = typeof post.$inferSelect;
// export type PostInsert = typeof post.$inferInsert;
// export type PostComment = typeof postcomment.$inferSelect;
// export type PostCommentInsert = typeof postcomment.$inferInsert;
// export type PostLike = typeof postlike.$inferSelect;
// export type PostLikeInsert = typeof postlike.$inferInsert;
// export type Event = typeof events.$inferSelect;
// export type EventInsert = typeof events.$inferInsert;


import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
  timestamp,
  text,
  pgEnum,
  primaryKey,
  unique,
} from "drizzle-orm/pg-core";

/* =========================
   ENUMS (ALWAYS ON TOP)
========================= */

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export const userRoleEnum = pgEnum(
  "user_role",
  Object.values(UserRole) as [string, ...string[]]
);

export enum CouponType {
  DISCOUNT = "discount",
  OTHER = "other",
}

export const couponTypeEnum = pgEnum(
  "coupon_type",
  Object.values(CouponType) as [string, ...string[]]
);

/* =========================
   USERS
========================= */

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: userRoleEnum("role").default("user"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  uniqueEmail: unique("users_email_unique").on(table.email),
}));

/* =========================
   PROFILES
========================= */

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  fullName: varchar("full_name", { length: 255 }),
  bio: text("bio"),
  createdAt: timestamp("created_at").defaultNow(),
});

/* =========================
   COUPONS
========================= */

export const coupons = pgTable("coupons", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 100 }).notNull(),
  type: couponTypeEnum("type").notNull(),
  quantity: integer("quantity").default(0),
  validFrom: timestamp("valid_from"),
  validUntil: timestamp("valid_until"),
  createdAt: timestamp("created_at").defaultNow(),
}, (table) => ({
  uniqueCode: unique("coupon_code_unique").on(table.code),
}));

/* =========================
   USER COUPONS (JOIN TABLE)
========================= */

export const userCoupons = pgTable("user_coupons", {
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  couponId: integer("coupon_id")
    .notNull()
    .references(() => coupons.id),
  redeemedAt: timestamp("redeemed_at"),
}, (table) => ({
  pk: primaryKey({ columns: [table.userId, table.couponId] }),
}));

/* =========================
   AUDIT LOGS
========================= */

export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  action: varchar("action", { length: 255 }).notNull(),
  metadata: text("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userFeedbacks = pgTable("feedbacks",{
  id:serial("id").primaryKey(),
  message:varchar("message"),
  // createdAt:timestamp("created_at").defaultNow() remove this 
})