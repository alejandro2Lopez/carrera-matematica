export function closeModal(modalID,setShowBackdrop) {
    var modal = document.getElementById(`${modalID}`);
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    var modalBackdrop = document.querySelector(".modal-backdrop");
    if (modalBackdrop) {
        modalBackdrop.remove();
    }
    modal.classList.remove("show");
    setShowBackdrop(false);
}

export function openModal(modalID, setShowBackdrop) {
    const modal = document.getElementById(modalID);
    if (modal) {
        // Restablece el modal antes de abrirlo
        modal.style.display = 'block';
        modal.style.opacity = 1;

        // Centra el modal verticalmente y horizontalmente
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';

        // Añade una clase al cuerpo para indicar que el modal está abierto
        document.body.classList.add('modal-open');
        
        // Muestra el backdrop
        setShowBackdrop(true);
    }
}
