import unittest
from equations import addition, isEven

class test_equations(unittest.TestCase):
    def SetUp(self):
        pass
    
    def test_equation(self):
        y = 3
        x = 45
        assert addition(x,y) == x + y
    
    def test_isEven(self):
        self.assertTrue(isEven(8546))          

    def tearDown(self):
        pass