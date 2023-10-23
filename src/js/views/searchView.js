class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(search) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      search();
    });
  }
}

export default new SearchView();
