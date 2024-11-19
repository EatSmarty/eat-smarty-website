import clsx from 'clsx';
import TableRow from './tablerow';

interface NutritionProps {
  energy: string | number | null;
  proteins: string | number | null;
  carbohydrate: string | number | null;
  sugars: string | number | null;
  fat: string | number | null;
  fibre: string | number | null;
  sodium: string | number | null;
  salt: string | number | null;
  saturates: string | number | null;
}[];

export default function Nutrition({
  energy,
  proteins,
  carbohydrate,
  sugars,
  fat,
  fibre,
  sodium,
  salt,
  saturates,
}: NutritionProps) {
  return (
    <div className={clsx(
      'text-2xl',
      'my-5',
    )}
    >
      <h2 className={clsx(
        'text-gray-500',
      )}
      >
        Nutrition Facts
      </h2>
      <hr />
      <TableRow title="Energy" value={energy} children={"KJ"} />
      <TableRow title="Proteins" value={proteins} children={"gr"} />
      <TableRow title="Carbohydrate" value={carbohydrate} children={"gr"} />
      <TableRow title="Sugars" value={sugars} children={"gr"} />
      <TableRow title="Fat" value={fat} children={"gr"} />
      <TableRow title="Fibre" value={fibre} children={"gr"} />
      <TableRow title="Sodium" value={sodium} children={"gr"} />
      <TableRow title="Salt" value={salt} children={"gr"} />
      <TableRow title="Saturates" value={saturates} children={"gr"} />
    </div>
  );
}
