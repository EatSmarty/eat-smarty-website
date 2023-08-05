import Image from 'next/image'
import clsx from 'clsx';
import Link from 'next/link';


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
    )}>
      <div className='header-l flex justify-center items-center'>
        <h4 className='text-3xl font-bold text-[#0069FE] opacity-80'>{title}</h4>
      </div>
      <Image
        src="https://github.com/Halalvar/halalvar/blob/main/public/logo.png?raw=true"
        width={70}
        height={70}
        alt='logo'
        className='logo'
      />
    </header>
  )
}