type ConfigObject = {
  baseUrl: string,
}

export const Config:ConfigObject = {
  baseUrl: process.env.REACT_APP_BASE_URL || 'https://rickandmortyapi.com/api',
}