interface CategoryProps {
    params: { id: number }
}

export default function Category({ params }: CategoryProps) {
    const paramsid = params.id;
    return ({ paramsid });
}
