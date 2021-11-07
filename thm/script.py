with open('numbers.txt', 'w') as f:
	number = 0
	for i in range(0,200):
		f.write(str(number) + "\n")
		number+= 1