import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'app';
    resources: {
      app: typeof import('../public/locales/en/app.json');
    };
  }
}
