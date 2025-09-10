// 프로그램 모드(mode)에 따라서 화면을 분기해주는 스위치 앱

import Display from './Display';

function App(props){
    console.log(props.mode);
    
    switch(props.mode){
        case 'detail': // 상세보기 컴포넌트
            return <Display product={props.product} />;
        case 'insert': // 등록 컴포넌트
            return null; 
        case 'update': // 수정 컴포넌트
            return null; 
        case 'delete': // 삭제 컴포넌트
            return null; 
        default:
            return <div>상품을 선택하세요.</div>;
    }
}

export default App ;