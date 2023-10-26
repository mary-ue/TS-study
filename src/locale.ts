export const LOCALE: {
  readonly RU: 'ru-RU',
  readonly EN: 'en-US',
} = {
  RU: 'ru-RU',
  EN: 'en-US',
};

export type localeOMG = typeof LOCALE[keyof typeof LOCALE];
// строка, которая может быть либо 'ru-RU', либо 'en-US'

//////////////////////////////////////////////////////////////

export enum Locale {
  RU = 'ru-RU',
  EN = 'en-US',
}