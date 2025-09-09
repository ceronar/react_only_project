import { useEffect, useState } from "react";

function App(){
    // https://jsonplaceholder.typicode.com/photos
    // 해당 사이트에서 다운 받은 정보를 저장할 비어 있는 배열
    const [receivedData, setReceivedData] = useState([]);
    const DataList = () => {
        // slice() : 배열의 일부를 추출하여 새로운 배열 생성
        // 0번째 이상 20번째 미만 요소 추출
        const sliceArray = receivedData.slice(0, 20); // 20개 항목만 표시
        // 데이터 불러오기
        const listItems = sliceArray.map( (data) => (
            /** https://jsonplaceholder.typicode.com/posts
            <div key={data.id} style={{border:'1px solid gray', margin:10, padding:10}}>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
            </div>
            */
            <li key={data.id}>{data.title} (<a href={data.url}>{data.url}</a>)</li>
        ));
        // return listItems.length > 0 ? listItems : <p>데이터가 없습니다.</p>;
        return listItems.length > 0 ? <ol>{listItems}</ol> : <p>데이터가 없습니다.</p>;
    }

    const GetUrlData = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
        .then( (response) => {
            // console.log(response); // response 객체 확인
            return response.json(); // json() 메서드는 프로미스를 반환
        })
        .then( (json) => {
            console.log(json); // json 데이터 확인
            setReceivedData(json); // json 데이터를 상태로 저장
        })
        .catch( (error) => {
            console.log('데이터를 가져오는 중 오류 발생 : ' + error);
        });
    }

    // 두번째 매개변수가 빈 배열이면 최초 1회만 실행
    useEffect(GetUrlData, []);
    
    return(
        <div className="App drag-prevent">
            <DataList/>
        </div>
    );     
}

export default App ;