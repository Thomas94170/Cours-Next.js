const Exemple = () =>{
  const token =  localStorage.getItem("jwt-token")

  return <div>{JSON.stringify(token)}</div>
}

export default Exemple