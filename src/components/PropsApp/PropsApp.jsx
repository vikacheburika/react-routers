import Header from "../Header/Header.jsx"; 
import Article from "../Article/Article.jsx";
import Image from "../Image/Image.jsx";

function PropsApp() {
  const obj = {
    name: "Robin",
    age: "40",
    job: "journalist"
  }
  return (
    <>
      <Header/>
      <div className="articles-multiple-container">
        <Article name ={obj.name} age={obj.age} job={obj.job} />
        <Article/>
        <Article/>
      </div>
      <div className="images-container">
        <Image/>
        <Image/>
        <Image/>
      </div>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        molestiae excepturi quas! Aperiam harum culpa animi hic quia dolore
        tempora? Sed veniam eum architecto saepe dicta nam amet aut recusandae?
      </p>
    </>
  );
}

export default PropsApp;