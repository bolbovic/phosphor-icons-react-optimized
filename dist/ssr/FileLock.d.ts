import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTc2aC04di00YTI4LDI4LDAsMCwwLTU2LDB2NEg0OGE4LDgsMCwwLDAtOCw4djQwYTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFYxODRBOCw4LDAsMCwwLDEyMCwxNzZabS00OC00YTEyLDEyLDAsMCwxLDI0LDB2NEg3MlptNDAsNDRINTZWMTkyaDU2Wk0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2ODhhOCw4LDAsMCwwLDE2LDBWNDBoODhWODhhOCw4LDAsMCwwLDgsOGg0OFYyMTZIMTYwYTgsOCwwLDAsMCwwLDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE2MCw1MS4zMSwxODguNjksODBIMTYwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTgwSDEwOHYtOGEyNCwyNCwwLDAsMC00OCwwdjhINDhhNCw0LDAsMCwwLTQsNHY0MGE0LDQsMCwwLDAsNCw0aDcyYTQsNCwwLDAsMCw0LTRWMTg0QTQsNCwwLDAsMCwxMjAsMTgwWm0tNTItOGExNiwxNiwwLDAsMSwzMiwwdjhINjhabTQ4LDQ4SDUyVjE4OGg2NFpNMjEwLjgzLDg1LjE3bC01Ni01NkE0LDQsMCwwLDAsMTUyLDI4SDU2QTEyLDEyLDAsMCwwLDQ0LDQwdjg4YTQsNCwwLDAsMCw4LDBWNDBhNCw0LDAsMCwxLDQtNGg5MlY4OGE0LDQsMCwwLDAsNCw0aDUyVjIxNmE0LDQsMCwwLDEtNCw0SDE2MGE0LDQsMCwwLDAsMCw4aDQwYTEyLDEyLDAsMCwwLDEyLTEyVjg4QTQsNCwwLDAsMCwyMTAuODMsODUuMTdaTTE1Niw0MS42NSwxOTguMzQsODRIMTU2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTc4SDExMHYtNmEyNiwyNiwwLDAsMC01MiwwdjZINDhhNiw2LDAsMCwwLTYsNnY0MGE2LDYsMCwwLDAsNiw2aDcyYTYsNiwwLDAsMCw2LTZWMTg0QTYsNiwwLDAsMCwxMjAsMTc4Wm0tNTAtNmExNCwxNCwwLDAsMSwyOCwwdjZINzBabTQ0LDQ2SDU0VjE5MGg2MFpNMjEyLjI0LDgzLjc2bC01Ni01NkE2LDYsMCwwLDAsMTUyLDI2SDU2QTE0LDE0LDAsMCwwLDQyLDQwdjg4YTYsNiwwLDAsMCwxMiwwVjQwYTIsMiwwLDAsMSwyLTJoOTBWODhhNiw2LDAsMCwwLDYsNmg1MFYyMTZhMiwyLDAsMCwxLTIsMkgxNjBhNiw2LDAsMCwwLDAsMTJoNDBhMTQsMTQsMCwwLDAsMTQtMTRWODhBNiw2LDAsMCwwLDIxMi4yNCw4My43NlpNMTU4LDQ2LjQ4LDE5My41Miw4MkgxNThaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTY4aC00di00YTMyLDMyLDAsMCwwLTY0LDB2NEg0OGExMiwxMiwwLDAsMC0xMiwxMnY0NGExMiwxMiwwLDAsMCwxMiwxMmg3MmExMiwxMiwwLDAsMCwxMi0xMlYxODBBMTIsMTIsMCwwLDAsMTIwLDE2OFptLTQ0LTRhOCw4LDAsMCwxLDE2LDB2NEg3NlptMzIsNDhINjBWMTkyaDQ4Wk0yMTYuNDksNzkuNTJsLTU2LTU2QTEyLDEyLDAsMCwwLDE1MiwyMEg1NkEyMCwyMCwwLDAsMCwzNiw0MHY2OGExMiwxMiwwLDAsMCwyNCwwVjQ0aDc2VjkyYTEyLDEyLDAsMCwwLDEyLDEyaDQ4VjIxMkgxNjRhMTIsMTIsMCwwLDAsMCwyNGgzNmEyMCwyMCwwLDAsMCwyMC0yMFY4OEExMiwxMiwwLDAsMCwyMTYuNDksNzkuNTJaTTE2MCw1N2wyMywyM0gxNjBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTc2aC04di00YTI4LDI4LDAsMCwwLTU2LDB2NEg0OGE4LDgsMCwwLDAtOCw4djQwYTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFYxODRBOCw4LDAsMCwwLDEyMCwxNzZabS0yNCwwSDcydi00YTEyLDEyLDAsMCwxLDI0LDBaTTIxMy42Niw4Mi4zNGwtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MHY4OGE4LDgsMCwwLDAsMTYsMFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNkgxNjBhOCw4LDAsMCwwLDAsMTZoNDBhMTYsMTYsMCwwLDAsMTYtMTZWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCwxODRoNzJ2NDBINDhaTTE1MiwzMlY4OGg1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjAsMTc2aC04di00YTI4LDI4LDAsMCwwLTU2LDB2NEg0OGE4LDgsMCwwLDAtOCw4djQwYTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFYxODRBOCw4LDAsMCwwLDEyMCwxNzZabS00OC00YTEyLDEyLDAsMCwxLDI0LDB2NEg3MlptNDAsNDRINTZWMTkyaDU2Wk0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDB2ODhhOCw4LDAsMCwwLDE2LDBWNDBoODhWODhhOCw4LDAsMCwwLDgsOGg0OFYyMTZIMTYwYTgsOCwwLDAsMCwwLDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTE2MCw1MS4zMSwxODguNjksODBIMTYwWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as FileLock };