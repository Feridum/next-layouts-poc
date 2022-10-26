import Link from "next/link";


export default function Page() {
    return <>
        <h1>Hello, Next.js 13!</h1>
        <Link href={`dashboard`}>Go to dashboard</Link>
    </>;
}