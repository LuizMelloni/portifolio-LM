function toggleTabs(tab) {
  var activeTab = document.querySelector('.tab.active');
  var newActiveTab = document.querySelector('.' + tab);
  var activeTabBtn = document.querySelector('.tab-btn.active');
  var newActiveTabBtn = document.querySelector('.' + tab + '-btn');
  activeTab.classList.remove('active');
  newActiveTab.classList.add('active');
  activeTabBtn.classList.remove('active');
  newActiveTabBtn.classList.add('active');
}