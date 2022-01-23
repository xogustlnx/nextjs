
import { useEffect, useState } from "react"
import axios from "axios"

export default function apiresponse(){
    const [cnt, setCnt] = useState(0)
    const [anotherState, setAnotherState]=useState(0)

    const [categories, setCategories] =useState([])
    const url='https://api.ringleplus.com/api/v4/student/landing/course?locale=en'
    
    //useEffect(()=>{실행될 놈},[state]) //state가 바뀔 때마다 실행될 놈 실행
    // state에 빈배열 -> 처음 한번 실행, 배열 X => 리랜더링 될때마다 실행, 배열 존재-> 배열 바뀔 때마다 실행
    //https://api.ringleplus.com/api/v4/student/landing/course?locale=en
    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         alert('haha')
    //     },2000)
    // },[cnt])

    // useEffect(()=>{
    //     alert('hi')
    // },[anotherState])


    const asyncback=(url)=>{ //url을 axios 로 받아와서 잘 하기
        axios.get(url)
        .then(response=>{
            console.log(response.data)
            setCategories(response.data.categories)
        })
    }

    // useEffect(()=>{
    //     asyncback()
    // }, [])
    
    return <>
    
    <button onClick={e=>setCnt(cnt=>cnt+1)}>++{cnt}</button>

    <button onClick={e=>asyncback(url)}>asyncback! 
    </button>

    {categories.map((category,index)=>{
        return <div key={index}>
            {category.title}
            <br/>
            <br/>
            <br/>

            {category.courses.map((course,index)=>{
                return <div key={course.id}>
                    <div style={{backgroundColor: 'red', display: "inline-block"}}>
                    {course.id}.{course.subtitle}
                    </div>
                    <br/>
                    <img src={course.image_url} style={{width: 300, height:150, }}></img>
                    <br/>
                    <br/>
                    <br/>


                    </div>
            })}
        </div>
    })}
    
    </>
}