import { v4 as uuid } from 'uuid'

let inventory = [
  {
    pid: '1',
    name: 'Journal1',
    price: '600',
    image: '/images/shop/journal-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia pretium eros. Maecenas ornare pulvinar neque, mattis fermentum purus cursus sit amet. Praesent sit amet mollis libero. Donec eros enim, accumsan ac augue quis, faucibus convallis diam. Sed convallis est at libero gravida, eu egestas arcu faucibus. Phasellus sed tellus elit. Sed eleifend eros eu cursus cursus. Vivamus molestie, ante nec tristique semper, velit magna porttitor orci, non egestas turpis mi id massa.',
    colors: ['/images/shop/journal-1.png', '/images/shop/journal-2.png',],

  },
  {
    pid: '2',
    name: 'Journal2',
    price: '600',
    image: '/images/shop/journal-1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia pretium eros. Maecenas ornare pulvinar neque, mattis fermentum purus cursus sit amet. Praesent sit amet mollis libero. Donec eros enim, accumsan ac augue quis, faucibus convallis diam. Sed convallis est at libero gravida, eu egestas arcu faucibus. Phasellus sed tellus elit. Sed eleifend eros eu cursus cursus. Vivamus molestie, ante nec tristique semper, velit magna porttitor orci, non egestas turpis mi id massa.',
    colors: ['/images/shop/journal-1.png', '/images/shop/journal-2.png',],

  },
  {
    pid: '3',
    name: 'Tshirt1',
    price: '1100',
    image: '/images/shop/tshirt1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia pretium eros. Maecenas ornare pulvinar neque, mattis fermentum purus cursus sit amet. Praesent sit amet mollis libero. Donec eros enim, accumsan ac augue quis, faucibus convallis diam. Sed convallis est at libero gravida, eu egestas arcu faucibus. Phasellus sed tellus elit. Sed eleifend eros eu cursus cursus. Vivamus molestie, ante nec tristique semper, velit magna porttitor orci, non egestas turpis mi id massa.',
    colors: ['/images/shop/tshirt1.png', '/images/shop/tshirt2.png',],

  },
  {
    pid: '4',
    name: 'Tshirt 2',
    price: '600',
    image: '/images/shop/tshirt2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia pretium eros. Maecenas ornare pulvinar neque, mattis fermentum purus cursus sit amet. Praesent sit amet mollis libero. Donec eros enim, accumsan ac augue quis, faucibus convallis diam. Sed convallis est at libero gravida, eu egestas arcu faucibus. Phasellus sed tellus elit. Sed eleifend eros eu cursus cursus. Vivamus molestie, ante nec tristique semper, velit magna porttitor orci, non egestas turpis mi id massa.',
    colors: ['/images/shop/tshirt1.png', '/images/shop/tshirt2.png',],

  },


  // {
  //   categories:
  //     ['on sale', 'tshirt black'],
  //   name: 'Tshirt 3',
  //   price: '775',
  //   image: '/products/tshirt2.png',
  //   description: 'Finquest Graphics Black Tshirt.',
  //   brand: 'Finquest',
  //   currentInventory: 44
  // },

]

inventory.map(i => {
  i.id = uuid()
  return i
})

export default inventory