import heapq
from typing import List, Tuple

def getMaxPriceIntervals(events: List[Tuple[int, int, int]]) -> List[List[int]]:
    # Step 1: Collect events
    event_points = []
    for start, end, price in events:
        event_points.append((start, -price, end))   # Start event
        event_points.append((end, 0, None))        # End event
    event_points.sort()  # Sort events by time
    
    # Step 2: Process events using a max heap
    result = []
    max_heap = [(0, float('inf'))]  # Initial dummy max heap (price, end_time)
    prev_time = 0
    prev_price = 0
    
    for time, price, end in event_points:
        # Remove prices that are no longer valid (end time has passed)
        while max_heap[0][1] <= time:
            heapq.heappop(max_heap)
        
        if price < 0:  # It's a start event, add the price to the heap
            heapq.heappush(max_heap, (price, end))
        
        current_price = -max_heap[0][0]  # Get the highest price
        
        # If price changes, record the interval
        if current_price != prev_price:
            if prev_price != 0:  # Avoid adding an interval with zero price
                result.append([prev_time, time, prev_price])
            prev_time = time
            prev_price = current_price
    
    return result

inp = [(1,5,10),(2,3,15),(7,10,5)]
print(getMaxPriceIntervals(inp))