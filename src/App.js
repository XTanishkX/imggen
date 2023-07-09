const App = () => {
  const surpriseOptions = [
    "A monkey taking bath on beach",
    "An elephant drinking beer",
    "Earth getting destroyed by sun heat"
  ]
  const getImages = async() => {
    try{
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: "BLUGH"
        }),
        headers:{
          "Content-type" : "application/json"
        }
      
      }
      const response= await fetch("http://localhost:8000/images",options)
      const data = await response.json()
      console.log(data)
    }catch(error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <section className='search-section'>
        <p>Start with a detailed description <span className="surprise">Surprise me</span></p>
      </section>
      <div className="input-container">
        <input placeholder= "An impressionist oil painting of a sunflower in a purple vase..."></input>
        <button onClick={getImages}>Generate</button>
      </div>
      <section className=''></section>
    </div>
  );
}

export default App;