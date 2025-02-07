import Front from "@/hoc/layout/front";
import {useEffect, useState} from "react";

const videoURL = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
const imgURL = "https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const videoUrlLong = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
const json = "https://jsonplaceholder.typicode.com/posts"

const getImageData = async (callback) => {
    let completed = false
    const res = await fetch(imgURL);
    const fileSize = Number(res.headers.get('Content-Length'))


    const reader = res.body.getReader();

    while (!completed) {
        const {done, value} = await reader.read();
        const currentContentSize = value?.length;

        if(value) {
            console.log(value)

            // callback(currentContentSize, fileSize)
            console.log(currentContentSize)
        }

        completed = done
    }

    console.log('completed !!!')
}

const Homepage = () => {
    const progress = (value, size) => console.log((value / size) * 100)
    useEffect(() => {
        getImageData(progress)
    }, [])


    return (
        <Front>
            <div className="bg-black p-8 text-xl items-center justify-center min-h-screen b-black">
                <img alt="Sample Image"
                     style={{
                         width: "100%"
                     }}/>
            </div>
        </Front>
    );
};

export default Homepage;
