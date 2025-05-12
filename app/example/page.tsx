export const dynamic = 'force-static';

export default async function Example() {
  const date = Date.now();
  const id = date % 500;
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
    next: {
      tags: ['example-data'], // Attach the revalidate tag
    },
  });

  const data = await res.json();

  return <div>{date} - {id} - {data?.name}</div>;
}
