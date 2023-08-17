import { useState } from 'react';
import additives from './additives.json'
import AdditiveCart from './additivesCard';
import FilterdSearch from './filterdSearch';


export default function AdditivesList() {

    return (
        <FilterdSearch additives={additives} />
    )
}