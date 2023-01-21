


// const m = [{ id: 1 }];

// // s = '[]';

export const crudLocal = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
}


export const getPostFromLocal = () => {
  const data = localStorage.getItem('posts');
  return data === null ? [] : JSON.parse(data);
}