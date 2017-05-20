export function showPost(postTitle, postContent) {
  return {
    type: 'SHOW_POST',
    payload: [postTitle,
              postContent]
  }
}
