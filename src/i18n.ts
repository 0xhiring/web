import dayjs from 'dayjs';
import i18n from 'i18next';
import numbro from 'numbro';
import { initReactI18next } from 'react-i18next';

import appEn from './public/locales/en/app.json';

i18n.use(initReactI18next).init({
  ns: ['app'],
  defaultNS: 'app',
  nsSeparator: ':',
  resources: {
    en: {
      app: appEn,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
    format: function (value, format, lng) {
      if (typeof value === 'number' && format === 'count') return numbro(value).format({ thousandSeparated: true });
      if (format === 'uppercase') return value.toUpperCase();
      if (value instanceof Date && !!format) return dayjs(value).format(format);
      return value;
    },
  },
});
