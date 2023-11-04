
import { ScaleLoader } from 'react-spinners';
const loading = () => {
     return (
          <div className=' flex justify-center  items-center  absolute  w-full h-screen '>
               <ScaleLoader color="#36d7b7" />
          </div>
     );
};

export default loading;