import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuNzksNTEuNDhhMjIxLjI1LDIyMS4yNSwwLDAsMC00MS42Ny0zNC4zNCw4LDgsMCwwLDAtOC4yNCwwQTIyMS4yNSwyMjEuMjUsMCwwLDAsODIuMjEsNTEuNDhDNTQuNTksODAuNDgsNDAsMTEyLjQ3LDQwLDE0NGE4OCw4OCwwLDAsMCwxNzYsMEMyMTYsMTEyLjQ3LDIwMS40MSw4MC40OCwxNzMuNzksNTEuNDhaTTk2LDE4NGMwLTI3LjY3LDIyLjUzLTQ3LjI4LDMyLTU0LjMsOS40OCw3LDMyLDI2LjYzLDMyLDU0LjNhMzIsMzIsMCwwLDEtNjQsMFptNzcuMjcsMTUuOTNBNDcuOCw0Ny44LDAsMCwwLDE3NiwxODRjMC00NC00Mi4wOS02OS43OS00My44OC03MC44NmE4LDgsMCwwLDAtOC4yNCwwQzEyMi4wOSwxMTQuMjEsODAsMTQwLDgwLDE4NGE0Ny44LDQ3LjgsMCwwLDAsMi43MywxNS45M0E3MS44OCw3MS44OCwwLDAsMSw1NiwxNDRjMC0zNC40MSwyMC40LTYzLjE1LDM3LjUyLTgxLjE5QTIxNi4yMSwyMTYuMjEsMCwwLDEsMTI4LDMzLjU0YTIxNS43NywyMTUuNzcsMCwwLDEsMzQuNDgsMjkuMjdDMTkzLjQ5LDk1LjUsMjAwLDEyNSwyMDAsMTQ0QTcxLjg4LDcxLjg4LDAsMCwxLDE3My4yNywxOTkuOTNaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuOSw1NC4yNGEyMTYuNzksMjE2Ljc5LDAsMCwwLTQwLjg0LTMzLjY3LDQsNCwwLDAsMC00LjEyLDBBMjE2Ljc5LDIxNi43OSwwLDAsMCw4NS4xLDU0LjI0QzU4LjIxLDgyLjQ4LDQ0LDExMy41MSw0NCwxNDRhODQsODQsMCwwLDAsMTY4LDBDMjEyLDExMy41MSwxOTcuNzksODIuNDgsMTcwLjksNTQuMjRaTTkyLDE4NGMwLTMyLjExLDI4LjA3LTUzLjc1LDM2LTU5LjIxLDcuOTMsNS40NywzNiwyNy4xLDM2LDU5LjIxYTM2LDM2LDAsMCwxLTcyLDBabTY5Ljk0LDI4QTQzLjgyLDQzLjgyLDAsMCwwLDE3MiwxODRjMC00MS43OC00MC4yMy02Ni40LTQxLjk0LTY3LjQzYTQsNCwwLDAsMC00LjEyLDBDMTI0LjIzLDExNy42LDg0LDE0Mi4yMiw4NCwxODRhNDMuODIsNDMuODIsMCwwLDAsMTAuMDYsMjhBNzYuMDcsNzYuMDcsMCwwLDEsNTIsMTQ0YzAtNjIuNDgsNjMuNjQtMTA3LjE3LDc2LTExNS4yNiwxMi4zNiw4LjA5LDc2LDUyLjc4LDc2LDExNS4yNkE3Ni4wNyw3Ni4wNywwLDAsMSwxNjEuOTQsMjEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuMzQsNTIuODZhMjE4LjM0LDIxOC4zNCwwLDAsMC00MS4yNS0zNCw2LDYsMCwwLDAtNi4xOCwwLDIxOC4zNCwyMTguMzQsMCwwLDAtNDEuMjUsMzRDNTYuNCw4MS40OCw0MiwxMTMsNDIsMTQ0YTg2LDg2LDAsMCwwLDE3MiwwQzIxNCwxMTMsMTk5LjYsODEuNDgsMTcyLjM0LDUyLjg2Wk05NCwxODRjMC0yOS44LDI1LjExLTUwLjQxLDM0LTU2Ljc4LDguOTEsNi4zNSwzNCwyNi44NywzNCw1Ni43OGEzNC4wNSwzNC4wNSwwLDAsMS0zMi4yNSwzNGMtLjU5LDAtMS4xNiwwLTEuNzUsMHMtMS4xNiwwLTEuNzUsMEEzNC4wNSwzNC4wNSwwLDAsMSw5NCwxODRabTc0LjQyLDIxLjk0QTQ1LjY4LDQ1LjY4LDAsMCwwLDE3NCwxODRjMC00Mi45LTQxLjE2LTY4LjA5LTQyLjkxLTY5LjE0YTYsNiwwLDAsMC02LjE4LDBDMTIzLjE2LDExNS45MSw4MiwxNDEuMSw4MiwxODRhNDUuNjgsNDUuNjgsMCwwLDAsNS41OCwyMS45NEE3NCw3NCwwLDAsMSw1NCwxNDRjMC01OS44Myw1OS42Mi0xMDMuMjYsNzQtMTEyLjg2LDE0LjM5LDkuNiw3NCw1Myw3NCwxMTIuODZBNzQsNzQsMCwwLDEsMTY4LjQyLDIwNS45NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYuNjksNDguNzJhMjI1LDIyNSwwLDAsMC00Mi41Mi0zNSwxMiwxMiwwLDAsMC0xMi4zNCwwLDIyNSwyMjUsMCwwLDAtNDIuNTIsMzVDNTEsNzguNDcsMzYsMTExLjQyLDM2LDE0NGE5Miw5MiwwLDAsMCwxODQsMEMyMjAsMTExLjQyLDIwNSw3OC40NywxNzYuNjksNDguNzJaTTEwMCwxODRjMC0xMy4zMyw1LjUzLTI2LjI2LDE2LjQ1LTM4LjQ1QTkzLDkzLDAsMCwxLDEyOCwxMzQuNzJhOTMsOTMsMCwwLDEsMTEuNTUsMTAuODNDMTUwLjQ3LDE1Ny43NCwxNTYsMTcwLjY3LDE1NiwxODRhMjgsMjgsMCwwLDEtNTYsMFptNzkuODQsMy45NGMuMDktMS4zLjE2LTIuNjEuMTYtMy45NCwwLTQ2LjI2LTQ0LTczLjE3LTQ1LjgzLTc0LjI5YTEyLDEyLDAsMCwwLTEyLjM0LDBDMTIwLDExMC44Myw3NiwxMzcuNzQsNzYsMTg0YzAsMS4zMy4wNywyLjY0LjE2LDMuOTRBNjcuNjgsNjcuNjgsMCwwLDEsNjAsMTQ0YzAtMjYuNTIsMTIuMjEtNTIuODYsMzYuMjgtNzguM0EyMTMuMDcsMjEzLjA3LDAsMCwxLDEyOCwzOC4zOUMxNDUuODIsNTAuODYsMTk2LDkwLjcxLDE5NiwxNDRBNjcuNjgsNjcuNjgsMCwwLDEsMTc5Ljg0LDE4Ny45NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuNzksNTEuNDhhMjIxLjI1LDIyMS4yNSwwLDAsMC00MS42Ny0zNC4zNCw4LDgsMCwwLDAtOC4yNCwwQTIyMS4yNSwyMjEuMjUsMCwwLDAsODIuMjEsNTEuNDhDNTQuNTksODAuNDgsNDAsMTEyLjQ3LDQwLDE0NGE4OCw4OCwwLDAsMCwxNzYsMEMyMTYsMTEyLjQ3LDIwMS40MSw4MC40OCwxNzMuNzksNTEuNDhaTTk2LDE4NGMwLTI3LjY3LDIyLjUzLTQ3LjI4LDMyLTU0LjMsOS40OCw3LDMyLDI2LjYzLDMyLDU0LjNhMzIsMzIsMCwwLDEtNjQsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQ0QTgwLDgwLDAsMCwxLDEzMC4wNiwyMjQsNDAsNDAsMCwwLDAsMTY4LDE4NGMwLTQwLTQwLTY0LTQwLTY0cy00MCwyNC00MCw2NEE0MCw0MCwwLDAsMCwxMjUuOTQsMjI0LDgwLDgwLDAsMCwxLDQ4LDE0NGMwLTcyLDgwLTEyMCw4MC0xMjBTMjA4LDcyLDIwOCwxNDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTczLjc5LDUxLjQ4YTIyMS4yNSwyMjEuMjUsMCwwLDAtNDEuNjctMzQuMzQsOCw4LDAsMCwwLTguMjQsMEEyMjEuMjUsMjIxLjI1LDAsMCwwLDgyLjIxLDUxLjQ4QzU0LjU5LDgwLjQ4LDQwLDExMi40Nyw0MCwxNDRhODgsODgsMCwwLDAsMTc2LDBDMjE2LDExMi40NywyMDEuNDEsODAuNDgsMTczLjc5LDUxLjQ4Wk05NiwxODRjMC0yNy42NywyMi41My00Ny4yOCwzMi01NC4zLDkuNDgsNywzMiwyNi42MywzMiw1NC4zYTMyLDMyLDAsMCwxLTY0LDBabTc3LjI3LDE1LjkzQTQ3LjgsNDcuOCwwLDAsMCwxNzYsMTg0YzAtNDQtNDIuMDktNjkuNzktNDMuODgtNzAuODZhOCw4LDAsMCwwLTguMjQsMEMxMjIuMDksMTE0LjIxLDgwLDE0MCw4MCwxODRhNDcuOCw0Ny44LDAsMCwwLDIuNzMsMTUuOTNBNzEuODgsNzEuODgsMCwwLDEsNTYsMTQ0YzAtMzQuNDEsMjAuNC02My4xNSwzNy41Mi04MS4xOUEyMTYuMjEsMjE2LjIxLDAsMCwxLDEyOCwzMy41NGEyMTUuNzcsMjE1Ljc3LDAsMCwxLDM0LjQ4LDI5LjI3QzE5My40OSw5NS41LDIwMCwxMjUsMjAwLDE0NEE3MS44OCw3MS44OCwwLDAsMSwxNzMuMjcsMTk5LjkzWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as Flame };