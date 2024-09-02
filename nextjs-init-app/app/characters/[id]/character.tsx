import { getCharacterBySlug } from '@lib/characters'
import Image from 'next/image'
import { FC } from 'react'

type CharacterProps = {
  id: string
}

export const Character: FC<CharacterProps> = async ({ id }) => {
  const { character } = await getCharacterBySlug(id)

  return (
    <div>
      <div>
        <h1>{character.name}</h1>
        <ul>
          {character.occupations.map((item: string) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
      <p>{character.description}</p>
      <ul>
        {character.images.map((item: string) => (
          <li key={item}>
            <Image src={item} alt="" width={760} height={435} />
          </li>
        ))}
      </ul>
      {character.skills && (
        <>
          <h2>Power and Skills</h2>
          <ul>
            {character.skills.map((item: string) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </>
      )}
    </div>
  )
}
