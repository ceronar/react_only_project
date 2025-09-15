import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

function App(props){
    const categoryMap = Object.fromEntries(props.categories.map(c => [c.english, c.korean]));

    /** 테이블 특정 행의 셀 한개를 클릭 */
    const ClickItem = (e) => {
        const itemId = e.currentTarget.id;  // 클릭된 행의 id 속성값
        if (props.onClickToContent) {
            props.onClickToContent(itemId);
        }
    };

    const ProductList = () => {
        return(
            <tbody>
                {props.contents.map((item, index) => (
                    <tr id={item.id} key={index} onClick={ClickItem} style={{ cursor: 'pointer' }}>
                        <td align='center'>{item.name}</td>
                        {/* 숫자 형식으로 바꾼 후 3자리마다 , 추가*/}
                        <td align='right'>{Number(item.price).toLocaleString()} 원</td>
                        <td align='center'>{categoryMap[item.category] || item.category}</td>
                    </tr>
                ))}
            </tbody>
        );
    };
    
    /* 사용자가 드롭다운 버튼 클릭. 상위 컴포넌트에게 정렬 방식 전달 함수 */
    const ClickButtonGroup = (event) => {
        event.preventDefault(); // 이벤트 전파 동작 방지
        const target_id = event.target.id; // 이벤트 동작을 일으킨 요소의 id 정보

        // orderColumnList : 정렬할 컬럼 정보 배열
        const orderColumnList = ['name', 'price', 'category'];

        // 클릭한 항목의 id가 orderColumnList 배열에 포함이 되어있으면 true
        const isColumn = orderColumnList.includes(target_id);

        // 넘어온 onOrderByClick 프롭스에 '정렬 할 컬럼', '정렬 방식'을 각각 전송
        if(isColumn) { // 정렬 할 컬럼 선택
            props.onOrderByClick(target_id, props.orderInfo.ordering);
        } else { // 정렬 방식 선택
            props.onOrderByClick(props.orderInfo.column, target_id);
        }
    }

    // 여러곳에서 사용되는 문구는 상수(constant) 상태로 재활용 
    const OrderColumn = '정렬 할 컬럼'
    const OrderType = '정렬 방식';

    /* 필드 검색 */
    /* 넘겨받은 카테고리 정보를 이용하여 동적으로 콤보박스에 들어갈 목록 생성 */
    const categoryOption = props.categories.map((c, i) => 
        (<option key={i} value={c.english}>{c.korean}</option>)
    );

    // 사용자가 콤보박스의 카테고리 항목을 Change
    const ChangedComboItem = (event) => {
        const changedCategory = event.target.value;
        // change와 관련된 프롭스에게 해당 카테고리 정보(영문)를 넘겨줌
        props.onChangeCategory(changedCategory);
    }

    return(
        <>
            <Table>
                <tbody>
                    <tr>
                        <td width="10%" valign='middle'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderColumn}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성으로 어떤 항목이 클릭 되었는지 파악 */}
                                    {/* 일반적으로 id 속성의 값은 영문 컬럼으로 명명하는 것이 편리 */}
                                    <Dropdown.Item id='name' onClick={ClickButtonGroup}>이름</Dropdown.Item>
                                    <Dropdown.Item id='price' onClick={ClickButtonGroup}>가격</Dropdown.Item>
                                    <Dropdown.Item id='category' onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign='middle'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성의 이름은 데이터 베이스 정렬과 관련된 용어를 사용함 */}
                                    <Dropdown.Item id='asc' onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                                    <Dropdown.Item id='desc' onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign='middle'>
                            <ListGroup key='sm' horizontal className="my-2">
                                <ListGroup.Item>{OrderColumn} : {props.orderInfo.column}</ListGroup.Item>
                                <ListGroup.Item>{OrderType} : {props.orderInfo.ordering}</ListGroup.Item>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <Form.Select name='category' action="#" method="post" onChange={ChangedComboItem}>
                    <option value="all">전체 보기</option>
                    {categoryOption} {/* 동적으로 생성된 콤보 아이템들 */}
                </Form.Select>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                {/* 화살표 함수를 사용하여 상품 목록을 만들어 준다. */}
                {ProductList()}
            </Table>
        </>
    );
}

export default App ;