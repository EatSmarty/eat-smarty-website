import AdditiveCart from "./additivesCart"


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
