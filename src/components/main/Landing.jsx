import video from '../../multimedia/videos/bread-bakery-compressed.mp4';
import logo from "../../multimedia/icons/croissant.svg";
import imgOferta from "../../multimedia/panes-preparacion-filtro1.webp";
import imgChamuyo from "../../multimedia/pan-1.webp"
import catImg from "../../multimedia/empanadas-sin-fondo.webp";
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/config"
import { DataContext } from '../DataContext';
import { ChevronLeft, ChevronRight } from "lucide-react"
import opiniones from "../../data/opiniones.json"

const Landing = () => {

  const { categoryList, setCategoryList } = useContext(DataContext);

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categorias.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categorias.length) % categorias.length)
  }

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
        <h2>Panadería de Alta Calidad</h2>
        <div className='categoryCardList'>
        {
          categoryList.map((category) =>{
            return (
              <div key={category.id} className='categoryCard'>
                <img src={catImg} alt="Imagen represtentativa de la categoria" />
                <h4 className='categoryCardPrice'><span>Desde</span>$450</h4>
                <h3  className='category'>{category.nombre}</h3>
                <p className='categoryCardDescription'> "Crujientes por fuera, suaves por dentro, nuestros croissants son un deleite para los sentidos."</p>
                <button className='categoryCardButton'>Agregar al pedido</button>
              </div>
            )
          })
        }
        </div>
      </section>
      <section className='sobreNosotrosSection'>
        <div className='nosotrosInfo'>
          <img src={imgOferta} alt="un pan muy apetitoso" />
          <div className='nosotrosTexto'>
            <h2>Nuestra Historia</h2>
            <p>Doux nació del amor por la panadería francesa y el deseo de compartir el auténtico sabor artesanal con nuestra comunidad. Cada día, nuestro equipo de panaderos apasionados se dedica a elaborar productos frescos, utilizando técnicas tradicionales y los mejores ingredientes. Desde los clásicos croissants hasta nuestras especialidades más innovadoras, en Doux cada bocado es una experiencia única.</p>
            <button className='nosotrosMoreInfoButton'>Conoce Más Sobre Doux</button>
          </div>
        </div>
      </section>
      <section className='opinionsSection'>
        <h2>Lo que dicen de Nosotros:</h2>
        <div className="opinionsContainer">
        {opiniones.map((opinion, index) => (
          <div key={index} className="opinionCard">
            <div className="opinionUser">
              <div className="opinionUserInfo">
                <img src={opinion.avatar} alt="" />
                <h3 className="opinionCardName">{opinion.nombre_usuario}</h3>
              </div>
              <div className="opinionCardScore">{opinion.puntaje}</div>
            </div>

            <p className="opinionCardComment">"{opinion.comentario}"</p>
          </div>
        ))}
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

