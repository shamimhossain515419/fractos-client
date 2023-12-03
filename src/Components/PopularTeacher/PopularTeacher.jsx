
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import "./PopularTeacher.css";
import Container from "../Container/Container";

const PopularTeacher = ({ teacher }) => {

  // console.log(teacher);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="border border-green-400  h-full  primaryBg w-full shadow-xl rounded-lg">
        <div className="images max-h-[3000px]">
          <Image
            className="rounded-tl rounded-tr h-[300px] img"
            src={teacher?.image ? teacher?.image : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"}
            width={200}
            height={300}
            alt="image"
          ></Image>
        </div>
        <div className="card-body">
          <h2 className="text-3xl  capitalize primary font-bold">{teacher?.name}</h2>
          <p className="text-1xl text-white font-bold">{teacher?.title?.slice(0,35)}...</p>
          <div className="card-actions justify-end">
            <button
              className="btn buttonColor   hover:text-white duration-100 textColor font-bold border border-green-400"
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
          className=" w-full lg:w-[200]"
        >
          <div className="text-center  ">
            <div className="flex justify-center items-center">
              <Image
                className="rounded-lg"
                src={teacher?.image ? teacher?.image : "https://i.ibb.co/XpNhB9s/beautiful-woman-avatar-character-icon-free-vector.jpg"}
                width={500}
                height={300}
                alt="image"
              ></Image>
            </div>

            <h2 className="lg:text-3xl md:text-2xl sm:text-1xl font-bold mt-3 primary capitalize">{teacher?.name}</h2>
            <p className="lg:text-2xl md:text-2xl sm:text-xl font-bold text-white mb-3 mt-3">{teacher?.title}</p>
            <p className="text-1xl font-bold primary mb-4 ">{teacher?.description}</p>
            
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
