import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptMjEuODEtOTIuNjFhMzIsMzIsMCwxLDAtNDMuNjIsMCwzNiwzNiwwLDEsMCw0My42MiwwWk0xMTIsMTAwYTE2LDE2LDAsMSwxLDE2LDE2QTE2LDE2LDAsMCwxLDExMiwxMDBabTE2LDcyYTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDEyOCwxNzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptMTQuOS05Ni4zMWEyOCwyOCwwLDEsMC0yOS44LDAsMzIsMzIsMCwxLDAsMjkuOCwwWk0xMDgsMTAwYTIwLDIwLDAsMSwxLDIwLDIwQTIwLDIwLDAsMCwxLDEwOCwxMDBabTIwLDc2YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDEyOCwxNzZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptMTguNTctOTQuNDZhMzAsMzAsMCwxLDAtMzcuMTQsMCwzNCwzNCwwLDEsMCwzNy4xNCwwWk0xMTAsMTAwYTE4LDE4LDAsMSwxLDE4LDE4QTE4LDE4LDAsMCwxLDExMCwxMDBabTE4LDc0YTIyLDIyLDAsMSwxLDIyLTIyQTIyLDIyLDAsMCwxLDEyOCwxNzRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm0yNy42LTg4LjkxYTM2LDM2LDAsMSwwLTU1LjIsMCw0MCw0MCwwLDEsMCw1NS4yLDBaTTExNiwxMDBhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTE2LDEwMFptMTIsNjhhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTI4LDE2OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTUyYTIwLDIwLDAsMSwxLTIwLTIwQTIwLDIwLDAsMCwxLDE0OCwxNTJabS0yMC0zNmExNiwxNiwwLDEsMC0xNi0xNkExNiwxNiwwLDAsMCwxMjgsMTE2Wm0xMDQsMTJBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tNjgsMjRhMzUuOTMsMzUuOTMsMCwwLDAtMTQuMTktMjguNjEsMzIsMzIsMCwxLDAtNDMuNjIsMEEzNiwzNiwwLDEsMCwxNjQsMTUyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZabTIxLjgxLTkyLjYxYTMyLDMyLDAsMSwwLTQzLjYyLDAsMzYsMzYsMCwxLDAsNDMuNjIsMFpNMTEyLDEwMGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSwxMTIsMTAwWm0xNiw3MmEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSwxMjgsMTcyWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as NumberCircleEight };