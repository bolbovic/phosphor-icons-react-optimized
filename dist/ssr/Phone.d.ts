import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMzcsMTU4LjQ2bC00Ny4xMS0yMS4xMS0uMTMtLjA2YTE2LDE2LDAsMCwwLTE1LjE3LDEuNCw4LjEyLDguMTIsMCwwLDAtLjc1LjU2TDEzNC44NywxNjBjLTE1LjQyLTcuNDktMzEuMzQtMjMuMjktMzguODMtMzguNTFsMjAuNzgtMjQuNzFjLjItLjI1LjM5LS41LjU3LS43N2ExNiwxNiwwLDAsMCwxLjMyLTE1LjA2bDAtLjEyTDk3LjU0LDMzLjY0YTE2LDE2LDAsMCwwLTE2LjYyLTkuNTJBNTYuMjYsNTYuMjYsMCwwLDAsMzIsODBjMCw3OS40LDY0LjYsMTQ0LDE0NCwxNDRhNTYuMjYsNTYuMjYsMCwwLDAsNTUuODgtNDguOTJBMTYsMTYsMCwwLDAsMjIyLjM3LDE1OC40NlpNMTc2LDIwOEExMjguMTQsMTI4LjE0LDAsMCwxLDQ4LDgwLDQwLjIsNDAuMiwwLDAsMSw4Mi44Nyw0MGEuNjEuNjEsMCwwLDAsMCwuMTJsMjEsNDdMODMuMiwxMTEuODZhNi4xMyw2LjEzLDAsMCwwLS41Ny43NywxNiwxNiwwLDAsMC0xLDE1LjdjOS4wNiwxOC41MywyNy43MywzNy4wNiw0Ni40Niw0Ni4xMWExNiwxNiwwLDAsMCwxNS43NS0xLjE0LDguNDQsOC40NCwwLDAsMCwuNzQtLjU2TDE2OC44OSwxNTJsNDcsMjEuMDVoMHMuMDgsMCwuMTEsMEE0MC4yMSw0MC4yMSwwLDAsMSwxNzYsMjA4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNzgsMTYyLjEzLDE3My41NiwxNDFBMTIsMTIsMCwwLDAsMTYyLjE4LDE0MmEzLjM3LDMuMzcsMCwwLDAtLjM4LjI4TDEzNywxNjMuNDJhMy45MywzLjkzLDAsMCwxLTMuNy4yMWMtMTYuMjQtNy44NC0zMy4wNS0yNC41Mi00MC44OS00MC41N2EzLjksMy45LDAsMCwxLC4xOC0zLjY5bDIxLjItMjUuMjFjLjEtLjEyLjE5LS4yNS4yOC0uMzhhMTIsMTIsMCwwLDAsMS0xMS4zNkw5My45LDM1LjI4YTEyLDEyLDAsMCwwLTEyLjQ4LTcuMTlBNTIuMjUsNTIuMjUsMCwwLDAsMzYsODBjMCw3Ny4yLDYyLjgsMTQwLDE0MCwxNDBhNTIuMjUsNTIuMjUsMCwwLDAsNTEuOTEtNDUuNDJBMTIsMTIsMCwwLDAsMjIwLjc4LDE2Mi4xM1pNMjIwLDE3My41OEE0NC4yMyw0NC4yMywwLDAsMSwxNzYsMjEyQzEwMy4yMiwyMTIsNDQsMTUyLjc4LDQ0LDgwQTQ0LjIzLDQ0LjIzLDAsMCwxLDgyLjQyLDM2YTMuODcsMy44NywwLDAsMSwuNDgsMCw0LDQsMCwwLDEsMy42NywyLjQ5bDIxLjExLDQ3LjE0YTQsNCwwLDAsMS0uMjMsMy42bC0yMS4xOSwyNS4yYy0uMS4xMy0uMi4yNS0uMjkuMzlhMTIsMTIsMCwwLDAtLjc4LDExLjc1YzguNjksMTcuNzksMjYuNjEsMzUuNTgsNDQuNiw0NC4yN2ExMiwxMiwwLDAsMCwxMS43OS0uODdsLjM3LS4yOCwyNC44My0yMS4xMmEzLjkzLDMuOTMsMCwwLDEsMy41Ny0uMjdsNDcuMjEsMjEuMTZBNCw0LDAsMCwxLDIyMCwxNzMuNThaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNTksMTYwLjNsLTQ3LjI0LTIxLjE3YTE0LDE0LDAsMCwwLTEzLjI4LDEuMjIsNC44MSw0LjgxLDAsMCwwLS41Ni40MmwtMjQuNjksMjFhMS44OCwxLjg4LDAsMCwxLTEuNjguMDZjLTE1Ljg3LTcuNjYtMzIuMzEtMjQtNDAtMzkuNjVhMS45MSwxLjkxLDAsMCwxLDAtMS42OGwyMS4wNy0yNWE2LjEzLDYuMTMsMCwwLDAsLjQyLS41OCwxNCwxNCwwLDAsMCwxLjEyLTEzLjI3TDk1LjczLDM0LjQ5YTE0LDE0LDAsMCwwLTE0LjU2LTguMzhBNTQuMjQsNTQuMjQsMCwwLDAsMzQsODBjMCw3OC4zLDYzLjcsMTQyLDE0MiwxNDJhNTQuMjUsNTQuMjUsMCwwLDAsNTMuODktNDcuMTdBMTQsMTQsMCwwLDAsMjIxLjU5LDE2MC4zWk0xNzYsMjEwQzEwNC4zMiwyMTAsNDYsMTUxLjY4LDQ2LDgwQTQyLjIzLDQyLjIzLDAsMCwxLDgyLjY3LDM4aC4yM2EyLDIsMCwwLDEsMS44NCwxLjMxbDIxLjEsNDcuMTFhMiwyLDAsMCwxLDAsMS42N0w4NC43MywxMTMuMTVhNC43Myw0LjczLDAsMCwwLS40My41NywxNCwxNCwwLDAsMC0uOTEsMTMuNzNjOC44NywxOC4xNiwyNy4xNywzNi4zMiw0NS41Myw0NS4xOWExNCwxNCwwLDAsMCwxMy43Ny0xYy4xOS0uMTMuMzgtLjI3LjU2LS40MmwyNC42OC0yMWExLjkyLDEuOTIsMCwwLDEsMS42LS4xbDQ3LjI1LDIxLjE3YTIsMiwwLDAsMSwxLjIxLDJBNDIuMjQsNDIuMjQsMCwwLDEsMTc2LDIxMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTU0LjhsLTQ3LjA5LTIxLjExLS4xOC0uMDhhMTkuOTQsMTkuOTQsMCwwLDAtMTksMS43NSwxMy4wOCwxMy4wOCwwLDAsMC0xLjEyLjg0bC0yMi4zMSwxOWMtMTMtNy4wNS0yNi40My0yMC4zNy0zMy40OS0zMy4yMWwxOS4wNi0yMi42NmExMS43NiwxMS43NiwwLDAsMCwuODUtMS4xNSwyMCwyMCwwLDAsMCwxLjY2LTE4LjgzLDEuNDIsMS40MiwwLDAsMS0uMDgtLjE4TDEwMS4yLDMyQTIwLjA2LDIwLjA2LDAsMCwwLDgwLjQyLDIwLjE1LDYwLjI3LDYwLjI3LDAsMCwwLDI4LDgwYzAsODEuNjEsNjYuMzksMTQ4LDE0OCwxNDhhNjAuMjcsNjAuMjcsMCwwLDAsNTkuODUtNTIuNDJBMjAuMDYsMjAuMDYsMCwwLDAsMjI0LDE1NC44Wk0xNzYsMjA0QTEyNC4xNSwxMjQuMTUsMCwwLDEsNTIsODAsMzYuMjksMzYuMjksMCwwLDEsODAuNDgsNDQuNDZsMTguODIsNDJMODAuMTQsMTA5LjI4YTEyLDEyLDAsMCwwLS44NiwxLjE2QTIwLDIwLDAsMCwwLDc4LDEzMC4wOGM5LjQyLDE5LjI4LDI4LjgzLDM4LjU2LDQ4LjMxLDQ4QTIwLDIwLDAsMCwwLDE0NiwxNzYuNjNhMTEuNjMsMTEuNjMsMCwwLDAsMS4xMS0uODVsMjIuNDMtMTkuMDcsNDIsMTguODFBMzYuMjksMzYuMjksMCwwLDEsMTc2LDIwNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuODgsMTc1LjA4QTU2LjI2LDU2LjI2LDAsMCwxLDE3NiwyMjRDOTYuNiwyMjQsMzIsMTU5LjQsMzIsODBBNTYuMjYsNTYuMjYsMCwwLDEsODAuOTIsMjQuMTJhMTYsMTYsMCwwLDEsMTYuNjIsOS41MmwyMS4xMiw0Ny4xNSwwLC4xMkExNiwxNiwwLDAsMSwxMTcuMzksOTZjLS4xOC4yNy0uMzcuNTItLjU3Ljc3TDk2LDEyMS40NWM3LjQ5LDE1LjIyLDIzLjQxLDMxLDM4LjgzLDM4LjUxbDI0LjM0LTIwLjcxYTguMTIsOC4xMiwwLDAsMSwuNzUtLjU2LDE2LDE2LDAsMCwxLDE1LjE3LTEuNGwuMTMuMDYsNDcuMTEsMjEuMTFBMTYsMTYsMCwwLDEsMjMxLjg4LDE3NS4wOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuOTQsMTc0LjA4QTQ4LjMzLDQ4LjMzLDAsMCwxLDE3NiwyMTYsMTM2LDEzNiwwLDAsMSw0MCw4MCw0OC4zMyw0OC4zMywwLDAsMSw4MS45MiwzMi4wNmE4LDgsMCwwLDEsOC4zLDQuOGwyMS4xMyw0Ny4yYTgsOCwwLDAsMS0uNjYsNy41M0w4OS4zMiwxMTdhNy45Myw3LjkzLDAsMCwwLS41NCw3LjgxYzguMjcsMTYuOTMsMjUuNzcsMzQuMjIsNDIuNzUsNDIuNDFhNy45Miw3LjkyLDAsMCwwLDcuODMtLjU5bDI1LTIxLjNhOCw4LDAsMCwxLDcuNTktLjY5bDQ3LjE2LDIxLjEzQTgsOCwwLDAsMSwyMjMuOTQsMTc0LjA4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyMi4zNywxNTguNDZsLTQ3LjExLTIxLjExLS4xMy0uMDZhMTYsMTYsMCwwLDAtMTUuMTcsMS40LDguMTIsOC4xMiwwLDAsMC0uNzUuNTZMMTM0Ljg3LDE2MGMtMTUuNDItNy40OS0zMS4zNC0yMy4yOS0zOC44My0zOC41MWwyMC43OC0yNC43MWMuMi0uMjUuMzktLjUuNTctLjc3YTE2LDE2LDAsMCwwLDEuMzItMTUuMDZsMC0uMTJMOTcuNTQsMzMuNjRhMTYsMTYsMCwwLDAtMTYuNjItOS41MkE1Ni4yNiw1Ni4yNiwwLDAsMCwzMiw4MGMwLDc5LjQsNjQuNiwxNDQsMTQ0LDE0NGE1Ni4yNiw1Ni4yNiwwLDAsMCw1NS44OC00OC45MkExNiwxNiwwLDAsMCwyMjIuMzcsMTU4LjQ2Wk0xNzYsMjA4QTEyOC4xNCwxMjguMTQsMCwwLDEsNDgsODAsNDAuMiw0MC4yLDAsMCwxLDgyLjg3LDQwYS42MS42MSwwLDAsMCwwLC4xMmwyMSw0N0w4My4yLDExMS44NmE2LjEzLDYuMTMsMCwwLDAtLjU3Ljc3LDE2LDE2LDAsMCwwLTEsMTUuN2M5LjA2LDE4LjUzLDI3LjczLDM3LjA2LDQ2LjQ2LDQ2LjExYTE2LDE2LDAsMCwwLDE1Ljc1LTEuMTQsOC40NCw4LjQ0LDAsMCwwLC43NC0uNTZMMTY4Ljg5LDE1Mmw0NywyMS4wNWgwcy4wOCwwLC4xMSwwQTQwLjIxLDQwLjIxLDAsMCwxLDE3NiwyMDhaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as Phone };