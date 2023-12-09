let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Enseño programación web y hago contenido de tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  let secciones = document.querySelectorAll('section');
  let navlinks = document.querySelectorAll('.navbar-nav a');
  
  window.onscroll = () => {
    secciones.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop -175;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navlinks.forEach(link => {
          link.classList.remove('active');
        });
  
        // Utiliza el selector de atributo para encontrar el enlace correspondiente
        document.querySelector('.navbar-nav a[href="#' + id + '"]').classList.add('active');
      }
    });
  };
  
