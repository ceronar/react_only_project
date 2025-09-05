import React, { useState } from "react";

function App(){
    const [selected, setSelected] = useState("");
    const data = {
        bread: ["식빵", "크루아상", "바게트", "치아바타", "크로아상", "브리오슈"],
        drink: ["콜라", "사이다", "주스"]
    };

    const ChangeEvent = (e) => {
        setSelected(e.target.value);
    }

    function handleItemClick(e) {
        alert(e.target.innerText); // 클릭된 <li>의 텍스트를 alert로 표시
    }
    
    return(
        <div className="App">
            <h2>콤보 체인지</h2>
            <select onChange={ChangeEvent}>
                <option value="">-- 선택하세요 --</option>
                <option value="bread">빵</option>
                <option value="drink">음료수</option>
            </select>
            <h2>클릭 이벤트 테스트</h2>
            <div>
                {/* 빵이면 ul */}
                {selected === "bread" && (
                <ul>
                    {data.bread.map((item, i) => (
                    <li key={i} onClick={handleItemClick}>{item}</li>
                    ))}
                </ul>
                )}

                {/* 음료수면 ol */}
                {selected === "drink" && (
                <ol>
                    {data.drink.map((item, i) => (
                    <li key={i} onClick={handleItemClick}>{item}</li>
                    ))}
                </ol>
                )}
            </div>
        </div>
    );     
}

export default App ;