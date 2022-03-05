import React from "react"
import { Layout } from "../components/Layout"
import Link from "next/link"
import { useRouter } from "next/router"
import Blog from "./Blog"


const NameLink = ({nom}) =>(
  <li>
    <Link href ={`/profil?nom=${nom}`}>
      <a>{nom}</a>
    </Link>
  </li>
  )

export default function Profil() {
  const router = useRouter()
  console.log(router.query)
  return (
    <Layout>
    <h1>{router.query.nom}</h1>
    <ul>
      <NameLink nom="Thomas"/>
      <NameLink nom="Jula"/>
      <NameLink nom="Adam"/>
    </ul>
    </Layout>
  )
}

// Nous avons fait un copier coller de la page
//  Blog.js afin de recuperer nos routes dynamiques 
// et les mettre sur notre page de profil