import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptMC0xNDRhNTYuMDYsNTYuMDYsMCwwLDAtNTYsNTYsOCw4LDAsMCwxLTE2LDAsNzIuMDgsNzIuMDgsMCwwLDEsNzItNzIsOCw4LDAsMCwxLDAsMTZabTcyLDU2YTcyLjA4LDcyLjA4LDAsMCwxLTcyLDcyLDgsOCwwLDAsMSwwLTE2LDU2LjA2LDU2LjA2LDAsMCwwLDU2LTU2LDgsOCwwLDAsMSwxNiwwWm0tNDAsMGEzMiwzMiwwLDEsMC0zMiwzMkEzMiwzMiwwLDAsMCwxNjAsMTI4Wm0tNDgsMGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSwxMTIsMTI4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptMC0xNTJhNjAuMDcsNjAuMDcsMCwwLDAtNjAsNjAsNCw0LDAsMCwxLTgsMCw2OC4wNyw2OC4wNywwLDAsMSw2OC02OCw0LDQsMCwwLDEsMCw4Wm02OCw2MGE2OC4wNyw2OC4wNywwLDAsMS02OCw2OCw0LDQsMCwwLDEsMC04LDYwLjA3LDYwLjA3LDAsMCwwLDYwLTYwLDQsNCwwLDAsMSw4LDBabS00MCwwYTI4LDI4LDAsMSwwLTI4LDI4QTI4LDI4LDAsMCwwLDE1NiwxMjhabS00OCwwYTIwLDIwLDAsMSwxLDIwLDIwQTIwLDIwLDAsMCwxLDEwOCwxMjhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptMC0xNDhhNTguMDcsNTguMDcsMCwwLDAtNTgsNTgsNiw2LDAsMCwxLTEyLDAsNzAuMDgsNzAuMDgsMCwwLDEsNzAtNzAsNiw2LDAsMCwxLDAsMTJabTcwLDU4YTcwLjA4LDcwLjA4LDAsMCwxLTcwLDcwLDYsNiwwLDAsMSwwLTEyLDU4LjA3LDU4LjA3LDAsMCwwLDU4LTU4LDYsNiwwLDAsMSwxMiwwWm0tNDAsMGEzMCwzMCwwLDEsMC0zMCwzMEEzMCwzMCwwLDAsMCwxNTgsMTI4Wm0tNDgsMGExOCwxOCwwLDEsMSwxOCwxOEExOCwxOCwwLDAsMSwxMTAsMTI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm0wLTEyOGE0NC4wNSw0NC4wNSwwLDAsMC00NCw0NCwxMiwxMiwwLDAsMS0yNCwwLDY4LjA3LDY4LjA3LDAsMCwxLDY4LTY4LDEyLDEyLDAsMCwxLDAsMjRabTY4LDQ0YTY4LjA3LDY4LjA3LDAsMCwxLTY4LDY4LDEyLDEyLDAsMCwxLDAtMjQsNDQuMDUsNDQuMDUsMCwwLDAsNDQtNDQsMTIsMTIsMCwwLDEsMjQsMFptLTY4LDI4YTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDEyOCwxNTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk03MiwxMjhhOCw4LDAsMCwxLTE2LDAsNzIuMDgsNzIuMDgsMCwwLDEsNzItNzIsOCw4LDAsMCwxLDAsMTZBNTYuMDYsNTYuMDYsMCwwLDAsNzIsMTI4Wm0zMiwwYTI0LDI0LDAsMSwxLDI0LDI0QTI0LDI0LDAsMCwxLDEwNCwxMjhabTI0LDcyYTgsOCwwLDAsMSwwLTE2LDU2LjA2LDU2LjA2LDAsMCwwLDU2LTU2LDgsOCwwLDAsMSwxNiwwQTcyLjA4LDcyLjA4LDAsMCwxLDEyOCwyMDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJhOTYsOTYsMCwxLDAsOTYsOTZBOTYsOTYsMCwwLDAsMTI4LDMyWm0wLDEyMGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwxMjgsMTUyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRabTAsMTkyYTg4LDg4LDAsMSwxLDg4LTg4QTg4LjEsODguMSwwLDAsMSwxMjgsMjE2Wm0wLTE0NGE1Ni4wNiw1Ni4wNiwwLDAsMC01Niw1Niw4LDgsMCwwLDEtMTYsMCw3Mi4wOCw3Mi4wOCwwLDAsMSw3Mi03Miw4LDgsMCwwLDEsMCwxNlptNzIsNTZhNzIuMDgsNzIuMDgsMCwwLDEtNzIsNzIsOCw4LDAsMCwxLDAtMTYsNTYuMDYsNTYuMDYsMCwwLDAsNTYtNTYsOCw4LDAsMCwxLDE2LDBabS00MCwwYTMyLDMyLDAsMSwwLTMyLDMyQTMyLDMyLDAsMCwwLDE2MCwxMjhabS00OCwwYTE2LDE2LDAsMSwxLDE2LDE2QTE2LDE2LDAsMCwxLDExMiwxMjhaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as VinylRecord };