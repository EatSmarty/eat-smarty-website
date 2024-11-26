import cancle from '@/assets/icon/cancle.png';
import ok from '@/assets/icon/ok.png';
import mushbooh from '@/assets/icon/question-mark.png';
import Image from 'next/image';

export default function Ishalal({ isHalal }) {
  if (isHalal === true) {
    return (
      <Image
        src={ok}
        width={32}
        height={32}
        alt="halal"
      />
    );
  }

  if (isHalal === false) {
    return (
      <Image
        src={cancle}
        width={32}
        height={32}
        alt="haram"
      />
    );
  }

  if (isHalal === null) {
    return (
      <Image
        src={mushbooh}
        width={32}
        height={32}
        alt="mushbooh"
      />
    );
  }
}
