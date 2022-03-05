import React from "react"
import {Layout} from "../components/Layout"
import axios from "axios"
import Link from "next/link"


const Home = ({data}) =>{
  const styles ={
    padding: 10,
    margin: 10,
    borderBottom : "1px solid"
  }

  return(
    <Layout>
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
    </Layout>
  )
}

export const getServerSideProps = async (context)=>{

  const url = "https://geo.api.gouv.fr";
  const {data} = await axios.get(`${url}/regions`)

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
// on lui applique