import React from "react";
import FoterDis from "./footer";
import './home.css';
import './about.css';
import { NavBar } from "./navBar";
function AboutAdd()
{
    return(
        <div className="heee ">
            <NavBar />
        {/* <div className="heee bg-dark-subtle"> */}
            <div >

            <h2 id="id" >ebooks</h2>
                <h3 id="id1">OurBestSeller</h3>
                 {/* <img id="ee" src="https://images.alphacoders.com/132/1326370.png" ></img> */}

            </div>
            <div>
                {/* <h2 id="id">
                    AboutUs
                </h2> */}
            </div>
            <div>
               <p><h3 id="id">Meet the founder of Hope for Healing non-profit and learn the story behind a passionate desire to help people be mentally healthy and happy. </h3></p>
               <br/>
            </div>

            <div class="change">
                <h1 id="chan">The right book in the right hands at the right time
can change the world.</h1>
            </div>
            <div className="arrangement">
                <h2>Who We Are</h2>
                <p id="oo">Goodreads is the world’s largest site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading. Goodreads launched in January 2007.</p>
                {/* <br /> */}
                <br />
                <h2>A Few Things You Can Do On Goodreads</h2>
                <p id="oo">
               <p>See what books your friends are reading.</p>
                <p>Track the books you're reading, have read, and want to read.</p> 
                <p>Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.</p> 
                <p>Find out if a book is a good fit for you from our community’s reviews.</p>
                 </p>
                <br />
                <h2> Message From Our Co-Founder</h2>
                <p id="oo">
                    <p>When I was in second grade, I discovered the Hardy Boys series. Ever since, I've loved to read — both for fun and to improve my mind. And I'm always looking for the next great book.</p>
                    <p>One afternoon while I was scanning a friend's bookshelf for ideas, it struck me: when I want to know what books to read, I'd rather turn to a friend than any random person or bestseller list.</p>
                    <p>So I decided to build a website – a place where I could see my friends' bookshelves and learn about what they thought of all their books. Elizabeth, my co-founder (and now my wife) wrote the site copy and I wrote the code. We started in my living room, motivated by the belief that there was a better way to discover and discuss good books, and that we could build it.</p>
                    <p>Goodreads is that site. It is a place where you can see what your friends are reading and vice versa. You can create "bookshelves" to organize what you've read (or want to read). You can comment on each other's reviews. You can find your next favorite book. And on this journey with your friends you can explore new territory, gather information, and expand your mind. </p>
                    <p>Knowledge is power, and power is best shared among readers. </p>
                    <br />
                    <br />
                     <p>G.Mani</p>
                    <p>Otis Chandler</p>
                    <p>Co-Founder
</p>
                </p>
             </div>
            {/* <div className="topper">
                <ul>
                <li><h3>About Goodreads</h3></li>
                <li>About Goodreads</li>
                <li>Jobs</li>
                <li>Bolgs</li>
                <li>Author&Advitiser Blog</li>
                <li>Press</li>
                <li>Contact</li>
                <li>Advitiser</li>
                <li>Author Program</li>
                <li>API</li>
                <li>Libiraian Manual</li>
                <li>Help</li>
                <li>FOLLOWS US</li>
                <li class="final">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href=""><i class="fa-brands fa-instagram" ></i></a>
                </li>

                </ul>
            </div>  */}


            
            <div>
            <FoterDis />
        </div>
       
        </div>
    )
}
export default AboutAdd;