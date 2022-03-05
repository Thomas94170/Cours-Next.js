import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

const codeRegion =({data})=>{

    
    return(
        <div>
            {/* {JSON.stringify(data)} */}
            <h1>Region : {data.nom}</h1>
            <p>Code : {data.code}</p>
        </div>
    )
}


export const getServerSideProps = async (params)=>{
    const code = params.code;
    const url ="https://geo.api.gouv.fr"
    const {data}= await axios.get(`${url}/regions/${code}`)

    return{
        props:{
            data
        }
    }
}

export default codeRegion;

//pour recuperer les données d'une region, nous avons besoin de notre query pour faire une requete et recup les info d une region
//nous utilisons getServerSideProps
// avec a l interieur une requete axios afin de recuperer les informations 
// on ne peut pas utiliser useRouter dans getServerSideProps car useRouter est utilisé coté client et l autre coté serveur
// on utilise donc const code = context.params.code; pour recuperer les parametres pour les routes dynamiques