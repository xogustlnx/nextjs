// How to flex

export default function Sample() {

    return <>sample
    <div style={{
        backgroundColor: "red", //배경색
        border: '3px solid green' , //배경테두리 색상과 실/점선
        border: '3px dotted black' ,
        borderRadius: 20,  //테두리 곡률
        // borderTopLeftRadius: 10, //위 왼쪽 테두리 곡률
        // borderTopRightRadius:10, //위 오른쪽 테두리 곡률
        width: 100, //너비 설정
        height: 100,
        padding: 10, //안으로 들어가는것(content가 background로 부터 얼마나 들어가있냐)
    }}>box: 꽉차있음(block)</div>

    <div style={{
        backgroundColor: "red", 
        border: '3px solid green' , 
        border: '3px dotted black' ,
        borderRadius: 20,  
        // borderTopLeftRadius: 10, 
        // borderTopRightRadius:10,
        width: 100, 
        height: 100,
        padding: 10, 
        marginTop: 20, //위로부터 띄우기
    }}>box: 꽉차있음(block)</div>

    <span style={{
        fontSize : 30,
    }}>text: 비어있음(자기 자리만) </span>

<span style={{
        fontSize : 30,
        marginLeft : 20
    }}>text: 비어있음(자기 자리만) </span>
    </>
}