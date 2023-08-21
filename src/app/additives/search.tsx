import clsx from "clsx"
import AdditiveCart from "../../components/additives/additivesCard"


export default function Search({ filteredAdditives }) {
  const filtered = filteredAdditives?.map(additive =>
    <div className={clsx(
      "rounded",
      "px-7 py-2",
      "hover:shadow-lg",
      `${additive.isHalal == true ? "bg-green-100" : undefined ||
        additive.isHalal == false ? "bg-red-100" : undefined ||
          additive.isHalal == null ? "bg-orange-100" : undefined}`
    )}>
      <AdditiveCart
        key={additive.id}
        isHalal={additive.isHalal}
        enumber={additive.eNumber}
        name={additive.name}
        source={additive.source}
        danger={additive.danger}
        code={0} />
    </div>
  )

  return (
    <div className={clsx(
      "additives-list",
      "grid grid-cols-5 gap-7",
      "mb-20 mt-10",
    )}>
      {filtered}

    </div>
  )
}
