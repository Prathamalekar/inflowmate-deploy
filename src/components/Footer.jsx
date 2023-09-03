function Footer(props){
    return(
        <div>
          <div className="Footer">
           <footer style={{color:props.color}}>
              <a class="fab fa-instagram " href="https://www.instagram.com/inflowmateofficial/?igshid=MzRlODBiNWFlZA%3D%3D" onClick={(event)=>{event.preventDefault()}} target="_blank"></a> 
              <a class="fab fa-linkedin" href="https://www.linkedin.com/company/inflowmate/" target="_blank"></a>
              <div className="Footer-inflowmate">
                 Inflowmate@2023
              </div>
            </footer>
          </div>
        </div>
    )
}
export default Footer;