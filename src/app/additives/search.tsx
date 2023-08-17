import AdditiveCart from "./additivesCard"


export default function Search({ filteredAdditives }) {
  const filtered = filteredAdditives?.map(additive =>
    <AdditiveCart
      additives={additive}
    />
  )

  return (
    <>
      {filtered}

    </>
  )
}
