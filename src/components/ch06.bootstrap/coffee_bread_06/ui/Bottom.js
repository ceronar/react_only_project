import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App(props){
    const ClickMenu = (event) => {
        /* 버튼의 id 속성에서 mode 값 불러오기 */
        const targetId = event.target.id;
        props.onClickToBottom(targetId);
    }
    return(
        <>
            <ButtonGroup className="mb-2" aria-label='Basic example'>
                <Button id="get_insert" variant='secondary' onClick={ClickMenu}>생성</Button>
                <Button id="get_update" variant='secondary' onClick={ClickMenu}>수정</Button>
                <Button id="get_delete" variant='secondary' onClick={ClickMenu}>삭제</Button>
                <Button id="get_category_add" variant='secondary' onClick={ClickMenu}>카테고리 추가</Button>
            </ButtonGroup>
            <br />
            {props.message}
        </>
    );     
}

export default App ;