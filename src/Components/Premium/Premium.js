// import { FaBeer } from 'react-icons/fa';
import { AiOutlineAim } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";
import { AiOutlineExperiment } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
const Premium = () => {
    return (
        <div>
            <p className=" text-center py-8">Practice Premium</p>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-5 bg-black">
            <div>
                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500
                py-16 px-7 rounded-xl">
                    <div className="text-white bg-slate-900 rounded-xl">
                        <p className="text-center">What is the true expression of
                         a-particle</p>
                        <div className="grid grid-cols-2">
                            <p className="m-px p-3 gap-3 bg-black rounded-xl text-center"><sup>4</sup><sub>2</sub>He</p>
                            <p className="m-px p-3 gap-3 bg-black rounded-xl text-center"><sup>4</sup><sub>2</sub>He <sup>+4</sup></p>
                            <p className="m-px p-3 gap-3 bg-black rounded-xl text-center"><sup>4</sup><sub>2</sub>He <sup>+2</sup></p>
                            <p className="m-px p-3 gap-3 bg-black rounded-xl text-center">f<sup>4</sup><sub>2</sub></p>
                        </div>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Quickly Practice</h3>
            </div>
            <div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-16 px-7 rounded-xl">
                <div className="overflow-x-auto bg-black  rounded-xl">
                    <table className="table w-full text-center text-white">
                        {/* head */}
                        <thead>
                            <tr className="border-b text-white">
                                <th className="p-2">Rank</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="border-b">
                                <th className="p-2">1</th>
                                <td className="p-2">Ratri</td>
                                <td className="p-2">35</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="border-b">
                                <th className="p-2">2</th>
                                <td className="p-2">Jannat</td>
                                <td className="p-2">32</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className="p-2">3</th>
                                <td className="p-2">Marufa</td>
                                <td className="p-2">20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3 className=" text-xl font-bold">Leader board</h3>
            </div>
            <div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-14
             px-14 rounded-xl">
                <div className="overflow-x-auto bg-black text-white rounded-xl">
                    <table className="table w-full text-center">
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th className="p-2"><AiOutlineAim className="w-6 h-6" /></th>
                                <td className="p-2">Subject Select</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th className="p-2"><AiOutlineExperiment className="w-6 h-6" /></th>
                                <td className="p-2">Lesson select</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th className="p-2"><AiOutlineLeftCircle className="w-6 h-6" /></th>
                                <td className="p-2">Time select</td>
                            </tr>
                            <tr>
                                <th className="p-2"><AiOutlineApi className="w-6 h-6"/></th>
                                <td className="p-2">Exam Start</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h3 className="font-bold  text-xl">Mock Exam</h3>
            </div>
            <div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-16 px-7 rounded-xl">
                <div className="text-white bg-slate-900 rounded-xl">
                    <div className="ml-3">
                        <p>Which of the following has oxidation number of nitrogen +2?</p>
                        <button><small className="bg-pink-500 rounded p-px">Pre. Mistake</small></button>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="m-2 p-2 gap-3 bg-black rounded-xl text-center">No</p>
                        <p className="m-2 p-2 gap-3 bg-black rounded-xl text-center">No <sub>2</sub></p>
                    </div>
                </div>
                {/* <h3>Quickly Practice</h3> */}
            </div>
            <h3 className="text-xl  font-bold">Review</h3>
            </div>
            <div>
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-7 px-7 rounded-xl text-white">
                <div className="m-2 p-2 gap-3 bg-black rounded-xl text-center">
                    <h3 className="text-xl font-bold">Special Quiz</h3>
                    <p>200 Q . 30 M</p>
                    <p><button className="w-3 h-3 mr-2 bg-green-500 rounded-full"></button><small>Running</small></p>
                </div>
                <div className="m-2 p-2 gap-3 bg-black rounded-xl text-center">
                    <h3 className="text-xl font-bold">Physics Paper Final</h3>
                    <p>200 Q . 30 M</p>
                    <p><button className="w-3 h-3 mr-2 bg-green-500 rounded-full"></button><small>Running</small></p>
                </div>
                {/* <h3>Quickly Practice</h3> */}
            </div>
            <h3 className=" font-bold text-xl">Live Exam</h3>
            </div>
        </div>
        </div>
    );
};

export default Premium;