import { useRouter } from 'next/router'
import { useQuery, UseQueryResult } from 'react-query'
import { getCharacter } from '../../api/characters'
import { Paper, Typography, Button } from '@mui/material'
import { casa } from '../../utils/helpers'

export default function Character(query: object) {
  const router = useRouter()
  const { id } = router.query
  const { data, status } = useQuery('getCharacter', () => getCharacter(id))
  if (status == 'loading') {
    return <p>Loading...</p>
  }
  if (status == 'error') {
    return <p>Error :_(</p>
  }
  return (
    <Paper elevation={1} sx={{ margin: 10, padding: 5 }}>
      <Button onClick={casa}>casa</Button>
      <Typography variant="h3" component="p">
        JSON:
      </Typography>
      <Typography variant="body1" component="p">
        {JSON.stringify(data, null, "")}
      </Typography>
    </Paper>
  )
}

// Esto es una manera bruta de evitar que el objeto
// query este vacio cuando se recarga la pagina
// ver referencia de esto en la documentacion de next
// https://nextjs.org/docs/routing/dynamic-routes#caveats

// En caso de que se quiera hacer prefetching en servidor
// hay que eliminar esto y utilizar el método descrito en
// la documentación de react query
// https://react-query.tanstack.com/guides/ssr

Character.getInitialProps = async () => {
  return {}
}