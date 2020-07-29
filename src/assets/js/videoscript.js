//Obtener el codigo del video y los parametros adicionales

const getyoutubeVideoCode = url => {
    let inicio = url.indexOf('?') + 3,
        final = url.indexOf('&',inicio),
        code = final === -1 ? url.slice(inicio) : url.slice(inicio,final),
        params = url.slice(final + 1);
    
    return final === -1 ? '${code}?' : '${code}?${params}&';
    
};

// dibujar el modal

const printYoutubeModal = youtubeVideoCode => {
  let modal = document.createElement('div');
    modal.id = "modalYoutube";
    modal.classList.add('ed-modal');
    modal.innerHTML = '<div class="modalContent"><div id="closeModal" class="ed-closeModal"></div><div class="video"><iframe src="https://www.youtube.com/embed/${youtubeVideoCode}autoplay=1" allowfullscreen frameborder="0"></iframe></div></div>'
    document.body.appendChild(modal);
    closeModal(modal);
};

//Cerrar el modal

const closeModal = modalElement =>{
    modalElement.querySelector('#closeModal').addEventListener('click',()=>{
        document.body.removeChild(modalElement);
    });
    window.addEventListener('keyup', e =>{
        if (e.key === 'Escape') modalElement.querySelector('#closeModal').click();
    });
    
};

//evento para abrir los modales todos los links 

const openYouTubeModal = selector => {
    let linksElements = [...document.querySelectorAll(selector)];
    links = linksElements.map(link => link.href);
    linksElements.forEach((el,i) => {
       el.addEventListener('click', e => {
          e.preventDefault();
           printYoutubeModal(getyoutubeVideoCode(links[i]))
       }); 
    });
    
};

openYouTubeModal('.modal-youtube')