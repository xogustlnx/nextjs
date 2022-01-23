import styles from '../../styles/Home.module.css'
import axios from 'axios'

export default function Sample() {
    //flex로 박스 세개의 관계를 만들기
    
    return<>


    <dev style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'pink',
        position: 'relative' //flex의 position도 지정(본인 기준이다)

    }}>
        <div style={{
            width: 100,
            height: 100,
            backgroundColor:'red',
        }}>
            display
        </div>
        <div style={{
            width: 100,
            height: 100,
            backgroundColor:'gold',
            flex: 5, //flex는 같은 flex를 공유한 얘들끼리 bg를 비율로 배분한다.
        }}>
            display1
        </div>

        <div style={{
            width: 100,
            height: 100,
            backgroundColor:'',
            flex: 10,
        }}>
            display2
        </div>

        <div style={{
            position: "absolute", // position: absolute는 flex의 기준 0,0에서 시작
            left: 100, //left, top 조정 가능
            top:1000,
            }}> 
            안녕하세요 저는 신태현입니다
        </div>
        <div style={{
            position: "absolute", // position: absolute는 flex의 기준 0,0에서 시작
            left: 0, //left, top 조정 가능
            bottom: 20,
            }}> 
            안녕하세요 저는 신태현입니다
        </div>

    </dev>
    <div style={{display: 'flex', //세 박스를 하나의 flex로 묶기
    justifyContent: 'flex-start', //앞에 정렬
    justifyContent: "flex-end",  //뒤에 정렬
    justifyContent: "center", //중앙 정렬
    justifyContent: "space-between", //앞 중간 끝 정렬
    justifyContent: "space-around",// 앞 중간 끝을 중간쪽으로 모으기
    justifyContent: "space-evenly", //더 중간쪽으로 모으기

    flexDirection: "column", // 세로로 정렬 (기본값이 row)
    // height: 500, //height 값을 줘야 세로로 작동
    
    backgroundColor: "green", //flex 의 bgcolor

    flexDirection: "row",

    alignItems: "flex-start",// 아이템들을 위정렬
    alignItems: "flex-end",//아이템들의 아래정렬
    alignItems: "center" //아이템들 중간 정렬

    }}> 
        <div style={{
            width: 100,
            height: 100,
            backgroundColor:'red',
        }}>
            box1
        </div>
        <div style={{
            width: 100,
            height: 150, 
            backgroundColor:'red',
        }}>
            box2
        </div>
        <div style={{
            width: 100,
            height: 200,
            backgroundColor:'red',
        }}>
            box3
        </div>
    </div>

    
    <hr/>

    <div 
    className={styles.flottingBtn}>
        +
    </div>


    <div style={{ //스크롤 내려도 안움직이는 막대 만들기
        position: "fixed", //position을 fix를 하면, 스크롤을 내려도 안바뀜
        bottom: 0,
        height: 50,
        width: '100%',

        backgroundColor: "gold",

        cursor: 'pointer', //커서 대면 커서가 포인터로 바뀜
    }}>
        +
    </div>
    </>
}