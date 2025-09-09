import { useEffect, useState } from "react";

function App(){
    /** picsum.photos + 타이머 사용 랜덤 이미지
    const imageSize = 200;
    const imagePath = `https://picsum.photos/${imageSize}`;
    const [count, setCount] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    useEffect( () => {
        setImageUrl(`?random=${count}`);
    }, [count]); // count 값이 변경될 때마다 호출

    // 1초마다 count 값을 1씩 증가시키는 타이머 설정
    useEffect( () => {
        const timer = setInterval( () => {
            setCount( (prevCount) => prevCount + 1 );
        }, 1000);
        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
    }, []); // 빈 배열: 마운트 시에만 실행

    return(
        <>
            <h1>카운터 : {count}</h1>
            <div>
                <img src={imagePath + imageUrl} alt="noimage" width={imageSize} height={imageSize} />
            </div>
        </>
    );
    */

    const imageSize = 200;
    const imagePath = `/images`;
    const interval = 1000; // 타이머를 위한 인터벌
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(`${imagePath}/americano01.png`);
    
    const imageList = [
        "americano01.png",
        "croissant_01.png",
        "french_baguette_01.png",
        "ciabatta_01.png",
        "brioche_01.png",
        "cappuccino01.png",
        "whitewine02.png",
        "vanilla_latte_01.png",
        "product_1739791262980.jpg",
        "brioche_05.png",
        "coffee01.png",
        "chocolate_cake_01.png",
        "juice01.png",
        "macaron01.png"
    ];
    /** 
    const SomeAction = () => {
        // console.log('타이머 동작 : ' + count);
        // 카운트 변수를 interval 간격으로 1씩 증가
        setCount(count + 1);

        // 배열 요소중 임의의 1개를 추출하여 이미지를 변경
        // Math.random() : 0이상 1미만의 임의의 실수 반환
        // Math.floor() : 소수점 이하 버림
        const index = Math.floor(Math.random() * imageList.length);
        setImage(`${imagePath}/${imageList[index]}`);
    }

    const MyTimer = () => {
        // setTimeout(동작, 인터벌) : 일정 시간 후에 동작 실행
        // setInterval(동작, 인터벌) : 일정 시간마다 동작 반복 실행
        setTimeout(SomeAction, interval);
    }

    useEffect(MyTimer, [count]);

    useEffect( () => {
        const index = count % imageList.length;
        setImage(`${imagePath}/${imageList[index]}`);
    }, [count]);
    */

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
            const index = Math.floor(Math.random() * imageList.length);
            setImage(`${imagePath}/${imageList[index]}`);
        }, interval);
    }, [count]);

    return(
        <>
            <h1>카운터 : {count}</h1>
            <div>
                <img src={image} alt="noimage" width={imageSize} height={imageSize} />
            </div>
        </>
    );
}

export default App ;