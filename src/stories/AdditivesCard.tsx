import Image from 'next/image';
import React from 'react';
import GaugeChart from 'react-gauge-chart'
import plant from './assets/plant.png'


interface AdditivesCardProps {
    backgroundColor?: string
}

export const AdditivesCard = ({ backgroundColor }: AdditivesCardProps) => (
    <div style={{
        width: "400px",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "4px",
        backgroundColor: backgroundColor,
        fontSize: "20px",
        padding: "0  10px",
        color: "gray",
        fontFamily: "sans-serif"
    }}>
        <p>
            E100
        </p>
        <p>
            Curcumin
        </p>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    width: "60px",
                }}>
                    <GaugeChart id="gauge-chart1"
                        nrOfLevels={5}
                        percent={.5}
                        arcWidth={0.3}
                        cornerRadius={1}
                        animate={false}
                    />
                </div>
                <Image
                    src={plant}
                    width={30} height={30}
                    alt='icon' />
                <p>
                    Halal
                </p>
            </div>
        </div>
    </div>
);
