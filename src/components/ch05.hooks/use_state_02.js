import { useState } from "react";

function App(){
    const imageSize = 120; // 이미지 사이즈

    /* 관리해야 할 상태(state) 정의 */
    const [model, setModel] = useState("sonata"); // 차량 생산
    const [color, setColor] = useState("blue"); // 차량 색상 영문 이름
    const [year, setYear] = useState(2024); // 차량 생산 년도
    const [image, setImage] = useState('sonata'); // 차량 이미지
    const [comment, setComment] = useState('나름 좋아요.'); // 연식에 따른 차량에 대한 코멘트

    // 중첩 배열을 사용한 Map 객체 정의
    const carMap = new Map([
        ['avante', '아반떼'],
        ['sonata', '소나타'],
        ['grandeur', '그랜저']
    ]);

    const colorMap = new Map([
        ['yellow', '노랑'],
        ['blue', '파랑'],
        ['red', '빨강'],
        ['green', '초록']
    ]);

    const ChangeTest = (event) => {
        const targetId = event.target.id;
        console.log('이벤트 발생 객체 id : ' + targetId);

        const targetValue = event.target.value;
        console.log('이벤트 타겟 값 : ' + targetValue);

        if (targetId === 'model') {
            setImage(targetValue);
            setModel(targetValue);
            // get(key) : key를 사용하여 해당 요소의 value를 반환받음
            // const message = `${carMap.get(targetValue)}(${targetValue})`
            // setModel(message);
        } else if (targetId === 'color') {
            setColor(targetValue);
        } else if (targetId === 'year') {
            setYear(targetValue);

            let mycomment = '';

            if (targetValue === '2025') {
                mycomment = '신차입니다.';
            } else if (targetValue === '2024') {
                mycomment = '나름 좋아요.';
            } else if (targetValue === '2023') {
                mycomment = '구형차입니다.';
            } else {

            }
            setComment(mycomment);
        } else {

        }
    }
    
    return(
        <div className="App drag-prevent">
            <h1>내 차 정보</h1>
            <p>차종은 이미지 변경이 되고, 색상은 설명 문구의 색상이 변경됩니다.</p>
            <br/><br/>
            {/* entity는 html에서 특수 문자를 표현하는 기법으로, 규칙을 정해 놓은 문자열이 있다. */}
            차종 변경 : &nbsp;
            <select id="model" value={model} onChange={ChangeTest}>
                <option value="avante">아반떼</option>
                <option value="sonata">소나타</option>
                <option value="grandeur">그랜저</option>
            </select>
            <br/><br/>
            색상 변경 : &nbsp;
            <select id="color" value={color} onChange={ChangeTest}>
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
                <option value="red">빨강</option>
                <option value="green">초록</option>
            </select>
            <br/><br/>
            생산 년도 : &nbsp;
            <select id="year" value={year} onChange={ChangeTest}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br/><br/>
            <p >
                <span style={{color:color, fontWeight:'bold'}}>{colorMap.get(color)}</span> 색상의 {year} 년산 {carMap.get(model)}({model}) 모델 <br/>
                <br/>
                {comment}
            </p>
            <img src={`/images/${image}.png`} alt="차량 이미지" width={imageSize} height={imageSize}/>
        </div>
    );     
}

export default App ;