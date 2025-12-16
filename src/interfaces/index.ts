import { bankAccType, documentNames, TokenTypes, uploadDocType, UserRoles } from "../enums";

type AtLeastOne<T> = {
  [K in keyof T]: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];

export interface Socials {
  spotify?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
};

export interface UserInterface {
  userId: string;
  userName: string;
}

interface Post {
  content: string;
  image: string;
  createdAt: string;
  postId: string;
  commentCount: number;
  likesCount: number;
}

export interface GetUserDetail {
  publicId: string;
  name: string;
  username: string;
  role: string;
  location: string | null;
  gender: string;
  description: string;
  socials: any[] | null;
  avatar: string;
  verified: boolean;
  createdAt: string;
  followerCount: number;
  followingCount: number;
  isOnboarded: boolean;
  alreadyFollowed?: boolean;
  email:string,
  phone:string,
  dob:string,
  posts: Post[];
}


export interface GetArtistDetail {
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
}

export interface OnboardArtist {
  username: string;
  name: string;
  location: string | null;
  gender: string;
  role: string;
  dob: string;
  email: string;
  preferences: string[];
  phone: string | null;
  description: string;
  avatar: string;
}

// export interface decodedOtpToken{
//   email: string;
//   otp: string|number;
//   phone: string|number;
// }

export interface decodedWhatsAppOtp{
  otp:string;
  phone:string;
  type: TokenTypes;
  username?: string;
}

export interface userDecodedToken{
  userId:number,
  userName:string,
  isOnboarded:boolean,
  role:string,
  type: TokenTypes
}

export interface decodedEmailOtp{
  otp:string;
  email:string;
  type: TokenTypes;
}

export interface organiserDocumentsType{
  tag:string,
  accountNumber:string,
  ifsc:string,
  pan:string,
  companyName:string,
  companyAddress:string,
  companyState:string,
  companyCountry: string,
  gst:string,
  isGstAvailable:boolean,
  isItrFilled:boolean,
  bankBranch: string,
  beneficiaryName: string,
  panImg: string,
  bankStatementImg: string,
  mobileNumber: string,
  email: string,
  accountType: bankAccType
}

export type decodedOtpToken =  decodedWhatsAppOtp | decodedEmailOtp;

export type artistsSocials = AtLeastOne<Socials>;

export interface spotifyPlaylistData{
  description: string,
  link: string,
  id: string,
  images: {
    height: null | string,
    width: null | string,
    url: string
  }[],
  name: string,
  owner: string,
  totalTracks: number
}

export interface userAuthTokenData{
  userId: number,
  userName: string,
  isOnboarded: boolean,
  role: UserRoles,
  type: TokenTypes
}

export interface spotifyTrackData {
  name: string;
  link: string;
  id: string;
  album: {
    artists: {
      name: string;
      id: string;
      link: string;
    };
    link: string;
    id: string;
    images: {
      height: null | string;
      width: null | string;
      url: string;
    }[];
    name: string;
    release_date: string;
    total_tracks: number;
    is_playable: boolean;
  };
}