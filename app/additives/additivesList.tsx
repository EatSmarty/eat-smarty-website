import additives from './additives.json'
import FilterdSearch from './filterdSearch'


export default function AdditivesList() {

    return (
        <FilterdSearch additives={additives} />
    )
}