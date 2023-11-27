
import React from "react";
import './home.css'
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function CreatNew()
{

    const navigate = useNavigate();
    return(
        <div className="container5" style={{margin:'0px',padding:'0px'}}>
            <div className="image-content">
             {/* <h1 id="ff"> Books</h1> */}
             
             {/* <div id="bottom-down">
                <div >
                    <form className="d-flex"  role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  ></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
             </div> */}
            

             <div class="imh" id="bottom">
                    <br />
                    <div class="ss">
                    <form className="d-flex"  role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  ></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                    <div class="dd">
                
                    <h2>Free Books for Students</h2>
                <br />
                   <h4>
                    Thanks to our donors, students can now receive a free Ayn Rand eBook of their choosing! Just select the book you’d like to read, say a few words about why you want to read it, and we’ll send you a Google Play eBook within one business day.
                    </h4>
                    </div>
             </div>
             </div>
             <div>
            
             {/* <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button> */}
                
                    
            {/* <img id="ee" src="https://images.alphacoders.com/132/1326370.png" ></img> */}
            {/* <img id="ee" src="https://images3.alphacoders.com/228/228739.jpg" ></img> */}
  
             </div>
             {/* <br />
             <br /> */}
             <div className="bg_color">
            

             <div id="ff">
                <h2 style={{color:"Black"}}>All Products</h2>
                <br />
             </div>
             <div className="Align">
                <div class="fix">
                
               <div class="cont">

                <img src="https://unescobmw.org/wp-content/uploads/2021/10/b1.jpg"></img>
                <br />
                <h3>Memories of a Leaf</h3>
                <p>
                        We all go through a culmination of rough times to finally learn about ourselves and life as a precious gift. I believe today that life is something between tragedies and hopes, desperations and good wishes, a killing duality that teaches you only one precious thing: be grateful and go beyond!
                        </p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                        {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>
               <div class="cont">
                <img src="https://unescobmw.org/wp-content/uploads/2021/10/ae-2.jpg"></img>
                <h3>If I could</h3>
                    <p>Once upon a time, there lived a little cool cloud who was generous and loving. She was full of fantasy and had a strong desire to experience life. Through her adventures, the little cloud learned the value of family and friendship.
                    wishes, a killing duality that teaches you only one precious thing: be grateful and go beyond!


                    </p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                    {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>

               <div class="cont">
                <img src="https://unescobmw.org/wp-content/uploads/2023/01/beeing-book-page.jpg"></img>
                <h3>Beeing</h3>
                <p >
                Help your child in developing his social and emotional learning. BEE’ing is a story about kindness and accepting differences, complete with activities at the end. It teaches our children to connect with their inner selves, accept themselves as they are,that teaches you only one.
                Through her adventures, and respect the differences.
                    </p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                    {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>

               <div class="cont">
                <img src="https://unescobmw.org/wp-content/uploads/2023/01/rosyfriends-book.jpg"></img>
                <h3>Rosy & Friends</h3>
                <p>
                This book was written with the intention to help the reader learn and understand the serious environmental issues we are facing such as global warming. The reader will also learn about plastic pollution and how it adversely affects wildlife,that teaches you only one wildlife habitat and humans.</p>
                        
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                        {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>

               <div class="cont">
                <img src="https://unescobmw.org/wp-content/uploads/2023/04/beeing-belly-fat-recepies.jpg"></img>
                <h3>Belly Fat Recipes</h3>
                    <p>The book Belly Fat Recipes and Evidence Based Tips by Charis Williams provides research-proven tips and tricks to lose belly fat, along with tasty plant-based, oil-free, and sugar-free recipes to enjoy.that teaches you only one You won’t need to feel deprived to lose belly fat with this book.</p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                    {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>

               <div class="cont">
                <img src="https://image.ebooks.com/cover/210913433.jpg?width=332&height=500&quality=85"></img>
                <h3>The Lock-Up</h3>
                <p >
                JOHN BANVILLE was born in Wexford, Ireland, in 1945. He is the author of twenty novels, including The Book of Evidence, The Sea, winner of the 2005 Man Booker Prize, and, most recently, the bestselling crime novels, Snow and April in Spain, of which were .
                    </p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                    {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>

               <div class="cont">
                <img src="https://image.ebooks.com/cover/210828334.jpg?width=332&height=500&quality=85"></img>
                <h3>The Edge</h3>
                <p >
                David Baldacci is one of the world’s bestselling and favourite thriller writers. A former trial lawyer with a keen interest in world politics, he has specialist knowledge Snow and April in Spain, in the US political system and intelligence services.  

                    </p>
                    {/* <button class="btn btn-success">Add to Cart</button> */}
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
               </div>
               <div class="cont">
                <img src="https://image.ebooks.com/cover/210769655.jpg?width=332&height=500&quality=85"></img>
                <h3>Elon Musk</h3>
                <p >
                ‘Its portrait of the tech maverick is fascinating. . . Isaacson’s account of rolling crises over rocket engines and car designs are vivid and pacy, and his analysis of his subject’s personality is a persuasive mixture of alarm and deep admiration



                    </p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
               </div>
               <div class="cont">
                <img src="https://tpc.googlesyndication.com/simgad/4409713063024185673"></img>
                <h3>In Cold Blood</h3>
                <p >
                ‘Its portrait of the tech maverick is fascinating. . . Isaacson’s account of rolling crises over rocket engines and car designs are vivid and pacy, and his analysis of his subject’s personality is a persuasive mixture of alarm and deep

                    </p>
                    <Button variant="contained" onClick={() => navigate("/Cart")} style={{backgroundColor:"green"}}>Add to Cart</Button>
                    {/* <button class="btn btn-success">Add to Cart</button> */}
               </div>

             </div>
             </div>

            </div>
        </div>
    )
}
export default CreatNew;

// {/* <br/>
//             <div class="header1">

//             <div class="container1">
//         <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
//             <div class="card ">
//             <div class="card-body">
//                 <h5 class="card-title">If I could</h5>
//                 <p class="card-text">.
//                         We all go through a culmination of rough times to finally learn about ourselves and life as a precious gift. I believe today that life is something between tragedies and hopes, desperations and good wishes, a killing duality that teaches you only one precious thing: be grateful and go beyond!
//                         </p>
//                 <button class="btn btn-success">Add to Cart</button>
//             </div>
//         </div>
                    
//         </div>
//         </div>
//           <div class="container1">
//         <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            
//             <div class="card ">

//             <div class="card-body">
//                 <h5 class="card-title">Memories of a Leaf</h5>
//                 <p class="card-text">Once upon a time, there lived a little cool cloud who was generous and loving. She was full of fantasy and had a strong desire to experience life. Through her adventures, the little cloud learned the value of family and friendship.</p>
//                 <button class="btn btn-success">Add to Cart</button>
//             </div>
//         </div>
//           </div>
                    
//         </div>
//         {/* <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
//             <div class="card ">

//             <div class="card-body">
//                 <h5 class="card-title">Beeing</h5>
//                 <p class="card-text">
//                 Help your child in developing his social and emotional learning. BEE’ing is a story about kindness and accepting differences, complete with activities at the end. It teaches our children to connect with their inner selves, accept themselves as they are, and respect the differences of others.
//                 </p>
//                 <button class="btn btn-success">Add to Cart</button>
//             </div>
//         </div>
                    
//         </div> */
            
//   </div> */}