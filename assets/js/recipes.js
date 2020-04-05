var recipes = [
  //fast, salad from -9 to +9
  //church vs state (association with ritual)
  //centralised vs decentralised
  //protestant vs catholic
  {
    'name': 'spicy-cold-noodles',
    'fast': 5.5,
    'salad': 3.5,
    'church': -5.5,
    'catholic': 6,
    'classification': 'main'
  },

  {
    'name': 'husband-and-wife-offal',
    'fast': 2,
    'salad': 7.5,
    'church': -7.5,
    'catholic': 7,
    'classification': 'side'
  },

  {
    'name': 'trippa-a-la-romana',
    'fast': 0,
    'salad': 4.5,
    'church': 2.5,
    'catholic': 9,
    'classification': 'side'
  },

  {
    'name': 'dosa',
    'fast': -5,
    'salad': 4.5,
    'church': -5.5,
    'catholic': -7,
    'classification': 'indian-side'
  },

  {
    'name': 'cabbage-thoran',
    'fast': 5,
    'salad': 8,
    'church': -3.5,
    'catholic': -3,
    'classification': 'indian-side'
  },

  {
    'name': 'pancita',
    'fast': -2,
    'salad': 6,
    'church': -8,
    'catholic': 2,
    'classification': 'soup'
  },

  {
    'name': 'ravioli',
    'fast': -6,
    'salad': -2,
    'church': 8.5,
    'catholic': 7.5,
    'classification': 'main'
  },

  {
    'name': 'samosas',
    'fast': -4,
    'salad': -8,
    'church': -6.5,
    'catholic': 4,
    'classification': 'indian-main'
  },

  {
    'name': 'larb',
    'fast': 3.5,
    'salad': -3.5,
    'church': 0.5,
    'catholic': 7.5,
    'classification': 'side'
  },

  {
    'name': 'tom-yum',
    'fast': 7,
    'salad': 2.5,
    'church': 0.5,
    'catholic': -7,
    'classification': 'soup'
  },

  {
    'name': 'papa-a-la-huanca&iacutena',
    'fast': 6,
    'salad': -1.5,
    'church': -1,
    'catholic': 6,
    'classification': 'latin-side'
  },

  {
    'name': 'chana-dhal',
    'fast': -5,
    'salad': 5,
    'church': -2,
    'catholic': -9,
    'classification': 'indian-side'
  },

  {
    'name': 'seema-vankaya-pappu',
    'fast': -4,
    'salad': 5.5,
    'church': -3,
    'catholic': -9,
    'classification': 'indian-side'
  },

  {
    'name': 'baingan-masala',
    'fast': -5,
    'salad': -1,
    'church': 7.5,
    'catholic': 2,
    'classification': 'indian-main'
  },

  {
    'name': 'potato-masala',
    'fast': 0.1,
    'salad': -1.5,
    'church': 3,
    'catholic': -2,
    'classification': 'indian-side'
  },

  {
    'name': 'basic-pancake',
    'fast': 3,
    'salad': -0.5,
    'church': -8,
    'catholic': 4,
    'classification': 'breakfast-carb'
  },

  {
    'name': 'blackberry-jam',
    'fast': -1,
    'salad': -4,
    'church': -6,
    'catholic': 0.2,
    'classification': 'jam'
  },

  {
    'name': 'hiyayakko',
    'fast': 9,
    'salad': 8,
    'church': 9.5,
    'catholic': -8,
    'classification': 'side'
  },

  {
    'name': 'cassava-suman',
    'fast': -2.5,
    'salad': -2.5,
    'church': -4.5,
    'catholic': 3.5,
    'classification': 'breakfast-carb'
  },

  {
    'name': 'maqloubeh',
    'fast': -6,
    'salad': -4,
    'church': 9,
    'catholic': 4,
    'classification': 'mezze-main'
  },

  {
    'name': 'flatbread',
    'fast': -2,
    'salad': -2,
    'church': -9,
    'catholic': -6,
    'classification': 'mezze'
  },

  {
    'name': 'aloo-paratha',
    'fast': -4,
    'salad': -5,
    'church': -6,
    'catholic': -4,
    'classification': 'indian-side'
  },

  {
    'name': 'fellahi-salad',
    'fast': 8.5,
    'salad': 9.5,
    'church': -2,
    'catholic': -3,
    'classification': 'mezze'
  },

  {
    'name': 'baba-ganoush',
    'fast': 2,
    'salad': 5,
    'church': 2,
    'catholic': 3,
    'classification': 'mezze'
  },

  {
    'name': 'garlic-potato-salad',
    'fast': 2,
    'salad': 3,
    'church': -5,
    'catholic': 2,
    'classification': 'mezze'
  },

  {
    'name': 'tea-egg',
    'fast': -2,
    'salad': 8,
    'church': -5.5,
    'catholic': -5,
    'classification': 'snack'
  },

  {
    'name': 'beef-peppers-noodles',
    'fast': 4,
    'salad': -4,
    'church': -6,
    'catholic': 7,
    'classification': 'main'
  },

  {
    'name': 'braised-aubergine',
    'fast': 4,
    'salad': 0.5,
    'church': 4.5,
    'catholic': 4,
    'classification': 'side'
  },

  {
    'name': 'cabbage-omelette',
    'fast': 6,
    'salad': 1,
    'church': -3,
    'catholic': -1,
    'classification': 'side'
  },

  {
    'name': 'cold-soba',
    'fast': 5.5,
    'salad': 4,
    'church': 8,
    'catholic': -8,
    'classification': 'breakfast-carb'
  },

  {
    'name': 'onigiri',
    'fast': 3.5,
    'salad': 2.5,
    'church': 8.5,
    'catholic': -8.5,
    'classification': 'breakfast-carb'
  },
  
  {
    'name': 'congee',
    'fast': -5,
    'salad': 1.5,
    'church': -8,
    'catholic': -9,
    'classification':'breakfast-carb'
  },

  {
    'name': 'cucumber-salad',
    'fast': 9,
    'salad': 9,
    'church': 7,
    'catholic': -6,
    'classification': 'veg'
  },

  {
    'name': 'steamed-buns',
    'fast': -4.5,
    'salad': -3.5,
    'church': 5,
    'catholic': 4.5,
    'classification': 'side'
  },

  {
    'name': 'dumplings',
    'fast': -4,
    'salad': -6.5,
    'church': 8,
    'catholic': 5,
    'classification': 'main'
  },

  {
    'name': 'egg-and-tomato',
    'fast': 4,
    'salad': 2,
    'church': 4,
    'catholic': -8,
    'classification': 'side'
  },      

  {
    'name': 'egg-fried-rice',
    'fast': 6,
    'salad': -3,
    'church': -7,
    'catholic': 6,
    'classification': 'main'
  },      

  {
    'name': 'fried-enokis',
    'fast': 9,
    'salad': 5,
    'church': -5,
    'catholic': -1,
    'classification': 'veg'
  },      

  {
    'name': 'fried-greens',
    'fast': 8.5,
    'salad': 7.5,
    'church': -3.5,
    'catholic': -8,
    'classification': 'veg'
  },      

  {
    'name': 'green-beans',
    'fast': 5,
    'salad': 7,
    'church': 1,
    'catholic': -5,
    'classification': 'side'
  },      

  {
    'name': 'grilled-mackerel',
    'fast': 5,
    'salad': 4.5,
    'church': 8.5,
    'catholic': 0,
    'classification': 'main'
  },      

  {
    'name': 'fish-head-soup',
    'fast': -1,
    'salad': 2.5,
    'church': -2.5,
    'catholic': -4,
    'classification': 'soup'
  },      

  {
    'name': 'komatsuna-nibitashi',
    'fast': 7,
    'salad': 8.5,
    'church': 6,
    'catholic': -6,
    'classification': 'veg'
  },      

  {
    'name': 'sundubu-jjigae',
    'fast': 4,
    'salad': -1,
    'church': -4.5,
    'catholic': 8,
    'classification': 'soup'
  },      

  {
    'name': 'mapo-tofu',
    'fast': 4,
    'salad': -2,
    'church': -2,
    'catholic': 5,
    'classification': 'side'
  },      

  {
    'name': 'miso-aubergine',
    'fast': -0.5,
    'salad': 2,
    'church': 5.5,
    'catholic': -4,
    'classification': 'side'
  },

  {
    'name': 'red-braised-fish',
    'fast': 0.5,
    'salad': -5,
    'church': 4.5,
    'catholic': 9,
    'classification': 'main'
  },      

  {
    'name': 'salt-cod-stew',
    'fast': -3,
    'salad': 1,
    'church': 8.5,
    'catholic': -6,
    'classification': 'main'
  },      

  {
    'name': 'soba-soup',
    'fast': 6,
    'salad': 6,
    'church': 9,
    'catholic': -9,
    'classification': 'soup'
  },      

  {
    'name': 'steamed-fish',
    'fast': 1,
    'salad': 6,
    'church': 7.5,
    'catholic': -6.5,
    'classification': 'main'
  },

  {
    'name': 'tasty-miso',
    'fast': 9,
    'salad': 3,
    'church': 5,
    'catholic': -5,
    'classification': 'snack'
  },   
]