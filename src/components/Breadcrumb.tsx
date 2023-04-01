import Link from "next/link";
type Props = {
  category?: {
    slug: string;
    name: string;
  };
  subcategory?: {
    slug: string;
    name: string;
  };
  childCategory?: {
    slug: string;
    name: string;
  };
  className?: string | undefined;
};
//Don't Breadcrumb request try category slug to populate product

function Breadcrumb({
  className,
  category,
  subcategory,
  childCategory,
}: Props) {
  return (
    <div className={className}>
      <ul className="flex list-none">
        <li>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
            href={category?.slug || "/"}
          >
            /{category?.name}
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
            href={subcategory?.slug || "/"}
          >
            /{subcategory?.name}
          </Link>
        </li>
        <li>
          <Link
            className=" text-sm font-medium text-slate-600 hover:text-slate-900"
            href={childCategory?.slug || "/"}
          >
            /{childCategory?.name}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
