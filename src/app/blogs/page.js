'use client'
import AllBlogs from "@/Components/Blog-Post/AllBlogs/AllBlogs"
import Featured from "@/Components/Blog-Post/Read-Blog-Post/Featured"


export default function blogs() {
    return (
        <>
        <div>
            <p className="text-blue-700 font-bold text-4xl ml-20 py-8 ">Featured</p>
            <Featured></Featured>
            <AllBlogs></AllBlogs>
        </div>
        </>
    )}