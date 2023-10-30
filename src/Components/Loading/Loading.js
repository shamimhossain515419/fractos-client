
import { ScaleLoader } from 'react-spinners';
const Loading = () => {
     return (
          <div className=' flex justify-center  items-center  absolute bg-white w-full h-screen '>
               <ScaleLoader color="#36d7b7" />
          </div>
     );
};

export default Loading;