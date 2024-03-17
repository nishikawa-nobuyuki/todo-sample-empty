/* eslint-disable */
import { __log } from '@/lib/common/log';
import axios from 'axios';

export type CommonHTTPResponse = {
  status: number;
  data: any;
  headers: any;
};

// APIを叩くときのbaseURL
export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
