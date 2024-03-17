/* eslint-disable */
export class APIError extends Error {
  statusCode: number;
  data: any;
  constructor(statusCode: number, data: any) {
    super(data?.message ?? 'no message');

    this.statusCode = statusCode < 0 ? 500 : statusCode;
    this.data = data;
  }

  static getCodeString(e: unknown): string {
    return e instanceof APIError ? String(e.statusCode) : 'none';
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // ステータスコード 400
  static isBadRequest(e: unknown): boolean {
    if (e instanceof APIError) {
      return e.statusCode === 400 && e.data?.type === 'BadRequest';
    }
    return false;
  }
}
