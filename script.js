function CV() {
    window.open('./assets/cv.jpg', '_blank');
}


function CV2() {
    window.open('./assets/Titre_professionnel.pdf', '_blank');
}




// Effet falling dot ( point qui descend en continu de haut en bas )
  function createFallingDot() {
    const dot = document.createElement('div');
    dot.classList.add('falling-dot');
    dot.style.left = `${Math.random() * window.innerWidth}px`;
    dot.style.animationDuration = `${Math.random() * 3 + 2}s`; // Durée aléatoire entre 2 et 5 secondes
    document.body.appendChild(dot);

    setTimeout(() => {
        dot.remove();
    }, 5000);
}

setInterval(createFallingDot, 100);
setInterval(createFallingDot, 100);


function openForm() {
    document.getElementById("myFormPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("myFormPopup").style.display = "none";
}


function submitForm() {
    var confirmation = confirm("Voulez-vous envoyer ce message ?");
    if (confirmation) {
        // Soumettre le formulaire
        document.forms[0].submit();

        // Fermer la popup
        $('#contactFormModal').modal('hide');
    }
}
