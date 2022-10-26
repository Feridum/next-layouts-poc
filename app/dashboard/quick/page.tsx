import {use} from "react";

async function getData() {
    await new Promise(r => setTimeout(r, 100));

    return null
}

export default function Page() {
    const fields = use(getData());

    return <h1>Hello, Quick</h1>;
}