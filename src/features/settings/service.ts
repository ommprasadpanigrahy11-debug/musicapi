export type UserSettings = {
  language: string;
  explicitFilter: boolean;
  dataSaver: boolean;
  autoplay: boolean;
  theme: "dark" | "light" | "system";
  notifications: boolean;
  privateSession: boolean;
};
export const defaultSettings: UserSettings = {
  language: "en",
  explicitFilter: true,
  dataSaver: false,
  autoplay: true,
  theme: "dark",
  notifications: true,
  privateSession: false,
};
