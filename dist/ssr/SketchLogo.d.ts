import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsOTguNzNsLTU2LTY0QTgsOCwwLDAsMCwxODQsMzJINzJhOCw4LDAsMCwwLTYsMi43M2wtNTYsNjRhOCw4LDAsMCwwLC4xNywxMC43M2wxMTIsMTIwYTgsOCwwLDAsMCwxMS43LDBsMTEyLTEyMEE4LDgsMCwwLDAsMjQ2LDk4LjczWk0yMjIuMzcsOTZIMTgwTDE0NCw0OGgzNi4zN1pNNzQuNTgsMTEybDMwLjEzLDc1LjMzTDM0LjQxLDExMlptODkuNiwwTDEyOCwyMDIuNDYsOTEuODIsMTEyWk05Niw5NmwzMi00Mi42N0wxNjAsOTZabTg1LjQyLDE2aDQwLjE3bC03MC4zLDc1LjMzWk03NS42Myw0OEgxMTJMNzYsOTZIMzMuNjNaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMsMTAxLjM3bC01Ni02NEE0LDQsMCwwLDAsMTg0LDM2SDcyYTQsNCwwLDAsMC0zLDEuMzdsLTU2LDY0YTQsNCwwLDAsMCwuMDksNS4zNmwxMTIsMTIwYTQsNCwwLDAsMCw1Ljg0LDBsMTEyLTEyMEE0LDQsMCwwLDAsMjQzLDEwMS4zN1pNNzcuMjksMTA4bDM5LjA3LDk3LjY2TDI1LjIsMTA4Wm05Mi44LDBMMTI4LDIxMy4yMyw4NS45MSwxMDhaTTg4LDEwMGw0MC01My4zM0wxNjgsMTAwWm05MC43MSw4SDIzMC44bC05MS4xNiw5Ny42NlptNTIuNDctOEgxNzhMMTM2LDQ0aDQ2LjE4Wk03My44Miw0NEgxMjBMNzgsMTAwSDI0LjgyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQuNTIsMTAwLjA1bC01Ni02NEE2LDYsMCwwLDAsMTg0LDM0SDcyYTYsNiwwLDAsMC00LjUyLDJsLTU2LDY0YTYsNiwwLDAsMCwuMTMsOGwxMTIsMTIwYTYsNiwwLDAsMCw4Ljc4LDBsMTEyLTEyMEE2LDYsMCwwLDAsMjQ0LjUyLDEwMC4wNVpNNzUuOTQsMTEwbDM0LjYsODYuNDlMMjkuODEsMTEwWm05MS4yLDBMMTI4LDIwNy44NCw4OC44NiwxMTBaTTkyLDk4bDM2LTQ4LDM2LDQ4Wm04OC4wNiwxMmg0Ni4xM2wtODAuNzMsODYuNDlabTQ2LjcyLTEySDE3OUwxNDAsNDZoNDEuMjhaTTc0LjcyLDQ2SDExNkw3Nyw5OEgyOS4yMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDksOTYuMWwtNTYtNjRhMTIsMTIsMCwwLDAtOS00LjFINzJhMTIsMTIsMCwwLDAtOSw0LjFMNyw5Ni4xYTEyLDEyLDAsMCwwLC4yNiwxNi4wOWwxMTIsMTIwYTEyLDEyLDAsMCwwLDE3LjU0LDBsMTEyLTEyMEExMiwxMiwwLDAsMCwyNDksOTYuMVpNMjEzLjU1LDkySDE4MkwxNTIsNTJoMjYuNTVaTTcxLjg4LDExNmwyMS4xOSw1M0w0My42MSwxMTZabTg2LjQsMEwxMjgsMTkxLjY5LDk3LjcyLDExNlpNMTA0LDkybDI0LTMyLDI0LDMyWm04MC4xMiwyNGgyOC4yN2wtNDkuNDYsNTNaTTc3LjQ1LDUySDEwNEw3NCw5Mkg0Mi40NVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsOTguNzNsLTU2LTY0QTgsOCwwLDAsMCwxODQsMzJINzJhOCw4LDAsMCwwLTYsMi43M2wtNTYsNjRhOCw4LDAsMCwwLC4xNywxMC43M2wxMTIsMTIwYTgsOCwwLDAsMCwxMS43LDBsMTEyLTEyMEE4LDgsMCwwLDAsMjQ2LDk4LjczWk0yMjIuMzcsOTZIMTgwTDE0NCw0OGgzNi4zN1pNNzQuNTgsMTEybDMwLjEzLDc1LjMzTDM0LjQxLDExMlptMTA2Ljg0LDBoNDAuMTdsLTcwLjMsNzUuMzNaTTc1LjYzLDQ4SDExMkw3Niw5NkgzMy42M1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA0LDEyOCwyMjQsODAsMTA0bDQ4LTY0aDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0Niw5OC43M2wtNTYtNjRBOCw4LDAsMCwwLDE4NCwzMkg3MmE4LDgsMCwwLDAtNiwyLjczbC01Niw2NGE4LDgsMCwwLDAsLjE3LDEwLjczbDExMiwxMjBhOCw4LDAsMCwwLDExLjcsMGwxMTItMTIwQTgsOCwwLDAsMCwyNDYsOTguNzNaTTIyMi4zNyw5NkgxODBMMTQ0LDQ4aDM2LjM3Wk03NC41OCwxMTJsMzAuMTMsNzUuMzNMMzQuNDEsMTEyWm04OS42LDBMMTI4LDIwMi40Niw5MS44MiwxMTJaTTk2LDk2bDMyLTQyLjY3TDE2MCw5NlptODUuNDIsMTZoNDAuMTdsLTcwLjMsNzUuMzNaTTc1LjYzLDQ4SDExMkw3Niw5NkgzMy42M1oiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as SketchLogo };