import React from "react";
import { Layout } from "../components/Layout";
import Link from "next/link";
// import { useRouter } from "next/router";
import axios from "axios";



//tt en commentaire car maintenant on récupere les données avec getStaticsProps
const Blog = ({posts}) =>{
  const styles ={
    main :{
      padding :20,
      margin : 20,
      borderBottom :"1px solid #DDD"
    },
    img :{
      height: 300,
      width: 500,
    }
  }

  return(
    <Layout>
      <p>Cette page utilise getStaticProps</p>
      {/* {JSON.stringify(data)} */}
      {posts.map(post =>(
        <div style ={styles.main} key ={post.id}> 
          <h1>{post.title}</h1>
          <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
          <div>
            <img src={post.pictures[0]} style= {styles.img} />
          </div>
          </Link>
          
          <div>{post.body}</div>
        </div>
          
      ))}
    </Layout>
  );
};

export const getStaticProps = async(context) =>{
  const url = "https://aqueous-meadow-07678.herokuapp.com"
  const {data} = await axios.get(`${url}/api/posts`);
  const posts = data.data

  return{
    props:{posts}
  }
}

export default Blog;






// const PostLink = ({titre}) =>(
// <li>
//   <Link href ={`/blog?titre=${titre}`}>
//     <a>{titre}</a>
//   </Link>
// </li>
// )


// export default function Blog() {
//   const router = useRouter();
//   console.log(router.query)
//   return (
//     <Layout>
//     <h1>Agence immo-page Blog</h1>
//     <ul>
//       <PostLink titre="react"/>
//       <PostLink titre="angular"/>
//       <PostLink titre="vue"/>
//       <PostLink titre="symfony"/>
      
//       {/* <li>
//         <Link href ="/blog/[titre]" as ={"/blog/react"}>
//           <a>React</a>
//         </Link>
//       </li>
//       <li>
//         <Link href ="/blog/[titre]" as ={"/blog/angular"}>
//           <a>Angular</a>
//         </Link>
//       </li>
//       <li>
//         <Link href ="/blog/[titre]" as ={"/blog/vue"}>
//           <a>Vue</a>
//         </Link>
//       </li>
//       <li>
//         <Link href ="/blog/[titre]" as ={"/blog/symfony"}>
//           <a>Symfony</a>
//         </Link>
//       </li> */}
//     </ul>
//     <h1>{router.query.titre}</h1>
//     </Layout>
//   )
// }

// // création de route dynamique.
// // création du fichier [titre].js permettant d initialiser une route dynamique
// // sur ce fichier, nous importons Link et nous créons les routes voir les lignes avec les lignes


// // si on veut extraire la partie <li> dans un autre composant, creation de la const Postlink avec comme props en parametre ({titre})
// // c est une facon plus facile de faire les routes et de récuperer les données 

// //Nous allons voir maintenant les routes dynamiques avec des parametres de requetes
//   // l url change en fonction des param de requetes mais affiché sur la mm page
//   // nous importons donc pour cela useRouter
//   // nous n avons plus besoin  du as dans le link ligne 8 nous pouvons le remplacer
//   // <Link href ="/blog/[titre]" as={`/blog/${titre}`}>
//   // nous le remplacons par <Link href ={`/blog?titre=${titre}`}>
//   // nous mettons le h1 avec router.query.titre en param afin qu il affiche le titre lorsque nous cliquons sur un élément de la liste


// Dans ce developpement (chapitre 27) getStaticProps se comporte comme getServerSideProps a chaque fois qu on navigue avec link il recupere nos données

// on importe Link pour lorsque je clique sur l'image une nouvelle page s'ouvre
// Lorsque je clique sur une image pour ouvrir une nouvelle page, je dois obligzatoirement utiliser getStaticPathsndans mon fichier [id].js pour faire une route dynamique
// pour eviter les messages d'erreur, ne pas oublier d indiquer les key
