import Image from 'next/image';
import ok from '../../assets/icon/ok.png'
import cancle from '../../assets/icon/cancle.png'
import mushbooh from '../../assets/icon/question-mark.png'


export default function Ishalal({ isHalal }) {
    return (
        <div>
            {isHalal == true ? <Image
                src={ok}
                width={30} height={30}
                alt={"halal"}
            /> : undefined ||
                isHalal == false ? <Image
                src={cancle}
                width={30} height={30}
                alt={"haram"}
            /> : undefined ||
                isHalal == null ? <Image
                src={mushbooh}
                width={30} height={30}
                alt={"mushbooh"}
            /> : undefined}
        </div>
    )
}