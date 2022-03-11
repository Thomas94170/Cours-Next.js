import React from "react"
import { Layout } from "../../components/Layout"

export default function Items() {
  return (
    <Layout>
    <h1>Agence immo-sous répertoire, Items</h1>
    <ul>
      <h2>Liste des Catégories</h2>
      <li>Localisation</li>
      <li>Prix</li>
      <li>Superficie</li>
      <li>Jardin</li>
      <li>Dépendance</li>
    </ul>
    </Layout>
  )
}

// exemple de mise a jour de page lorsque l 'application est deja deployée sur vercel
// nous rajoutons une liste