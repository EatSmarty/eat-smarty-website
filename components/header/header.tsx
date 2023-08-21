import Image from 'next/image'
import clsx from 'clsx';


interface Props {
  title: string | undefined | null;
  // backLink?: string;
  // halalStatus: "halal" | "mushbooh" | "haram"
}


export default function Header({ title }: Props) {

  return (
    <header className={clsx(
      "header",
      "flex justify-between items-center",
      "w-full",
      "fixed",
      "bg-[#fff]",
      "border-b",
      "ml-2",
    )}>
      <h1 className='text-xl font-bold ml-5'>{title}</h1>
      <Image
        src="https://github.com/Halalvar/halalvar/blob/main/public/logo.png?raw=true"
        width={70}
        height={70}
        alt='logo'
        className={clsx(
          "logo",
          "mr-5"
        )}
      />
    </header>
  )
}