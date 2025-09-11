import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import './../css/FormStyle.css';

function App(props){
    /* 사용자가 submit 버튼을 눌러서,onSubmit event에 의해서 이 함수가 동작 */
    const SubmitData = (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작 방지
        const formData = e.target; // 전송된 폼 양식 객체 정보
        props.onSubmitInsert(formData); // 부모 컴포넌트로 전달
    }

    return(
        <div>
             <h2>상품 등록</h2>
             <form action="#" method="post" onSubmit={SubmitData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="name">상품명</InputGroup.Text>
                    <Form.Control type="text" name="name" placeholder="상품명" aria-label="name" aria-describedby="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="price">가격</InputGroup.Text>
                    <Form.Control type="number" name="price" placeholder="가격" aria-label="price" aria-describedby="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="category">카테고리</InputGroup.Text>
                    <Form.Select aria-label="category" name="category" aria-describedby="category" defaultValue="-">
                        <option value="-">-- 카테고리 선택 --</option>
                        <option value="bread">빵</option>
                        <option value="beverage">음료수</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="stock">재고</InputGroup.Text>
                    <Form.Control type="number" name="stock" placeholder="재고" aria-label="stock" aria-describedby="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="image">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" aria-label="image" aria-describedby="image" placeholder="파일명만 입력하세요. 예) bread01.png"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="description">설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description" placeholder="설명" aria-label="description" aria-describedby="description"></Form.Control>
                </InputGroup>
                <button type="submit" className="btn btn-primary">등록</button>
             </form>
        </div>
    );     
}

export default App ;