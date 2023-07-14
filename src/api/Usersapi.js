export const usersUrl = 'https://jsonplaceholder.typicode.com/users';
export const albomsUrl = 'https://jsonplaceholder.typicode.com/albums';
export const photourl = 'https://jsonplaceholder.typicode.com/photos'

export const getdataUsers = async () => {
    const response = await fetch(usersUrl);
  
    return await response.json();
  };

export const getAlbums = async () => {
    const response = await fetch(albomsUrl);
  
    return await response.json();
  };

  export const getPhotos = async () => {
    const response = await fetch(photourl);
  
    return await response.json();
  };