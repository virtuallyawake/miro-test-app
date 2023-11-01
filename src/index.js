async function init() {
  await miro.board.ui.on('selection:update', e => {
    console.log("MAIN OUTPUT: ", e)
  })

  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

init();
