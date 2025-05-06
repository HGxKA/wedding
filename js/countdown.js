document.addEventListener("DOMContentLoaded", () => {
  // 목표 날짜: 2025-09-21 00:00:00 (month는 0부터 시작하니 8 = 9월)
  const targetDate = new Date(2025, 8, 21, 0, 0, 0);

  // countdown 카드들: [Days, Hour, Min, Sec]
  const cards = document.querySelectorAll(".dday-wrap .countdown .card");
  // 설명 문구 중 남은 일수("53일")만 선택
  const daysText = document.querySelector(
    ".dday-wrap > div:nth-of-type(2) span[pink]:not([small])"
  );

  function updateCountdown() {
    const now = new Date();
    let diff = targetDate.getTime() - now.getTime();
    if (diff < 0) diff = 0; // 이미 지났다면 0으로 고정

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 카드에 값 채워넣기 (hours/min/sec는 두 자리 포맷)
    cards[0].textContent = days;
    cards[1].textContent = String(hours).padStart(2, "0");
    cards[2].textContent = String(minutes).padStart(2, "0");
    cards[3].textContent = String(seconds).padStart(2, "0");

    // 설명 문구의 남은 일수도 갱신
    if (daysText) {
      daysText.textContent = `${days}일`;
    }

    // 남은 시간이 0이 되면 타이머 정지
    if (diff === 0 && typeof timer !== "undefined") {
      clearInterval(timer);
    }
  }

  // 즉시 한 번 실행 후, 1초마다 갱신
  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
});
