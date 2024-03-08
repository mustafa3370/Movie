import ErrorCss from './Error.module.css'
function Error() {
    return <>
<p className={ErrorCss.zoomarea}><b>CSS</b> animations to make a cool 404 page. </p>
<section className={ErrorCss.errorcontainer}>
  <span>4</span>
  <span><span className={ErrorCss.screenreadertext}>0</span></span>
  <span>4</span>
</section>
    </>
}

export default Error
