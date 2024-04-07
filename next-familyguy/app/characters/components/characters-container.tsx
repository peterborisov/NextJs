'use client'

import { CharacterType } from '@characterTypes/types'
import styled from '@emotion/styled'
import { getAllCharacters } from '@lib/characters'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Link from 'next/link'

const StyledCard = styled(Card)`
  width: 200px;
  height: 200px;
`
const styles = {
  gridContainer: {
    width: '70%',
    margin: '0 auto',
  },
  gridItem: {
    borderRadius: '25px',
  },
}

export const CharactersContainer = async () => {
  const data = await getAllCharacters()
  console.log(111, data)
  return (
    <Grid container spacing={1} style={styles.gridContainer}>
      {data?.characters?.map((item: CharacterType, key: number) => {
        return (
          <Grid key={key} item style={styles.gridItem}>
            <StyledCard variant="outlined">
              <Link
                href={`/characters/${item.slug}`}
                key={item.name}
                className="overflow-hidden rounded-md"
              >
                <Image
                  src={item.avatar}
                  alt=""
                  className="transition-all duration-500 hover:scale-110 hover:-rotate-2"
                  width={200}
                  height={200}
                />
              </Link>
            </StyledCard>
          </Grid>
        )
      })}
    </Grid>
  )
}
