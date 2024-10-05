import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing Page Description',
    keywords: ['Pricing Page', 'Sebastian', 'Fernando', '...'],
};

export default function PricingPage() {
    return(
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    )
}