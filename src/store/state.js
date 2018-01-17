export default function () {
  return {
    cells: [{ text: 'foo' }, { text: 'bazz' }, { text: 'bar' }],
    hero: {
      x: 1,
      y: 1,
      img: 'https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif'
    },
    inventory: [
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ']
    ],
    cantWalk: ['1', '0', '2'],
    pickableItems: ['4', '5', '6'],
    itemsWindow: false,
    openInventory: false,
    herroWeight: 100,
    totalWeight: 0,
    items: {
      ' ': { name: '', weight: 0, class: '' },
      '0': { name: 'Tree', weight: 0, class: 'tree' },
      '1': { name: 'Wall', weight: 0, class: 'wall' },
      '2': { name: 'Monster', weight: 0, class: 'monster' },
      '3': { name: 'Hero', weight: 1, class: 'hero' },
      '4': { name: 'Diamond', weight: 1, class: 'diamond' },
      '5': { name: 'Gold', weight: 5, class: 'gold' },
      '6': { name: 'Food', weight: 3, class: 'food' }
    },
    terran: [
      ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
      ['1', ' ', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', ' ', '1', ' ', ' ', ' ', '0', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '6', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', ' ', '1', '4', ' ', '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', '5', '1'],
      ['1', ' ', '1', ' ', ' ', ' ', ' ', '1', '1', '1', '0', '0', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', '2', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', '0', ' ', '0', ' ', '1'],
      ['1', ' ', '0', ' ', '2', ' ', ' ', ' ', ' ', ' ', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', ' ', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', ' ', '0', ' ', '0', ' ', '1', '1', '1', '1', '1', '1', '1'],
      ['1', ' ', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', '6', ' ', ' ', ' ', '5', ' ', ' ', '1'],
      ['1', ' ', '1', ' ', ' ', '4', '0', ' ', '1', '2', ' ', '0', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', '6', '0', ' ', ' ', ' ', '0', ' ', '1', ' ', '4', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', '1', ' ', ' ', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', '2', ' ', ' ', '1'],
      ['1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', '1', '0', ' ', '0', ' ', ' ', '2', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', '0', ' ', '0', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', '4', ' ', ' ', '1'],
      ['1', '1', '1', '1', '1', '1', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', '1', ' ', '1', ' ', ' ', '0', ' ', '0', ' ', ' ', ' ', ' ', '6', '1'],
      ['1', '1', '1', '1', '1', ' ', '1', ' ', '1', '1', '1', '1', '1', '1', '1', '1', ' ', ' ', ' ', '1'],
      ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
      ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
    ]
  }
}
