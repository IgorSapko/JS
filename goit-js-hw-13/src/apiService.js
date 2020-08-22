export default {
  page: 1,
  key: '17968712-6412cf5ccb97a4541594b82f1',
  baseUrl: 'https://pixabay.com/api/?image_type=photo&orientation=horizontal',
  serchQuery(request) {
    return `&q=${request}`;
  },

  fetchPictureQuery(request) {
    return fetch(
      `${this.baseUrl}&q=${request}&page=${this.page}&per_page=12&key=${this.key}`,
    )
      .then(resp => resp.json())
      .then(data => {
        this.page += 1;
        data = data.hits;
        return data;
      });
  },
  resetPage() {
    this.page = 1;
  },
};
