import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import axios from "axios";

export default function Titre({data}){
    // console.log(id)

    const router = useRouter();
    console.log(router.query)

    return(
        <Layout>
            {/* {JSON.stringify(data)} */}
            <h1>{data.title}</h1>
            <div>
               <img src ={data.pictures[0]} />
            </div>
            <p>{data.description}</p>
        </Layout>
    )
}


export const getStaticPaths = async()=>{

    const url = "https://aqueous-meadow-07678.herokuapp.com"
  const {data} = await axios.get(`${url}/api/posts`);
  const posts = data.data
  const paths = posts.map(post =>({
      params: {id : post._id}
  }))

  return{paths, fallback :true}
}
export const getStaticProps = async({params}) =>{

    const url = "https://aqueous-meadow-07678.herokuapp.com"
    const id =params.id;
    const {data} = await axios.get(`${url}/api/post/${id}`);

    return{
        props:{data}
    }
}

//Pour pouvoir naviguer entre ma page blog et mes pages dans blog lorsque je clique sur l image, je dois imperativement utiliser getStaticPaths
// getSaticPaths reprend les infos de getStaticProps de la page blog
// je rajoute juste une const paths ou je mappe posts avec en params id : post._id
// je return paths et je mets le fallback sur true comme cela a chaque ajout d'un eventuel article, le nav le mettra a jour
// lorsque je log ma console avec le log(id) (ligne7), on voit que je recupere mon id
// afin de recuperer et d'afficher les infos de mon id sur ma page, dans getStaticProps, je vais rajouter une const{data}
// dans ma props, je retourne data au lieu de id

// pour afficher toute mes données dans mon layout <h1>{data.title}</h1> etc...
