export enum TokenTypes {
  ACCESS = 'access',
  REFRESH = 'refresh',
  VERIFY = 'verify',
  PERSONAL_INFO = 'personal_info'
}

export enum userLevel {
  BRONZE = "bronze",
  SILVER = "silver",
  GOLD = "gold",
  PLATINUM = "platinum",
  DIAMOND = "diamond"
}

export enum PaymentGateway {
  STRIPE = 'stripe',
  RAZORPAY = 'razorpay',
  PAYPAL = 'paypal',
  RSVP = 'rsvp',
  CASHFREE = 'cashfree',
  JUSPAY = 'juspay',
  INTERNAL = 'internal',
  PAYU = 'payu'
}

export enum Paypal_Payment_Status{
  COMPLETED = "COMPLETED",
  APPROVED = "APPROVED",
  CREATED = "CREATED"
}

export enum OrderStatus{
  PENDING = "pending",
  SUCCESS = "success",
  FAILED = "failed"
}

export enum EventStatus{
  PUBLIC = "public",
  PRIVATE = "private"
}

export enum Xp_User_Activity{
  POSTLIKE = "post_like",
  POSTCOMMENT = "post_comment",
  CREATEPOST = "create_post",
  LOGIN = "login",
  CREATECOLLECTIBLE = "create_collectible",
  CREATEEVENT = "create_event",
  EVENTLIKE = "event_like",
  EVENTCOMMENT = "event_comment",
  BUYTICKET = "buy_ticket",
  BUYCOLLECTIBLE = "buy_collectible",
  EVENTS = "events",
  EVENTUSERSCONNECTION = 'event_users_connection',
  EVENTIDENTITY = 'event_identity',
  EVENTAIRDROP = 'event_air_drop',
  DEFAULT = 'default_xp_user_activity'
}

export enum Passkey_roles{
  EXECUTIVE = "executive",
  OWNER = "owner",
  MANAGER = "manager"
}

export enum TicketState{
  DELETED = "deleted",
  FREEZED = "freezed",
  ACTIVE = "active",
  HIDDEN = "hidden",
  COMINGSOON = "coming_soon"
}

export enum EventState{
  DELETED = "deleted",
  FREEZED = "freezed",
  ACTIVE = "active",
  HIDDEN = "hidden"
}

export enum ArtistState{
  DELETED = "deleted",
  ACTIVE = "active"
}

export enum OtpVerificationMethods{
  WHATSAPP = "whatsapp",
  EMAIL = "email"
}

export enum promoteItems{
  EVENTS = "events"
}

export enum Gender{
  MALE = "male",
  FEMALE = "female",
  NONBINARY = "nonBinary",
  NOTSPECIFIED = "notSpecified"
}

export enum promoteStatus{
  ACTIVE = "active",
  INACTIVE = "inactive"
}

export enum AuctionOrderStatus{
  WIN = "win",
  BID = "bid"
}

export enum BuyOrderType{
  AUCTION = "auction",
  DIRECT = "direct",
  RESALE = "resale"
}

export enum ResaleTypes{
  AUCTION = "auction",
  RESALE = "resale"
}

export enum ResaleStatus{
  ONGOING = "ongoing",
  CLOSED = "closed"
}

export enum BuyAssetReference{
  BUYTICKETS = "buy_tickets",
  BUYCOLLECTIBLES = "buy_collectibles"
}

export enum CuponType{
  DISCOUNT='discount',
  OTHER='other'
}

export enum RedeemTable{
  TICKETS = 'tickets',
  COLLECTIBLES = 'collectibles',
  EVENTS = 'events'
}

export enum CashfreeOrderStatus{
  ACTIVE = 'ACTIVE',
  PAID = 'PAID',
  EXPIRED = 'EXPIRED'
}

export enum DiscountCurrency{
  PERCENTAGE='percentage',
  INR='inr'
}

export enum CuponResources{
  TICKETS = 'tickets',
  COLLECTIBLES = 'collectibles',
  EVENTS = 'events'
}

export enum UserRoles{
  FAN = 'fan',
  ARTIST = 'artist',
  ORGANISER = 'organiser',
  BRAND = 'brand'
}

export enum AccessibleResources{
  GOOGLE_LOGIN = 'google_login',
  USERS = 'users',
  TICKETS = 'tickets',
  COLLECTIBLES = 'collectibles',
  EVENTS = 'events',
  FOLLOWERS = 'users_followers',
  FOLLOWINGS = 'followings'
}

export enum UserActivities {
  VISIT = 'visit',
  FETCHFEED = 'fetch_feed',
  BUY = 'buy',
  SEARCH = 'search',
  LOGIN = 'login',
  SIGNGUP = 'signup',
  CLAIM = 'claim',
  PURCHASESUCCESS = 'purchase_success',
  PURCHASEFAILED = 'purchase_failed'
}

export enum userRoleStatus{
  PENDING = 'pending',
  REJECTED = 'rejected',
  APPROVED = 'approved',
  INREVIEW = 'in_review',
  UPLOADDOCUMENTS = 'upload_documents',
}

export enum userAccountStatus{
  DELETED = "deleted",
  ACTIVE = "active",
  BANNED = "banned"
}

export enum bankAccType{
  SAVING = 'saving',
  CURRENT = 'current'
}

export enum uploadDocType{
  BANK = 'bank',
  KYC= 'kyc',
  GST=  'gst',
  BUSINESSADDRESSPROOF= 'business_address_proof'
}

export enum documentNames{
  ADHARCARD = 'adhar_card',
  PANCARD = 'pan_card',
  PASSBOOK = 'passbook',
  BANKSTATEMENT = 'bankstatement',
  CHEQUE='cheque',
  ELECTRICITYBILL= 'electricity_bill',
  DRIVINGLICENCE= 'driving_licence',
  VOTERID= 'voter_id'
}

export enum tribeActions{
  EVENTS = 'events',
  TICKETS = 'tickets',
  POST = 'post',
  COLLECTIBLES = 'collectibles',
  QUESTIONACTIVITY = 'question_activity'
}

export enum postReaction{
  LIKE = "like",
  ANGRY = "angry",
  SAD = "sad",
  LAUGH = "laugh",
  EXCITED = "excited",
  SURPRISED = "surprised",
  DISLIKE = "dislike"
}

export enum tribeWaitListOptions{
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

export enum collectibleTypes{
  NOTYPE = 'no_type',
  AVATAR = 'avatar',
  CUPON = 'cupon',
  BADGE = 'badge',
  TRIBEPOINT = 'tribe_point',
  USERCONNECTIONS = 'user_connection',
  EVENTINTRO = 'event_intro',
  EVENTIDENTITY = 'event_identity',
  EVENTAIRDROP = 'event_air_drop',
  CARBONCREDIT = 'carbon_credit',
  EVENTATTENDEE = 'event_attendee'
}

export enum collectibleSubTypes{
  // badge types
  NOSUBTYPE = "no_subtype",
  ACHIEVEMENT = "achievement",
  UNIQUE = "unique",
  ASTRIXPOINT = 'astrix_point',
}

export enum collectibleState{
  ACTIVE = 'active',
  DELETED = 'deleted'
}

export enum badgeTypes{
  ACHIEVEMENT = "achievement",
  UNIQUE = "unique"
}

export enum postType{
  DEFAULT = 'default_post',
  TRIBE = 'tribe'
}


export enum questionActivityType{
  QUIZ = "quiz",
  POLL = "poll",
  TICKETFORM = 'ticket_form'
}

export enum tribeTypes{
  GENERAL = "general",
  GAMING = "gaming",
  ENTERTAINMENT = "entertainment",
  MUSICAL = "musical"
}

export enum tribeMemberRole{
  MEMBER = 'member',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
  ARTIST = 'artist',
  BRAND = 'brand'
}

export enum tribeMemberStatus{
  ACTIVE = 'active',
  BANNED = 'banned',
  REMOVED = 'removed'
}

export enum tribeJoinRulesStatus{
  ACTIVE = 'active',
  DELETED = 'deleted',
  NOTACTIVE = 'not_active'
}

export enum tribeJoinRulesAssetType{
  COLLECTIBLES = 'collectibles'
}

export enum questionOptionsContentType{
  TEXT = 'text',
  IMAGE = 'image'
}

export enum tribeActionActAs{
  DEFAULT = 'default_tribe_action',
  POINTS = 'point',
}

export enum tribePointAwardsActivityType{
  DEFAULT = 'default_tribe_point_awards_activity_type',
  POSTLIKE = "post_like",
  POSTCOMMENT = "post_comment",
  EVENTLIKE = "event_like",
  EVENTCOMMENT = "event_comment",
  ANSWERED = 'answered'
  // CREATEPOST = "create_post",
}

export enum tribeState{
  DELETED = "deleted",
  ACTIVE = "active",
}

export enum tribeActionState{
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export enum qrType{
  ASTRIXPOINT = 'astrix_point',
  EVENTINTRO = 'event_intro',
  EVENTIDENTITY = 'event_identity',
  EVENTAIRDROP = 'event_air_drop'
}

export enum collectibleRarity{
  LEGENDARY = 'legendary',
  EPIC = 'epic',
  RARE = 'rare',
  COMMON = 'common'
}

export enum imageRatio{
  SIXTEENNINE = "16_9",
  FIVEFOUR = "5_4"
}

export enum eventType {
  MUSIC = "music",
  COMEDY = "comedy",
  SPORTS = "sports",
  E_GAMING = "e-gaming",
  CULTURE = "culture",
  CULINARY = "culinary",
  CONFERENCE = "conference",
  SEMINAR = "seminar",
  WORKSHOP = "workshop",
  EXHIBITION = "exhibition",
  FESTIVAL = "festival",
  CARNIVAL = "carnival",
  PRIVATE_EVENT = "private_event",
  EXPERIENCE = "experience",
  OTHER = "other",
  COMICBOOKS = "comic_books",
  ANIMEANDMANGA = "anime_and_manga",
  MEETUP = "meetup",
}

export enum themeFont{
  MULISH = 'mulish',
  ROBOTO = 'roboto',
  INTER = 'inter',
  POPPINS = 'poppins',
  NOHEMI300 = 'nohemi300'
}

export enum ticketStatus{
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export enum questionType{
  SHORTANSWER = 'short_answer',
  LONGANSWER = 'long_answer',
  MULTIPLECHOICE = 'multiple_choice',
  DROPDOWN = 'drop_down',
  DATE = 'date',
  TIME = 'time',
  DATETIME = 'date_time'
}

export enum questionActivityState{
  ACTIVE = 'active',
  DELETED = 'deleted'
}

export enum questionState{
  ACTIVE = 'active',
  DELETED = 'deleted'
}

export enum questionOptionsState{
  ACTIVE = 'active',
  DELETED = 'deleted'
}

export enum tribeStatus{
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export enum postStatus{
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export enum accessLevels{
  ACCESS = 'access',
  SENSITIVE_INFO = 'sensitive_info'
}

export enum blockchainType{
  EVM = 'evm',
  NON_EVM = 'non_evm'
}

export enum blockchainTxnType{
  COLLECTIBLE_CREATE = 'collectible_create',
  COLLECTIBLE_TRANSFER = 'collectible_transfer',
  CONTRACT_INTERACTION = 'contract_interaction'
}

export enum supportedBlockchains{
  XDC = 'xdc',
  ALGORAND = 'algorand'
}