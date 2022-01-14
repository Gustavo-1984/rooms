
  const putI = (f, n) => {
       const arr = new Array(n).fill('*');
       arr[f] = 'F';
       return arr.join('');
   };

var rooms =  function(grid) {
    let num_rows = grid.length;
    let num_cols = grid[0].length;
    let count = 0;
    const element = []
    console.log(grid)
    function fillWithZero(row, col){
       
        if(row < 0 || row >= num_rows || col < 0 || col >= num_cols) return;
       
        if(grid[row][col] == 0) return;
       
        grid[row][col] = 0;
       
        fillWithZero(row+1, col);
        fillWithZero(row-1, col);
        fillWithZero(row, col+1);
        fillWithZero(row, col-1);
       
    }
  
    for(let row = 0; row < num_rows; row++){
        for(let col = 0; col < num_cols; col++){
            element.push(putI( grid[row][col]));
            if(grid[row][col] == 1){
                count++;
                fillWithZero(row, col);
            }
        }
    }
    let accum = [];
    for (const f of element) {
      if (accum[f]) {
        accum[f] += 1;
      } else {
        accum[f] = 1;
      }
    }
    console.log(element)
    console.log(accum)
    return count;
};

let ligth=[
    [0,0,0,0,0,1],
    [1,1,0,0,1,1],
    [1,1,0,0,1,1],
    [1,1,0,0,1,1],
    [1,1,0,0,1,1],
    [1,1,0,0,1,1], 
  
   
]

module.exports = {
    rooms
};
