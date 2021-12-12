import { Button, Container, Grid } from '@mui/material'
import { useQuery } from 'react-query'
import { fetchCharacters } from '../api/characters'
import { Character } from '../types'
import { useState, useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'

export default function Home() {
  const { data, isLoading } = useQuery('fetchCharacters', fetchCharacters)
  if (isLoading) {
    return ('Loading...')
  }
  return (
    <Container fixed style={{ marginTop: 20 }}>
      <Grid container spacing={3}>
        {
          data?.map((character) => {
            return (
              <Grid item xs={3} key={character.id}>
                <CharacterCard character={character} />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}
