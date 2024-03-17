/* Container について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */

type Props = React.HTMLAttributes<HTMLDivElement> & {
  maxWidth?: `max-w-${string}`;
  children: React.ReactNode;
};

const Container = (props: Props): JSX.Element => {
  const { maxWidth, children, className = '', ...divHTMLAttributes } = props;

  return (
    <div
      {...divHTMLAttributes}
      className={`px-4 md:px-8 ${maxWidth ? `mx-auto ${maxWidth}` : 'w-full'} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
