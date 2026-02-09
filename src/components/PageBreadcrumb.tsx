import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

interface BreadcrumbEntry {
  label: string;
  to?: string;
}

const PageBreadcrumb = ({ items }: { items: BreadcrumbEntry[] }) => (
  <Breadcrumb className="mb-6">
    <BreadcrumbList>
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <BreadcrumbSeparator />}
          <BreadcrumbItem>
            {item.to ? (
              <BreadcrumbLink asChild>
                <Link to={item.to}>{item.label}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        </Fragment>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
);

export default PageBreadcrumb;
