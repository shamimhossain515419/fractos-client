
import { ScaleLoader } from 'react-spinners';
const loading = () => {
     return (
          <div className=' flex justify-center w-full  overflow-hidden  items-center  absolute   h-[70vh] '>
               <ScaleLoader color="#36d7b7" />
          </div>
     );
};

export default loading;

