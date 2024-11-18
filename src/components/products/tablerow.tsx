import clsx from 'clsx';

interface TableProps {
  title: string,
  value: string | number | null
  children: string | null | undefined
}

export default function TableRow({ title, value, children }: TableProps) {
  return (
    <div className={clsx(
      'flex justify-between',
      'text-xl',
      'mx-2 p-1',
      'rounded',
      'duration-75 hover:bg-gray-100',
    )}
    >
      <h3 className={clsx(
        'mr-2',
      )}
      >
        {title}
      </h3>
      <p className={clsx()}>
        {value}
        {children}
      </p>
    </div>
  );
}
