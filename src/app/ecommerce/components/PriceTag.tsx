import { formatPrice } from "../lib/format";

interface PriceTagProps {
  price: number;
  className: string;
}

function PriceTag({ price, className }: PriceTagProps): JSX.Element {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}

export default PriceTag;