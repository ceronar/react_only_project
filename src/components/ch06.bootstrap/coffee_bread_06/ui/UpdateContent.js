import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import './../css/FormStyle.css';
import { useState } from "react";

/**
 등록 화면과의 차이점
 1. 코멘트 : 등록 > 수정
 2. 수정할 상품 정보가 props로 넘어옴
 3. 각 입력 양식에 이전에 기입했던 정보를 미리 넣어주어야 함
    일반 양식은 value 속성에 명시하면 됨
    콤보 박스는 selected 속성에 명시하면 됨 or defaultValue 속성 or value도 가능
    라디오 버튼이나 체크 박스는 checked 속성에 명시
 */

function App(props){
    const comment = '수정'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법을 처리

    // 넘겨진 상품 정보를 관리하려 state로 값 할당
    const [formData, setFromData] = useState(props.product);

    /* 사용자가 submit 버튼을 눌러서,onSubmit event에 의해서 이 함수가 동작 */
    const SubmitData = (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작 방지
        console.log(formData);
        props.onSubmitUpdate(formData); // 부모 컴포넌트로 전달
    }

    // 이 함수(event handler)는 입력 양식의 값이 변경 될 때 마다 호출 
    const InputChange = (event) => {
        const {name, value} = event.target;
        console.log(`파라미터 이름 : ${name}, 새로운 값 : ${value}`);
        // 전개 연산자를 사용하여 과거 데이터를 보존하되, 바뀐 정보만 다시 갱신
        // previous 변수는 arrow function에서 정한 이전값을 표현하는 변수 (previous : 이전의) 다른이름도 가능
        setFromData((previous) => ({...previous, [name]:value}));
    }

    // categories 배열을 이용하여 동적 콤보 박스 생성
    // c는 카테고리 1개를 의미하는 변수
    const categoryOption = props.categories.map((c, i) => 
        (<option key={i} value={c.english}>{c.korean}</option>)
    );

    return(
        <div>
             <h2>상품 {comment}</h2>
             <form action="#" method="post" onSubmit={SubmitData}>
                <input type="hidden" id="id" name="id" value={formData.id} readOnly />
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="fakeId">상품번호</InputGroup.Text>
                    <Form.Control type="text" name="fakeId" value={formData.id} placeholder="상품번호" aria-label="fakeId" aria-describedby="fakeId" disabled></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="name">상품명</InputGroup.Text>
                    <Form.Control type="text" name="name" onChange={InputChange} value={formData.name} placeholder="상품명" aria-label="name" aria-describedby="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="price">가격</InputGroup.Text>
                    <Form.Control type="number" name="price" onChange={InputChange} value={formData.price} placeholder="가격" aria-label="price" aria-describedby="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="category">카테고리</InputGroup.Text>
                    <Form.Select aria-label="category" name="category" onChange={InputChange} defaultValue={formData.category} aria-describedby="category">
                        <option value="-">-- 카테고리 선택 --</option>
                        {categoryOption}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="stock">재고</InputGroup.Text>
                    <Form.Control type="number" name="stock" onChange={InputChange} value={formData.stock} placeholder="재고" aria-label="stock" aria-describedby="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="image">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" onChange={InputChange} value={formData.image} aria-label="image" aria-describedby="image" placeholder="파일명만 입력하세요. 예) bread01.png"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="description">설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description" onChange={InputChange} value={formData.description} placeholder="설명" aria-label="description" aria-describedby="description"></Form.Control>
                </InputGroup>
                <button type="submit" className="btn btn-primary">{comment}</button>
             </form>
        </div>
    );     
}

export default App ;