import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlpNMTU4LjU1LDgzLjQxYTgsOCwwLDAsMSwxLDcuMzJsLTMyLDg4QTgsOCwwLDAsMSwxMjAsMTg0YTcuOSw3LjksMCwwLDEtMi43My0uNDgsOCw4LDAsMCwxLTQuNzktMTAuMjVMMTQwLjU4LDk2SDEwNGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMTU4LjU1LDgzLjQxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFpNMTU1LjI4LDg1LjcxYTQsNCwwLDAsMSwuNDgsMy42NmwtMzIsODhBNCw0LDAsMCwxLDEyMCwxODBhNC4xMiw0LjEyLDAsMCwxLTEuMzctLjI0LDQsNCwwLDAsMS0yLjM5LTUuMTNMMTQ2LjI5LDkySDEwNGE0LDQsMCwwLDEsMC04aDQ4QTQsNCwwLDAsMSwxNTUuMjgsODUuNzFaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFpNMTU2LjkxLDg0LjU2YTYsNiwwLDAsMSwuNzMsNS40OWwtMzIsODhBNiw2LDAsMCwxLDEyMCwxODJhNi4xNSw2LjE1LDAsMCwxLTItLjM2LDYsNiwwLDAsMS0zLjU5LTcuNjlMMTQzLjQzLDk0SDEwNGE2LDYsMCwwLDEsMC0xMmg0OEE2LDYsMCwwLDEsMTU2LjkxLDg0LjU2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWk0xNjEuODMsODEuMTJhMTIsMTIsMCwwLDEsMS40NSwxMWwtMzIsODhhMTIsMTIsMCwwLDEtMjIuNTYtOC4yTDEzNC44NywxMDBIMTA0YTEyLDEyLDAsMCwxLDAtMjRoNDhBMTIsMTIsMCwwLDEsMTYxLjgzLDgxLjEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zMS41Miw2Ni43My0zMiw4OEE4LDgsMCwwLDEsMTIwLDE4NGE3LjksNy45LDAsMCwxLTIuNzMtLjQ4LDgsOCwwLDAsMS00Ljc5LTEwLjI1TDE0MC41OCw5NkgxMDRhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDcuNTIsMTAuNzNaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZaTTE1OC41NSw4My40MWE4LDgsMCwwLDEsMSw3LjMybC0zMiw4OEE4LDgsMCwwLDEsMTIwLDE4NGE3LjksNy45LDAsMCwxLTIuNzMtLjQ4LDgsOCwwLDAsMS00Ljc5LTEwLjI1TDE0MC41OCw5NkgxMDRhOCw4LDAsMCwxLDAtMTZoNDhBOCw4LDAsMCwxLDE1OC41NSw4My40MVoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as NumberCircleSeven };