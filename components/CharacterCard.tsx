

import { Character } from '../types'
import { Card, CardHeader, CardMedia, CardContent, Chip } from '@mui/material'
import { FaQuestion, FaRegSadTear, FaRegSmileWink } from 'react-icons/fa'
import Link from 'next/link'
type CharacterCardProps = {
  character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

  const statusChip = (status: string) => {
    switch (status) {
      case 'Alive':
        return <Chip icon={<FaRegSmileWink size={14} />} label="Vivo" color="success" />
      case 'Dead':
        return <Chip icon={<FaRegSadTear size={14} />} label="Muerto" color="warning" />
      default:
        return <Chip icon={<FaQuestion size={14} />} label="Desconocido" />
    }
  }
  return (
    <Link href={'/character/' + props.character.id}>
      <Card sx={{ borderRadius: 3 }}>
        <CardMedia
          component="img"
          height="300"
          image={props.character.image}
          alt={props.character.name}
        />
        <CardHeader
          title={props.character.name}
          subheader={props.character.species}
        />
        <CardContent>
          {statusChip(props.character.status)}
        </CardContent>
      </Card>
    </Link>
  )
}