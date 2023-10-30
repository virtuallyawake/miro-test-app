async function openModal() {
    await miro.board.ui.openModal({url: 'modal.html'})
}

async function init() {
    await miro.board.ui.on('selection:update', console.log)
}

init();
