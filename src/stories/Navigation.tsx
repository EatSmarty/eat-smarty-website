import Image from "next/image"
import homeIcon from '../../public/svg/home.svg'
import listIcon from '../../public/svg/list.svg'
import qrcodeIcon from '../../public/svg/qrcode.svg'
import settingIcon from '../../public/svg/setting.svg'

type Props = {
    /**
     * Navigation components use to color to show active icon
     */
    color?: '#0069FE' | 'tomato',
}


/** This is navigation components */
const Navigation = ({ color: variant = '#0069FE' }: Props) => {
    return <div style={{
        padding: 1,
        background: '#eee',
        borderRadius: '5px',
    }}>
        <ul style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }}>
            <li style={{
                listStyle: 'none',
                padding: '10px',
                background: variant,
                borderRadius: '5px',
                fontSize: '14px',
            }}>
                <Image
                    src={homeIcon}
                    height={20}
                    width={20}
                    alt="home"
                />
            </li>
            <li style={{
                listStyle: 'none',
                padding: '10px',
                // background: variant,
                borderRadius: '5px',
                fontSize: '14px'
            }}>
                <Image
                    src={listIcon}
                    height={20}
                    width={20}
                    alt="home"
                />
            </li>
            <li style={{
                listStyle: 'none',
                padding: '10px',
                // background: variant,
                borderRadius: '5px',
                fontSize: '14px'
            }}>
                <Image
                    src={qrcodeIcon}
                    height={20}
                    width={20}
                    alt="home"
                />
            </li>
            <li style={{
                listStyle: 'none',
                padding: '10px',
                // background: variant,
                borderRadius: '5px',
                fontSize: '14px'
            }}>
                <Image
                    src={settingIcon}
                    height={20}
                    width={20}
                    alt="home"
                />
            </li>
        </ul>
    </div>
}

export default Navigation