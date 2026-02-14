- When this command is executed with a LeetCode solution and a Leetcode Link, analyze the code and create a properly formatted markdown file in the appropriate category folder.

## Workflow:

1. **Analyze the solution code** to determine the problem category:
   - **Tree**: Look for `TreeNode`, tree traversal (DFS/BFS on trees), tree construction
   - **Linked List**: Look for `ListNode`, linked list operations
   - **Graph**: Look for adjacency lists, graph traversal (DFS/BFS), edges/vertices
   - **Dynamic Programming**: Look for memoization, DP arrays, recurrence relations, optimization problems
   - **Backtrack**: Look for recursive exploration with undo operations, constraint satisfaction
   - **Binary Search**: Look for sorted array operations, `left/right` pointers, `mid` calculations
   - **Sliding Window**: Look for `left/right` pointers moving in one direction, window size constraints
   - **Two Pointers**: Look for two pointers moving (could be same/different directions), array manipulation
   - **Heap**: Look for `heapq`, priority queues, k-largest/smallest problems
   - **Greedy**: Look for local optimal choices, sorting + greedy selection
   - **Intervals**: Look for interval merging, scheduling, range problems
   - **Prefix Sum**: Look for cumulative sums, subarray sum problems
   - **Math**: Look for mathematical formulas, number theory, arithmetic operations
   - **String**: Look for string manipulation, pattern matching (if not clearly DP/Backtrack)
   - **Array**: Default for array problems that don't fit other categories

2. **Extract problem metadata**:
   - **Problem name**: From function/class name, comments, or ask user if unclear
   - **LeetCode URL**: Use format `https://leetcode.com/problems/[problem-slug]` (ask user for slug if needed)
   - **Difficulty**: From user input, problem characteristics, or default to Medium

3. **Create markdown file** at `src/my-website/others/[Category]/[Problem Name].md` with structure:
   ```markdown
   ---
   tags:
    - [Difficulty]
   ---
   
   [LeetCode URL]
   
   [Solution code exactly as provided, preserving all comments including time/space complexity]
   ```

4. **After file creation**, automatically execute the `solution.md` command on the newly created file to:
   - Add problem understanding section
   - Explain how and why the solution works
   - Add layman explanations
   - Enhance time/space complexity explanations if needed
   - **Order**: Place all explanations (understanding, how/why, layman, complexity) **before** the solution code block

## Guidelines:
- **Explanations before solution**: In the final markdown, all explanation sections (problem understanding, how/why the solution works, layman explanations, time/space complexity) must appear **before** the solution code.
- Filename should match the problem name exactly (e.g., "Two Sum.md")
- If category is ambiguous, prioritize the core algorithm/technique used
- Preserve all original code formatting and comments
- If metadata is missing, ask the user before proceeding
- Ensure the file path uses the correct subdirectory based on problem type
- When searching for the subdirectory best representing the topic, if the topic is not found in `others`, you are free to create the directory for the topic as well
- remember to wrap numbers, or symbols in backquotes to prevent building error, eg: `<= 10`

