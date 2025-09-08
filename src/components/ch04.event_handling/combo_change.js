import React, { useState } from "react";

function App(){
    const [selected, setSelected] = useState("");
    const [selectedImage, setSelectedImage] = useState(""); // 선택된 이미지 저장
    const data = [
        { id: 1, name: "식빵", img: "product_1739791262980.jpg", type: "bread" },
        { id: 2, name: "크루아상", img: "croissant_01.png", type: "bread" },
        { id: 3, name: "바게트", img: "french_baguette_01.png", type: "bread" },
        { id: 4, name: "치아바타", img: "ciabatta_01.png", type: "bread" },
        { id: 5, name: "브리오슈", img: "brioche_01.png", type: "bread" },
        { id: 6, name: "카푸치노", img: "cappuccino01.png", type: "drink" },
        { id: 7, name: "와인", img: "whitewine02.png", type: "drink" },
        { id: 8, name: "라떼", img: "vanilla_latte_01.png", type: "drink" },
    ];

    const ChangeEvent = (e) => {
        setSelected(e.target.value);
        setSelectedImage(""); // 카테고리 바꿀 때 이미지 초기화
    }

    // 선택된 타입에 맞는 데이터만 필터링
    const filteredData = data.filter(item => item.type === selected);

    function handleItemClick(img, e) {
        setSelectedImage(img);
        // alert(e.target.innerText); // 클릭된 <li>의 텍스트를 alert로 표시
    }
    
    return(
        <div className="App drag-prevent">
            <table>
                <tbody>
                    <tr>
                        <td height={50}>
                            <b>콤보 체인지</b>
                        </td>
                        <td rowSpan={4} width={310} height={310}>
                            <img id="large_image" src={"/images/"+selectedImage || ""} alt="noimage" width={300} height={300} />
                        </td>
                    </tr>
                    <tr>
                        <td height={50}>
                            <select onChange={ChangeEvent}>
                                <option value="">-- 선택하세요 --</option>
                                <option value="bread">빵</option>
                                <option value="drink">음료수</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td height={50}>
                            <b>클릭 이벤트 테스트</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {/* 빵이면 ul */}
                            {selected === "bread" && (
                            <ul>
                                {filteredData.map((item) => (
                                <li key={item.id} onClick={(e) => handleItemClick(item.img, e)}>{item.name}</li>
                                ))}
                            </ul>
                            )}

                            {/* 음료수면 ol */}
                            {selected === "drink" && (
                            <ol>
                                {filteredData.map((item) => (
                                <li key={item.id} onClick={(e) => handleItemClick(item.img, e)}>{item.name}</li>
                                ))}
                            </ol>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );     
}

export default App ;