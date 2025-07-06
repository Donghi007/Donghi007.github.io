document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".collapsible-header").forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isOpen = content.style.display === "block";

      // 关闭所有其他展开项（可选）
      document.querySelectorAll(".collapsible-content").forEach(c => {
        c.style.display = "none";
        c.style.maxHeight = "0";
      });

      if (!isOpen) {
        content.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});