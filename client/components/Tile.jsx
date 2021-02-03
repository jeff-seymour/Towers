import React from 'react'

function Tile (props) {
  return (
    <div className='tile'> Tile
      {props.value}
    </div>
  )
}

export default Tile


/*

  [
    [
      {}
      {},
      {},

    ],
    [
      {},
      {},
      {},
    ],
    [
      {},
      {},
      {},
    ]
  ]

*/

/*

arr.find(tile => tile.col === 0 && tile.row === 1)

  [
    
      {
        col: 0
        row: 0
      }
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    
  ]

*/

/*

map({ col:0, row: 1 })

[0, 0] ----> {}
{col:0, row:1} ----> {}

*/