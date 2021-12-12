import { Config } from "../config"
import { Character } from "../types"
export async function fetchCharacters(): Promise<Array<Character>> {
  const url = Config.baseUrl + '/character?page=1'
  const options = {
    method: 'GET',
    headers: new Headers({
      "content-type": "application/json",
    })
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error(JSON.stringify(res))
  }
  const { results } = await res.json()
  return results
}


export async function getCharacter(id?: string | string[]): Promise<Character> {
  const url = Config.baseUrl + '/character/' + id
  const options = {
    method: 'GET',
    headers: new Headers({
      "content-type": "application/json",
    })
  }
  const res = await fetch(url, options)
  if (!res.ok) {
    throw new Error(JSON.stringify(res))
  }
  const result = await res.json()
  return result
}