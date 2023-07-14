import { createContext, useContext, useState, useEffect } from "react";
import { getdataUsers, getAlbums, getPhotos } from "../../api/Usersapi";


export const DataContext = createContext();

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (typeof context === "undefined") {
    throw new Error("useDataContext must be used into DataProvider!");
  }

  return context;
};

export const DataProvider = ({ children }) => {
const [user, setUsers] = useState([]);
const [albom, setAlboms] = useState([]);
const [photo, setPhoto] = useState([]);


useEffect(() => {
    fetchComments();
    async function fetchComments() {
      const data = await getdataUsers();
      setUsers(data);
    }
  }, []);

  useEffect(() => {
    fetchComments();
    async function fetchComments() {
      const data = await getAlbums();
      setAlboms(data);
    }
  }, []);

  useEffect(() => {
    fetchComments();
    async function fetchComments() {
      const data = await getPhotos();
      setPhoto(data);
    }
  }, []);


  return (
    <DataContext.Provider
      value={{
        user,
        albom,
        photo,
        setUsers,
        setAlboms,
        setPhoto,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default useDataContext;