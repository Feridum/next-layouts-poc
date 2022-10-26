import {Suspense} from "react";

async function getData1() {
    await new Promise(r => setTimeout(r,  4 * 1000));

    return 1
}

async function getData2() {
    await new Promise(r => setTimeout(r, 1 * 1000));

    return 2
}

async function getData3() {
    await new Promise(r => setTimeout(r, 3 * 1000));

    return 3
}

async function LongFetch({ promise }) {
    const data = await promise;

    return (
        <h2>Loaded long fetch {data}</h2>
    )
}

export default async function Page() {
    const fields1 = getData1();
    const fields2 = getData2();
    const fields3 = getData3();


    return <>
        <h1>It work parallel</h1>
        <Suspense fallback={<div>Loading section 1....</div>}>
            <LongFetch promise={fields1} />
        </Suspense>
        <Suspense fallback={<div>Loading section 2....</div>}>
            <LongFetch promise={fields2} />
        </Suspense>
        <Suspense fallback={<div>Loading section 3....</div>}>
            <LongFetch promise={fields3} />
        </Suspense>
    </>;
}