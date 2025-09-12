import Table from 'react-bootstrap/Table';

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
        
    return(
        <>
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