import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuNTksMjEzLjQ3YTgsOCwwLDAsMS0xNS4xOCw1LjA2bC04LTI0YTgsOCwwLDAsMSwxNS4xOC01LjA2Wk0xMjgsMTg0YTgsOCwwLDAsMC04LDh2MzJhOCw4LDAsMCwwLDE2LDBWMTkyQTgsOCwwLDAsMCwxMjgsMTg0Wm0tMzcuNDcuNDFhOCw4LDAsMCwwLTEwLjEyLDUuMDZsLTgsMjRhOCw4LDAsMCwwLDE1LjE4LDUuMDZsOC0yNEE4LDgsMCwwLDAsOTAuNTMsMTg0LjQxWk0yNDgsMTEyYzAsMTYuMjItMTMuMzcsMzAuODktMzcuNjUsNDEuMjlDMTg4LjIyLDE2Mi43OCwxNTksMTY4LDEyOCwxNjhzLTYwLjIyLTUuMjItODIuMzUtMTQuNzFDMjEuMzcsMTQyLjg5LDgsMTI4LjIyLDgsMTEyYzAtOC4zNywzLjY3LTIwLjc5LDIxLjE3LTMyLjUsMTEuMzctNy42MSwyNi45NC0xMy43Niw0NS4xOC0xNy44NUE2My42NCw2My42NCwwLDAsMSwxNzMsNTAuNDVhNjQuODQsNjQuODQsMCwwLDEsOS4xMSwxMS4zQzIyMy40Myw3MS4wOSwyNDgsODkuNzQsMjQ4LDExMlpNODAsOTYuODN2M2E3LjkyLDcuOTIsMCwwLDAsNi4xMyw3Ljc2QTE4OC4yNCwxODguMjQsMCwwLDAsMTI4LDExMmExODguMDksMTg4LjA5LDAsMCwwLDQxLjg1LTQuMzdBNy45Myw3LjkzLDAsMCwwLDE3Niw5OS44N1Y5NmE0OCw0OCwwLDAsMC00OC42NC00OEMxMDEuMjUsNDguMzQsODAsNzAuMjUsODAsOTYuODNaTTIzMiwxMTJjMC0xMS43LTE2LjYzLTIzLjg5LTQxLjktMzEuNTlBNjQuNjgsNjQuNjgsMCwwLDEsMTkyLDk2djMuOTJhMjMuODYsMjMuODYsMCwwLDEtMTguNTYsMjMuM0EyMDQuMDUsMjA0LjA1LDAsMCwxLDEyOCwxMjhhMjA0LjE1LDIwNC4xNSwwLDAsMS00NS40NC00Ljc4QTIzLjg2LDIzLjg2LDAsMCwxLDY0LDk5LjkyaDBWOTYuODZhNjUuMjgsNjUuMjgsMCwwLDEsMi4xMy0xNi41MkM0MC43Miw4OCwyNCwxMDAuMjUsMjQsMTEyYzAsMTguOTIsNDIuNzEsNDAsMTA0LDQwUzIzMiwxMzAuOTIsMjMyLDExMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzkuNzksMjE0LjczYTQsNCwwLDAsMS0yLjUzLDUuMDZBMy45MiwzLjkyLDAsMCwxLDE3NiwyMjBhNCw0LDAsMCwxLTMuNzktMi43M2wtOC0yNGE0LDQsMCwxLDEsNy41OC0yLjU0Wk0xMjgsMTg4YTQsNCwwLDAsMC00LDR2MzJhNCw0LDAsMCwwLDgsMFYxOTJBNCw0LDAsMCwwLDEyOCwxODhabS0zOC43NC4yYTQsNCwwLDAsMC01LjA1LDIuNTNsLTgsMjRhNCw0LDAsMSwwLDcuNTgsMi41NGw4LTI0QTQsNCwwLDAsMCw4OS4yNiwxODguMlpNMjQ0LDExMmMwLDI5LjE2LTUwLjk1LDUyLTExNiw1MlMxMiwxNDEuMTYsMTIsMTEyYzAtMjAuMzEsMjQuOC0zOC4xNiw2NC44NC00Ni44YTU5LjY1LDU5LjY1LDAsMCwxLDkzLjMxLTExLjksNjAuOTEsNjAuOTEsMCwwLDEsOS40MiwxMkMyMTkuMzYsNzQsMjQ0LDkxLjc3LDI0NCwxMTJaTTc2LDk2LjgzdjNhMTEuOSwxMS45LDAsMCwwLDkuMjQsMTEuNjRBMTkyLDE5MiwwLDAsMCwxMjgsMTE2YTE5MiwxOTIsMCwwLDAsNDIuNzUtNC40OEExMS45LDExLjksMCwwLDAsMTgwLDk5Ljg4Vjk2YTUyLDUyLDAsMCwwLTUyLjY5LTUyQzk5LDQ0LjM3LDc2LDY4LjA3LDc2LDk2LjgzWk0yMzYsMTEyYzAtMTUtMjAuMTMtMjkuMzctNTEuOTQtMzcuNDNBNTkuOSw1OS45LDAsMCwxLDE4OCw5NnYzLjkxYTE5Ljg3LDE5Ljg3LDAsMCwxLTE1LjQ1LDE5LjQxQTE5OS42OSwxOTkuNjksMCwwLDEsMTI4LDEyNGExOTkuNjksMTk5LjY5LDAsMCwxLTQ0LjU0LTQuNjhBMTkuODYsMTkuODYsMCwwLDEsNjgsOTkuOTFoMFY5Ni44NWE2MC45MSw2MC45MSwwLDAsMSw0LjI1LTIyLjM2QzQwLjI1LDgyLjU0LDIwLDk2Ljg4LDIwLDExMmMwLDIzLjg1LDQ5LjQ2LDQ0LDEwOCw0NFMyMzYsMTM1Ljg1LDIzNiwxMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODEuNjksMjE0LjFhNiw2LDAsMSwxLTExLjM4LDMuOGwtOC0yNGE2LDYsMCwxLDEsMTEuMzgtMy44Wk0xMjgsMTg2YTYsNiwwLDAsMC02LDZ2MzJhNiw2LDAsMCwwLDEyLDBWMTkyQTYsNiwwLDAsMCwxMjgsMTg2Wm0tMzguMS4zMWE2LDYsMCwwLDAtNy41OSwzLjc5bC04LDI0YTYsNiwwLDEsMCwxMS4zOCwzLjhsOC0yNEE2LDYsMCwwLDAsODkuOSwxODYuMzFaTTI0NiwxMTJjMCwxNS4zNy0xMi45NCwyOS4zOS0zNi40NCwzOS40NkMxODcuNjcsMTYwLjg0LDE1OC43MSwxNjYsMTI4LDE2NnMtNTkuNjctNS4xNi04MS41Ni0xNC41NEMyMi45NCwxNDEuMzksMTAsMTI3LjM3LDEwLDExMmMwLTIxLjE2LDI1LjA2LTM5LjY1LDY1LjU5LTQ4LjU3YTYxLjg1LDYxLjg1LDAsMCwxLDEwNS4yNC4wOUMyMjEuMSw3Mi40OCwyNDYsOTAuOTMsMjQ2LDExMlpNNzgsOTYuODR2M2E5LjkzLDkuOTMsMCwwLDAsNy42OSw5LjdBMTkwLjM1LDE5MC4zNSwwLDAsMCwxMjgsMTE0YTE5MC4zNSwxOTAuMzUsMCwwLDAsNDIuMy00LjQyLDkuOTMsOS45MywwLDAsMCw3LjY5LTkuN1Y5NmE1MCw1MCwwLDAsMC01MC01MGgtLjY3QzEwMC4xMyw0Ni4zNiw3OCw2OS4xNiw3OCw5Ni44NFpNMjM0LDExMmMwLTEzLjMzLTE4LjM4LTI2LjYxLTQ2LjgtMzQuNTJBNjIuMjQsNjIuMjQsMCwwLDEsMTkwLDk2djMuOTJhMjEuODYsMjEuODYsMCwwLDEtMTcsMjEuMzVBMjAyLDIwMiwwLDAsMSwxMjgsMTI2YTIwMS44OSwyMDEuODksMCwwLDEtNDUtNC43M0EyMS44NiwyMS44NiwwLDAsMSw2Niw5OS45MmgwVjk2Ljg1QTYzLDYzLDAsMCwxLDY5LjA4LDc3LjRDNDAuNDksODUuMywyMiw5OC42MiwyMiwxMTJjMCwxMC4xMiwxMC42MywyMC40OCwyOS4xNywyOC40M0M3MS41OSwxNDkuMTgsOTguODgsMTU0LDEyOCwxNTRzNTYuNDEtNC44Miw3Ni44My0xMy41N0MyMjMuMzcsMTMyLjQ4LDIzNCwxMjIuMTIsMjM0LDExMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODcuNzcsMjEzLjY1YTEyLDEyLDAsMCwxLTkuNDIsMTQuMTJBMTEuODcsMTEuODcsMCwwLDEsMTc2LDIyOGExMiwxMiwwLDAsMS0xMS43Ni05LjY1bC00LTIwYTEyLDEyLDAsMSwxLDIzLjU0LTQuN1pNMTI4LDE4OGExMiwxMiwwLDAsMC0xMiwxMnYyNGExMiwxMiwwLDAsMCwyNCwwVjIwMEExMiwxMiwwLDAsMCwxMjgsMTg4Wm0tNDEuNjUtMy43N2ExMiwxMiwwLDAsMC0xNC4xMiw5LjQybC00LDIwYTEyLDEyLDAsMCwwLDkuNDIsMTQuMTJBMTEuODcsMTEuODcsMCwwLDAsODAsMjI4YTEyLDEyLDAsMCwwLDExLjc2LTkuNjVsNC0yMEExMiwxMiwwLDAsMCw4Ni4zNSwxODQuMjNaTTI1MiwxMTJjMCwxNy45Mi0xNC4yMywzMy44OS00MC4wOCw0NS0yMi42MSw5LjY5LTUyLjQyLDE1LTgzLjkyLDE1cy02MS4zMS01LjM0LTgzLjkyLTE1QzE4LjIzLDE0NS44OSw0LDEyOS45Miw0LDExMiw0LDg3Ljk0LDI5LjI4LDY4LDcxLjkxLDU4LjExQTY3LjYxLDY3LjYxLDAsMCwxLDE3NS43Nyw0Ny42YTY5LjA1LDY5LjA1LDAsMCwxLDguNzksMTAuNjJDMjI2LjksNjguMTQsMjUyLDg4LjA1LDI1MiwxMTJaTTg0LDk2LjgzdjNhNCw0LDAsMCwwLDMsMy44N0ExODQuMzIsMTg0LjMyLDAsMCwwLDEyOCwxMDhhMTg0LjMyLDE4NC4zMiwwLDAsMCw0MS00LjI3LDQsNCwwLDAsMCwzLTMuODdWOTZhNDQsNDQsMCwwLDAtNDQtNDRoLS41OUMxMDMuNDcsNTIuMzEsODQsNzIuNDMsODQsOTYuODNaTTIyOCwxMTJjMC02LjY0LTcuNjUtMTIuNzYtMTIuMjEtMTUuODNhOTEuNzMsOTEuNzMsMCwwLDAtMjAuNDgtOS44OEE2OS40Nyw2OS40NywwLDAsMSwxOTYsOTZ2My45M2EyNy44NCwyNy44NCwwLDAsMS0yMS42NiwyNy4xOUEyMDcuOTIsMjA3LjkyLDAsMCwxLDEyOCwxMzJhMjA3LjkyLDIwNy45MiwwLDAsMS00Ni4zMy00Ljg4QTI3Ljg0LDI3Ljg0LDAsMCwxLDYwLDk5Ljk0aDBWOTYuODdhNzAuMzcsNzAuMzcsMCwwLDEsLjgyLTEwLjYzLDkyLjM5LDkyLjM5LDAsMCwwLTIwLjUzLDkuODhDMzUuNyw5OS4xOSwyOCwxMDUuMzQsMjgsMTEyYzAsMTQuNjgsMzksMzYsMTAwLDM2UzIyOCwxMjYuNjgsMjI4LDExMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODMuNTksMjEzLjQ3YTgsOCwwLDAsMS0xNS4xOCw1LjA2bC04LTI0YTgsOCwwLDAsMSwxNS4xOC01LjA2Wk0xMjgsMTg0YTgsOCwwLDAsMC04LDh2MzJhOCw4LDAsMCwwLDE2LDBWMTkyQTgsOCwwLDAsMCwxMjgsMTg0Wm0tMzcuNDcuNDFhOCw4LDAsMCwwLTEwLjEyLDUuMDZsLTgsMjRhOCw4LDAsMCwwLDE1LjE4LDUuMDZsOC0yNEE4LDgsMCwwLDAsOTAuNTMsMTg0LjQxWk0yNDgsMTEyYzAsMTYuMjItMTMuMzcsMzAuODktMzcuNjUsNDEuMjlDMTg4LjIyLDE2Mi43OCwxNTksMTY4LDEyOCwxNjhzLTYwLjIyLTUuMjItODIuMzUtMTQuNzFDMjEuMzcsMTQyLjg5LDgsMTI4LjIyLDgsMTEyYzAtOC4zNywzLjY3LTIwLjc5LDIxLjE3LTMyLjUsMTEuMzctNy42MSwyNi45NC0xMy43Niw0NS4xOC0xNy44NUE2My42NCw2My42NCwwLDAsMSwxNzMsNTAuNDVhNjQuODQsNjQuODQsMCwwLDEsOS4xMSwxMS4zQzIyMy40Myw3MS4wOSwyNDgsODkuNzQsMjQ4LDExMlpNMTc2LDk2YTQ3LjY2LDQ3LjY2LDAsMCwwLTYuMDYtMjMuMzVsLS4wNi0uMDlBNDguMDcsNDguMDcsMCwwLDAsMTI3LjM2LDQ4QzEwMS4yNSw0OC4zNCw4MCw3MC4yNSw4MCw5Ni44M3YzYTcuOTIsNy45MiwwLDAsMCw2LjEzLDcuNzZBMTg4LjI0LDE4OC4yNCwwLDAsMCwxMjgsMTEyYTE4OC4wOSwxODguMDksMCwwLDAsNDEuODUtNC4zN0E3LjkzLDcuOTMsMCwwLDAsMTc2LDk5Ljg3WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTEyYzAsMjYuNTEtNTAuMTQsNDgtMTEyLDQ4UzE2LDEzOC41MSwxNiwxMTJjMC0xOSwyNS44Ni0zNS40OSw2My4zNS00My4yNWgwQTU3LjA3LDU3LjA3LDAsMCwwLDcyLDk2LjgzVjk5LjlhMTUuOTQsMTUuOTQsMCwwLDAsMTIuMzQsMTUuNTJBMTk1Ljg3LDE5NS44NywwLDAsMCwxMjgsMTIwYTE5NS43MSwxOTUuNzEsMCwwLDAsNDMuNjQtNC41OEExNiwxNiwwLDAsMCwxODQsOTkuOVY5NmE1NS43LDU1LjcsMCwwLDAtNy0yNy4xOGgwQzIxNC4yOSw3Ni42MSwyNDAsOTMsMjQwLDExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODMuNTksMjEzLjQ3YTgsOCwwLDAsMS0xNS4xOCw1LjA2bC04LTI0YTgsOCwwLDAsMSwxNS4xOC01LjA2Wk0xMjgsMTg0YTgsOCwwLDAsMC04LDh2MzJhOCw4LDAsMCwwLDE2LDBWMTkyQTgsOCwwLDAsMCwxMjgsMTg0Wm0tMzcuNDcuNDFhOCw4LDAsMCwwLTEwLjEyLDUuMDZsLTgsMjRhOCw4LDAsMCwwLDE1LjE4LDUuMDZsOC0yNEE4LDgsMCwwLDAsOTAuNTMsMTg0LjQxWk0yNDgsMTEyYzAsMTYuMjItMTMuMzcsMzAuODktMzcuNjUsNDEuMjlDMTg4LjIyLDE2Mi43OCwxNTksMTY4LDEyOCwxNjhzLTYwLjIyLTUuMjItODIuMzUtMTQuNzFDMjEuMzcsMTQyLjg5LDgsMTI4LjIyLDgsMTEyYzAtOC4zNywzLjY3LTIwLjc5LDIxLjE3LTMyLjUsMTEuMzctNy42MSwyNi45NC0xMy43Niw0NS4xOC0xNy44NUE2My42NCw2My42NCwwLDAsMSwxNzMsNTAuNDVhNjQuODQsNjQuODQsMCwwLDEsOS4xMSwxMS4zQzIyMy40Myw3MS4wOSwyNDgsODkuNzQsMjQ4LDExMlpNODAsOTYuODN2M2E3LjkyLDcuOTIsMCwwLDAsNi4xMyw3Ljc2QTE4OC4yNCwxODguMjQsMCwwLDAsMTI4LDExMmExODguMDksMTg4LjA5LDAsMCwwLDQxLjg1LTQuMzdBNy45Myw3LjkzLDAsMCwwLDE3Niw5OS44N1Y5NmE0OCw0OCwwLDAsMC00OC42NC00OEMxMDEuMjUsNDguMzQsODAsNzAuMjUsODAsOTYuODNaTTIzMiwxMTJjMC0xMS43LTE2LjYzLTIzLjg5LTQxLjktMzEuNTlBNjQuNjgsNjQuNjgsMCwwLDEsMTkyLDk2djMuOTJhMjMuODYsMjMuODYsMCwwLDEtMTguNTYsMjMuM0EyMDQuMDUsMjA0LjA1LDAsMCwxLDEyOCwxMjhhMjA0LjE1LDIwNC4xNSwwLDAsMS00NS40NC00Ljc4QTIzLjg2LDIzLjg2LDAsMCwxLDY0LDk5LjkyaDBWOTYuODZhNjUuMjgsNjUuMjgsMCwwLDEsMi4xMy0xNi41MkM0MC43Miw4OCwyNCwxMDAuMjUsMjQsMTEyYzAsMTguOTIsNDIuNzEsNDAsMTA0LDQwUzIzMiwxMzAuOTIsMjMyLDExMloiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as FlyingSaucer };