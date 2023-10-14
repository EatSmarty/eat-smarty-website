import Image from 'next/image'
import clsx from 'clsx';


interface HeaderProps {
  title: string | undefined | null;
  // backLink?: string;
  // halalStatus: "halal" | "mushbooh" | "haram"
}


export default function Header({ title }: HeaderProps) {

  return (
    <header className={clsx(
      "header",
      "flex justify-between items-center",
      "md:justify-around",
      "w-full",
      "relative z-20",
      "bg-[#fff]",
      "border-b",
    )}>
      <h1 className={clsx(
        "text-xl font-bold ml-2"
      )}>{title}</h1>
      <Image
        src="https://github.com/EatSmarty/eat-smarty-website/blob/main/public/cardiogram.png?raw=true"
        width={40}
        height={40}
        alt='logo'
        className={clsx(
          "logo",
          "mr-5"
        )}
      />
    </header>
  )
}