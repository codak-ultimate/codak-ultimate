import { useEffect, useState } from "react";
import appFirebase from "../authorization";
import { getAuth, signOut } from "firebase/auth";
import { changeTheme } from "../features/them/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import scrollToTop from "./scrollToTop";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import ScrollToTop from "./scrollToTop";
const auth = getAuth(appFirebase);

const db = getFirestore(appFirebase);

const Home = (props) => {
  const valorInicial = {
    nombre: "",
    edad: "",
    profesion: "",
  };
  const [user, setUser] = useState(valorInicial);
  const [lista, setLista] = useState([]);
  const [subid, setSubid] = useState("");



  const capturarInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const guardarDatos = async (e) => {
    e.preventDefault();
    if (subid === "") {
      try {
        await addDoc(collection(db, "Usuarios"), {
          ...user,
        });
      } catch (error) {
        console.log("error");
      }
    } else {
      await setDoc(doc(db, "Usuarios", subid), {
        ...user,
      });
    }
    setUser({ ...valorInicial });
    setSubid('')
  };

  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]);

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "Usuarios", id));
  };

  const getOne = async (id) => {
    try {
      const docRef = doc(db, "Usuarios", id);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (subid !== "") {
      getOne(subid);
    }
  }, [subid]);
  const {theme}=useSelector((state)=>state.theme)
  const dispatch=useDispatch()
  return (
    <div className={theme?" transition bg-gray-900 flex flex-col gap-5 justify-center items-center ":"transition bg-white flex flex-col gap-5 justify-center items-center"}>
     <div className="flex w-[100vw]  justify-end">
     <button onClick={()=>dispatch(changeTheme())} className={theme?"bg-white border text-black   text-center      mr-5 mt-5  rounded-[10%] px-5  ":" bg-black text-white   text-center    px-5 mr-5 mt-5 h-[10%] rounded-[10%] "}>
   {theme?"dark":"Ligth"}
</button>
     </div>
      <div className="border-b border-b-2 py-2 flex flex-col gap-2 w-full items-center px-5 py-5 text-center">
        <p className={theme?"transition text-white font-semibold":" transition text-black  font-semibold"}>
          Welcome <strong className="underline">{props.correoUsuario}</strong>{" "}
          has iniciado sesion
        </p>
        <button
         className={theme?" transition bg-blue-500 py-1 px-5 rounded text-white transition hover:bg-blue-600":"transition bg-gray-600 py-1 px-5 rounded text-white transition hover:bg-gray-700"}
          onClick={() => {
            signOut(auth);
          }}
        >
          Sign out
        </button>
      </div>

      <div className="w-full flex flex-col  md:flex-row md:justify-between   px-5 gap-20">
        <div className="  border rounded h-[30%] w-[100%] md:w-[30%]  ">
          <h1 className={theme?"text-center text-2xl font-bold text-white":"text-center text-2xl font-bold "}>Register Users</h1>
          <form
            className="flex flex-col gap-1 px-5 py-2 "
            onSubmit={guardarDatos}
          >
            <div className="flex flex-col items-center">
              <input
                onChange={capturarInputs}
                value={user.nombre}
                type="text"
                id="nombre"
                required
                placeholder="User Name"
                className={theme?"transition text-white bg-gray-900 outline-none border border-1 rounded text-center w-[100%]":"transition outline-none border border-2 rounded text-center w-[100%]"}

                name="nombre"
              />
            </div>
            <div className="flex flex-col items-center">
              <input
                onChange={capturarInputs}
                value={user.edad}
                type="number"
                id="edad"
                required
                max={100}
                min={0}
                placeholder="Age"
                className={theme?" transition text-white bg-gray-900 outline-none border border-1 rounded text-center w-[100%]":"transition  outline-none border border-2 rounded text-center w-[100%]"}
                name="edad"
              />{" "}
            </div>
            <div className="flex flex-col items-center mb-3">
              <input
                onChange={capturarInputs}
                value={user.profesion}
                type="text"
                id="profesion"
                required
                placeholder="Job"
                className={theme?"transition  text-white bg-gray-900 outline-none border border-1 rounded text-center w-[100%]":"transition  outline-none border border-2 rounded text-center w-[100%]"}

                name="profesion"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <button className="bg-blue-500 rounded w-[100%]  text-white py-2 text-center transition hover:bg-blue-600">
                 {subid===''?"Save User":"Update"}
              </button>
            </div>
          </form>
        </div>
        <div className=" w-[100%] md:w-[70%] ">
          <h3 className={theme?"transition text-white font-bold text-2xl border-b border-b text-center":" font-bold text-2xl border-b border-b text-center"}>
            Users List
          </h3>
          <div className=" flex justify-center  items-center w-full ">
            <div className=" w-[100%] py-3 gap-5 flex flex-col w-full ">
              {lista.map((list) => {
                return (
                  <div
                    key={list.id}
                    className={theme?"transition text-white border rounded py-3 px-5  w-full flex flex-col gap-1 ":"transition text-black border rounded py-3 px-5  w-full flex flex-col gap-1 "}
                  >
                    <p className="font-bold">Name: {list.nombre}</p>
                    <p className="font-bold">Age: {list.edad}</p>
                    <p className="font-bold">Job: {list.profesion}</p>
                    <div className=" flex flex-row gap-5 my-2">
                      <button
                        onClick={() => deleteUser(list.id)}
                        className={"bg-red-500 rounded text-white px-5 transition hover:bg-red-600"}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setSubid(list.id)}
                        className="bg-green-500 rounded text-white px-5 transition hover:bg-green-600"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <footer className="">
          <ScrollToTop/>
      </footer>
    </div>
  );
};
export default Home;