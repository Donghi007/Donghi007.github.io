class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'zh-CN';
    this.bindEvents();
    this.loadLanguage();
  }

  loadLanguage() {
    document.documentElement.lang = this.currentLang;
    const texts = langMap[this.currentLang];
    Object.keys(texts).forEach(key => {
      document.querySelectorAll(`[data-lang="${key}"]`).forEach(el => {
        el.textContent = texts[key];
      });
    });
  }

  bindEvents() {
    document.querySelector('.language-switcher').addEventListener('click', () => {
      this.currentLang = this.currentLang === 'zh-CN' ? 'en' : 'zh-CN';
      localStorage.setItem('lang', this.currentLang);
      this.loadLanguage();
    });
  }
}

new LanguageSwitcher();