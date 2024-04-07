import { Navigation } from '@components/Navigation'
import { CharactersContainer } from './characters/components'

export default async function Page() {
  return (
    <>
      <Navigation />
      <CharactersContainer />
    </>
  )
}
