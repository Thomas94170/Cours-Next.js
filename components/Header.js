import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import styleHeader from "../styles/header.module.css"
import styles from "../styles/header.module.css"



export const Header=()=> {
    const router = useRouter();
    
    // const styles = {
    //     header:{
    //         margin : 20,
    //         padding: 20,
    //         border: "1px solid #DDD"
    //     },
    //     link:{
    //         margin: 15
    //     },
    //     active:{
    //       margin: 15,
    //       color :"blue"
    //     }
    // }
  return (
    <div className={styles.header}>
      <Link href="/" passHref>  
      <span className={router.pathname === "/" ? styles.active : styles.link}>Home</span>
      </Link>
      <Link href="/blog" passHref>
      <span className={router.pathname === "/blog" ? styles.active : styles.link}>Blog</span>
      </Link>
      <Link href="/profil" passHref>
      <span className={router.pathname === "/profil" ? styles.active : styles.link}>Profil</span>
      </Link>
      <Link href="/blog/items" passHref>
      <span className={router.pathname === "/blog/items" ? styles.active : styles.link}>Items</span>
      </Link>
      <Link href="/blog/categories" passHref>
      <span className={router.pathname === "/blog/categories" ? styles.active : styles.link}>Catégories</span>
      </Link>
      {/* <style jsx>
        {`
          .header{
            margin : 20px;
            padding : 20px;
            border : 5px solid #F2F79E
          }
        `}
      </style> */}
    </div>
  )
}


// le hook useRouter permet de changer le style en fonction de la page active
// si je suis sur Home mon lien sera souligner en bleu car ce sera la page active
// pour cela il faut definir une classe active dans mon style voir ligne 19
// il faut faire ensuite une condition ternaire  voir ligne 27
// si router.pathname est égal à / (accueil par défault
// alors (?) mon styles utilisé est le style active sinon (:) j utilise le styles.link
// on peut reproduire cela pour toute les pages

// utilisation de style-jsx
// suppression de notre style d'origine et voir ligne 42 a 50

// utilisation du css simple
// créer un fichier header.module.css
// voir l 'import 
// voir ligne 26 comment l 'appliquer a la div

// si on veut l appliquer plus généralement, dans l import ca devient styles
// le className de la div devient {styles.header}
// dans nos link dans nos span style est remplacé par className

