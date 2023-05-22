var numIslands = function(grid) {
    let visited = new Set();
    let count = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(dfs(grid, i, j, visited)) count++;
        }
    }

    return count;
};

function dfs(grid, r, c, visited) {

    let rowInBounce = r >= 0 && r < grid.length;
    let colInBounce = c >= 0 && c < grid[0].length;
    let key = `${r}, ${c}`;

    if(!rowInBounce || !colInBounce) return false;
    if(grid[r][c] === '0') return false;
    if(visited.has(key)) return false;


    visited.add(key);

    dfs(grid, r - 1, c, visited);
    dfs(grid, r + 1, c, visited);
    dfs(grid, r, c - 1, visited);
    dfs(grid, r, c + 1, visited);

    return true;
}


