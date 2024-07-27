import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


 const Home = () =>{ 

    const API_URL = "https://fakestoreapi.com/products";
    const [posts, setPosts]= useState([]);
    const [loading , setLoading]=useState(false);

    async function fetchproductData(){
        setLoading(true);

        try{
            const res= await fetch(API_URL);
            const data = await res.json();
            setPosts(data);

        }
        catch(err){
            console.log("error aa gaya")
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchproductData();
    },[])



    return(
        <div>
        {
          loading ? <Spinner /> : 
          posts.length > 0 ?
          (<div>
            {
                posts.map( (post) => (
                    <Product key={post.id} post={post} />
                ))
            }
            </div>
          ) : 
          <div>
            <p> No Product Found</p>
          </div>
        }
        </div>
    )
};

export default Home;