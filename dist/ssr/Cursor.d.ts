import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTMyLjY5LDIxNC4wOCwxMTVsLjMzLS4xM0ExNiwxNiwwLDAsMCwyMTMsODUuMDdMNTIuOTIsMzIuOEExNS45NSwxNS45NSwwLDAsMCwzMi44LDUyLjkyTDg1LjA3LDIxM2ExNS44MiwxNS44MiwwLDAsMCwxNC40MSwxMWwuNzgsMGExNS44NCwxNS44NCwwLDAsMCwxNC42MS05LjU5bC4xMy0uMzNMMTMyLjY5LDE2OCwxODQsMjE5LjMxYTE2LDE2LDAsMCwwLDIyLjYzLDBsMTIuNjgtMTIuNjhhMTYsMTYsMCwwLDAsMC0yMi42M1pNMTk1LjMxLDIwOCwxNDQsMTU2LjY5YTE2LDE2LDAsMCwwLTI2LDQuOTNjMCwuMTEtLjA5LjIyLS4xMy4zMmwtMTcuNjUsNDZMNDgsNDhsMTU5Ljg1LDUyLjItNDUuOTUsMTcuNjQtLjMyLjEzYTE2LDE2LDAsMCwwLTQuOTMsMjZoMEwyMDgsMTk1LjMxWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjUuMTcsMTM1LjUxYTQsNCwwLDAsMSwxLjE3LTYuNDZsNDYuMzEtMTcuNzkuMTYtLjA2YTEyLDEyLDAsMCwwLTEuMDUtMjIuMzNMNTEuNjcsMzYuNkExMiwxMiwwLDAsMCwzNi42LDUxLjY3TDg4Ljg3LDIxMS43NkExMS44NiwxMS44NiwwLDAsMCw5OS42NywyMjBoLjU4YTExLjg2LDExLjg2LDAsMCwwLDExLTcuMTlsLjA2LS4xNiwxNy43OS00Ni4zMWE0LDQsMCwwLDEsNi40Ny0xLjE3bDUxLjMxLDUxLjMyYTEyLDEyLDAsMCwwLDE3LDBsMTIuNjktMTIuNjlhMTIsMTIsMCwwLDAsMC0xN1ptNDUuNjYsNjIuNjMtMTIuNjksMTIuNjlhNCw0LDAsMCwxLTUuNjYsMGwtNTEuMzEtNTEuMzFhMTIsMTIsMCwwLDAtOC40OC0zLjUyLDEyLjEzLDEyLjEzLDAsMCwwLTIuMjQuMjEsMTIsMTIsMCwwLDAtOC43Nyw3bC0uMDYuMTYtMTcuNzksNDYuMzFhNCw0LDAsMCwxLTcuMzYtLjQyTDQ0LjIsNDkuMTlhNCw0LDAsMCwxLDUtNUwyMDkuMjcsOTYuNDdhNCw0LDAsMCwxLC40Miw3LjM2bC00Ni4zMSwxNy43OC0uMTYuMDdhMTIsMTIsMCwwLDAtMy43MSwxOS40OWw1MS4zMiw1MS4zMUE0LDQsMCwwLDEsMjEwLjgzLDE5OC4xNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjYuNTksMTM0LjFhMS45MSwxLjkxLDAsMCwxLS41NS0xLjc5LDIsMiwwLDAsMSwxLjA4LTEuNDJsNDYuMjUtMTcuNzYuMjQtLjFBMTQsMTQsMCwwLDAsMjEyLjM4LDg3TDUyLjI5LDM0LjdBMTMuOTUsMTMuOTUsMCwwLDAsMzQuNyw1Mi4yOUw4NywyMTIuMzhhMTMuODIsMTMuODIsMCwwLDAsMTIuNiw5LjZjLjIzLDAsLjQ2LDAsLjY5LDBBMTMuODQsMTMuODQsMCwwLDAsMTEzLDIxMy42MWEyLjQ0LDIuNDQsMCwwLDAsLjEtLjI0bDE3Ljc2LTQ2LjI1YTIsMiwwLDAsMSwzLjIxLS41M2w1MS4zMSw1MS4zMWExNCwxNCwwLDAsMCwxOS44LDBsMTIuNjktMTIuNjlhMTQsMTQsMCwwLDAsMC0xOS44Wm00Mi44Miw2Mi42My0xMi42OCwxMi42OGEyLDIsMCwwLDEtMi44MywwTDE0Mi41OSwxNTguMWExNCwxNCwwLDAsMC0yMi43NCw0LjMyLDIuNDQsMi40NCwwLDAsMC0uMS4yNEwxMDIsMjA4LjkxYTIsMiwwLDAsMS0zLjYxLS4yNkw0Ni4xMSw0OC41N2ExLjg3LDEuODcsMCwwLDEsLjQ3LTJBMS45MiwxLjkyLDAsMCwxLDQ3LjkzLDQ2YTIuMjIsMi4yMiwwLDAsMSwuNjQuMUwyMDguNjUsOTguMzhhMiwyLDAsMCwxLC4yNiwzLjYxbC00Ni4yNSwxNy43Ni0uMjQuMWExNCwxNCwwLDAsMC00LjMyLDIyLjc0aDBsNTEuMzEsNTEuMzFBMiwyLDAsMCwxLDIwOS40MSwxOTYuNzNaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuMTUsMTc5LjE3bC00Ni44My00Ni44MiwzNy45My0xMy41MS43Ni0uM2EyMCwyMCwwLDAsMC0xLjc2LTM3LjI3TDU0LjE2LDI5QTIwLDIwLDAsMCwwLDI5LDU0LjE2TDgxLjI3LDIxNC4yNEEyMCwyMCwwLDAsMCwxMTguNTQsMjE2Yy4xMS0uMjUuMjEtLjUuMy0uNzZsMTMuNTEtMzcuOTIsNDYuODMsNDYuODJhMjAsMjAsMCwwLDAsMjguMjgsMGwxNi42OS0xNi42OEEyMCwyMCwwLDAsMCwyMjQuMTUsMTc5LjE3Wm0tMzAuODMsMjUuMTctNDguNDgtNDguNDhBMjAsMjAsMCwwLDAsMTMwLjcsMTUwYTIwLjY2LDIwLjY2LDAsMCwwLTMuNzQuMzVBMjAsMjAsMCwwLDAsMTEyLjM1LDE2MmMtLjExLjI1LS4yMS41LS4zLjc2TDEwMC40LDE5NS41LDU0LjI5LDU0LjI5bDE0MS4yMSw0Ni4xLTMyLjcxLDExLjY2Yy0uMjYuMDktLjUxLjE5LS43Ni4zYTIwLDIwLDAsMCwwLTYuMTcsMzIuNDhoMGw0OC40OSw0OC40OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNDksMjA3LjgsMjA3LjgsMjIwLjQ5YTEyLDEyLDAsMCwxLTE3LDBsLTU2LjU3LTU2LjU3TDExNSwyMTQuMDhsLS4xMy4zM0ExNS44NCwxNS44NCwwLDAsMSwxMDAuMjYsMjI0bC0uNzgsMGExNS44MiwxNS44MiwwLDAsMS0xNC40MS0xMUwzMi44LDUyLjkyQTE1Ljk1LDE1Ljk1LDAsMCwxLDUyLjkyLDMyLjhMMjEzLDg1LjA3YTE2LDE2LDAsMCwxLDEuNDEsMjkuOGwtLjMzLjEzLTUwLjE2LDE5LjI3LDU2LjU3LDU2LjU2QTEyLDEyLDAsMCwxLDIyMC40OSwyMDcuOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMjAxLDIwMSwyMTMuNjZhOCw4LDAsMCwxLTExLjMxLDBsLTUxLjMxLTUxLjMxYTgsOCwwLDAsMC0xMywyLjQ2bC0xNy44Miw0Ni40MWE4LDgsMCwwLDEtMTQuODUtLjcxTDQwLjQxLDUwLjQ0YTgsOCwwLDAsMSwxMC0xMEwyMTAuNTEsOTIuNjhhOCw4LDAsMCwxLC43MSwxNC44NWwtNDYuNDEsMTcuODJhOCw4LDAsMCwwLTIuNDYsMTNsNTEuMzEsNTEuMzFBOCw4LDAsMCwxLDIxMy42NiwyMDFaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTY4LDEzMi42OSwyMTQuMDgsMTE1bC4zMy0uMTNBMTYsMTYsMCwwLDAsMjEzLDg1LjA3TDUyLjkyLDMyLjhBMTUuOTUsMTUuOTUsMCwwLDAsMzIuOCw1Mi45Mkw4NS4wNywyMTNhMTUuODIsMTUuODIsMCwwLDAsMTQuNDEsMTFsLjc4LDBhMTUuODQsMTUuODQsMCwwLDAsMTQuNjEtOS41OWwuMTMtLjMzTDEzMi42OSwxNjgsMTg0LDIxOS4zMWExNiwxNiwwLDAsMCwyMi42MywwbDEyLjY4LTEyLjY4YTE2LDE2LDAsMCwwLDAtMjIuNjNaTTE5NS4zMSwyMDgsMTQ0LDE1Ni42OWExNiwxNiwwLDAsMC0yNiw0LjkzYzAsLjExLS4wOS4yMi0uMTMuMzJsLTE3LjY1LDQ2TDQ4LDQ4bDE1OS44NSw1Mi4yLTQ1Ljk1LDE3LjY0LS4zMi4xM2ExNiwxNiwwLDAsMC00LjkzLDI2aDBMMjA4LDE5NS4zMVoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as Cursor };