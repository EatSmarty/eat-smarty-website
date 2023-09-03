import clsx from 'clsx'
import { FC } from 'react'

interface copyrightProps {

}

const CopyRight: FC<copyrightProps> = ({ }) => {
  return (
    <p className={clsx(
      "text-gray-500",
      "mb-14"
    )}>©EATSMARTY 2023 | All Rights Reserved</p>
  )
}

export default CopyRight