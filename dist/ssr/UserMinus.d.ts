import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTM2YTgsOCwwLDAsMS04LDhIMjAwYTgsOCwwLDAsMSwwLTE2aDQ4QTgsOCwwLDAsMSwyNTYsMTM2Wm0tNTcuODcsNTguODVhOCw4LDAsMCwxLTEyLjI2LDEwLjNDMTY1Ljc1LDE4MS4xOSwxMzguMDksMTY4LDEwOCwxNjhzLTU3Ljc1LDEzLjE5LTc3Ljg3LDM3LjE1YTgsOCwwLDAsMS0xMi4yNS0xMC4zYzE0Ljk0LTE3Ljc4LDMzLjUyLTMwLjQxLDU0LjE3LTM3LjE3YTY4LDY4LDAsMSwxLDcxLjksMEMxNjQuNiwxNjQuNDQsMTgzLjE4LDE3Ny4wNywxOTguMTMsMTk0Ljg1Wk0xMDgsMTUyYTUyLDUyLDAsMSwwLTUyLTUyQTUyLjA2LDUyLjA2LDAsMCwwLDEwOCwxNTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIsMTM2YTQsNCwwLDAsMS00LDRIMjAwYTQsNCwwLDAsMSwwLThoNDhBNCw0LDAsMCwxLDI1MiwxMzZabS01Ni45NCw2MS40M2E0LDQsMCwwLDEtNi4xMiw1LjE0QzE2OCwxNzcuNywxMzkuMywxNjQsMTA4LDE2NHMtNjAsMTMuNy04MC45NCwzOC41N2E0LDQsMCwxLDEtNi4xMi01LjE0YzE2LjcxLTE5LjksMzguMTMtMzMuMTMsNjEuODktMzguNTlhNjQsNjQsMCwxLDEsNTAuMzQsMEMxNTYuOTMsMTY0LjMsMTc4LjM1LDE3Ny41MywxOTUuMDYsMTk3LjQzWk0xMDgsMTU2YTU2LDU2LDAsMSwwLTU2LTU2QTU2LjA2LDU2LjA2LDAsMCwwLDEwOCwxNTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTQsMTM2YTYsNiwwLDAsMS02LDZIMjAwYTYsNiwwLDAsMSwwLTEyaDQ4QTYsNiwwLDAsMSwyNTQsMTM2Wm0tNTcuNDEsNjAuMTRhNiw2LDAsMSwxLTkuMTgsNy43MkMxNjYuOSwxNzkuNDUsMTM4LjY5LDE2NiwxMDgsMTY2cy01OC44OSwxMy40NS03OS40MSwzNy44NmE2LDYsMCwwLDEtOS4xOC03LjcyQzM1LjE0LDE3Ny40MSw1NSwxNjQuNDgsNzcsMTU4LjI2YTY2LDY2LDAsMSwxLDYyLDBDMTYxLDE2NC40OCwxODAuODYsMTc3LjQxLDE5Ni41OSwxOTYuMTRaTTEwOCwxNTRhNTQsNTQsMCwxLDAtNTQtNTRBNTQuMDYsNTQuMDYsMCwwLDAsMTA4LDE1NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTM2YTEyLDEyLDAsMCwxLTEyLDEySDIwNGExMiwxMiwwLDAsMSwwLTI0aDQwQTEyLDEyLDAsMCwxLDI1NiwxMzZabS01NC44MSw1Ni4yOGExMiwxMiwwLDEsMS0xOC4zOCwxNS40NEMxNjkuMTIsMTkxLjQyLDE0NSwxNzIsMTA4LDE3MmMtMjguODksMC01NS40NiwxMi42OC03NC44MSwzNS43MmExMiwxMiwwLDAsMS0xOC4zOC0xNS40NEExMjQuMDgsMTI0LjA4LDAsMCwxLDYzLjUsMTU2LjUzYTcyLDcyLDAsMSwxLDg5LDBBMTI0LDEyNCwwLDAsMSwyMDEuMTksMTkyLjI4Wk0xMDgsMTQ4YTQ4LDQ4LDAsMSwwLTQ4LTQ4QTQ4LjA1LDQ4LjA1LDAsMCwwLDEwOCwxNDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguMTMsMTk0Ljg1QTgsOCwwLDAsMSwxOTIsMjA4SDI0YTgsOCwwLDAsMS02LjEyLTEzLjE1YzE0Ljk0LTE3Ljc4LDMzLjUyLTMwLjQxLDU0LjE3LTM3LjE3YTY4LDY4LDAsMSwxLDcxLjksMEMxNjQuNiwxNjQuNDQsMTgzLjE4LDE3Ny4wNywxOTguMTMsMTk0Ljg1Wk0yNDgsMTI4SDIwMGE4LDgsMCwwLDAsMCwxNmg0OGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTAwYTYwLDYwLDAsMSwxLTYwLTYwQTYwLDYwLDAsMCwxLDE2OCwxMDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjU2LDEzNmE4LDgsMCwwLDEtOCw4SDIwMGE4LDgsMCwwLDEsMC0xNmg0OEE4LDgsMCwwLDEsMjU2LDEzNlptLTU3Ljg3LDU4Ljg1YTgsOCwwLDAsMS0xMi4yNiwxMC4zQzE2NS43NSwxODEuMTksMTM4LjA5LDE2OCwxMDgsMTY4cy01Ny43NSwxMy4xOS03Ny44NywzNy4xNWE4LDgsMCwwLDEtMTIuMjUtMTAuM2MxNC45NC0xNy43OCwzMy41Mi0zMC40MSw1NC4xNy0zNy4xN2E2OCw2OCwwLDEsMSw3MS45LDBDMTY0LjYsMTY0LjQ0LDE4My4xOCwxNzcuMDcsMTk4LjEzLDE5NC44NVpNMTA4LDE1MmE1Miw1MiwwLDEsMC01Mi01MkE1Mi4wNiw1Mi4wNiwwLDAsMCwxMDgsMTUyWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as UserMinus };