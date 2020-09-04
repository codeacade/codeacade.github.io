use https://codeacade.github.io
you need some cleaners

use https://codeacade.github.io/kursjs.pl/
basic JS

use https://codeacade.github.io/kurs_cpp
advanced C++



operand (INPUT) >>	>>  Result		hidden_operand	oper
"operand"	"operand"		"hidden_operand"	or
"operand"	"operand"		False	or
"operand"	"operand"		None	or
"operand"	"hidden_operand"		"hidden_operand"	and
"operand"	False		False	and
"operand"	False		"hidden_operand"	not
"operand"	False		False	not
"operand"	False		None	not
"operand"	None		None	and
				
False	"hidden_operand"		"hidden_operand"	or
False	True		"hidden_operand"	not
False	True		False	not
False	True		None	not
False	False		False	or
False	False		"hidden_operand"	and
False	False		False	and
False	False		None	and
False	None		None	or
				
None	"hidden_operand"		"hidden_operand"	or
None	True		"hidden_operand"	not
None	True		False	not
None	True		None	not
None	False		False	or
None	None		None	or
None	None		"hidden_operand"	and
None	None		False	and
None	None		None	and

