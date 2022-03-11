import React, { useEffect } from "react"
import {Layout} from "../components/Layout"
import axios from "axios"
import Link from "next/link"
import Head from "next/head"
// import Exemple from "../components/exemple"
// import dynamic from "next/dynamic"

// const Exemple = dynamic(()=> import ("../components/exemple"), {ssr: false})


const Home = ({data}) =>{
  const styles ={
    padding: 10,
    margin: 10,
    borderBottom : "1px solid"
  }

  // console.log(process.env.API_ROOT)
  // console.log(process.env.NEXT_PUBLIC_API_ROOT)

  // useEffect(()=>{
  //   localStorage.setItem("jwt-token", "hf58665hdgd58fg");


  // },[])


  return(
    <>
      <Head>
        <title>Liste des régions</title>
      </Head>
      <Layout>
    <div className="container">
      {/* <Exemple/> */}
        <p>Cette page utilise getServerSideProps</p>
        <img src='/lagon.jpg'/>
        <h1>Agence Immo</h1>
        {/* {JSON.stringify(data)} */}
        {
        data.map(region =>(
        <div style ={styles} key={region.code}>
          <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
          <h1>{region.nom}</h1>
          </Link>
        
         <p>{region.code}</p>
        </div>
        ))
      }
    </div> 
    </Layout>
    </>
    
  )
}

export const getServerSideProps = async (context)=>{

  // const url = "https://geo.api.gouv.fr";
  const {data} = await axios.get(`${process.env.API_GEO}/regions`)
  // console.log(process.env.API_ROOT)
  return {
    props:{
      data
    }
  }
}

export default Home;

// pour afficher l API nous devons tt d'abord installer axios et l importer
// pour récupérer les données de l API il faut faire un getServerSideProps(context)
// nous destructurons data = {data}
// pour recevoir les données il faut faire un await suivi de axios.get(url + "/regions")
//  {JSON.stringify(data)} permet de nous afficher en dur les données de l API

// cons styles c est un petit css qu on lui donne et  <div style ={styles}>

// ligne 17 servir des dossiers statiques: afficher tt simplement une image

// ligne 16 nous importons notre cdn bootstrapp du fichier _document.js dans une div className="container"
// cette div est a mettre sur chacune de nos pages afin de rendre l appli responsive 


// ajouter un titre à la page(visible onglet page web)
// importer Head, pui dans notre balise <Head> balise <title> liste des régions

// mes 2 console log coté serveur et cote client
// mon console log coté serveur sera undefined sur ma console page web 
// mais marquera localhost dans mon terminal
// console log ligne 16 dans ma console affichera en production idem dans mon terminal
// en ajoutant l url api geo a notre .env 
// nous pouvons supprimer la const url et remplacer le terme url dans notre const data
// en retournant sur notre page, l api s affiche tjrs tres bien 
