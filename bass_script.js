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

// 스킬 섹션 로드 함수
function loadSkills() {
    fetch('skills.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('skills-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading skills:', error));
}

// 다크모드 토글 함수
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerText = document.body.classList.contains('dark-mode') ? "라이트 모드" : "다크 모드";
});

// 스킬 페이지로 이동하는 함수
function goToSkillsPage(event) {
    event.preventDefault(); // 기본 링크 동작 막기
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'skills.html'; // 이동할 페이지로 변경
    }, 500); // 트랜지션 시간과 동일하게 맞춤
}

// 메인 페이지로 이동하는 함수
function goToMainPage(event) {
    event.preventDefault(); // 기본 링크 동작 막기
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'index.html'; // 이동할 페이지로 변경
    }, 500); // 트랜지션 시간과 동일하게 맞춤
}