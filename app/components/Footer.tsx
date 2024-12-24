import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface footerProps {
  title?: string;
  icon?: IconProp;
  description?: string;
}

export default function Footer({ description, icon, title }: footerProps) {
  return (
    <>
      <div className=" hidden justify-center text-white gap-4 p-8 bg-teal-700 items-center w-full bg-inherit md:flex  ">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {icon && <FontAwesomeIcon className="w-44" icon={icon ?? undefined} />}
        {description && <p className="text-sm mt-2">{description}</p>}
      </div>
    </>
  );
}
