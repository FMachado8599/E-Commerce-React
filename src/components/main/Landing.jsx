import video from '../../multimedia/videos/bread-bakery-compressed.mp4';
import logo from "../../multimedia/icons/croissant.svg";
import imgFooter from "../../multimedia/panes-preparacion.webp";
import imgChamuyo from "../../multimedia/pan-1.webp"

const Landing = () => {
  return (
    <div>
      <section className='landing'>
          <video className='videoLanding' typeof='video/mov' loop={true} autoPlay={true} muted src={video} alt="video landing de un pan en una bandeja de almacenamiento" />
          <img src={logo} className='landingLogo' alt="Logo de la tienda"/>
          <h1 className='landingTitle'>Doux</h1>
      </section>
      <section className='chamuyoSection'>
        
        <div className='chamuyoContainer'>
          <h2 className='chamuyoTitle'>El encanto de lo hecho en casa...</h2>
          <img className='imgChamuyo' src={imgChamuyo} alt="pan con forma redondo casero" />
          <h2 className='chamuyoTitle2'>... en productos frescos y autenticos</h2>
        </div>
      </section>
      <section className='contactSection' ></section>
      {/* <img className='imageFooter' src={imgFooter} alt="panes prontos para la venta almacenados en bandeja" /> */}
    </div>

  )
}

export default Landing

