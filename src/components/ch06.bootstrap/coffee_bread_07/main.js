import { useState } from 'react';

// bootstrap 관련 import
import Card from 'react-bootstrap/Card';

// 하위 컴포넌트 추가하기
import Top from './ui/Top';
import Content from './ui/Content';
import Switcher from './ui/Switcher';
import Bottom from './ui/Bottom';

function App(){
    const title = "IT 카페";
    const comment = "환영합니다.";
    const message = "카운터에서 주문하세요.";

    // 신규 상품을 추가해야 하므로 setProducts 필요
    //setProducts가 필수 사항은 아닙니다.
    const [products, setProducts] = useState([
        {id:1, name:"프렌치 바게트", price:1000, category:'bread', stock:111, image:'french_baguette_01.png', description:"프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다."},
        {id:2, name:"크로와상", price:2000, category:'bread', stock:222, image:'croissant_02.png', description:"프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다."},
        {id:3, name:"아메리카노", price:3000, category:'beverage', stock:333, image:'americano01.png', description:"에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다."},
        {id:4, name:"카푸치노", price:4000, category:'beverage', stock:444, image:'cappuccino01.png', description:"스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다."},
        {id:5, name:"스폰지 케이크", price:5000, category:'cake', stock:555, image:'sponge_cake_01.png', description:"가장 일반적인 케이크로, 부드럽고 공기가 많은 스폰지 텍스처를 가지고 있습니다. 일반적으로 크림, 과일, 초콜릿 등 다양한 토핑과 함께 제공됩니다." },
        {id:6, name:"초콜릿 케이크", price:6000, category:'cake', stock:666, image:'chocolate_cake_01.png', description:"초콜릿으로 만든 케이크로, 풍부하고 진한 초콜릿 맛을 가지고 있습니다. 초콜릿으로 만든 케이크 스폰지와 초콜릿으로 만든 크림 또는 가나슈를 사용하여 제작됩니다." },
        {id:7, name:"바닐라 마카롱", price:2500, category:'macaron', stock:120, image:'vanilla_macaron.png', description:"부드럽고 달콤한 바닐라 크림이 들어 있는 프랑스식 디저트입니다. 겉은 바삭하고 속은 촉촉한 식감이 특징입니다." },
        {id:8, name:"딸기 마카롱", price:2800, category:'macaron', stock:90, image:'strawberry_macaron.png', description:"상큼한 딸기 크림이 가득 들어 있는 마카롱으로, 달콤하면서도 상큼한 맛을 즐길 수 있습니다." }
    ]);

    const categoryList = [
        {english : 'bread', korean : '빵'},
        {english : 'beverage', korean : '음료수'},
        {english : 'cake', korean : '케이크'},
        {english : 'macaron', korean : '마카롱'},
    ];

    const [categories, setCategories] = useState(categoryList);

    /* mode : 현재 상태의 모드 지정 */
    /* insert, update, delete, read, detail */
    const [mode, setMode] = useState('read');

    // selectedId는 현재 선택이 된 항목의 상품 id 정보
    // 프로그램 최초 시작시 1번이 선택 되었다고 가정
    const [selectedId, setSelectedId] = useState(1);

    /* 상품 목록에서 특정 상품 1개를 클릭 */
    const ClickArrived = (itemId) => {
        setSelectedId(Number(itemId)); // 클릭된 상품의 id 값을 상태로 설정
        setMode('detail');  // 상세 보기 모드로 변경
        console.log('클릭된 상품 id : ' + itemId);
    }
    
    const getProductById = () => {
        // selectedId : 클릭한 상품의 id
        // 상품 목록(products)에서 id 값이 일치하는 상품 객체를 찾아서 반환
        // filter는 조건에 맞는 모든 배열을 반환, find는 조건에 맞는 첫번째 객체를 반환
        return products.find((product) => product.id === selectedId);
    }
    
    const getExceptData = (id) => {
        return products.filter(n => n.id !== id);
    }

    // 수정하고자 하는 상품 한개의 정보를 저장
    // const [currentProduct, setCurrentProduct] = useState(null);

    /* 버튼을 클릭하여 모드를 변경 */
    const ModeChanged = (mode) => {
        setMode(mode); // 변경된 모드로 mode state에 할당
        console.log('변경된 mode : ' + mode);

        if(mode === 'get_delete') { // 사용자가 특정 항목을 삭제하려고 시도함
            // 삭제하려고 선택한 품목의 id만 제외하고 다시 필터링
            const remainProduct = getExceptData(selectedId);
            setProducts(remainProduct);
            setMode('read');
        }

        /** 
        if(mode === 'get_update') {
            // const currentProduct = getProductById();
            // console.log('수정할 상품 정보 출력 : ');
            // console.log(currentProduct);
            setCurrentProduct(getProductById());
        }
        */
    }

    /* 사용자가 상품 등록 화면에서 내용을 기입하고, [등록] 버튼을 누름 */
    const InsertData = (formData) => {
        // formData : 사용자가 입력한 폼 양식의 정보를 가진 객체
        const newId = Math.max(...products.map(p => p.id)) + 1; // 기존 상품들 중에서 가장 큰 id 값에 1을 더함
        const newData = [{
            id: newId,
            name: formData.name.value,
            price: Number(formData.price.value),
            category: formData.category.value,
            stock: Number(formData.stock.value),
            image: formData.image.value,
            description: formData.description.value
        }];
        // concat() 함수를 사용하여 기존 상품 배열에 새 상품을 추가
        const newProducts = products.concat(newData);
        setProducts(newProducts); // 기존 상품 배열에 새 상품 추가
        setMode('read'); // 등록 후에는 읽기 모드로 변경
    };

    // 사용자가 상품 수정 화면에서 내용을 수정하고, [수정] 버튼을 누름
    const UpdateData = (formData) => {
        console.log(formData);
        const updateData = {
            id: Number(formData.id),
            name: formData.name,
            price: Number(formData.price),
            category: formData.category,
            stock: Number(formData.stock),
            image: formData.image,
            description: formData.description
        };
        // const updateProducts = products.filter(n=>n.id!==Number(formData.id)).concat(updateData);
        const updateProducts = products.map(n => n.id === updateData.id ? updateData : n);
        setProducts(updateProducts);
        setMode('read');
    }

    // 카테고리 정보는 동적으로 갱신이 되어야 하므로 다음과 같이 자바스크립트 배열을 만들어서 처리
    // 1. 자바 스크립트 배열로 카테고리 초기화
    // 2. 관리해야 하므로 state로 처리
    // 3. 폼 양식(상품 등록, 상품 수정 페이지)에 카테고리를 동적으로 생성
    // 4. 추가/삭제 작업이 발생하면 동적으로 갱신

    // 사용자가 카테고리 추가 화면에서 내용을 기입하고, [추가] 버튼을 누름
    const InsertCategory = (formData) => {
        // formData는 신구 추가할 카테고리

        // 파라미터 이름은 파일 CreateCategory.js 에서 참조
        const newCategory = {
            english : formData.english.value,
            korean : formData.korean.value
        }
        setCategories(categories.concat(newCategory));
        setMode('read');
    }

    /* 정렬 기능 추가 */
    /* 기본 정렬 방식은 name 컬럼에서 오름차순으로 정렬 */
    const [orderInfo, setOrderInfo] = useState({column:'name', ordering:'asc'});

    /* 정렬 정보를 사용하여 정렬을 수행해주는 함수*/
    /* category 조회시 영문이 아닌 한글로 수정 */
    const Ordering = (orderInformation) => {
        const column = orderInformation.column; // 정렬할 때 사용할 컬럼
        const method = orderInformation.ordering; // 정렬 방법(오름차, 내림차)

        const textColumns = ['name', 'category']; // 문자열 컬럼 목록

        const isCharacter = textColumns.includes(column); // 문자열 컬럼 판단

        // a와 b는 각각 상품 1개를 의미하는 객체 정보(java의 bean으로 봐도 무방)
        products.sort((a, b) => {
            let aValue = a[column];
            let bValue = b[column];

            // 정렬 할 컬럼이 카테고리면 한글로 변환해서 정렬
            if(column === 'category') {
                const aCategory = categories.find(c => c.english === a.category);
                const bCategory = categories.find(c => c.english === b.category);

                aValue = aCategory ? aCategory.korean : a.category; // 한글이름
                bValue = bCategory ? bCategory.korean : b.category; // 한글이름
            }

            if(isCharacter) {
                if (method === 'asc') {
                    return aValue.localeCompare(bValue);
                } else {
                    return bValue.localeCompare(aValue);
                }
            } else { // 숫자열 컬럼
                if (method === 'asc') {
                    return aValue - bValue;
                } else {
                    return bValue - aValue;
                }
            }
        });


        // if(isCharacter) { // 문자열 컬럼
        //     // a와 b는 각각 상품 1개를 의미하는 객체 정보(java의 bean으로 봐도 무방)
        //     products.sort((a, b) => {
        //         if (method === 'asc') {
        //             return a[column].localeCompare(b[column]);
        //         } else {
        //             return b[column].localeCompare(a[column]);
        //         }
        //     });
        // } else { // 숫자열 컬럼
        //     products.sort((a, b) => {
        //         if (method === 'asc') {
        //             return a[column] - b[column];
        //         } else {
        //             return b[column] - a[column];
        //         }
        //     });
        // }
    }

    /* 사용자가 '정렬 할 컬럼' 또는 '정렬 방식'을 선택하면 코드 실행 */
    const ClickOrderBy = (column_name, order_by) => {
        const newOrderInfo = {column:column_name, ordering:order_by}; // 변경된 정렬 정보
        setOrderInfo(newOrderInfo);// 변경 내용을 state에 반영

        Ordering(newOrderInfo)// 정렬 함수를 호출
    }

    /* 필드 검색 기능 추가 */
    // const [filterCategory, setFilterCategory] = useState(products);
    const [filterCategory, setFilterCategory] = useState('all');

    // 사용자가 카테고리 콤보 박스에서 다른 카테고리를 선택함.
    const CategoryChanged = (changedCategory) => {
        setFilterCategory(changedCategory); // 선택된 카테고리의 이름이 변경됨
        
        // // 필드 검색을 사용하여 필터링을 수행할지 결정
        // if(changedCategory !== 'all' && changedCategory) {
        //     setFilterCategory(products.filter(n=>n.category === changedCategory));
        // } else {
        //     setFilterCategory(products);
        // }

        // 필터링이 이루어지면 정렬 함수를 다시 실행시켜 화면을 갱신
        Ordering(orderInfo);
    };

    // 필드 검색을 사용하여 필터링을 수행할지 결정
    const isFilteringNeeded = filterCategory !== 'all' && filterCategory;

    // 삼항연산자를 사용하여 선택된 카테고리와 동일한 품목들만 필터링 동작을 수행
    const filteredProducts = isFilteringNeeded 
    ? products.filter(n=>n.category === filterCategory) 
    : products;

    return(
        <Card className="m-3 shadow drag-prevent">
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/* onClickToContent 프롭스가 리턴되고 난 후 ClickArrived 함수가 동작 */}
                <Content // contents={filterCategory} 
                    contents={filteredProducts}
                    onClickToContent={ClickArrived} 
                    categories={categories} 
                    onOrderByClick={ClickOrderBy}
                    orderInfo={orderInfo} 
                    onChangeCategory={CategoryChanged}
                />
            </Card.Body>
            <Card.Body>
                <Switcher 
                    mode={mode} 
                    product={getProductById()} 
                    onSubmitInsert={InsertData}
                    onSubmitUpdate={UpdateData}
                    onSubmitCategoryAdd={InsertCategory}
                    categories={categories}
                />
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeChanged} />
            </Card.Footer>
        </Card>
    );     
}

export default App ;