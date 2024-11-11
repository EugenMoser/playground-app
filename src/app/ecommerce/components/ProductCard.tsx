import Image from "next/image";
import Link from "next/link";

import { Product } from "@prisma/client";

import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps): React.ReactNode {
  const isNow =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={`/ecommerce/products/${product.id}`}
      className="card mb-2 w-full bg-base-100 transition hover:shadow-xl"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body bg-slate-100">
        <h2 className="card-title">
          {product.name}
          {isNow && <div className="badge badge-secondary ml-2">New</div>}
        </h2>
        <p>{product.description}</p>
        <PriceTag price={product.price} className={""} />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
