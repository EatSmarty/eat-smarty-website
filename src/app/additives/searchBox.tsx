import clsx from 'clsx'


export default function SearchBox({ }) {
  return (
    <section className={clsx(
      "search-box",
      "mt-20",
      "w-full",
      "border",
      "rounded"
    )}>
      <div className={clsx(
        "search-input",
        "flex items-center justify-between",
      )}>
        <input className={clsx(
          "placeholder-[#3C3D42] placeholder-opacity-50",
          "w-full",
          "rounded",
          "outline-none",
          "p-2",
          "text-sm"
        )} type="text" placeholder='Search...' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor"
          className="w-6 h-6 text-gray-500 cursor-pointer absolute">
          <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0
          0010.607 10.607z" />
        </svg>
      </div>
    </section>
  )
}