import Image from "next/image";
import clsx from "clsx";

interface HeaderProps {
  title: string | undefined | null;
  // backLink?: string;
  // halalStatus: "halal" | "mushbooh" | "haram"
}

export default function Header({ title }: HeaderProps) {

  return (
    <header className={clsx(
      "border-b",
      "overflow-hidden",
      "w-full h-[50px]",
      "md:h-[50px]",
      "px-5 md:px-10",
      "bg-white",
      " font-bold",
      "flex md:justify-around justify-between items-center",
      "z-20",
      "sticky top-0",
    )}>
      <h1 className={clsx(
        "text-xl font-bold ml-2",
      )}>{title}</h1>
      <Image
        src="https://github.com/EatSmarty/eat-smarty-website/blob/main/public/cardiogram.png?raw=true"
        width={40}
        height={40}
        alt='logo'
        className={clsx(
          "logo",
          "mr-5",
        )}
      />
    </header>
  );
}