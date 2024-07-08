import video from '../../multimedia/videos/bread-bakery-compressed.mp4';
import logo from "../../multimedia/icons/croissant.svg";
import imgOferta from "../../multimedia/panes-preparacion-filtro1.webp";
import imgChamuyo from "../../multimedia/pan-1.webp"
import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config"
import { DataContext } from '../DataContext';
import fondoNosotros from '../../multimedia/fondo-panes-1.webp';

const Landing = () => {

  const { categoryList, setCategoryList } = useContext(DataContext);

  document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallaxImage = document.querySelector('.nosotrosFondo');
  
    // Adjust the parallax speed by changing the divisor
    const parallaxSpeed = .4; 
    const offset = scrollPosition * parallaxSpeed;
  
    parallaxImage.style.transform = `translate(0px, -${offset}px)`;
  });

  useEffect(() => {
    const categoryRef = collection(db, "categoria");


    getDocs(categoryRef).
      then((respuesta) => {
        setCategoryList(
          respuesta.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
    });
  }, [setCategoryList]);

  return (
    <main>
      <section className='landing'>
          <video className='videoLanding' typeof='video/mov' loop={true} autoPlay={true} muted src={video} alt="video landing de un pan en una bandeja de almacenamiento" />
          <img src={logo} className='landingLogo' alt="Logo de la tienda"/>
          <h1 className='landingTitle'>Doux</h1>
          <NavLink to="/productos" activeclassname="active" className="landingPedidoLink" >Hacer mi pedido</NavLink>
      </section>
      <section className='chamuyoSection'>
        <div className='chamuyoContainer'>
          <h2 className='chamuyoTitle'>El encanto de lo hecho en casa...</h2>
          <img className='imgChamuyo' src={imgChamuyo} alt="pan con forma redondo casero" />
          <h2 className='chamuyoTitle2'>... en productos frescos y autenticos</h2>
        </div>
      </section>
      <section className='categoriasSection'>
        <h2>Nuestra variedad de productos</h2>
        <div className='categoryCardList'>
        {
          categoryList.map((category) =>{
            return (
              <div key={category.id} className='categoryCard'>
                <img src={logo} alt="Imagen represtentativa de la categoria" />
                <h3  className='category'>{category.nombre}</h3>
              </div>
            )
          })
        }
        </div>
      </section>
      <section className='sobreNosotrosSection'>
        <div className='nosotrosInfo'>
          <div className='nosotrosTexto'>
            <h2>Hola</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit modi eveniet dolor fuga quas minus totam tenetur error reprehenderit.</p>
          </div>
          <img src={imgOferta} alt="un pan muy apetitoso" />
        </div>
        <img src={fondoNosotros} className='nosotrosFondo' alt="fondo de la seccion donde se ven unos panes" />
      </section>
      <section className='ofertaSection'>
        <div className='ofertaText'>
          <h2>Con amor y calidad</h2>
          <p>desde 2024</p>
        </div>
        <div class="ofertaDividerArriba">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
        <img className='imgOferta' src={imgOferta} alt="pan con forma redondo casero" />
        <div class="ofertaDividerAbajo">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
      </section>

      <section className='contactSection' ></section>
      {/* <img className='imageFooter' src={imgFooter} alt="panes prontos para la venta almacenados en bandeja" /> */}
      <section>

      </section>
    </main>

  )
}

export default Landing

