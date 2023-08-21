import AdditiveCart from "../../../components/additives/additivesCard"


export default function Search({ filteredAdditives }) {
  const filtered = filteredAdditives?.map(additive =>
    <AdditiveCart
      key={additive.code}
      isHalal={additive.isHalal}
      enumber={additive.eNumber}
      name={additive.name}
      source={additive.source}
      danger={additive.danger}
    />
  )

  return (
    <>
      {filtered}

    </>
  )
}
