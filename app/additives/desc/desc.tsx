import clsx from 'clsx'
import AdditiveName from './desc-compnents/additiveName'
import Tag from './desc-compnents/tag'
import ToxicLevel from './desc-compnents/toxicLevel'
import Category from './desc-compnents/category'
import Description from './desc-compnents/description'
import Examples from './desc-compnents/examples'
import Approval from './desc-compnents/approval'


export default function Desc() {
    return <section className={clsx(
        "details",
        "p-5 mt-20",
        "rounded",
        "text-center",
        "w-96"
    )}>
        <AdditiveName />
        <Tag />
        <ToxicLevel />
        <Category />
        <Description />
        <Examples />
        <Approval />
    </section>
}