export function Footer () {
    return(<>
        <div className="footer">
            <h1>
                Contact Rhonda
            </h1>
            <p>
                <strong>
                    Email -
                </strong>
                {/* Add correct email */}
                    RhondaSwanson@gmail.com
            </p>
            <p>
                <strong>
                    Cell -
                </strong>
                    (225) 328 - 4022
            </p>
            <div className="social-div">
                <a href="http://instagram.com"><img src="/src/assets/pictures/instagram.png" alt="instagram" style={{height: "50px"}}/></a>
                <a href="https://www.facebook.com"><img src="/src/assets/pictures/facebook.png" alt="facebook" style={{height: "50px"}} /></a>
            </div>
        </div>
        </>
    )
}