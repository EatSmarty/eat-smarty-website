import Image from 'next/image';


export default function Ishalal({ isHalal }) {
    return (
        <div>
            {isHalal == true ? <Image
                src={`./icon/ok.png`}
                width={30} height={30}
                alt={"halal"}
            /> : undefined ||
                isHalal == false ? <Image
                src={`./icon/cancle.png`}
                width={30} height={30}
                alt={"haram"}
            /> : undefined ||
                isHalal == null ? <Image
                src={`./icon/question-mark.png`}
                width={30} height={30}
                alt={"mushbooh"}
            /> : undefined}
        </div>
    )
}