import {use} from "react";

async function getData() {
    await new Promise((_res, reject) => setTimeout(reject, 1 * 1000));

    return null
}

export default async function Page() {
    const fields = await getData();

    return <>
        <h1>Hello, long</h1>
    </>;
}