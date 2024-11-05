import styled from "styled-components"
import {useEffect, useState} from "react"
import Loading from "../assets/loading.jpg"
const BlogPost = () =>{
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) =>{
        setPosts(data);
        setLoading(false)
    })
    .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false)
    });
  }, []);




    return(
      <Container>
             {loading ? (
                <div classname ="loading">
                    <img src={Loading} alt="Loading" width="50" height="50" />
                </div>
             ) :(
                posts.map((post) => (
                    <div key={post.id}
                    className="post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
             )}
             
      </Container>
    );
  }
  
  export default BlogPost

  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: .25rem;

  @media (max-width: 800px){
    display: flex;
    flex-wrap: wrap;
  }
  
  .post{
    border: 1px solid lightgray;
    width: auto;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 10px;
  }
  
  h2{
    font-size: 20px;
    color: #40196d;

  }
  p{
    font-size: 15px;
  }`