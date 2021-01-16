import React from 'react';

export default function Footer(){
    return(
        <footer>
            <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
            <p>Contact me on these platforms</p>
            <ul>
                <li><a id='linkedin' href="https://www.linkedin.com/in/kartikeya-arun/"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
                <li><a id='github' href="https://github.com/Watch-D0GS"><i class="fa fa-github-square fa-2x"></i></a></li>
                <li><a id='codepen' href="https://codepen.io/c-h-o-c-o-l-a-t-e"><i class="fa fa-codepen fa-2x"></i></a></li>
                <li><a id='instagram' href="https://www.instagram.com/kartikeya_arun/"><i class="fab fa-instagram-square fa-2x"></i></a></li>
            </ul>
        </footer>        
    )
}