

class Node:
    def __init__(self, val, next = None):
        self.val = val
        self.next = next


class Snake:
    def __init__(self):
        self.snakebody = [
            [4, 1],
            [4, 2],
            [4, 3],
            [4, 4]
        ]

    
    def draw(self):
        grid = []

        for i in range(10):
            row = []

            for j in range(10):
                row.append(' ')
            
            grid.append(row)
        

        for [x, y] in self.snakebody:
            grid[x][y] = '-'
        
        for item in grid:
            print('|'.join(item))


    def move(self, dir):
        paths = {
            'up': [-1, 0],
            'down': [1, 0],
            'left': [0, -1],
            'right': [0, 1]
        }


        [x, y] = self.snakebody[len(self.snakebody) - 1]
        self.snakebody.append([paths[dir][0] + x, paths[dir][1] + y])
        self.snakebody.pop(0)


snake = Snake()

snake.draw()
snake.move('up')
snake.draw()
snake.move('right')