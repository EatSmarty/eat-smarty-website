interface ProductProps {
  params: { id: number }
}

export default function Product({ params }: ProductProps) {
  const paramsid = params.id;
  return ({ paramsid });
}
