### Converting recursion to bottom up DP

In general, your top-down dp function might look something like this:

```c++
int dp(parameter1, parameter2, parameter3...) {
	if (base case) {
		return some answer
	} else if (cache[parameter1][parameter2][parameter3][...]) {
		return cache[parameter1][parameter2][parameter3][...];
	} else {
		calculate for this dp state (this is called the recurrence)
		store answer in cache[parameter1][parameter2][parameter3][...];
		return cache[parameter1][parameter2][parameter3][...];
	}
}
```

You can make this code bottom-up by doing:

```
identify base cases
calculate base case answers
put base case answers in cache[][][...]
for each parameter1 in some range:
	for each parameter2 in some range:
		for each parameter3 in some range:
			...
				calculate answer for this dp state (with the same recurrence)
				store answer in cache[parameter1][parameter2][parameter3][...];
```