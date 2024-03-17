import Link from 'next/link';

import CommonImage from '@/components/common/parts/CommonImage';
import Container from '@/components/common/parts/Container';
import { ROUTES } from '@/lib/data/routes';

const Header = (): JSX.Element => {
  return (
    <header className="relative bg-primary py-4">
      <Container className="flex items-center">
        {/* ロゴ */}
        <Link href={ROUTES.TOP}>
          <CommonImage src="/logo/sample_question.svg" width={160} height={24} alt="素材ヘブン" />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
