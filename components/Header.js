import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";



export const Header=()=> {
    const router = useRouter();
    
    const styles = {
        header:{
            margin : 20,
            padding: 20,
            border: "1px solid #DDD"
        },
        link:{
            margin: 15
        },
        active:{
          margin: 15,
          color :"blue"
        }
    }
  return (
    <div style={styles.header}>
      <Link href="/" passHref>  
      <span style={router.pathname === "/" ? styles.active : styles.link}>Home</span>
      </Link>
      <Link href="/blog" passHref>
      <span style={router.pathname === "/blog" ? styles.active : styles.link}>Blog</span>
      </Link>
      <Link href="/profil" passHref>
      <span style={router.pathname === "/profil" ? styles.active : styles.link}>Profil</span>
      </Link>
      <Link href="/blog/items" passHref>
      <span style={router.pathname === "/blog/items" ? styles.active : styles.link}>Items</span>
      </Link>
      <Link href="/blog/categories" passHref>
      <span style={router.pathname === "/blog/categories" ? styles.active : styles.link}>Catégories</span>
      </Link>
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