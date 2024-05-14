# BITMASK

## Common Operations

### Shift

### left shift

#### Use cases

1. In a bitmask, find if a specific position is 0 or 1: <br>
   **(1 << position) & mask** -> finds the bit at that position, to check if it is 1, then do boolean if or > 0

2. Divide by 2
3. Remove last n bits

### right shift

### Bitwise AND (&)

give 1 if both of the bits are 1

### Bitwise OR (|)

give 1 if either of the bits are 1

### Bitwise XOR (^)

give 1 if the two bits are different

#### Use cases

1. 0 XOR number = number. number XOR itself = 0
2. a ^ b = c, a ^ c = b, b ^ c = a

### Bitwise complement (~)

gets the complement of a number, simply 0 -> 1, 1 -> 0
