import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRDNzQuMTcsMjQsMzIsNDguNiwzMiw4MHY5NmMwLDMxLjQsNDIuMTcsNTYsOTYsNTZzOTYtMjQuNiw5Ni01NlY4MEMyMjQsNDguNiwxODEuODMsMjQsMTI4LDI0Wm04MCwxMDRjMCw5LjYyLTcuODgsMTkuNDMtMjEuNjEsMjYuOTJDMTcwLjkzLDE2My4zNSwxNTAuMTksMTY4LDEyOCwxNjhzLTQyLjkzLTQuNjUtNTguMzktMTMuMDhDNTUuODgsMTQ3LjQzLDQ4LDEzNy42Miw0OCwxMjhWMTExLjM2YzE3LjA2LDE1LDQ2LjIzLDI0LjY0LDgwLDI0LjY0czYyLjk0LTkuNjgsODAtMjQuNjRaTTY5LjYxLDUzLjA4Qzg1LjA3LDQ0LjY1LDEwNS44MSw0MCwxMjgsNDBzNDIuOTMsNC42NSw1OC4zOSwxMy4wOEMyMDAuMTIsNjAuNTcsMjA4LDcwLjM4LDIwOCw4MHMtNy44OCwxOS40My0yMS42MSwyNi45MkMxNzAuOTMsMTE1LjM1LDE1MC4xOSwxMjAsMTI4LDEyMHMtNDIuOTMtNC42NS01OC4zOS0xMy4wOEM1NS44OCw5OS40Myw0OCw4OS42Miw0OCw4MFM1NS44OCw2MC41Nyw2OS42MSw1My4wOFpNMTg2LjM5LDIwMi45MkMxNzAuOTMsMjExLjM1LDE1MC4xOSwyMTYsMTI4LDIxNnMtNDIuOTMtNC42NS01OC4zOS0xMy4wOEM1NS44OCwxOTUuNDMsNDgsMTg1LjYyLDQ4LDE3NlYxNTkuMzZjMTcuMDYsMTUsNDYuMjMsMjQuNjQsODAsMjQuNjRzNjIuOTQtOS42OCw4MC0yNC42NFYxNzZDMjA4LDE4NS42MiwyMDAuMTIsMTk1LjQzLDE4Ni4zOSwyMDIuOTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIuMTQsNDIuNTVDMTc0Ljk0LDMzLjE3LDE1Mi4xNiwyOCwxMjgsMjhTODEuMDYsMzMuMTcsNjMuODYsNDIuNTVDNDUuODksNTIuMzUsMzYsNjUuNjUsMzYsODB2OTZjMCwxNC4zNSw5Ljg5LDI3LjY1LDI3Ljg2LDM3LjQ1LDE3LjIsOS4zOCw0MCwxNC41NSw2NC4xNCwxNC41NXM0Ni45NC01LjE3LDY0LjE0LTE0LjU1YzE4LTkuOCwyNy44Ni0yMy4xLDI3Ljg2LTM3LjQ1VjgwQzIyMCw2NS42NSwyMTAuMTEsNTIuMzUsMTkyLjE0LDQyLjU1Wk0yMTIsMTc2YzAsMTEuMjktOC40MSwyMi4xLTIzLjY5LDMwLjQzQzE3Mi4yNywyMTUuMTgsMTUwLjg1LDIyMCwxMjgsMjIwcy00NC4yNy00LjgyLTYwLjMxLTEzLjU3QzUyLjQxLDE5OC4xLDQ0LDE4Ny4yOSw0NCwxNzZWMTQ5LjQ4YzQuNjksNS45MywxMS4zNywxMS4zNCwxOS44NiwxNiwxNy4yLDkuMzgsNDAsMTQuNTUsNjQuMTQsMTQuNTVzNDYuOTQtNS4xNyw2NC4xNC0xNC41NWM4LjQ5LTQuNjMsMTUuMTctMTAsMTkuODYtMTZabTAtNDhjMCwxMS4yOS04LjQxLDIyLjEtMjMuNjksMzAuNDNDMTcyLjI3LDE2Ny4xOCwxNTAuODUsMTcyLDEyOCwxNzJzLTQ0LjI3LTQuODItNjAuMzEtMTMuNTdDNTIuNDEsMTUwLjEsNDQsMTM5LjI5LDQ0LDEyOFYxMDEuNDhjNC42OSw1LjkzLDExLjM3LDExLjM0LDE5Ljg2LDE2LDE3LjIsOS4zOCw0MCwxNC41NSw2NC4xNCwxNC41NXM0Ni45NC01LjE3LDY0LjE0LTE0LjU1YzguNDktNC42MywxNS4xNy0xMCwxOS44Ni0xNlptLTIzLjY5LTE3LjU3QzE3Mi4yNywxMTkuMTgsMTUwLjg1LDEyNCwxMjgsMTI0cy00NC4yNy00LjgyLTYwLjMxLTEzLjU3QzUyLjQxLDEwMi4xLDQ0LDkxLjI5LDQ0LDgwczguNDEtMjIuMSwyMy42OS0zMC40M0M4My43Myw0MC44MiwxMDUuMTUsMzYsMTI4LDM2czQ0LjI3LDQuODIsNjAuMzEsMTMuNTdDMjAzLjU5LDU3LjksMjEyLDY4LjcxLDIxMiw4MFMyMDMuNTksMTAyLjEsMTg4LjMxLDExMC40M1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZDNzUuMjksMjYsMzQsNDkuNzIsMzQsODB2OTZjMCwzMC4yOCw0MS4yOSw1NCw5NCw1NHM5NC0yMy43Miw5NC01NFY4MEMyMjIsNDkuNzIsMTgwLjcxLDI2LDEyOCwyNlptMCwxMmM0NC40NSwwLDgyLDE5LjIzLDgyLDQycy0zNy41NSw0Mi04Miw0MlM0NiwxMDIuNzcsNDYsODAsODMuNTUsMzgsMTI4LDM4Wm04MiwxMzhjMCwyMi43Ny0zNy41NSw0Mi04Miw0MnMtODItMTkuMjMtODItNDJWMTU0Ljc5QzYyLDE3MS4xNiw5Mi4zNywxODIsMTI4LDE4MnM2Ni0xMC44NCw4Mi0yNy4yMVptMC00OGMwLDIyLjc3LTM3LjU1LDQyLTgyLDQycy04Mi0xOS4yMy04Mi00MlYxMDYuNzlDNjIsMTIzLjE2LDkyLjM3LDEzNCwxMjgsMTM0czY2LTEwLjg0LDgyLTI3LjIxWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMzUuNTJDMTc3LjYyLDI1LjUxLDE1My40OCwyMCwxMjgsMjBTNzguMzgsMjUuNTEsNjAsMzUuNTJDMzkuMzcsNDYuNzksMjgsNjIuNTgsMjgsODB2OTZjMCwxNy40MiwxMS4zNywzMy4yMSwzMiw0NC40OCwxOC4zNSwxMCw0Mi40OSwxNS41Miw2OCwxNS41MnM0OS42Mi01LjUxLDY4LTE1LjUyYzIwLjY2LTExLjI3LDMyLTI3LjA2LDMyLTQ0LjQ4VjgwQzIyOCw2Mi41OCwyMTYuNjMsNDYuNzksMTk2LDM1LjUyWk0yMDQsMTI4YzAsMTctMzEuMjEsMzYtNzYsMzZzLTc2LTE5LTc2LTM2di04LjQ2YTg4LjksODguOSwwLDAsMCw4LDQuOTRjMTguMzUsMTAsNDIuNDksMTUuNTIsNjgsMTUuNTJzNDkuNjItNS41MSw2OC0xNS41MmE4OC45LDg4LjksMCwwLDAsOC00Ljk0Wk0xMjgsNDRjNDQuNzksMCw3NiwxOSw3NiwzNnMtMzEuMjEsMzYtNzYsMzZTNTIsOTcsNTIsODAsODMuMjEsNDQsMTI4LDQ0Wm0wLDE2OGMtNDQuNzksMC03Ni0xOS03Ni0zNnYtOC40NmE4OC45LDg4LjksMCwwLDAsOCw0Ljk0YzE4LjM1LDEwLDQyLjQ5LDE1LjUyLDY4LDE1LjUyczQ5LjYyLTUuNTEsNjgtMTUuNTJhODguOSw4OC45LDAsMCwwLDgtNC45NFYxNzZDMjA0LDE5MywxNzIuNzksMjEyLDEyOCwyMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRDNzQuMTcsMjQsMzIsNDguNiwzMiw4MHY5NmMwLDMxLjQsNDIuMTcsNTYsOTYsNTZzOTYtMjQuNiw5Ni01NlY4MEMyMjQsNDguNiwxODEuODMsMjQsMTI4LDI0Wm04MCwxMDRjMCw5LjYyLTcuODgsMTkuNDMtMjEuNjEsMjYuOTJDMTcwLjkzLDE2My4zNSwxNTAuMTksMTY4LDEyOCwxNjhzLTQyLjkzLTQuNjUtNTguMzktMTMuMDhDNTUuODgsMTQ3LjQzLDQ4LDEzNy42Miw0OCwxMjhWMTExLjM2YzE3LjA2LDE1LDQ2LjIzLDI0LjY0LDgwLDI0LjY0czYyLjk0LTkuNjgsODAtMjQuNjRabS0yMS42MSw3NC45MkMxNzAuOTMsMjExLjM1LDE1MC4xOSwyMTYsMTI4LDIxNnMtNDIuOTMtNC42NS01OC4zOS0xMy4wOEM1NS44OCwxOTUuNDMsNDgsMTg1LjYyLDQ4LDE3NlYxNTkuMzZjMTcuMDYsMTUsNDYuMjMsMjQuNjQsODAsMjQuNjRzNjIuOTQtOS42OCw4MC0yNC42NFYxNzZDMjA4LDE4NS42MiwyMDAuMTIsMTk1LjQzLDE4Ni4zOSwyMDIuOTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODBjMCwyNi41MS0zOS40LDQ4LTg4LDQ4UzQwLDEwNi41MSw0MCw4MHMzOS40LTQ4LDg4LTQ4UzIxNiw1My40OSwyMTYsODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0Qzc0LjE3LDI0LDMyLDQ4LjYsMzIsODB2OTZjMCwzMS40LDQyLjE3LDU2LDk2LDU2czk2LTI0LjYsOTYtNTZWODBDMjI0LDQ4LjYsMTgxLjgzLDI0LDEyOCwyNFptODAsMTA0YzAsOS42Mi03Ljg4LDE5LjQzLTIxLjYxLDI2LjkyQzE3MC45MywxNjMuMzUsMTUwLjE5LDE2OCwxMjgsMTY4cy00Mi45My00LjY1LTU4LjM5LTEzLjA4QzU1Ljg4LDE0Ny40Myw0OCwxMzcuNjIsNDgsMTI4VjExMS4zNmMxNy4wNiwxNSw0Ni4yMywyNC42NCw4MCwyNC42NHM2Mi45NC05LjY4LDgwLTI0LjY0Wk02OS42MSw1My4wOEM4NS4wNyw0NC42NSwxMDUuODEsNDAsMTI4LDQwczQyLjkzLDQuNjUsNTguMzksMTMuMDhDMjAwLjEyLDYwLjU3LDIwOCw3MC4zOCwyMDgsODBzLTcuODgsMTkuNDMtMjEuNjEsMjYuOTJDMTcwLjkzLDExNS4zNSwxNTAuMTksMTIwLDEyOCwxMjBzLTQyLjkzLTQuNjUtNTguMzktMTMuMDhDNTUuODgsOTkuNDMsNDgsODkuNjIsNDgsODBTNTUuODgsNjAuNTcsNjkuNjEsNTMuMDhaTTE4Ni4zOSwyMDIuOTJDMTcwLjkzLDIxMS4zNSwxNTAuMTksMjE2LDEyOCwyMTZzLTQyLjkzLTQuNjUtNTguMzktMTMuMDhDNTUuODgsMTk1LjQzLDQ4LDE4NS42Miw0OCwxNzZWMTU5LjM2YzE3LjA2LDE1LDQ2LjIzLDI0LjY0LDgwLDI0LjY0czYyLjk0LTkuNjgsODAtMjQuNjRWMTc2QzIwOCwxODUuNjIsMjAwLjEyLDE5NS40MywxODYuMzksMjAyLjkyWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as Database };