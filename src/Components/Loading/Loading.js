
import { ScaleLoader } from 'react-spinners';
const Loading = () => {
     return (
          <div className=' flex justify-center  min-h-[60vh] items-center  bg-transparent overflow-hidden'>
               <ScaleLoader color="#36d7b7" />
          </div>
     );
};

export default Loading;