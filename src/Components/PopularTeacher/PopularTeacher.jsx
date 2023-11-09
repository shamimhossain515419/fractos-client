// import React from "react";
// import Image from 'next/image';
// import "./PopularTeacher.css"

// const PopularTeacher = (props) => {
//   const { name,title, image } = props.teacher;
//   return (
//     <div >
//       <div className="border w-full shadow-xl rounded-lg">
//         <div className="images">
//          <Image className="rounded-tl rounded-tr img" src={image} width={200} height={300}></Image>

//         </div>
//         <div className="card-body">
//           <h2 className="text-3xl primary font-bold">{name}</h2>
//           <p className="text-1xl primary font-bold">{title}</p>
//           <div className="card-actions justify-end">
//             <button className="btn buttonColor textColor font-bold" >Reade More</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularTeacher;
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import "./PopularTeacher.css";
import Container from "../Container/Container";

const PopularTeacher = (props) => {
  const { name, title, image, description } = props.teacher;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="border border-green-400  w-full shadow-xl rounded-lg">
        <div className="images">
          <Image
            className="rounded-tl rounded-tr img"
            src={image}
            width={200}
            height={300}
          ></Image>
        </div>
        <div className="card-body">
          <h2 className="text-3xl primary font-bold">{name}</h2>
          <p className="text-1xl text-white font-bold">{title}</p>
          <div className="card-actions justify-end">
            <button
              className="btn buttonColor textColor font-bold border border-green-400"
              onClick={openModal}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <Container>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Teacher Details"
        >
          <div className="text-center">
            <div className="flex justify-center items-center">
              <Image
                className="rounded-lg"
                src={image}
                width={500}
                height={300}
              ></Image>
            </div>

            <h2 className="text-3xl font-bold mt-3 primary">{name}</h2>
            <p className="text-2xl font-bold text-white mb-3 mt-3">{title}</p>
            <p className="text-1xl font-bold primary mb-4 ">{description}</p>
            {/* Add more details as needed */}
            <button
              className="btn border border-green-400  buttonColor textColor font-bold "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </Modal>
      </Container>
    </div>
  );
};

export default PopularTeacher;
