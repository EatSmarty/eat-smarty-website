import clsx from "clsx"
import AdditiveCart from "../../../components/additives/additivesCard"


export default function Search({ filteredAdditives }) {
  const filtered = filteredAdditives?.map(additive =>
    <AdditiveCart
      key={additive.id}
      isHalal={additive.isHalal}
      enumber={additive.eNumber}
      name={additive.name}
      source={additive.source}
      danger={additive.danger}
      code={0} />
  )

  return (
    <div className={clsx(
      "additives-list",
      "grid grid-cols-4 gap-10",
      "mb-20"
    )}>
      {filtered}

    </div>
  )
}
