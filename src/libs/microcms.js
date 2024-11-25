import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'cconza3nwd', // あなたのプロジェクトID
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY, // あなたのAPIキー
});
