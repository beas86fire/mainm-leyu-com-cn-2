// public/site-helper.js

/**
 * 页面辅助工具：提示卡片、关键词徽章、访问说明
 * 不依赖第三方库，纯原生实现
 */

(function () {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://mainm-leyu.com.cn',
    keyword: '乐鱼体育',
    cardTitle: '温馨提示',
    cardContent: '本页面提供基础交互演示，所有数据均为本地示例。',
    badgeColor: '#e74c3c',
    badgeTextColor: '#ffffff',
    badgeExtra: ['体育资讯', '活动专区', '帮助中心'],
    visitNote: '首次访问请确保网络通畅，如有疑问请联系客服。'
  };

  // 工具函数：创建 DOM 元素
  function createEl(tag, attrs, text) {
    const el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
    }
    if (text !== undefined && text !== null) {
      el.textContent = text;
    }
    return el;
  }

  // 工具函数：安全添加样式
  function setStyles(el, styles) {
    if (!el || !styles) return;
    Object.keys(styles).forEach(function (prop) {
      el.style[prop] = styles[prop];
    });
  }

  // 生成提示卡片
  function buildTipCard() {
    const container = createEl('div', { id: 'site-helper-tip-card' });
    setStyles(container, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '280px',
      backgroundColor: '#ffffff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '16px',
      zIndex: '9999',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      lineHeight: '1.5'
    });

    const title = createEl('h4', {}, CONFIG.cardTitle);
    setStyles(title, {
      margin: '0 0 8px 0',
      color: '#333',
      fontWeight: '600'
    });

    const content = createEl('p', {}, CONFIG.cardContent);
    setStyles(content, {
      margin: '0 0 12px 0',
      color: '#555'
    });

    const link = createEl('a', { href: CONFIG.siteUrl, target: '_blank' }, '访问 ' + CONFIG.keyword + ' 主页');
    setStyles(link, {
      color: '#3498db',
      textDecoration: 'underline',
      fontWeight: '500'
    });

    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(link);

    // 关闭按钮
    const closeBtn = createEl('span', {}, '✕');
    setStyles(closeBtn, {
      position: 'absolute',
      top: '8px',
      right: '12px',
      cursor: 'pointer',
      color: '#999',
      fontWeight: 'bold',
      fontSize: '16px'
    });
    closeBtn.addEventListener('click', function () {
      container.style.display = 'none';
    });
    container.appendChild(closeBtn);

    document.body.appendChild(container);
  }

  // 生成关键词徽章
  function buildBadges() {
    const badgeContainer = createEl('div', { id: 'site-helper-badges' });
    setStyles(badgeContainer, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      zIndex: '9998'
    });

    // 主关键词徽章
    const mainBadge = createEl('span', {}, CONFIG.keyword);
    setStyles(mainBadge, {
      backgroundColor: CONFIG.badgeColor,
      color: CONFIG.badgeTextColor,
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 'bold',
      boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
    });
    badgeContainer.appendChild(mainBadge);

    // 额外徽章
    CONFIG.badgeExtra.forEach(function (text) {
      const badge = createEl('span', {}, text);
      setStyles(badge, {
        backgroundColor: '#2ecc71',
        color: '#ffffff',
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '12px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
      });
      badgeContainer.appendChild(badge);
    });

    document.body.appendChild(badgeContainer);
  }

  // 生成访问说明
  function buildVisitNote() {
    const noteContainer = createEl('div', { id: 'site-helper-visit-note' });
    setStyles(noteContainer, {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ccc',
      borderRadius: '6px',
      padding: '10px 14px',
      maxWidth: '260px',
      fontSize: '13px',
      color: '#444',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      zIndex: '9997'
    });

    const noteText = createEl('p', {}, CONFIG.visitNote);
    setStyles(noteText, {
      margin: '0 0 6px 0'
    });

    const siteLabel = createEl('span', {}, '站点: ' + CONFIG.siteUrl);
    setStyles(siteLabel, {
      color: '#7f8c8d',
      fontSize: '12px'
    });

    noteContainer.appendChild(noteText);
    noteContainer.appendChild(siteLabel);

    document.body.appendChild(noteContainer);
  }

  // 初始化：等待 DOM 加载完成后执行
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        buildTipCard();
        buildBadges();
        buildVisitNote();
      });
    } else {
      buildTipCard();
      buildBadges();
      buildVisitNote();
    }
  }

  init();
})();