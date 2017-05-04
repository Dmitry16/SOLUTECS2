export function showPiezaPage(title, description, img) {
  return {
    type: 'SHOW_PIEZA_PAGE',
    payload: [title,
              description,
              img]
  }
}
