import Image from 'next/image'
import clsx from 'clsx';


interface Props {
  title: string | undefined | null;
  // backLink?: string;
  // halalStatus: "halal" | "mushbooh" | "haram"
}


export default function Home({ title }: Props) {

  return (
    <header className={clsx(
      "flex justify-around items-center",
      "w-full",
      "fixed",
      "pt-5",
      "bg-[#fff]",
      "border-b"
    )}>
      <div className='header-l flex justify-center items-center'>
        <h1 className='text-3xl font-bold text-[#0069FE] opacity-80'>{title}</h1>
      </div>
      <Image
        src="https://github.com/Halalvar/halalvar/blob/main/public/logo.png?raw=true"
        width={70}
        height={70}
        alt='logo'
        className={clsx(
          'logo',
        )}
      />
    </header>
  )
}