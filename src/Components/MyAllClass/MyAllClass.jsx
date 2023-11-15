
import { useEffect, useState } from 'react';
import Container from '../Container/Container';

const MyAllClass = () => {
    const classes = [
        {
            "_id": "6552ebc8221b6bbd611eb5c0",
            "name": "Shamim Hossain",
            "email": "shamimhossain01617@gmail.com",
            "subject": "Bangla 2nd Paper",
            "status": false,
            "time": "12Am",
            "limit": 20,
            "price": 500,
            "description": "Don't miss it.",
            "image": "https://firebasestorage.googleapis.com/v0/b/fractos-4a8cb.appspot.com/o/fractos%2Fbangla3.jfif-1699620114898-uk596o6wj8?alt=media&token=e6b373ef-5144-4af7-b4e1-45988d3c5fbc",
            "user": "654e0fc26e82ef4f0fb1629d",
            "createdAt": "2023-11-10T12:42:21.751Z",
            "updatedAt": "2023-11-14T07:53:44.286Z",
            "__v": 0
        },
        {
            "_id": "654b0dce5b79dbc6b388b036",
            "name": "Shamim Hossain",
            "email": "shamimhossain01617@gmail.com",
            "password": "",
            "role": "user",
            "category": "student",
            "batch": "",
            "phone": 0,
            "photo": "https://firebasestorage.googleapis.com/v0/b/fractos-4a8cb.appspot.com/o/fractos%2FIMG-4039.jpg-1699586747296-58yo502e5g?alt=media&token=94467c56-9904-417c-b0fe-d468122c0c90",
            "collage": "",
            "about": "",
            "rank": 2100,
            "mark": 210,
            "exam": 4,
            "__v": 0
        },
        {
            "_id": "65530fa8221b6bbd611efbc8",
            "name": "Md Shanto hosain",
            "email": "shanto@gmail.com",
            "subject": "Basic Science",
            "status": false,
            "time": "25 Week",
            "limit": 250,
            "price": 320,
            "description": "A basic science class typically refers to an introductory course that covers fundamental principles and concepts in various scientific disciplines. These classes are often designed to provide students with a foundational understanding of the scientific method, basic scientific concepts, and the principles that underlie various branches of science. The specific content and focus of a basic science class can vary depending on the educational level and institution, but here are some common elements you might find in such a class:", "image": "https://firebasestorage.googleapis.com/v0/b/fractos-4a8cb.appspot.com/o/fractos%2Fclass-3.jpg-1699556522334-j2btqirtji?alt=media&token=7382e8c9-245c-4165-ba12-d292976b1296",
            "user": "654d2b0197a0655c75d1aa1b",
            "createdAt": "2023-11-09T18:57:41.348Z",
            "updatedAt": "2023-11-14T06:11:52.898Z", "__v": 0
        },
        {
            "_id": "65530f4d221b6bbd611efac2",
            "name": "Md Shanto hosain",
            "email": "shanto@gmail.com",
            "password": "Shanto@gmail.com3",
            "role": "user",
            "category": "student",
            "batch": "",
            "phone": 0,
            "photo": "",
            "collage": "",
            "about": "",
            "rank": 300,
            "mark": 30,
            "exam": 3,
            "__v": 0
        },
        {
            "_id": "655327872d2cd885efc0178c",
            "name": "Ratri",
            "email": "ratri@gmail.com",
            "subject": "Bangla 2nd Paper",
            "status": false,
            "time": "12Am",
            "limit": 20,
            "price": 500,
            "description": "Don't miss it.",
            "image": "https://firebasestorage.googleapis.com/v0/b/fractos-4a8cb.appspot.com/o/fractos%2Fbangla3.jfif-1699620114898-uk596o6wj8?alt=media&token=e6b373ef-5144-4af7-b4e1-45988d3c5fbc",
            "user": "654e0fc26e82ef4f0fb1629d",
            "createdAt": "2023-11-10T12:42:21.751Z",
            "updatedAt": "2023-11-14T07:53:44.286Z",
            "__v": 0
        },
        {
            "_id": "65530cc8467fa7343cadf0ca",
            "name": "Ratri",
            "email": "ratri@gmail.com",
            "password": "Ratri1@",
            "role": "user",
            "category": "student",
            "batch": "",
            "phone": 0,
            "photo": "",
            "collage": "",
            "about": "",
            "rank": 0,
            "mark": 0,
            "exam": 0,
            "__v": 0
        }
    ]
    return (
        <Container>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-4'>
            {
                classes.map(item =>
                    <div className="card glass">
                        <figure className='w-full'>
                            <img src={item.image} className='w-full h-72 p-3'/>
                        </figure>
                        <div className="card-body font-bold">
                            <p className="">Name : <small>{item.name}</small></p>
                            <p className="">Email : <small>{item.email}</small></p>
                            <p className="">Subject :<small> {item.subject}</small></p>
                            <p className="">Time : <small>{item.time}</small></p>
                            <p className="">Limit : <small>{item.limit}</small></p>
                            <p className="">Price : <small>{item.price}</small></p>
                        </div>
                    </div>)
            }
        </div>
        </Container>
    );
};

export default MyAllClass;