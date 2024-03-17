const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssScopedGroups = require('tailwindcss-scoped-groups');

module.exports = {
  // パージの対象ファイルを設定
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // スプレッドで展開している前に、メインとしたいフォント名を追加する
      // フォント名にスペースがある場合は、'Noto\\ Sans\\ JP'のように \ (バックスラッシュ)でエスケープする
      // Serif 体がメインの場合は、 `...defaultTheme.fontFamily.serif` を展開する
      ja: ['Inter', 'Noto\\ Sans\\ JP', ...defaultTheme.fontFamily.sans],
      // en: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontSize: {
        h1: [
          '24px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.05em',
            fontWeight: 700,
          },
        ],
        h2: [
          '20px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
            fontWeight: 700,
          },
        ],
        h3: [
          '18px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
            fontWeight: 500,
          },
        ],
        'body1-medium': [
          '16px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
            fontWeight: 500,
          },
        ],
        body1: [
          '16px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
          },
        ],
        'body2-medium': [
          '14px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
            fontWeight: 500,
          },
        ],
        body2: [
          '14px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
          },
        ],
        'body3-medium': [
          '12px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
            fontWeight: 500,
          },
        ],
        body3: [
          '12px',
          {
            lineHeight: 1.5,
            letterSpacing: '0.025em',
          },
        ],
        btn: [
          '14px',
          {
            lineHeight: '18px',
            letterSpacing: '0.025em',
          },
        ],
        input: [
          '14px',
          {
            lineHeight: '18px',
            letterSpacing: '0.025em',
          },
        ],
        tag: [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: 0,
          },
        ],
      },
      colors: {
        // 開発で使用するカラーを設定する
        // `DEFAULT` で設定しているものは、`text-theme` や `bg-primary` のように使用できる
        // それ以外は、 `text-theme-light` や `bg-primary-dark` のように使用する
        // テキストなどに使うベースカラー
        theme: {
          light: '#eeeeee',
          medium: '#bcbcbc',
          DEFAULT: '#393e46',
          dark: '#222831',
        },
        // メインカラー
        primary: {
          light: '#9acfbd',
          // medium: '',
          DEFAULT: '#3e92a3',
          // dark: '',
        },
        // エラー時のカラー
        error: {
          DEFAULT: '#db250c',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [tailwindcssScopedGroups({ groups: ['parent'] })],
};
