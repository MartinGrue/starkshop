export const Icon = ({
  icons,
  id,
  width,
  height,
}: {
  icons: any;
  id: string;
  width: string;
  height: string;
}) => (
  <svg width={width} height={height}>
    <use xlinkHref={`${icons}#${id}`} />
  </svg>
);
