import {use} from "react";

async function getData() {
    await new Promise(r => setTimeout(r, 5 * 1000));

    return 'long'
}

export default async function Page() {
    const data = await getData();

    return <>
        <h1>Hello, {data}</h1>
    </>;
}