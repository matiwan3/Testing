def addition(x,y):
    return x + y    

y = 0
for x in range(100):
    print(f'{x} {y}')
    y += 2
    
def isEven(n):
    if n % 2 == 0:
        return True
    return False

def always_greater(x,y):
    x = y + x + 1