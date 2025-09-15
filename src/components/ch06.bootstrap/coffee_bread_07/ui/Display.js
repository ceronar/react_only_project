import Table from 'react-bootstrap/Table';

import './../css/Display.css';

function App(props){
    // props.product : 상세보기 할 상품 객체
    if (!props.product) {
        return <div>상품을 선택하세요.</div>;
    }

    const categoryMap = Object.fromEntries(props.categories.map(c => [c.english, c.korean]));
    
    return(
        <div className='mytable'>
            <Table bordered>
                <thead>
                    <tr>
                        <th width="40%" align='center'>상품 상세 정보</th>
                        <th width="30%" align='center'>상품 이미지</th>
                        <th width="30%" align='center'>상품 설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="40%" align='center'>
                            <Table striped bordered>
                                <tbody>
                                    <tr>
                                        <td width="50%" className='myleft'>상품번호</td>
                                        <td className='mymiddle'>{props.product.id}</td>
                                    </tr>
                                    <tr>
                                        <td className='myleft'>상품명</td>
                                        <td className='mymiddle'>{props.product.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='myleft'>단가</td>
                                        <td className='mymiddle'>{Number(props.product.price).toLocaleString()} 원</td>
                                    </tr>
                                    <tr>
                                        <td className='myleft'>카테고리</td>
                                        <td className='mymiddle'>{categoryMap[props.product.category] || props.product.category}</td>
                                    </tr>
                                    <tr>
                                        <td className='myleft'>재고</td>
                                        <td className='mymiddle'>{Number(props.product.stock).toLocaleString()} 개</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                        <td width="30%" align='center'>
                            <img className='myimage' src={'/images/'+props.product.image} alt={props.product.name} />
                        </td>
                        <td width="30%" align='center'>
                            <p className='mydescription'>
                                {props.product.description}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );     
}

export default App ;