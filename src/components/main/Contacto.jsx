import fondoContacto from "../../multimedia/persona-amasando2.webp";

const Contacto = () => {
  return (
    <div className='contactPage'>
      <img src={fondoContacto} className='fondoContacto' alt="imagen persona amasando la masaaaaa" />
      <h1 className='contactTitle'>contacto</h1>
      <div className='seccionContacto'>
        <form className='formularioContacto'>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3271.9011406502464!2d-56.17723484112539!3d-34.908930339896294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDU0JzMyLjIiUyA1NsKwMTAnMzAuNCJX!5e0!3m2!1sen!2suy!4v1719635118835!5m2!1sen!2suy" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contacto
