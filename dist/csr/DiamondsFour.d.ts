import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIuMzQsMTA5LjY2YTgsOCwwLDAsMCwxMS4zMiwwbDQwLTQwYTgsOCwwLDAsMCwwLTExLjMybC00MC00MGE4LDgsMCwwLDAtMTEuMzIsMGwtNDAsNDBhOCw4LDAsMCwwLDAsMTEuMzJaTTEyOCwzNS4zMSwxNTYuNjksNjQsMTI4LDkyLjY5LDk5LjMxLDY0Wm01LjY2LDExMWE4LDgsMCwwLDAtMTEuMzIsMGwtNDAsNDBhOCw4LDAsMCwwLDAsMTEuMzJsNDAsNDBhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBhOCw4LDAsMCwwLDAtMTEuMzJaTTEyOCwyMjAuNjksOTkuMzEsMTkyLDEyOCwxNjMuMzEsMTU2LjY5LDE5MlptMTA5LjY2LTk4LjM1LTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFpNMTkyLDE1Ni42OSwxNjMuMzEsMTI4LDE5Miw5OS4zMSwyMjAuNjksMTI4Wm0tODIuMzQtMzQuMzUtNDAtNDBhOCw4LDAsMCwwLTExLjMyLDBsLTQwLDQwYTgsOCwwLDAsMCwwLDExLjMybDQwLDQwYTgsOCwwLDAsMCwxMS4zMiwwbDQwLTQwQTgsOCwwLDAsMCwxMDkuNjYsMTIyLjM0Wk02NCwxNTYuNjksMzUuMzEsMTI4LDY0LDk5LjMxLDkyLjY5LDEyOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjUuMTcsMTA2LjgzYTQsNCwwLDAsMCw1LjY2LDBsNDAtNDBhNCw0LDAsMCwwLDAtNS42NmwtNDAtNDBhNCw0LDAsMCwwLTUuNjYsMGwtNDAsNDBhNCw0LDAsMCwwLDAsNS42NlpNMTI4LDI5LjY2LDE2Mi4zNCw2NCwxMjgsOTguMzQsOTMuNjYsNjRabTIuODMsMTE5LjUxYTQsNCwwLDAsMC01LjY2LDBsLTQwLDQwYTQsNCwwLDAsMCwwLDUuNjZsNDAsNDBhNCw0LDAsMCwwLDUuNjYsMGw0MC00MGE0LDQsMCwwLDAsMC01LjY2Wk0xMjgsMjI2LjM0LDkzLjY2LDE5MiwxMjgsMTU3LjY2LDE2Mi4zNCwxOTJaTTIzNC44MywxMjUuMTdsLTQwLTQwYTQsNCwwLDAsMC01LjY2LDBsLTQwLDQwYTQsNCwwLDAsMCwwLDUuNjZsNDAsNDBhNCw0LDAsMCwwLDUuNjYsMGw0MC00MEE0LDQsMCwwLDAsMjM0LjgzLDEyNS4xN1pNMTkyLDE2Mi4zNCwxNTcuNjYsMTI4LDE5Miw5My42NiwyMjYuMzQsMTI4Wm0tODUuMTctMzcuMTctNDAtNDBhNCw0LDAsMCwwLTUuNjYsMGwtNDAsNDBhNCw0LDAsMCwwLDAsNS42Nmw0MCw0MGE0LDQsMCwwLDAsNS42NiwwbDQwLTQwQTQsNCwwLDAsMCwxMDYuODMsMTI1LjE3Wk02NCwxNjIuMzQsMjkuNjYsMTI4LDY0LDkzLjY2LDk4LjM0LDEyOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjMuNzYsMTA4LjI0YTYsNiwwLDAsMCw4LjQ4LDBsNDAtNDBhNiw2LDAsMCwwLDAtOC40OGwtNDAtNDBhNiw2LDAsMCwwLTguNDgsMGwtNDAsNDBhNiw2LDAsMCwwLDAsOC40OFpNMTI4LDMyLjQ5LDE1OS41MSw2NCwxMjgsOTUuNTEsOTYuNDksNjRabTQuMjQsMTE1LjI3YTYsNiwwLDAsMC04LjQ4LDBsLTQwLDQwYTYsNiwwLDAsMCwwLDguNDhsNDAsNDBhNiw2LDAsMCwwLDguNDgsMGw0MC00MGE2LDYsMCwwLDAsMC04LjQ4Wk0xMjgsMjIzLjUxLDk2LjQ5LDE5MiwxMjgsMTYwLjQ5LDE1OS41MSwxOTJabTEwOC4yNC05OS43NS00MC00MGE2LDYsMCwwLDAtOC40OCwwbC00MCw0MGE2LDYsMCwwLDAsMCw4LjQ4bDQwLDQwYTYsNiwwLDAsMCw4LjQ4LDBsNDAtNDBBNiw2LDAsMCwwLDIzNi4yNCwxMjMuNzZaTTE5MiwxNTkuNTEsMTYwLjQ5LDEyOCwxOTIsOTYuNDksMjIzLjUxLDEyOFptLTgzLjc2LTM1Ljc1LTQwLTQwYTYsNiwwLDAsMC04LjQ4LDBsLTQwLDQwYTYsNiwwLDAsMCwwLDguNDhsNDAsNDBhNiw2LDAsMCwwLDguNDgsMGw0MC00MEE2LDYsMCwwLDAsMTA4LjI0LDEyMy43NlpNNjQsMTU5LjUxLDMyLjQ5LDEyOCw2NCw5Ni40OSw5NS41MSwxMjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTkuNTEsMTA4LjQ5YTEyLDEyLDAsMCwwLDE3LDBsMzgtMzhhMTIsMTIsMCwwLDAsMC0xN2wtMzgtMzhhMTIsMTIsMCwwLDAtMTcsMGwtMzgsMzhhMTIsMTIsMCwwLDAsMCwxN1pNMTI4LDQxbDIxLDIxTDEyOCw4MywxMDcsNjJabTguNDksMTA2LjU0YTEyLDEyLDAsMCwwLTE3LDBsLTM4LDM4YTEyLDEyLDAsMCwwLDAsMTdsMzgsMzhhMTIsMTIsMCwwLDAsMTcsMGwzOC0zOGExMiwxMiwwLDAsMCwwLTE3Wk0xMjgsMjE1bC0yMS0yMSwyMS0yMSwyMSwyMVptLTE5LjUxLTk1LjUyLTM4LTM4YTEyLDEyLDAsMCwwLTE3LDBsLTM4LDM4YTEyLDEyLDAsMCwwLDAsMTdsMzgsMzhhMTIsMTIsMCwwLDAsMTcsMGwzOC0zOEExMiwxMiwwLDAsMCwxMDguNDksMTE5LjUxWk02MiwxNDksNDEsMTI4bDIxLTIxLDIxLDIxWm0xNzguNDktMjkuNTItMzgtMzhhMTIsMTIsMCwwLDAtMTcsMGwtMzgsMzhhMTIsMTIsMCwwLDAsMCwxN2wzOCwzOGExMiwxMiwwLDAsMCwxNywwbDM4LTM4QTEyLDEyLDAsMCwwLDI0MC40OSwxMTkuNTFaTTE5NCwxNDlsLTIxLTIxLDIxLTIxLDIxLDIxWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Mi4zNCw2OS42NmE4LDgsMCwwLDEsMC0xMS4zMmw0MC00MGE4LDgsMCwwLDEsMTEuMzIsMGw0MCw0MGE4LDgsMCwwLDEsMCwxMS4zMmwtNDAsNDBhOCw4LDAsMCwxLTExLjMyLDBabTUxLjMyLDc2LjY4YTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MGE4LDgsMCwwLDAsMC0xMS4zMlptMTA0LTI0LTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFptLTEyOCwwLTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMTA5LjY2LDEyMi4zNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTA0LDg4LDY0bDQwLTQwLDQwLDQwWk04OCwxOTJsNDAsNDAsNDAtNDAtNDAtNDBaTTE5Miw4OGwtNDAsNDAsNDAsNDAsNDAtNDBaTTY0LDg4LDI0LDEyOGw0MCw0MCw0MC00MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjIuMzQsMTA5LjY2YTgsOCwwLDAsMCwxMS4zMiwwbDQwLTQwYTgsOCwwLDAsMCwwLTExLjMybC00MC00MGE4LDgsMCwwLDAtMTEuMzIsMGwtNDAsNDBhOCw4LDAsMCwwLDAsMTEuMzJaTTEyOCwzNS4zMSwxNTYuNjksNjQsMTI4LDkyLjY5LDk5LjMxLDY0Wm01LjY2LDExMWE4LDgsMCwwLDAtMTEuMzIsMGwtNDAsNDBhOCw4LDAsMCwwLDAsMTEuMzJsNDAsNDBhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBhOCw4LDAsMCwwLDAtMTEuMzJaTTEyOCwyMjAuNjksOTkuMzEsMTkyLDEyOCwxNjMuMzEsMTU2LjY5LDE5MlptMTA5LjY2LTk4LjM1LTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MGE4LDgsMCwwLDAsMCwxMS4zMmw0MCw0MGE4LDgsMCwwLDAsMTEuMzIsMGw0MC00MEE4LDgsMCwwLDAsMjM3LjY2LDEyMi4zNFpNMTkyLDE1Ni42OSwxNjMuMzEsMTI4LDE5Miw5OS4zMSwyMjAuNjksMTI4Wm0tODIuMzQtMzQuMzUtNDAtNDBhOCw4LDAsMCwwLTExLjMyLDBsLTQwLDQwYTgsOCwwLDAsMCwwLDExLjMybDQwLDQwYTgsOCwwLDAsMCwxMS4zMiwwbDQwLTQwQTgsOCwwLDAsMCwxMDkuNjYsMTIyLjM0Wk02NCwxNTYuNjksMzUuMzEsMTI4LDY0LDk5LjMxLDkyLjY5LDEyOFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as DiamondsFour };