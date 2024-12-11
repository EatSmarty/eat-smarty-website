
import React from "react";

type PaperLinkContainerProps = {
    title: string;
    link: string;
    description?: string;
};

const PaperBox: React.FC<PaperLinkContainerProps> = ({ title, link, description }) => {
    return (
        <div className="max-w-md mx-auto my-8 p-6 px-20 bg-white rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
            {description && <p className="text-gray-600 mb-6">{description}</p>}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-[#18daa3c9] hover:bg-[#18DAA3] rounded-md font-medium transition duration-300"
            >
                View Paper
            </a>
        </div>
    );
};

export default PaperBox;
