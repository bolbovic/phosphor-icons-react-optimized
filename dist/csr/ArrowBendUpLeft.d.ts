import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjAwYTgsOCwwLDAsMS0xNiwwLDg4LjEsODguMSwwLDAsMC04OC04OEg1MS4zMWwzNC4zNSwzNC4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJsLTQ4LTQ4YTgsOCwwLDAsMSwwLTExLjMybDQ4LTQ4QTgsOCwwLDAsMSw4NS42Niw2MS42Nkw1MS4zMSw5NkgxMjhBMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMjAwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMjAwYTQsNCwwLDAsMS04LDAsOTIuMSw5Mi4xLDAsMCwwLTkyLTkySDQxLjY2bDQxLjE3LDQxLjE3YTQsNCwwLDAsMS01LjY2LDUuNjZsLTQ4LTQ4YTQsNCwwLDAsMSwwLTUuNjZsNDgtNDhhNCw0LDAsMCwxLDUuNjYsNS42Nkw0MS42NiwxMDBIMTI4QTEwMC4xMSwxMDAuMTEsMCwwLDEsMjI4LDIwMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMjAwYTYsNiwwLDAsMS0xMiwwLDkwLjEsOTAuMSwwLDAsMC05MC05MEg0Ni40OWwzNy43NSwzNy43NmE2LDYsMCwxLDEtOC40OCw4LjQ4bC00OC00OGE2LDYsMCwwLDEsMC04LjQ4bDQ4LTQ4YTYsNiwwLDAsMSw4LjQ4LDguNDhMNDYuNDksOThIMTI4QTEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDIwMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMjAwYTEyLDEyLDAsMCwxLTI0LDAsODQuMDksODQuMDksMCwwLDAtODQtODRINjFsMjcuNTIsMjcuNTFhMTIsMTIsMCwwLDEtMTcsMTdsLTQ4LTQ4YTEyLDEyLDAsMCwxLDAtMTdsNDgtNDhhMTIsMTIsMCwwLDEsMTcsMTdMNjEsOTJoNjdBMTA4LjEyLDEwOC4xMiwwLDAsMSwyMzYsMjAwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjAwYTgsOCwwLDAsMS0xNiwwLDg4LjEsODguMSwwLDAsMC04OC04OEg4OHY0MGE4LDgsMCwwLDEtMTMuNjYsNS42NmwtNDgtNDhhOCw4LDAsMCwxLDAtMTEuMzJsNDgtNDhBOCw4LDAsMCwxLDg4LDU2Vjk2aDQwQTEwNC4xMSwxMDQuMTEsMCwwLDEsMjMyLDIwMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCw1NnY5NkwzMiwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDk2SDg4VjU2YTgsOCwwLDAsMC0xMy42Ni01LjY2bC00OCw0OGE4LDgsMCwwLDAsMCwxMS4zMmw0OCw0OEE4LDgsMCwwLDAsODgsMTUyVjExMmg0MGE4OC4xLDg4LjEsMCwwLDEsODgsODgsOCw4LDAsMCwwLDE2LDBBMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsOTZaTTcyLDEzMi42OSw0My4zMSwxMDQsNzIsNzUuMzFaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as ArrowBendUpLeft };