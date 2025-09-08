function App(){
    
    const ChangeTest = (event) => {
        if (event.target.id !== "go"){
            const where = event.target.value;
            if(where === '-') {
                alert('이동할 페이지를 선택해 주세요');
            } else {
                document.getElementById('myform').action = where; // 이동할 페이지 정보 변경
            }
        } else {
            if (event.target.checked === true) {
                document.getElementById("submit").disabled = false;
            } else {
                document.getElementById("submit").disabled = true;
            }
        }
    }
    
    const SubmitTest = (event) => {
        if (event.target.action === '-') {
            alert('이동할 페이지를 선택해 주세요');
        } else {
            const isChecked = document.getElementById('go').checked;
            if (isChecked === true) {
                alert('액션 페이지로 이동합니다.');
            } else {
                alert('액션 페이지로 이동하지 않습니다.');
                event.preventDefault(); // 이벤트 전파 방지
            }
        }
    }
    
    return(
        <div className="App">
            <h2>Submit Test</h2>
            <form id="myform" className="drag-prevent" onSubmit={SubmitTest} action={`http://www.naver.com`}>
                <select onChange={ChangeTest}>
                    <option value="-">-- 이동할 곳을 선택 --</option>
                    <option value="http://www.naver.com">네이버</option>
                    <option value="http://www.daum.net">다음</option>
                    <option value="http://www.google.com">구글</option>
                </select>
                <br/><br/>
                
                <label>
                <input type="checkbox" id="go" onChange={ChangeTest}/>체크 상태일때만 해당 페이지로 이동
                </label>
                <br/><br/>

                <input id="submit" type="submit" value="전송" disabled/>
            </form>

        </div>
    );     
}

export default App ;