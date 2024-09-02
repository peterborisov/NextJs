import { Character } from './character'

export default async function Page({ params }) {
  return <Character id={params.id} />
}
