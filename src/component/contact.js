import React from "react";
import './contact.css'
import FoterDis from "./footer";
import { NavBar } from "./navBar";
function Contact()
{
    return(
        <div>
                <NavBar />
           
            <div className="contact">
                <div className="getinput">
                    {/* <br /> */}
                    <p><h5>Please Sign in so we can better answer your query.</h5></p>
                    {/* <br /> */}
                    <div>
                    <p id="boldd">What can we help you with?</p>

                        <select class="gr-dropdown u-fullWidth"  onchange="onQuestionTypeChange();" name="contact[question_type]" id="contact_question_type">
                            <option value="">-- select question type (required) --</option>
                        <option value="book_records">Book records: Adding or editing</option>
                        <option value="account_settings">Account Settings</option>
                        <option value="giveaways">Giveaways</option>
                        <option value="managing_your_bookshelves">Managing your bookshelves</option>
                        <option value="how_to_read">How to read books on Goodreads</option>
                        <option value="author_program">Author Program</option>
                        <option value="reading_challenge">Reading Challenge</option>
                        <option value="yyib">Your Year in Books</option>
                        <option value="friends_and_followers">Friends and followers</option>
                        <option value="twitter_facebook_and_social">Twitter, Facebook, and social</option>
                        <option value="goodreads_choice_awards">Goodreads Choice Awards</option>
                        <option value="account_suspension">Account Suspension</option>
                        <option value="suggestion">Make a feature suggestion</option>
                        <option value="bug">Report a bug</option>
                        <option value="spam_or_abuse">Report spam, abuse or other issue</option>
                        <option value="other">Other</option></select>
                    </div>
                    <br />
                    <div>
                        <select id="contact_question_type">
                            <option value="--select details(required)--">--select details(required)--</option>
                            <option value="Winner never recived book">Winner never recived book</option>
                            <option value="Sponser (Aythor or publisher)">Sponser (Aythor or publisher)</option>
                            <option value="General">General</option>
                        </select>
                    </div>
                    <br/>
                    <div><p><h5>For answers to giveaway-related questions, try searching</h5></p> 
                    <p id="boldd">BookHeaven Help.</p>
                    {/* <a href="/">BookHeanev</a> */}
                    </div>

                    <br />
                    <br />
                    <div>
                        <p id="boldd">What device were you using?</p>
                        <select id="contact_question_type">
                            <option>--select device type (required)--</option>
                            <option>Android</option>
                            <option>Desktop</option>
                            <option>iOS</option>
                            <option>Mobile Web</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <p id="boldd">Are you reaching out as a publisher, author, neither, or both?</p>
                        <select id="contact_question_type">
                            <option>--select contact type (required)--</option>
                            <option>Publisher</option>
                            <option>Author</option>
                            <option>Neither</option>
                            <option>Both</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <p id="boldd">Email address</p>
                        <input id="contact_question_type" placeholder="Email"></input>
                    </div>
                    <div>
                        <p id="boldd">What does this inquiry relate to? (2-3 words. For example: "forgot password" or "importing books")</p>
                        <input id="contact_question_type"></input>
                    </div>
                    <div>
                        <p id="boldd">Your question—please be specific. Note that Goodreads currently only offers English-language support.</p>
                        <textarea rows="12" cols="73"></textarea>
                        <p id="boldd">Screenshot (optional, 1MB limit)</p>
                        <button>Choose file</button><p>No chosen file</p>
                        {/* <input type="file">No file chosen</input> */}
                    </div>
                    <div>
                        
                        <p >Please keep these guidelines in mind:</p>
                        <strong>Expalin yourself</strong> <p >What were you doing when you encountered a problem? If you're confused or unhappy about something, please explain why.</p>
                        <strong>Be Specific</strong>
                        <p>Provide a URL, a very detailed description, or a screenshot of the error so we know exactly what you're talking about and don't have to ask for clarification.</p>
                        <br />
                        <button type="submit" id="send">Send</button>
                    </div>
                </div>
            </div>
            <FoterDis />
        </div>
    )
}
export default Contact;