import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNjUsMTI5LjExbC02MC43My0yMC4yNGEyNCwyNCwwLDAsMS0xNC4zMi0xM0wxMzAuMzksNDEuNnMwLS4wNywwLS4xQTE2LDE2LDAsMCwwLDExMC4yNSwzM0wzNC41Myw2MC40OUExNi4wNSwxNi4wNSwwLDAsMCwyNCw3NS41M1YxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjQwYTE2LDE2LDAsMCwwLDE2LTE2VjE2Ny4wNkE0MCw0MCwwLDAsMCwyMjguNjUsMTI5LjExWk0xMTUuNzIsNDhsNy4xMSwxNi42My0yMS41Niw3Ljg1QTgsOCwwLDAsMCwxMDQsODhhNy45MSw3LjkxLDAsMCwwLDIuNzMtLjQ5bDIyLjQtOC4xNCw0Ljc0LDExLjA3LTE2LjYsNkE4LDgsMCwwLDAsMTIwLDExMmE3LjkxLDcuOTEsMCwwLDAsMi43My0uNDlsMTcuNi02LjRhNDAuMjQsNDAuMjQsMCwwLDAsNy42OCwxMGwtMTQuNzQsNS4zNkE4LDgsMCwwLDAsMTM2LDEzNmE4LjE0LDguMTQsMCwwLDAsMi43My0uNDhsMjgtMTAuMTgsNTYuODcsMTguOTVBMjQsMjQsMCwwLDEsMjM4LjkzLDE2MEg0MFY3NS41M1pNNDAsMTkyaDBWMTc2SDI0MHYxNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzgsMTMyLjkxbC02MC43Mi0yMC4yNEEyOCwyOCwwLDAsMSwxNTAsOTcuNTNMMTI2LjY5LDQzLjEyYTEyLDEyLDAsMCwwLTE1LjA3LTYuNEwzNS45LDY0LjI1QTEyLDEyLDAsMCwwLDI4LDc1LjUzVjE5MmExMiwxMiwwLDAsMCwxMiwxMkgyNDBhMTIsMTIsMCwwLDAsMTItMTJWMTY3LjA2QTM2LDM2LDAsMCwwLDIyNy4zOCwxMzIuOTFaTTM4LjYzLDcxLjc3bDc1LjcyLTI3LjUzYTMuODQsMy44NCwwLDAsMSwxLjM3LS4yNCw0LDQsMCwwLDEsMy42MywyLjMyTDEyOC4xNyw2N2wtMjUuNTQsOS4yOUE0LDQsMCwwLDAsMTA0LDg0YTQuMTIsNC4xMiwwLDAsMCwxLjM3LS4yNGwyNS45NS05LjQ0LDcuODksMTguNDQtMjAuNTgsNy40OEE0LDQsMCwwLDAsMTIwLDEwOGE0LjEyLDQuMTIsMCwwLDAsMS4zNy0uMjRsMjEtNy42NC4yNS42YTM2LjExLDM2LjExLDAsMCwwLDEzLjUyLDE1LjdsLTIxLjUsNy44MkE0LDQsMCwwLDAsMTM2LDEzMmE0LjEyLDQuMTIsMCwwLDAsMS4zNy0uMjRsMjkuMy0xMC42Niw1OC4xOCwxOS40YTI4LDI4LDAsMCwxLDE5LDIzLjVIMzZWNzUuNTNBNCw0LDAsMCwxLDM4LjYzLDcxLjc3Wk0yNDAsMTk2SDQwYTQsNCwwLDAsMS00LTRWMTcySDI0NHYyMEE0LDQsMCwwLDEsMjQwLDE5NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTMxbC02MC43My0yMC4yNGEyNiwyNiwwLDAsMS0xNS41MS0xNEwxMjguNTEsNDIuMzFhMTQsMTQsMCwwLDAtMTcuNTctNy40N0wzNS4yMiw2Mi4zN0ExNC4wNSwxNC4wNSwwLDAsMCwyNiw3NS41M1YxOTJhMTQsMTQsMCwwLDAsMTQsMTRIMjQwYTE0LDE0LDAsMCwwLDE0LTE0VjE2Ny4wNkEzOCwzOCwwLDAsMCwyMjgsMTMxWk0zOS4zMiw3My42NSwxMTUsNDYuMTJhMS44MSwxLjgxLDAsMCwxLC42OC0uMTIsMiwyLDAsMCwxLDEuNzksMS4xMWw4LDE4LjY4TDEwMiw3NC4zNkE2LDYsMCwwLDAsMTA0LDg2YTUuOTIsNS45MiwwLDAsMCwyLS4zN2wyNC4xOC04Ljc5LDYuMzEsMTQuNzZMMTE4LDk4LjM2QTYsNiwwLDAsMCwxMjAsMTEwYTYuMTUsNi4xNSwwLDAsMCwyLS4zNmwxOS4yNi03YTM4LDM4LDAsMCwwLDEwLjU3LDEzLjIxTDEzNCwxMjIuMzZBNiw2LDAsMCwwLDEzNiwxMzRhNi4xNSw2LjE1LDAsMCwwLDIuMDUtLjM2bDI4LjY0LTEwLjQyLDU3LjUzLDE5LjE4QTI1Ljk0LDI1Ljk0LDAsMCwxLDI0MS40OSwxNjJIMzhWNzUuNTNBMiwyLDAsMCwxLDM5LjMyLDczLjY1Wk0yNDAsMTk0SDQwYTIsMiwwLDAsMS0yLTJWMTc0SDI0MnYxOEEyLDIsMCwwLDEsMjQwLDE5NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuOCwxNjIuOTNsMC0uMzFBNDMuOTQsNDMuOTQsMCwwLDAsMjI2LDEyNS4zNmwtNTYuNjItMjAuMi0uMjQtLjA5YTIwLDIwLDAsMCwxLTExLjkyLTEwLjc4TDEzNC4wNiw0MGwtLjA2LS4xNkEyMC4wNiwyMC4wNiwwLDAsMCwxMDguODksMjkuMkwzMy4xNyw1Ni43M0EyMC4wNywyMC4wNywwLDAsMCwyMCw3NS41M1YxOTJhMjAsMjAsMCwwLDAsMjAsMjBIMjM2YTIwLDIwLDAsMCwwLDIwLTIwVjE2Ny4wNkMyNTYsMTY1LjY3LDI1NS45MywxNjQuMywyNTUuOCwxNjIuOTNaTTExMy41Myw1My4wNWw2LDE0TDEwMy45LDcyLjcyYTEyLDEyLDAsMSwwLDguMiwyMi41NUwxMjksODkuMTRsNC41NCwxMC42My0xMy42LDVBMTIsMTIsMCwwLDAsMTI0LDEyOGExMS43OSwxMS43OSwwLDAsMCw0LjEtLjczbDE5LjU3LTcuMTFhNDMuODYsNDMuODYsMCwwLDAsMTMuOCw3LjY0TDIxOC4wOSwxNDhsLjIzLjA4YTE5Ljg5LDE5Ljg5LDAsMCwxLDYuODQsMy45MUg0NFY3OC4zM1pNNDQsMTg4VjE3NkgyMzJ2MTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNjUsMTI5LjExbC0yOC4wNi05LjM1YTQsNCwwLDAsMC0yLjYzLDBsLTQzLjIzLDE1LjcyQTguMTQsOC4xNCwwLDAsMSwxNTIsMTM2YTgsOCwwLDAsMS03LjcxLTUuODgsOC4xNyw4LjE3LDAsMCwxLDUuMjItOS43M0wxNjgsMTEzLjY3YTIuNTQsMi41NCwwLDAsMC0uMDYtNC44LDIzLjkzLDIzLjkzLDAsMCwxLTguOC01LjI1LDQsNCwwLDAsMC00LjE3LS45MWwtMjQuMjIsOC44YTgsOCwwLDAsMS0xMC40NC01LjM5LDguMTcsOC4xNywwLDAsMSw1LjIyLTkuNzNMMTQ2LDg4LjkzYTQsNCwwLDAsMCwyLjMxLTUuMzRsLTMuMDYtNy4xNmE0LDQsMCwwLDAtNS4wNS0yLjE5bC0yNS41LDkuMjdhOCw4LDAsMCwxLTEwLjQ0LTUuMzksOC4xNyw4LjE3LDAsMCwxLDUuMjItOS43M2wyNC04LjczYTQsNCwwLDAsMCwyLjMxLTUuMzNMMTMwLjM5LDQxLjZzMC0uMDcsMC0uMUExNiwxNiwwLDAsMCwxMTAuMjUsMzNMMzQuNTMsNjAuNDlBMTYuMDUsMTYuMDUsMCwwLDAsMjQsNzUuNTNWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDI0MGExNiwxNiwwLDAsMCwxNi0xNlYxNjcuMDZBNDAsNDAsMCwwLDAsMjI4LjY1LDEyOS4xMVpNMjQwLDE5Mkg0MFYxNzZIMjQwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTY3LjA2VjE2OEgzMlY3NS41NEE4LDgsMCwwLDEsMzcuMjcsNjhMMTEzLDQwLjQ4YTgsOCwwLDAsMSwxMCw0LjI3TDE0Ni4yNyw5OS4xYTMyLDMyLDAsMCwwLDE5LjEyLDE3LjM2bDYwLjczLDIwLjI1QTMyLDMyLDAsMCwxLDI0OCwxNjcuMDZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI4LjY1LDEyOS4xMWwtNjAuNzMtMjAuMjRhMjQsMjQsMCwwLDEtMTQuMzItMTNMMTMwLjM5LDQxLjZzMC0uMDcsMC0uMUExNiwxNiwwLDAsMCwxMTAuMjUsMzNMMzQuNTMsNjAuNDlBMTYuMDUsMTYuMDUsMCwwLDAsMjQsNzUuNTNWMTkyYTE2LDE2LDAsMCwwLDE2LDE2SDI0MGExNiwxNiwwLDAsMCwxNi0xNlYxNjcuMDZBNDAsNDAsMCwwLDAsMjI4LjY1LDEyOS4xMVpNNDAsNzUuNTMsMTE1LjcyLDQ4bDcuMTEsMTYuNjMtMjEuNTYsNy44NUE4LDgsMCwwLDAsMTA0LDg4YTcuOTEsNy45MSwwLDAsMCwyLjczLS40OWwyMi40LTguMTQsNC43NCwxMS4wNy0xNi42LDZBOCw4LDAsMCwwLDEyMCwxMTJhNy45MSw3LjkxLDAsMCwwLDIuNzMtLjQ5bDE3LjYtNi40YTQwLjA2LDQwLjA2LDAsMCwwLDcuNjgsMTBsLTE0Ljc0LDUuMzZBOCw4LDAsMCwwLDEzNiwxMzZhOC4xNCw4LjE0LDAsMCwwLDIuNzMtLjQ4bDI4LTEwLjE4LDU2Ljg3LDE4Ljk1QTI0LDI0LDAsMCwxLDIzOC45MywxNjBINDBaTTI0MCwxOTJINDBWMTc2SDI0MFoiLz48L3N2Zz4=)
 */
declare const I: Icon;
export { I as Sneaker };