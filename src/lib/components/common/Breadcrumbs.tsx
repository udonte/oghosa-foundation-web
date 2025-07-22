// components/Breadcrumbs.tsx
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom"; // or use <a> tags if not using React Router

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  return (
    <nav className={`${className}`}>
      <ol className="flex items-center space-x-1 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link
                to={item.href}
                className="text-white/50 hover:underline hover:text-oghosa-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white/50">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="ml-1 text-oghosa-gold">
                <IoMdArrowDropright />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
