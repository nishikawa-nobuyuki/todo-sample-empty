import Image, { ImageProps } from 'next/image';

export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAhSURBVHgB7coxAQAACAJBtH/Wr6AVGBi5+QY4GVamxkx8GFID3TwM+SAAAAAASUVORK5CYII=';

type MyImageProps = ImageProps & {
  alt: string;
  divProps?: React.HTMLAttributes<HTMLDivElement>;
};

const CommonImage = (props: MyImageProps): JSX.Element => {
  const { divProps, alt, ...imageProps } = props;
  return (
    <div {...divProps} style={{ letterSpacing: 0, wordSpacing: 0, fontSize: 0 }}>
      <Image {...imageProps} alt={alt} />
    </div>
  );
};

export default CommonImage;
