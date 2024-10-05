import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About Page Description',
    keywords: ['About Page', 'Sebastian', 'Fernando', '...'],
};
   

export default function AboutPage() {
    return(
        <>
            <span className="text-5xl">About Page</span>
        </>
    )
}