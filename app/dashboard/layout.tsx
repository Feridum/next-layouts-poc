/* eslint-disable @next/next/no-head-element */

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const fields = [
        {name: 'Long', slug: 'long'},
        {name: 'Quick', slug: 'quick'},
        {name: 'Parallel', slug: 'parallel'},
        {name: 'Error', slug: 'error'},
    ]
  return (
      <>
        <div className="menu">
            {fields.map(f=>(<Link href={`dashboard/${f.slug}`} style={{margin: 16}}>{f.name}</Link>))}
        </div>
        <section>{children}</section>
      </>
  );
}
