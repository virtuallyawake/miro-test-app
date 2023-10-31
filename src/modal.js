async function closeModal() {
    console.log('Click close modal')
    await miro.board.ui.closeModal()
}

async function init() {
    await miro.board.ui.on('selection:update', e => {
        console.log("MODAL OUTPUT: ", e)
    })
}

init();