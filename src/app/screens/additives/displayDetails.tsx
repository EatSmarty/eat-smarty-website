import { FC } from 'react'

interface displayDetailsProps {
  
}
const getOverlay = document.getElementById('overlay')
const getDetails = document.getElementById('descs')
const DisplayDetails: FC<displayDetailsProps> = ({}) => {
    let displayDetails = getDetails?.style.display
    let displayOverlay = getOverlay?.style.display
    displayOverlay = 'block'
    displayDetails = 'block'
    return <div></div>
}

export default DisplayDetails