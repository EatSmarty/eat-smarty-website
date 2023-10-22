"use client";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import productpic from "@/assets/products/cocacola.jpg";

export default function Imgcontainer() {

    return (
        <Image
            className={clsx(
                "rounded",
                "mr-10",
                "shadow",
            )}
            src={productpic}
            height={200}
            width={200}
            alt='products'
        />
    );
}
