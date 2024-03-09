import FooterCss from "./Footer.module.css"
function Footer() {
    return <>
    
     <footer>
      <div className="container">
        <div className="row">
          <div className={FooterCss.copy}>
            &copy; M&H Developer
          </div>
        </div>
      </div>
    </footer>
    </>
}

export default Footer
