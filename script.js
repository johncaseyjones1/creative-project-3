Vue.component('star-rating', VueStarRating.default);
var app = new Vue({
  el: '#app',
  data: {
    loading: true,
    addedName: '',
    addedComment: '',
    time: '',
    comments: {},
    ratings: {},
    recipeName: 'Brunch Omelet (German Pancakes)',
    ingredients: [
      '1 T salted butter',
      '2 eggs (or ½ C egg beaters)',
      '½ C whole wheat flour',
      '½ C milk (or ½ C almond milk)',
      'Lemon juice',
      'Powdered sugar (or artificial sweetener)'
    ],
    directions: [
      `Heat oven to 400F.`,
      `For each omelet, melt 1 T of salted butter in a 9x9 size glass dish such as a pie plate or casserole dish, in the oven.`,
      `For each omelet mix all together, 2 eggs, ½ C whole wheat flour (white flour works too), and ½ C milk in a bowl with a whisk, just until mixed.`,
      `It may be a little lumpy. Keep checking the butter so it doesn’t scorch.`,
      `When it is melted, remove from oven and turn dish to coat.`,
      `Spray edges with cooking spray.`,
      `Pour batter into dishes and bake for 12-15 minutes or until bubbles form. If you are cooking several omelets at once, you may need to rotate them half way through.`,
      `Serve plain or with lemon juice and powered sugar (our favorite).  You can also serve it with jam, or fruit and whipped cream.`,
    ],
  },
  created() {
    this.recipe();
  },
  computed: {
    getAvg() {
      if (this.ratings[this.number] === undefined)
        return 0;
      return this.ratings[this.number].avg.toFixed(2);
    },
  },
  methods: {
    recipe() {

    },
    addComment() {
      if (!(this.number in this.comments))
        Vue.set(app.comments, this.number, new Array);
      this.comments[this.number].push({
        author: this.addedName,
        text: this.addedComment
      });
      this.addedName = '';
      this.addedComment = '';
      this.time = moment().calendar();
    },
    setRating(rating) {
      if (!(this.number in this.ratings))
        Vue.set(this.ratings, this.number, {
          sum: 0,
          total: 0,
          avg: 0
        });
      this.ratings[this.number].sum += rating;
      this.ratings[this.number].total += 1;
      this.ratings[this.number].avg = this.ratings[this.number].sum / this.ratings[this.number].total;
    },
  },


});