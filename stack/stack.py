

class Node:
    def __init__(self, val, next = None):
        self.val = val
        self.next = next


class Stack:
    def __init__(self):
        self.top = None
        self.size = 0

    
    def push(self, val):
        if self.size == 0:
            self.top = Node(val)
        else:
            newnode = Node(val)
            newnode.next = self.top
            self.top = newnode

        self.size += 1
    

    def pop(self):
        if self.size == 0:
            return None
        else:
            self.size -= 1
            temp = self.top.val
            self.top = self.top.next
            return temp
        
    def gettop(self):
        if self.size == 0:
            return None
        else:
            return self.top.val


stack = Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.pop()
print(stack.gettop())

