const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function(e) {
    //form 태그의 action 속성 저지하기
    e.preventDefaul();
    //console.dir(form)에서 elements -> qurey(form의 name) -> value 
   const searchTerm = form.elements.query.value;
   //params 특성을 이용한 쿼리 문자열 객체 추가
   const config = {params: {q:searchTerm}}
   //API 정보 가져오기
   //config에 params 안에 있는 키-값 쌍이 쿼리 문자열로 입력됨.
   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
   getImage(res.data)
   //이미지  검색 후 input창에 기재된 검색어 지우기
   form.elements.query.value=' ';
})

//이미지 가져와서 html body에 추가하는 함수
const getImage = (result) => {
    for(let result of shows) {
        if(result.show.image){
            const img = document.createElement('IMG')
            img.scr = result.show.image.medium
            body.document.append(img);
        }
     
    }

}