interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const getTask = async () => {
    const res = await fetch(`http://localhost:3000/api/tasks/${params.id}`);
    return res.json();
  };
  const data = await getTask();

  return <div>{JSON.stringify(data)}</div>;
}
