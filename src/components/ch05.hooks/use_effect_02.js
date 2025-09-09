import { useEffect, useState } from "react";

function App(){
    const imageSize = 300;
    const imagePath = `/images`;
    const [count, setCount] = useState(0);
    const [twiceCount, setTwiceCount] = useState(0);
    const [thirdPlusOne, setThirdPlusOne] = useState(0);
    const [image, setImage] = useState(`${imagePath}/americano01.png`);

    const imageList = [
        "americano01.png",
        "croissant_01.png",
        "french_baguette_01.png",
        "ciabatta_01.png"
    ];

    const TodoSomething = () => {
        console.log('카운터 값이 변경됨 : ' + count);
        setTwiceCount(count * 2);
        setThirdPlusOne(count * 3 + 1);
        const index = count % imageList.length;
        setImage(`${imagePath}/${imageList[index]}`);
    }
    // 최초 1회 화면 갱신(rendering)이 되고나서 count 값이 변경될 때마다 다시그리기(re-rendering)
    useEffect(TodoSomething, [count]);
    
    return(
        <div className="App">
            <table style={{border:'1px solid gray', width:100}}>
                <tbody>
                    <tr>
                        <td>카운터</td>
                        <td>{count}</td>
                    </tr>
                    <tr>
                        <td>2x</td>
                        <td>{twiceCount}</td>
                    </tr>
                    <tr>
                        <td>3x+1</td>
                        <td>{thirdPlusOne}</td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            {/* 화살표 함수를 직접 이벤트 속성에 작성 가능 */}
            <button onClick={() => {setCount(count + 1);}}>&nbsp;값 1 증가&nbsp;</button>
            <hr/>
            <div>
                <img src={image} alt="noimage" width={imageSize} height={imageSize} />
            </div>
        </div>
    );     
}

export default App ;