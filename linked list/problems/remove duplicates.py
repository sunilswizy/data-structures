class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
    
    


a = Node(2);
b = Node(4);
c = Node(2);
d = Node(8);
e = Node(10);
f = Node(12);


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;



def removedup(head):
    memohash = {}
    
    curr = head
    prev = None

    while curr:
        if curr.val in memohash:
            prev.next = curr.next
        else:
            memohash[curr.val] = True
            prev = curr
        
        curr = curr.next


def removedup2(head):
    curr = head

    while curr:

        runner = curr.next

        while runner and runner.next:
            
            if curr.val == runner.next.val:
                runner.next = runner.next.next
            
            runner = runner.next
        
        curr = curr.next


def iterate(head):
    list1 = []
    curr = head
    while curr:
        list1.append(curr.val)
        curr = curr.next
    
    print(list1)

iterate(a)
removedup2(a)
iterate(a)