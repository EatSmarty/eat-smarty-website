import clsx from "clsx"
import AdditiveCart from "@/components/additives/additivesCard"


export default function Search({ filteredAdditives }) {
  const filtered = filteredAdditives?.map(additive =>
    <div>
      <AdditiveCart
        key={additive.id}
        isHalal={additive.isHalal}
        enumber={additive.eNumber}
        name={additive.name}
        source={additive.source}
        danger={additive.danger}
        code={additive.code} />
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
