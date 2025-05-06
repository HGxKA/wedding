document.addEventListener("DOMContentLoaded", () => {
  // 1) 그리드 아이템, 모달 요소 셀렉트
  const items = document.querySelectorAll(".gallery-wrap .item");
  const modalMask = document.querySelector(".modal-mask");
  const modalImg = modalMask.querySelector(".carousel-card img");
  const closeBtn = modalMask.querySelector(".modal-btn-simple span:last-child");

  // 2) 모달 기본 숨김
  modalMask.style.display = "none";

  // 3) 그리드 클릭 → 모달 열기
  items.forEach((item) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      // background-image: url("...") 에서 URL 부분만 추출
      const bg = getComputedStyle(item).backgroundImage;
      const url = bg.match(/url\(["']?(.*?)["']?\)/)[1];
      // 모달 img src 설정 및 열기
      modalImg.src = url;
      modalMask.style.display = "flex";
    });
  });

  // 4) 모달 외부 클릭 시 닫기
  modalMask.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-container")) {
      modalMask.style.display = "none";
    }
  });

  // 5) × 버튼 클릭 시 닫기
  closeBtn.addEventListener("click", () => {
    modalMask.style.display = "none";
  });

  // 6) ESC 키로도 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalMask.style.display = "none";
    }
  });
});
