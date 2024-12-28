import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'; // Default fallback URL
    const [doctors, setDoctors] = useState([]);
    const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):false);
    const [userData,setUserData]=useState(false)
    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
            if (data.success) {
                setDoctors(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Failed to fetch doctors data");
        }
    };

    const loadUserProfile=async()=>{
          try {
            
             const {data}=await axios.get(backendUrl+'/api/user/get-profile',{headers:{token}})
             if(data.success){
                 setUserData(data.userData)
             }
             else{
                toast.error(data.message)
             }

          } catch (error) {
             toast.error(error.message)
          }
    }



    useEffect(() => {
        getDoctorsData();
    }, []);

    useEffect(()=>{
       if(token){
        loadUserProfile()
       }
       else{
          setUserData(false)
       }
    },[token])

    const value = {
        doctors,
        getDoctorsData,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfile
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
