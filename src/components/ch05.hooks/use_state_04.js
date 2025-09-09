import { useState } from "react";

function App(){
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [nextId, setNextId] = useState(0); // 신규 아이디 관리

    // 회원 명단(사실 이 데이터는 SpringBoot에서 가져오는 것이 맞음)
    const [members, setMembers] = useState([
        {id:1, name:'홍길동', age:20},
        {id:2, name:'김철수', age:30},
        {id:3, name:'박영희', age:25},
        {id:4, name:'최민수', age:40}
    ]);
    const NameChange = (event) => {
        const targetValue = event.target.value;
        setName(targetValue);
    }
    const AgeChange = (event) => {
        const targetValue = event.target.value;
        setAge(targetValue);
    }

    const AddMember = () => {
        // members 배열에서 id 항목들만 추출
        // 결과가 객체로 반환되므로 ... 전개 연산자를 사용하여 배열로 변환
        // max() 함수는 배열에서 가장 큰 값을 반환
        const newNextId = members.length > 0 ? Math.max(...members.map(m => m.id)) + 1 : 1;
        // 신규 id와 입력한 데이터를 이전 배열 member에 추가
        // concat() : 배열에 요소를 추가하여 새로운 배열을 반환
        const newMembers = members.concat({ id:newNextId, name: name, age: age});
        setMembers(newMembers);
        // 입력 양식 초기화
        setName('');
        setAge(0);
        // 다음 추가를 위하여 식별자 번호를 1 증가
        setNextId(newNextId + 1);
    }
    const DeleteMember = (event) => {
        const targetId = event.target.id;
        console.log('데이터 타입 확인 : ' + typeof targetId); // 타입 주의
        console.log('선택한 항목 id : ' + targetId);
        // 제거를 위해 선택한 항목을 제외하고, 나머지를 필터링 하여 새로운 배열 생성
        // filter() : 특정 조건을 만족하는 요소만 추출하여 새로운 배열을 반환
        const filteredMembers = members.filter( (member) => member.id !== Number(targetId) );
        setMembers(filteredMembers);
    }
    // 회원 목록을 li 태그로 변환
    const memberList = members.map( (member) => (
        <li id={member.id} key={member.id} onDoubleClick={DeleteMember}> {member.name}({member.age})</li>
    ));
    
    return(
        <div className="App drag-prevent">
            <label>이름 : &nbsp;&nbsp;<input type="text" id="name" value={name} onChange={NameChange} /></label> 
            <br/><br/>
            <label>나이 : &nbsp;&nbsp;<input type="number" id="age" value={age} onChange={AgeChange} /></label>
            <br/><br/>
            <button onClick={AddMember}>추가</button>
            <br/><br/>
            <h3>회원 목록</h3>
            <ul>
                {memberList}
            </ul>
        </div>
    );
}

export default App ;