import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01My45MywzNC42MkE4LDgsMCwxLDAsNDIuMDksNDUuMzhMNjkuNjgsNzUuNzRhMTQxLjI2LDE0MS4yNiwwLDAsMC00NS4yNywzMC40NGMtMjAsMjAtMjEuOTIsNDkuNDYtNC42OSw3MS42N2ExNiwxNiwwLDAsMCwxOC4zOCw1LjA3bDQ5LTE3LjM3LjI5LS4xMWExNiwxNiwwLDAsMCw5Ljc1LTExLjcybDUuOS0yOS41MWE3NS44OSw3NS44OSwwLDAsMSw4LjU2LTIuNGw5MC41MSw5OS41N2E4LDgsMCwxLDAsMTEuODQtMTAuNzZabTQzLjcsNzQuNTJhMTYsMTYsMCwwLDAtMTAuMzIsMTEuOTRsLTUuOSwyOS41LTQ4Ljc4LDE3LjNjLS4xLDAtLjE3LjEzLS4yNy4xNy0xMi4zMy0xNS45LTExLTM2LjIyLDMuMzYtNTAuNTZhMTI1Ljc5LDEyNS43OSwwLDAsMSw0NS40Ny0yOS4xbDE4LjMsMjAuMTRDOTguODcsMTA4LjczLDk4LjI1LDEwOC45Miw5Ny42MywxMDkuMTRabTEzOC42NSw2OC43MWExNiwxNiwwLDAsMS0xOC4zOCw1LjA3bC05LjI1LTMuMjhBOCw4LDAsMCwxLDIxNCwxNjQuNTZsOS4zNywzLjMyLjMuMTJjMTIuMy0xNS44NSwxMS0zNi4xNy0zLjM5LTUwLjUxLTI1LjY2LTI1LjY2LTYxLjg4LTM5LjI3LTk5LjM1LTM3LjMxYTgsOCwwLDEsMS0uODMtMTZjNDItMi4xOSw4Mi42MywxMy4xLDExMS40OSw0MkMyNTEuNTgsMTI2LjE3LDI1My41MSwxNTUuNjQsMjM2LjI4LDE3Ny44NVoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01MSwzNy4zMUE0LDQsMCwxLDAsNDUsNDIuNjlMNzYuNTIsNzcuMzJBMTM3LjcyLDEzNy43MiwwLDAsMCwyNy4yMSwxMDlDOC42OSwxMjcuNTMsNi45LDE1NC44MywyMi44NSwxNzUuNGExMiwxMiwwLDAsMCwxMy44MywzLjc3bDQ5LTE3LjM5LjE1LS4wNWExMiwxMiwwLDAsMCw3LjMxLTguNzlsNS45LTI5LjUxYTMuOTIsMy45MiwwLDAsMSwyLjUxLTMsNzkuNDQsNzkuNDQsMCwwLDEsMTEuNC0zbDkyLjA3LDEwMS4yNmE0LDQsMCwxLDAsNS45Mi01LjM4Wm00OCw3NS42YTEyLDEyLDAsMCwwLTcuNzIsOWwtNS45LDI5LjUxYTQsNCwwLDAsMS0yLjM3LDIuOWwtNDksMTcuMzgtLjE1LjA2YTQsNCwwLDAsMS00LjYxLTEuMjFjLTEzLjQyLTE3LjI5LTExLjktNDAuMjUsMy42OS01NS44NEExMzAuMDYsMTMwLjA2LDAsMCwxLDgyLjMzLDgzLjcybDI0LjQ0LDI2Ljg4UTEwMi44LDExMS41OCw5OC45NCwxMTIuOTFaTTIzMy4xNSwxNzUuNGExMiwxMiwwLDAsMS0xMy44MywzLjc3bC05LjMxLTMuM2E0LDQsMCwxLDEsMi42OC03LjU0bDkuMzcsMy4zMi4xNS4wNmE0LDQsMCwwLDAsNC42MS0xLjIxYzEzLjQyLTE3LjI5LDExLjktNDAuMjUtMy42OS01NS44NEMxOTYuNjYsODguMiwxNTkuMzQsNzQuMTgsMTIwLjcyLDc2LjE5YTQsNCwwLDEsMS0uNDEtOGM0MC44Ni0yLjEyLDgwLjQxLDEyLjc0LDEwOC40OCw0MC44QzI0Ny4zMSwxMjcuNTMsMjQ5LjEsMTU0LjgzLDIzMy4xNSwxNzUuNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Mi40NCwzNkE2LDYsMCwwLDAsNDMuNTYsNDRMNzMuMDgsNzYuNTFhMTM5LjMyLDEzOS4zMiwwLDAsMC00Ny4yNywzMS4wOGMtMTkuMjUsMTkuMjYtMjEuMTEsNDcuNjUtNC41Miw2OUExNCwxNCwwLDAsMCwzNy4zOSwxODFsNDktMTcuMzcuMjItLjA5YTEzLjkzLDEzLjkzLDAsMCwwLDguNTMtMTAuMjVsNS45LTI5LjUxYTIsMiwwLDAsMSwxLjIxLTEuNDcsODAuMDcsODAuMDcsMCwwLDEsMTAtMi43NUwyMDMuNTYsMjIwYTYsNiwwLDAsMCw4Ljg4LTguMDhaTTk4LjI5LDExMWExNCwxNCwwLDAsMC05LDEwLjQ1TDgzLjM3LDE1MWEyLDIsMCwwLDEtMS4xNSwxLjQzTDMzLjI4LDE2OS43N2wtLjIyLjA4YTIsMiwwLDAsMS0yLjI5LS41OGMtMTMtMTYuNzMtMTEuNTYtMzguMTEsMy41My01My4xOUExMjcuOTEsMTI3LjkxLDAsMCwxLDgxLjc1LDg2bDIxLjM0LDIzLjQ4QzEwMS40NywxMTAsOTkuODcsMTEwLjQ3LDk4LjI5LDExMVptMTM2LjQyLDY1LjYxYTE0LDE0LDAsMCwxLTE2LjEsNC40MWwtOS4yOC0zLjI5YTYsNiwwLDEsMSw0LTExLjMxbDkuMzgsMy4zMy4yMi4wOGEyLDIsMCwwLDAsMi4yOS0uNThjMTMtMTYuNzMsMTEuNTYtMzguMTEtMy41My01My4xOUMxOTUuNjQsOTAsMTU4Ljg2LDc2LjIsMTIwLjgzLDc4LjE5YTYsNiwwLDEsMS0uNjMtMTJjNDEuNDQtMi4xNSw4MS41MiwxMi45MywxMTAsNDEuMzlDMjQ5LjQ0LDEyNi44NSwyNTEuMywxNTUuMjQsMjM0LjcxLDE3Ni42M1oiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Ni45LDMxLjkzQTEyLDEyLDAsMSwwLDM5LjE1LDQ4LjA3TDYzLDc0LjM2YTE0Ny4wNywxNDcuMDcsMCwwLDAtNDEuNDMsMjljLTIxLjQ1LDIxLjQ2LTIzLjUyLDUzLjEtNSw3N0EyMCwyMCwwLDAsMCwzMi4zOCwxODhhMTkuODEsMTkuODEsMCwwLDAsNy4xMi0xLjMybDQ4LjktMTcuMzUuNDUtLjE3QTE5Ljk0LDE5Ljk0LDAsMCwwLDEwMSwxNTQuNWw1LjQ0LTI3LjIyYzEuMjItLjM4LDIuNDctLjcyLDMuNzItMWw4OC45MSw5Ny44M2ExMiwxMiwwLDEsMCwxNy43NS0xNi4xNFptMjYuNSw4OC4zNkw3OCwxNDcuNTcsMzMuODQsMTYzLjIyYy05LjE2LTEzLjg0LTcuNDEtMzAuNzYsNC43My00Mi45QTEyMS41OCwxMjEuNTgsMCwwLDEsODAuMDcsOTMuMUw5Mi43NCwxMDdBMjAuMDYsMjAuMDYsMCwwLDAsODMuNCwxMjAuMjlabTE1Niw2MGExOS44OSwxOS44OSwwLDAsMS0xMS4yNCw3LjE5LDEyLDEyLDAsMCwxLTYuOTUtMjIuOTJjMTAuMjEtMTQuMDcsOC43NS0zMS43MS0zLjc5LTQ0LjI1QzE5NC43Nyw5Ny42NSwxNjQsODQuNzYsMTMwLjkxLDg0YTEyLDEyLDAsMCwxLC4yNy0yNGguMjdjMzkuMzMuODcsNzUuODksMTYuMjUsMTAyLjk0LDQzLjMxQzI1NS44NCwxMjQuODEsMjU3LjkxLDE1Ni40NSwyMzkuNDEsMTgwLjNaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjgsMTc3Ljg1YTE2LDE2LDAsMCwxLTE4LjM4LDUuMDdsLTI0Ljc2LTE5YTMuNDMsMy40MywwLDAsMS0uNTMtLjQ4TDEwOS4xOCw3MS42MmE0LDQsMCwwLDEsMi41NS02LjY4YzQzLTQuNjIsODcuNzQsOS4xMiwxMTkuODYsNDEuMjRoMEMyNTEuNTgsMTI2LjE3LDI1My41MSwxNTUuNjQsMjM2LjI4LDE3Ny44NVpNNTMuOTMsMzQuNjJBOCw4LDAsMSwwLDQyLjA5LDQ1LjM4TDY5LjcxLDc1Ljc3YTE0MiwxNDIsMCwwLDAtNDUuMywzMC40MWMtMjAsMjAtMjEuOTIsNDkuNDYtNC42OSw3MS42N2ExNiwxNiwwLDAsMCwxOC4zOCw1LjA3bDQ5LTE3LjM3LjI5LS4xMWExNiwxNiwwLDAsMCw5Ljc1LTExLjcybDUuOS0yOS41MWE3My42NCw3My42NCwwLDAsMSw4LjU3LTIuMzlsOTAuNSw5OS41NmE4LDgsMCwxLDAsMTEuODQtMTAuNzZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMTczYTgsOCwwLDAsMS05LjI2LDIuNDdMMTcxLjU4LDE1OGE4LDgsMCwwLDEtNC44Ni01LjhsLTYuMjEtMjkuNzRhNy45NCw3Ljk0LDAsMCwwLTUuMTQtNS45LDg0LjM5LDg0LjM5LDAsMCwwLTU1LjEuMTMsNy45Myw3LjkzLDAsMCwwLTUuMTIsNmwtNS45LDI5LjUxQTgsOCwwLDAsMSw4NC4zOCwxNThMMzUuMjksMTc1LjQyQTgsOCwwLDAsMSwyNiwxNzNjLTE0LjYtMTguODMtMTMuMjYtNDMuODMsNC02MS4xMiw1My4xMS01My4xMSwxNDIuNzctNTMuMTEsMTk1Ljg4LDBDMjQzLjIzLDEyOS4xMiwyNDQuNTcsMTU0LjEyLDIzMCwxNzNaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNTMuOTMsMzQuNjJBOCw4LDAsMSwwLDQyLjA5LDQ1LjM4TDY5LjY4LDc1Ljc0YTE0MS4yNiwxNDEuMjYsMCwwLDAtNDUuMjcsMzAuNDRjLTIwLDIwLTIxLjkyLDQ5LjQ2LTQuNjksNzEuNjdhMTYsMTYsMCwwLDAsMTguMzgsNS4wN2w0OS0xNy4zNy4yOS0uMTFhMTYsMTYsMCwwLDAsOS43NS0xMS43Mmw1LjktMjkuNTFhNzUuODksNzUuODksMCwwLDEsOC41Ni0yLjRsOTAuNTEsOTkuNTdhOCw4LDAsMSwwLDExLjg0LTEwLjc2Wm00My43LDc0LjUyYTE2LDE2LDAsMCwwLTEwLjMyLDExLjk0bC01LjksMjkuNS00OC43OCwxNy4zYy0uMSwwLS4xNy4xMy0uMjcuMTctMTIuMzMtMTUuOS0xMS0zNi4yMiwzLjM2LTUwLjU2YTEyNS43OSwxMjUuNzksMCwwLDEsNDUuNDctMjkuMWwxOC4zLDIwLjE0Qzk4Ljg3LDEwOC43Myw5OC4yNSwxMDguOTIsOTcuNjMsMTA5LjE0Wm0xMzguNjUsNjguNzFhMTYsMTYsMCwwLDEtMTguMzgsNS4wN2wtOS4yNS0zLjI4QTgsOCwwLDAsMSwyMTQsMTY0LjU2bDkuMzcsMy4zMi4zLjEyYzEyLjMtMTUuODUsMTEtMzYuMTctMy4zOS01MC41MS0yNS42Ni0yNS42Ni02MS44OC0zOS4yNy05OS4zNS0zNy4zMWE4LDgsMCwxLDEtLjgzLTE2YzQyLTIuMTksODIuNjMsMTMuMSwxMTEuNDksNDJDMjUxLjU4LDEyNi4xNywyNTMuNTEsMTU1LjY0LDIzNi4yOCwxNzcuODVaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as PhoneSlash };