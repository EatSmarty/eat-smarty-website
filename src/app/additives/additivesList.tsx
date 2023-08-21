import { useState } from 'react';
import additives from './additives.json'
import AdditiveCart from '../../../components/additives/additivesCard';
import FilterdSearch from './filterdSearch';


export default function AdditivesList() {

    return (
        <FilterdSearch additives={additives} />
    )
}