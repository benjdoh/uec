export interface SiteDataRoot {
  error: boolean;
  slides: SiteDataSlide[];
  include_slides: string;
  flip_data: SiteDataFlipDaum[];
  poll_data: SiteDataPollDaum[];
  carousel: string;
  films: SiteDataFilm[];
}

export interface SiteDataSlide {
  id: number;
  file: string;
  title: string;
  alt: string;
  link?: string;
  startdate: any;
  enddate: any;
  enabled: number;
  displayCTA: number;
  filename: string;
  smallfile: string;
  mediumfile: string;
  deleted: number;
}

export interface SiteDataFlipDaum {
  id: string;
  payload: string;
  exhibitorID: string;
  dispName: string;
  deleted: number;
}

export interface SiteDataPollDaum {
  cid: string;
  exhibitorID: string;
  datatype: string;
  content: any;
  contentLower: any;
  layout: string;
  legal: any;
  endDate: any;
  startDate: any;
  archived: number;
  deleted: number;
  navDispName: string;
  includedNav: number;
  alignment: string;
  entry_limit: string;
}

export interface SiteDataFilm {
  id: number;
  tCode: string;
  slug: string;
  dispName: string;
  ReleaseDate: string;
  Rating: string;
  Runtime: string;
  URL: string;
  Genre: string;
  Synopsis: string;
  CustomText: any;
  OneSheet: string;
  backdropImage: string;
  Trailer: string;
  Cast: string;
  Director: string;
  Writer: string;
  Producer: string;
  Stills: string;
  SiteInfo: any;
  embargo: any;
  FeatureText: any;
  shortCode: any;
  featureFilm: number;
  isScheduled: number;
  schedDates: string;
  specialEvent: number;
  schedLocations: string;
  embVisibility: number;
  DNI: number;
  isSeries: number;
  seriesID: any;
  studiorules: any;
  ccEvents: number;
  ccLocationManager: number;
  nonRefundable: number;
  excludeFromDynamic: number;
  deleted: number;
  embargoTzone: any;
  OneSheetSmall: any;
  OneSheetLarge: any;
  backdropImageSmall: any;
  backdropImageLarge: any;
  embargoMsg: any;
  nextInline: any;
  previousInline: any;
  breakInline: number;
  altOneSheet: any;
  rottenId: any;
  showtime: any;
  doors_1: any;
  doors_2: any;
  preshow_time: any;
  intermission_time: any;
  multi_feature: number;
  feature_arry: any;
  presented_by: any;
  sponsored_by: any;
  showtimelabel: any;
  ends_date: any;
  photosensitive: number;
  icon_takeover: any;
  opening_frame_end_day: string;
  buzz: string;
  opened: string;
}
