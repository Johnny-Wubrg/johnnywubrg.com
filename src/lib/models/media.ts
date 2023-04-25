export interface MediaDetails {
  width: number;
  height: number;
}

export interface MediaSettings {
  artistCredit: string;
}

export interface Medium {
  sourceUrl: string;
  altText: string;
  mediaDetails: MediaDetails;
  mediaSettings: MediaSettings
}