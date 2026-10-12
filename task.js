function windowCallbacks() {
  const win = window.open("", "_blank", "width=300,height=300");
  if (!win) return;

  setTimeout(() => {
    win.resizeTo(500, 500);

    setTimeout(() => {
      win.moveTo(200, 200);

      setTimeout(() => {
        win.close();
      }, 2000);

    }, 2000);

  }, 2000);
}
windowCallbacks();


function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function windowPromises() {
  const win = window.open("", "_blank", "width=300,height=300");
  if (!win) return;

  wait(2000)
    .then(() => {
      win.resizeTo(500, 500);
      return wait(2000);
    })
    .then(() => {
      win.moveTo(200, 200);
      return wait(2000);
    })
    .then(() => {
      win.close();
    })
    .catch(error => console.error("Помилка:", error));
}
//windowPromises();

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function windowAsync() {
  const win = window.open("", "_blank", "width=300,height=300");
  if (!win) return;

  try {
    await wait(2000);
    win.resizeTo(500, 500);

    await wait(2000);
    win.moveTo(200, 200);

    await wait(2000);
    win.close();
    
  } catch (error) {
    console.error("Помилка:", error);
  }
}

//windowAsync();