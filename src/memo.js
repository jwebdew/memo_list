
/* 데이터추가/삭제 p.165 ~ p169 */
 
import { useState } from "react";
const Memo = () => {
    const [inputText, setinputText] = useState(''); 
       //inputText 현재 입력받는 값
    
    const [listText, setlistText] = useState([]);
    //listText 입력받는 inputText의 집합체

    const onChange = (e) => {
        setinputText(e.target.value)
    }

    const onClick = (e) => {
        //새로고침 방지
        e.preventDefault();

        //inputText에 빈내용이라면 추가할 필요없이 빠져나옴
        if(inputText === '') {
            return
        }

        //concat 함수 : 기존배열은 변경하지 않고
        //새로운 배열 추가
        const nextName = listText.concat({
            id : listText,
            text : inputText
        })
        setlistText(nextName)

        console.log(nextName)

        // setlistText((current) => [inputText, ...current])
        //기존 배열에 새로운 값 추가
        setinputText('') 
    }
    
    const textRemove = (idx) => {

        //!== 숫자2, 문자2같지 않다.(참 ) 
        //=== 
        //2 == '2' 참
        //2 === '2' 거짓
         setlistText((listText) => listText.filter((inputText) => inputText.id !== idx))
        //filter() 함수
        //새로운 배열을 만든 후 모든 요소를 모아서
        //새로운 배열안에 적용
    }



    //p.162 map함수 사용 시 key값 필수적용
    //listText.map((item, index) => ...)
    //item 추가되는 배열
    //index key값
    const listTextItem = listText.map(item => 
            <li key={item.id}>{item.text}<span onClick={()=> {
                    textRemove(item.id)
                }}></span>
            </li>
    )

   

    return (
        <div className="list">
            <h2>memo list🚗</h2>
            <form onSubmit={onClick}>
                <input 
                    type="text" 
                    placeholder="입력해주세요" 
                    value={inputText}
                    onChange={onChange}
                />
                <button>등록</button>                
            </form>
            <ul>{listTextItem}</ul>
        </div> /* list */ 
    )
}

export default Memo;