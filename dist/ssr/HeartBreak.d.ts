import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDBhNjEuNiw2MS42LDAsMCwwLTQzLjg0LDE4LjE2TDEyOCw2NC4zMmwtNi4xNi02LjE2QTYyLDYyLDAsMCwwLDE2LDEwMmMwLDcwLDEwMy43OSwxMjYuNjcsMTA4LjIxLDEyOWE4LDgsMCwwLDAsNy41OCwwQzEzNi4yMSwyMjguNjcsMjQwLDE3MiwyNDAsMTAyQTYyLjA3LDYyLjA3LDAsMCwwLDE3OCw0MFpNMTI4LDIxNC44QzEwOS43NCwyMDQuMTYsMzIsMTU1LjY5LDMyLDEwMmE0Niw0NiwwLDAsMSw3OC41My0zMi41M2w2LjE2LDYuMTZMMTA2LjM0LDg2YTgsOCwwLDAsMCwwLDExLjMxbDI0LjUzLDI0LjUzLTE2LjUzLDE2LjUyYTgsOCwwLDAsMCwxMS4zMiwxMS4zMmwyMi4xOC0yMi4xOWE4LDgsMCwwLDAsMC0xMS4zMUwxMjMuMzEsOTEuNjNsMjIuMTYtMjIuMTZBNDYsNDYsMCwwLDEsMjI0LDEwMkMyMjQsMTU1LjYxLDE0Ni4yNCwyMDQuMTUsMTI4LDIxNC44WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDRhNTcuNTksNTcuNTksMCwwLDAtNDEsMTdsLTksOS05LTlhNTgsNTgsMCwwLDAtOTksNDFjMCwyOC41OSwxOCw1OC40Nyw1My40LDg4Ljc5YTMzMy44MSwzMzMuODEsMCwwLDAsNTIuNywzNi43Myw0LDQsMCwwLDAsMy44LDAsMzMzLjgxLDMzMy44MSwwLDAsMCw1Mi43LTM2LjczQzIxOCwxNjAuNDcsMjM2LDEzMC41OSwyMzYsMTAyQTU4LjA3LDU4LjA3LDAsMCwwLDE3OCw0NFpNMTI4LDIxOS40MmMtMTQtOC0xMDAtNTkuMzUtMTAwLTExNy40MmE1MCw1MCwwLDAsMSw4NS4zNi0zNS4zNmw5LDlMMTA5LjE3LDg4LjhhNCw0LDAsMCwwLDAsNS42NmwyNy4zNiwyNy4zNi0xOS4zNiwxOS4zNWE0LDQsMCwwLDAsNS42Niw1LjY2TDE0NSwxMjQuNjRhNCw0LDAsMCwwLDAtNS42NUwxMTcuNjYsOTEuNjNsMTMuMTYtMTMuMTZoMGwxMS44LTExLjgxQTUwLDUwLDAsMCwxLDIyOCwxMDJDMjI4LDE2MCwxNDIsMjExLjQ2LDEyOCwyMTkuNDJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDJhNTkuNjMsNTkuNjMsMCwwLDAtNDIuNDMsMTcuNTdMMTI4LDY3LjE1bC03LjU3LTcuNThBNjAsNjAsMCwwLDAsMTgsMTAyYzAsMjkuMiwxOC4yLDU5LjU5LDU0LjEsOTAuMzFhMzM0LjY4LDMzNC42OCwwLDAsMCw1My4wNiwzNyw2LDYsMCwwLDAsNS42OCwwLDMzNC42OCwzMzQuNjgsMCwwLDAsNTMuMDYtMzdDMjE5LjgsMTYxLjU5LDIzOCwxMzEuMiwyMzgsMTAyQTYwLjA3LDYwLjA3LDAsMCwwLDE3OCw0MlpNMTI4LDIxNy4xMUMxMTEuNTksMjA3LjY0LDMwLDE1Ny43MiwzMCwxMDJhNDgsNDgsMCwwLDEsODEuOTQtMzMuOTRsNy41Nyw3LjU3TDEwNy43Niw4Ny4zOWE2LDYsMCwwLDAsMCw4LjQ5bDI1Ljk0LDI1Ljk0LTE3Ljk0LDE3Ljk0YTYsNiwwLDAsMCw4LjQ4LDguNDhsMjIuMTktMjIuMThhNiw2LDAsMCwwLDAtOC40OUwxMjAuNDksOTEuNjNsMjMuNTctMjMuNTdBNDgsNDgsMCwwLDEsMjI2LDEwMkMyMjYsMTU3LjcyLDE0NC40MSwyMDcuNjQsMTI4LDIxNy4xMVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsMzZhNjUuNiw2NS42LDAsMCwwLTQ2LjY3LDE5LjMzTDEyOCw1OC42NmwtMy4zMy0zLjMzQTY2LDY2LDAsMCwwLDEyLDEwMmMwLDcyLjM0LDEwNS44MSwxMzAuMTQsMTEwLjMxLDEzMi41N2ExMiwxMiwwLDAsMCwxMS4zOCwwQzEzOC4xOSwyMzIuMTQsMjQ0LDE3NC4zNCwyNDQsMTAyQTY2LjA4LDY2LjA4LDAsMCwwLDE3OCwzNlptLTUuNDksMTQyLjM2QTMyOC42OSwzMjguNjksMCwwLDEsMTI4LDIxMC4xNmEzMjguNjksMzI4LjY5LDAsMCwxLTQ0LjUxLTMxLjhDNjEuODIsMTU5Ljc3LDM2LDEzMS40MiwzNiwxMDJhNDIsNDIsMCwwLDEsNzEuNy0yOS43TDExMSw3NS42M2wtNy41Miw3LjUyYTEyLDEyLDAsMCwwLDAsMTdsMjEuNywyMS43LTEzLjcsMTMuNjlhMTIsMTIsMCwxLDAsMTcsMTdsMjIuMTgtMjIuMTlhMTIsMTIsMCwwLDAsMC0xN0wxMjksOTEuNjMsMTQ4LjMsNzIuM0E0Miw0MiwwLDAsMSwyMjAsMTAyQzIyMCwxMzEuNDIsMTk0LjE4LDE1OS43NywxNzIuNTEsMTc4LjM2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuODEsMTA3LjVjLTUuMTksNjcuNDItMTAzLjcsMTIxLjIzLTEwOCwxMjMuNTRhOCw4LDAsMCwxLTcuNTgsMEMxMTkuOCwyMjguNjcsMTYsMTcyLDE2LDEwMmE2Miw2MiwwLDAsMSw5Ni40Ny01MS41NSw0LDQsMCwwLDEsLjYxLDYuMTdMOTkuNzIsNzBhOCw4LDAsMCwwLDAsMTEuMzFsMzIuNTMsMzIuNTNMMTExLDEzNWE4LDgsMCwxLDAsMTEuMzEsMTEuMzFsMjYuODgtMjYuODdhOCw4LDAsMCwwLDAtMTEuMzFMMTE2LjcsNzUuNjNsMTcuNDctMTcuNDdoMEE2MS42Myw2MS42MywwLDAsMSwxNzguNDEsNDBDMjE0LjczLDQwLjIzLDI0Mi41OSw3MS4yOSwyMzkuODEsMTA3LjVaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTAyYzAsNjYtMTA0LDEyMi0xMDQsMTIyUzI0LDE2OCwyNCwxMDJhNTQsNTQsMCwwLDEsOTIuMTgtMzguMThMMTI4LDc1LjYzbDExLjgyLTExLjgxQTU0LDU0LDAsMCwxLDIzMiwxMDJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc4LDQwYTYxLjYsNjEuNiwwLDAsMC00My44NCwxOC4xNkwxMjgsNjQuMzJsLTYuMTYtNi4xNkE2Miw2MiwwLDAsMCwxNiwxMDJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJhNDYsNDYsMCwwLDEsNzguNTMtMzIuNTNsNi4xNiw2LjE2TDEwNi4zNCw4NmE4LDgsMCwwLDAsMCwxMS4zMWwyNC41MywyNC41My0xNi41MywxNi41MmE4LDgsMCwwLDAsMTEuMzIsMTEuMzJsMjIuMTgtMjIuMTlhOCw4LDAsMCwwLDAtMTEuMzFMMTIzLjMxLDkxLjYzbDIyLjE2LTIyLjE2QTQ2LDQ2LDAsMCwxLDIyNCwxMDJDMjI0LDE1NS42MSwxNDYuMjQsMjA0LjE1LDEyOCwyMTQuOFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as HeartBreak };