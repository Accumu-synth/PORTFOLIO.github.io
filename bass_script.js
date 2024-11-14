// 우클릭 비활성화
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// 텍스트 선택 비활성화
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});

// 드래그 비활성화
document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

// 스킬 섹션으로 이동하는 함수
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 다크모드 토글 함수
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? "라이트 모드" : "다크 모드";
});