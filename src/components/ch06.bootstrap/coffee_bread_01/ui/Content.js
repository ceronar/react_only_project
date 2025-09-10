import Table from 'react-bootstrap/Table';

function App(props){
    const categoryMap = {
        bread: '빵',
        beverage: '음료수',
    };
    const ProductList = () => {
        return(
            <tbody>
                {props.contents.map((item) => (
                    <tr key={item.id}>
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