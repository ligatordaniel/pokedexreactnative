import { BASE_URL } from "../utils/baseUrls"


export async function getPokemonApi(endpointUrl:string) {
  let PageUrl = endpointUrl
  if (endpointUrl == '') PageUrl = `${BASE_URL}/pokemon?limit=20&offset=0`
  if (endpointUrl == 'No more pages') return
  try{
    let res = await fetch(PageUrl)
    res = await res.json()
    return res
  }
  catch(e){
    throw e
  }
}

export async function getPokemonDetailByUrlApi(url:string) {
  try{
    let res = await fetch(url)
    res = await res.json()
    return res
  }
  catch(e){
    throw e
  }
}

export async function getPokemonDetailsApi(id:number) {
  try{
    const url = `${BASE_URL}/pokemon/${id}`
    const res = await fetch(url)
    return res
  }
  catch(e){
    throw e
  }
}