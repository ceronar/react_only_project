// 프로그램 모드(mode)에 따라서 화면을 분기해주는 스위치 앱
import Display from './Display';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

function App(props){
    console.log('Switcher props.mode : ' + props.mode);

    const onSwitchInsert = (formData) => {
        props.onSubmitInsert(formData); // 부모 컴포넌트로 전달
    }

    const onSwitchUpdate = (formData) => {
        props.onSubmitUpdate(formData);
    }
    
    switch(props.mode){
        case 'read': // 읽기 모드
            return <div />

        case 'detail': // 특정 상품 상세보기
            return <Display product={props.product} />;

        case 'get_insert': // 상품 등록 화면으로 이동
            return <CreateContent onSubmitInsert={onSwitchInsert} />;

        case 'get_update': // 상품 수정 화면으로 이동
            /** product는 이전에 사용자가 입력했던 데이터로써, 수정하고자 하는 정보  */
            return <UpdateContent product={props.product} onSubmitUpdate={onSwitchUpdate} />;

        case 'get_delete': // 상품 삭제 화면으로 이동
            return //<DeleteContent />;

        case 'get_category_add': // 카테고리 추가 화면으로 이동
            return //<AddCategory />;

        default:
            return <div>상품을 선택하세요.</div>;
    }
}

export default App ;