interface ProductProps {
  params: { id: number }
}

export default function ProductId({ params }: ProductProps) {
  const paramsid = params.id;
  return ({ paramsid });
}
