import React, { useEffect, useState } from "react"
import { Layout } from "../components/Layout"
import Link from "next/link"
// import { useRouter } from "next/router"
import Blog from "./Blog"
import axios from "axios"


// const NameLink = ({nom}) =>(
//   <li>
//     <Link href ={`/profil?nom=${nom}`}>
//       <a>{nom}</a>
//     </Link>
//   </li>
//   )

export default function Profil() {
  const [data, setData] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";



  const styles ={
    margin : 10,
    padding : 10,
    borderBottom : "1px solid #DDD"
  }

  useEffect(()=>{
    axios.get(url)
    .then(response =>{
      setData(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  },[])
  // const router = useRouter()
  // console.log(router.query)
  return (
    <Layout>
      <p>Cette page utilise useEffect (Rendu coté client)</p>
      {/* {JSON.stringify(data)} */}
      {
        data && data.map(user =>(
          <div style={styles} key={user.id}>
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
            <h3>&#128231; : {user.email}</h3>
            <h4>&#128241; : {user.phone}</h4>
            <p>&#127968; : {user.address.street} {user.address.suite} {user.address.city} 
            </p>
            <p>{user.address.zipcode}</p>
            <p>&#127970; : {user.company.name}, {user.company.catchPhrase}</p>
            <p> {user.company.bs}</p>
            <p>&#64; : {user.website}</p>

          </div>
        ))
      }
    {/* <h1>{router.query.nom}</h1>
    <ul>
      <NameLink nom="Thomas"/>
      <NameLink nom="Jula"/>
      <NameLink nom="Adam"/>
    </ul> */}
    </Layout>
  )
}

// Nous avons fait un copier coller de la page
//  Blog.js afin de recuperer nos routes dynamiques 
// et les mettre sur notre page de profil

// Récupération des données coté serveur avec useEffect
// pour cela nous allons mettre en comm ligne 8 a 14, 17 18 et de 21 a 26
// import d axios
// utilisation de https://jsonplaceholder.typicode.com/users pour une API d exemple mise a disposition sur Json placeholder
// on utilise {JSON.stringify(data)} afin d afficher en dur notre API
// la recuperation et la requete d 'affichage se fait de la ligne 18 à la ligne 29
// l affichage des données avec useEffect se fait de la ligne 36 
// de la ligne 44 à 53, j ai affiché les infos de l'api ensuivant la map

// si l'on veut afficher lors de notre chargement un message de chargement
// ligne 20 : if(!data) return <h5>Chargement...</h5>