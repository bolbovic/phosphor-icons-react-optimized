import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTYwSDQwVjU2SDIxNlYyMDBaTTE3OC4wNSw4Ny42NkMxNjQuNTksNzcuNTYsMTQ2LjgxLDcyLDEyOCw3MlM5MS40MSw3Ny41Niw3OCw4Ny42NkM2My43OSw5OC4yNyw1NiwxMTIuNiw1NiwxMjhzNy43OSwyOS43MywyMiw0MC4zNEM5MS40MSwxNzguNDQsMTA5LjE5LDE4NCwxMjgsMTg0czM2LjU5LTUuNTYsNTAuMDUtMTUuNjZDMTkyLjIxLDE1Ny43MywyMDAsMTQzLjQsMjAwLDEyOFMxOTIuMjEsOTguMjcsMTc4LjA1LDg3LjY2Wk0xMjgsMTY4Yy0zMC44OCwwLTU2LTE3Ljk0LTU2LTQwczI1LjEyLTQwLDU2LTQwLDU2LDE3Ljk0LDU2LDQwUzE1OC44OCwxNjgsMTI4LDE2OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTQsMTU2YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFY1NmE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0Wk0xMjgsNzZjLTM3LjUsMC02OCwyMy4zMy02OCw1MnMzMC41LDUyLDY4LDUyLDY4LTIzLjMzLDY4LTUyUzE2NS41LDc2LDEyOCw3NlptMCw5NmMtMzMuMDgsMC02MC0xOS43NC02MC00NHMyNi45Mi00NCw2MC00NCw2MCwxOS43NCw2MCw0NFMxNjEuMDgsMTcyLDEyOCwxNzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJabTIsMTU4YTIsMiwwLDAsMS0yLDJINDBhMiwyLDAsMCwxLTItMlY1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwyWk0xMjgsNzRjLTM4LjYsMC03MCwyNC4yMi03MCw1NHMzMS40LDU0LDcwLDU0LDcwLTI0LjIyLDcwLTU0UzE2Ni42LDc0LDEyOCw3NFptMCw5NmMtMzIsMC01OC0xOC44NC01OC00MnMyNi00Miw1OC00Miw1OCwxOC44NCw1OCw0MlMxNjAsMTcwLDEyOCwxNzBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZabS00LDE2MEg0NFY2MEgyMTJaTTgxLjQzLDE2Ni4wNUM5NCwxNzUuMDUsMTEwLjU2LDE4MCwxMjgsMTgwczM0LTQuOTUsNDYuNTctMTMuOTVDMTg4LjE5LDE1Ni4zMiwxOTYsMTQyLjQ1LDE5NiwxMjhzLTcuODEtMjguMzItMjEuNDMtMzhDMTYyLDgxLDE0NS40NCw3NiwxMjgsNzZTOTQsODEsODEuNDMsOTBDNjcuODEsOTkuNjgsNjAsMTEzLjU1LDYwLDEyOFM2Ny44MSwxNTYuMzIsODEuNDMsMTY2LjA1Wk0xMjgsMTAwYzIzLjg1LDAsNDQsMTIuODIsNDQsMjhzLTIwLjE1LDI4LTQ0LDI4LTQ0LTEyLjgyLTQ0LTI4UzEwNC4xNSwxMDAsMTI4LDEwMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabS0xNiw4OGMwLDMwLjkzLTMyLjI0LDU2LTcyLDU2cy03Mi0yNS4wNy03Mi01NiwzMi4yNC01Niw3Mi01NlMyMDAsOTcuMDcsMjAwLDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLTgsOFYyMDBhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFY1NkE4LDgsMCwwLDAsMjE2LDQ4Wk0xMjgsMTc2Yy0zNS4zNSwwLTY0LTIxLjQ5LTY0LTQ4czI4LjY1LTQ4LDY0LTQ4LDY0LDIxLjQ5LDY0LDQ4UzE2My4zNSwxNzYsMTI4LDE3NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTYwSDQwVjU2SDIxNlYyMDBaTTE3OC4wNSw4Ny42NkMxNjQuNTksNzcuNTYsMTQ2LjgxLDcyLDEyOCw3MlM5MS40MSw3Ny41Niw3OCw4Ny42NkM2My43OSw5OC4yNyw1NiwxMTIuNiw1NiwxMjhzNy43OSwyOS43MywyMiw0MC4zNEM5MS40MSwxNzguNDQsMTA5LjE5LDE4NCwxMjgsMTg0czM2LjU5LTUuNTYsNTAuMDUtMTUuNjZDMTkyLjIxLDE1Ny43MywyMDAsMTQzLjQsMjAwLDEyOFMxOTIuMjEsOTguMjcsMTc4LjA1LDg3LjY2Wk0xMjgsMTY4Yy0zMC44OCwwLTU2LTE3Ljk0LTU2LTQwczI1LjEyLTQwLDU2LTQwLDU2LDE3Ljk0LDU2LDQwUzE1OC44OCwxNjgsMTI4LDE2OFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as Vignette };