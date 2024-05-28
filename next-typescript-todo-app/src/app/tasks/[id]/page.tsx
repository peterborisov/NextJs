export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      |Task: {JSON.stringify(params)}
      {params.id}
    </div>
  );
}
