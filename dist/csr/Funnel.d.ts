import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNiw0OS41M0ExNS44MSwxNS44MSwwLDAsMCwyMTYsNDBINDBBMTYsMTYsMCwwLDAsMjguMTksNjYuNzZsLjA4LjA5TDk2LDEzOS4xN1YyMTZhMTYsMTYsMCwwLDAsMjQuODcsMTMuMzJsMzItMjEuMzRBMTYsMTYsMCwwLDAsMTYwLDE5NC42NlYxMzkuMTdsNjcuNzQtNzIuMzIuMDgtLjA5QTE1LjgsMTUuOCwwLDAsMCwyMzAuNiw0OS41M1pNNDAsNTZoMFptMTA2LjE4LDc0LjU4QTgsOCwwLDAsMCwxNDQsMTM2djU4LjY2TDExMiwyMTZWMTM2YTgsOCwwLDAsMC0yLjE2LTUuNDdMNDAsNTZIMjE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcsNTEuMTVBMTEuODUsMTEuODUsMCwwLDAsMjE2LDQ0SDQwYTEyLDEyLDAsMCwwLTguODgsMjAuMDdsLjA1LjA1TDEwMCwxMzcuNTlWMjE2YTEyLDEyLDAsMCwwLDE4LjY2LDEwbDMyLTIxLjMzYTEyLDEyLDAsMCwwLDUuMzUtMTBWMTM3LjU5bDY4Ljg2LTczLjUyQTExLjg1LDExLjg1LDAsMCwwLDIyNyw1MS4xNVptLTgsNy41LTY5LjksNzQuNjJBNCw0LDAsMCwwLDE0OCwxMzZ2NTguNjVhNCw0LDAsMCwxLTEuNzgsMy4zM2wtMzIsMjEuMzNBNCw0LDAsMCwxLDEwOCwyMTZWMTM2YTQsNCwwLDAsMC0xLjA4LTIuNzRMMzcuMDUsNTguNjdBNCw0LDAsMCwxLDQwLDUySDIxNmE0LDQsMCwwLDEsMyw2LjY1WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNzcsNTAuMzRBMTMuOCwxMy44LDAsMCwwLDIxNiw0Mkg0MEExNCwxNCwwLDAsMCwyOS42Nyw2NS40MmwuMDYuMDdMOTgsMTM4LjM4VjIxNmExNCwxNCwwLDAsMCwyMS43NywxMS42NGwzMi0yMS4zM0ExNCwxNCwwLDAsMCwxNTgsMTk0LjY2VjEzOC4zOGw2OC4zMy03M0ExMy44MiwxMy44MiwwLDAsMCwyMjguNzcsNTAuMzRabS0xMS4yNiw2Ljk0TDE0Ny42MiwxMzEuOUE2LDYsMCwwLDAsMTQ2LDEzNnY1OC42NmEyLDIsMCwwLDEtLjg5LDEuNjdsLTMyLDIxLjMzQTIsMiwwLDAsMSwxMTAsMjE2VjEzNmE2LDYsMCwwLDAtMS42Mi00LjFMMzguNTMsNTcuMzJBMiwyLDAsMCwxLDQwLDU0SDIxNmExLjksMS45LDAsMCwxLDEuODMsMS4xOUExLjg2LDEuODYsMCwwLDEsMjE3LjUxLDU3LjI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuMjksNDcuOTFBMjAsMjAsMCwwLDAsMjE2LDM2SDQwQTIwLDIwLDAsMCwwLDI1LjIsNjkuNDVsLjEyLjE0TDkyLDE0MC43NVYyMTZhMjAsMjAsMCwwLDAsMzEuMSwxNi42NGwzMi0yMS4zM0EyMCwyMCwwLDAsMCwxNjQsMTk0LjY2VjE0MC43NWw2Ni42Ny03MS4xNi4xMi0uMTRBMjAsMjAsMCwwLDAsMjM0LjI5LDQ3LjkxWm0tOTEsNzkuODlBMTIsMTIsMCwwLDAsMTQwLDEzNnY1Ni41MmwtMjQsMTZWMTM2YTEyLDEyLDAsMCwwLTMuMjUtOC4yTDQ5LjIzLDYwSDIwNi43N1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuODEsNjYuNzZsLS4wOC4wOUwxNjAsMTM5LjE3djU1LjQ5QTE2LDE2LDAsMCwxLDE1Mi44NywyMDhsLTMyLDIxLjM0QTE2LDE2LDAsMCwxLDk2LDIxNlYxMzkuMTdMMjguMjcsNjYuODVsLS4wOC0uMDlBMTYsMTYsMCwwLDEsNDAsNDBIMjE2YTE2LDE2LDAsMCwxLDExLjg0LDI2Ljc2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuOSw2MS4zOCwxNTIsMTM2djU4LjY1YTgsOCwwLDAsMS0zLjU2LDYuNjZsLTMyLDIxLjMzQTgsOCwwLDAsMSwxMDQsMjE2VjEzNkwzNC4xLDYxLjM4QTgsOCwwLDAsMSw0MCw0OEgyMTZBOCw4LDAsMCwxLDIyMS45LDYxLjM4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMC42LDQ5LjUzQTE1LjgxLDE1LjgxLDAsMCwwLDIxNiw0MEg0MEExNiwxNiwwLDAsMCwyOC4xOSw2Ni43NmwuMDguMDlMOTYsMTM5LjE3VjIxNmExNiwxNiwwLDAsMCwyNC44NywxMy4zMmwzMi0yMS4zNEExNiwxNiwwLDAsMCwxNjAsMTk0LjY2VjEzOS4xN2w2Ny43NC03Mi4zMi4wOC0uMDlBMTUuOCwxNS44LDAsMCwwLDIzMC42LDQ5LjUzWk00MCw1NmgwWm0xMDYuMTgsNzQuNThBOCw4LDAsMCwwLDE0NCwxMzZ2NTguNjZMMTEyLDIxNlYxMzZhOCw4LDAsMCwwLTIuMTYtNS40N0w0MCw1NkgyMTZaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Funnel };