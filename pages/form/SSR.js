// async 로 해서 부르는 axios(CSR)와 다르게 
// SSR(side server randering)은 코딩이 시작되고나서 부터 바로 링크의 정보를 불러온다 (속도 up)
// 크롤러: SSR 데이터들을 수집하는 bot?(검색 엔진들마다 가지고 있음)
//         크롤링을 통해 데이터를 수집, 암호화되어있지 않은 data들을 수집한다.

import axios from "axios"

// 크롤러에게 크롤링 되려면, SSR로만 해야한다.(랜더링 되기 전에부터 데이터가 bg에 있어야 함.)


function ApiResponse({categories}){
    console.log('api response')
    console.log(categories)

    return <>

    <button onClick={e=>asyncback(url)}>asyncback! 
    </button>

    {categories.map((category,index)=>{
        return <div key={index}>
            <div style={{backgroundColor: 'blue', color: 'white'}}>
            {category.title}
            </div>
            <br/>
            <br/>
            <br/>

            {category.courses.map((course,index)=>{
                return <div key={course.id}>
                    <div style={{backgroundColor: 'red', display: "inline-block", color: "black"}}>
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

export async function getServerSideProps(){ //SSR function
    const url=await axios.get('https://api.ringleplus.com/api/v4/student/landing/course?locale=en')
    const categories= url.data.categories
    return{
        props: {categories: categories} //categories 는 이제 state 가 아님
    }
}

export default ApiResponse