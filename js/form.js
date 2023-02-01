console.log("Powered by Daniel Maciel Acevedo")

const $form = document.querySelector('#contact-form')
const alertConfirm = document.getElementById('')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
        const confirmForm = document.getElementById("dma-form");
        const elementHtml = document.createElement("div");

        elementHtml.innerHTML = '<div id="submit-dma-confirm"> <div class="submit-dma-confirm-container"> <div id="close-notification"><span></span><span></span></div> <h2>mensaje enviado!</h2> <p>Gracias por contactarme, te escribiré pronto.</p> </div> </div>'

        confirmForm.appendChild(elementHtml);
        // alert('Gracias por contactarme, te escribiré pronto.')
    }
}

const closeSubmitButton = document.getElementById('dma-form');

closeSubmitButton.addEventListener('click', () => {
    const closeSubmitContent = document.getElementById('submit-dma-confirm');
    closeSubmitContent.remove();
})