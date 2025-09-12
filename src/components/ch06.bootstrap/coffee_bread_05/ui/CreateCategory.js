import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import './../css/FormStyle.css';

function App(props){
    const comment = '추가'; // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법을 처리

    /* 사용자가 submit 버튼을 눌러서,onSubmit event에 의해서 이 함수가 동작 */
    const SubmitData = (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작 방지
        const formData = e.target; // 전송된 폼 양식 객체 정보
        props.onSubmitCategoryAdd(formData); // 부모 컴포넌트로 전달
    }

    return(
        <div>
             <h2>카테고리 {comment}</h2>
             <form action="#" method="post" onSubmit={SubmitData}>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="english">영문 이름</InputGroup.Text>
                    <Form.Control type="text" name="english" placeholder="영문 이름" aria-label="english" aria-describedby="english"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text id="korean">한글 이름</InputGroup.Text>
                    <Form.Control type="text" name="korean" placeholder="한글 이름" aria-label="korean" aria-describedby="korean"></Form.Control>
                </InputGroup>
                <Button type="submit" className="btn btn-primary">{comment}</Button>
             </form>
        </div>
    );     
}

export default App ;