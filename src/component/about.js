import React  from "react";
import './footer.css'
import './about.css';
import FoterDis from "./footer";
function About(){
    return(
        <div>
        <div class="singam">
        <div >
            <div >
                <h2 id="id" >ebooks</h2>
                <h5 id="id1">OurBestSeller</h5>
                <div class="img">
                    {/* <img src="https://images6.alphacoders.com/394/394751.jpg"></img> */}
                    {/* <img src="https://images3.alphacoders.com/228/228739.jpg"></img> */}
                         {/* <img id="ee" src="https://images.alphacoders.com/132/1326370.png" ></img> */}
                </div>
                <div >
                    <h3 style={{color:"black"}}>
                    Through practising the instructions presented in this book we can transform our life from a state of misery into one of pure and everlasting happiness. These instructions are scientific methods to improve our human nature. Everybody needs to be good-natured with a good heart, because in this way we can solve our own problems as well as those of others, and we can make our human life meaningful. Every living being has the same basic wish...
                  <br />
                  {/* <br />  Through practising the instructions presented in this book we can transform our life from a state of misery into one of pure and everlasting happiness. These instructions are scientific methods to improve our human nature. Everybody needs to be good-natured with a good heart, because in this way we can solve our own problems as well as those of others, and we can make our human life meaningful. Every living being has the same basic wish... */}
                    </h3>
                    <br />
                    <button type="Submit" >Continue Reading How to Transform yur Life..</button>
                </div>
                <div>
                    
                </div>
            </div>
            </div>    
              
            
        </div>
        <div class="dad">
        <h2>About us
        </h2>
        <p><h5>Meet the founder of Hope for Healing non-profit and learn the story behind a passionate desire to help people be mentally healthy and happy. 
        </h5></p>

        <br />
        <br />
        <h2>The engine exploded and the airplane began to shake violently</h2>
        <br />
        <p><h5>I was a passenger in a small airplane when the engine exploded and the plane began to shake violently.  My daughter nearly bled to death from surgery complications.  I found my son’s broken body lying in the middle of an intersection.  My 9 month old grandson was life flighted to Primary Children’s hospital for emergency brain surgery.  Another grandson was diagnosed with cancer at age 5 months.  And this is just the tip of the iceberg.  Is it any wonder that I succumbed to depression?</h5></p>
        

        </div>
           
           {/* <div>
            <FoterDis />
        </div> */}
       
           </div>

    
    )
}
export default About;