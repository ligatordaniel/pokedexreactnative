import { BASE_URL } from "../utils/baseUrls"

const url = `${BASE_URL}/pokemon?limit=20&offset=0`

export async function getPokemonApi() {
  try{
    let res = await fetch(url)
    res = await res.json()
    return res
  }
  catch(e){
    throw e
  }
}

export async function getPokemonDetailByUrlApi(url:any) {
  try{
    let res = await fetch(url)
    res = await res.json()
    return res
  }
  catch(e){
    throw e
  }
}

export async function getNextPage(page:number) {
  const urlPage = `${BASE_URL}/pokemon?limit=20&offset=${page}`
  try{
    let res = await fetch(urlPage)
    res = await res.json()
    return res
  }
  catch(e){
    throw e
  }
}