import 'react-i18next';

declare module 'react-i18next' {
  export interface Resources {
    app: typeof import('../public/locales/en/app.json');
  }
}
