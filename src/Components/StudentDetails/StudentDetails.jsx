const StudentDetails = ({ userInfo }) => {
    console.log(userInfo);
    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle  ">
                <div className="modal-box bg-[#11162B] ">
                    <div className="flex">
                        <img src={userInfo.photo} alt="" className="w-1/2 h-1/2" />
                        <div className="text-white p-5">
                            <p>Name : {userInfo.name}</p>
                            <p>Category : {userInfo.category}</p>
                            <p>{userInfo.collage}</p>
                            <p>Batch : {userInfo.batch}</p>
                            <p>{userInfo.email}</p>
                            <p>My Exam : {userInfo.exam}</p>
                            <p>Mark : {userInfo.mark}</p>
                            <p>Rank : {userInfo.rank}</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default StudentDetails;