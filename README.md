use https://codeacade.github.io
you need some cleaners

use https://codeacade.github.io/kursjs.pl/
basic JS

use https://codeacade.github.io/kurs_cpp
advanced C++

There is a function hidden_operation() which in every test case performs one of the logical operations: and, or and not.

```python
 def hidden_operation(operand):
    if oper == "and":
       return operand and hidden_operand
    elif oper == "or":
        return operand or hidden_operand
    elif oper == "not":
        return not operand \*
```

You don't have access to oper and hidden_operand variables, but you can call the hidden_operation() function any number of times and pass any objects to it. Your task is to find out which logical operation this function performs and what the hidden_operand is equal to (if the function performs the not operation, you don't have to find the hidden_operand).

Write your code inside the solve() function. In the first line print the name of the logical operation. If the logical operation is and or or, print hidden_operand in the second line.

Your program shouldn't read any input or call the function, just implement it.

"operand" 	"operand" 		"hidden_operand" 	oper 	

	"operand" 	"operand" 		False 			or 								
	"operand" 	"operand" 		None 			or 								
	"operand" 	"hidden_operand" 	"hidden_operand" 	and 								
	"operand" 	False 			False 			and 								
	"operand" 	False 			"hidden_operand" 	not 								
	"operand" 	False 			False 			not 								
	"operand" 	False 			None 			not 								
	"operand" 	None 			None 			and 								
													
	False 		"hidden_operand" 	"hidden_operand" 	or 	in this case if hidden_operand is "True" (possible) creates precedense for "or"
	False 		True 			"hidden_operand" 	not 								
	False 		True 			False 			not 								
	False 		True 			None 			not 								
	False 		False 			False 			or 								
	False 		False 			"hidden_operand" 	and 								
	False 		False 			False 			and 								
	False 		False 			None 			and 								
	False 		None 			None 			or 								
													
	None 	"hidden_operand" 	"hidden_operand" 	or 								
	None 	True 			"hidden_operand" 	not 								
	None 	True 			False 			not 								
	None 	True 			None 			not 								
	None 	False 			False 			or 								
	None 	None 			None 			or 								
	None 	None 			"hidden_operand" 	and 								
	None 	None 			False 			and 								
	None 	None 			None 			and 	
