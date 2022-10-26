import {use} from "react";

async function getData() {
    await new Promise(r => setTimeout(r, 5 * 1000));

    return null
}

export default async function Page() {
    const fields = await getData();

    return <>
        <h1>Hello, long</h1>
    </>;
}