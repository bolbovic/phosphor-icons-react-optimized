import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlptMCwxNzZINDhWNDhINzJ2OGE4LDgsMCwwLDAsMTYsMFY0OGg4MHY4YTgsOCwwLDAsMCwxNiwwVjQ4aDI0VjIwOFptLTMxLjM4LTk0LjM2LTI5Ljg0LTIuMzEtMTEuNDMtMjYuNWE4LDgsMCwwLDAtMTQuNywwbC0xMS40MywyNi41LTI5Ljg0LDIuMzFhOCw4LDAsMCwwLTQuNDcsMTQuMTRsMjIuNTIsMTguNTktNi44NiwyNy43MWE4LDgsMCwwLDAsMTEuODIsOC44MUwxMjgsMTY3LjgybDI1LjYxLDE1LjA3YTgsOCwwLDAsMCwxMS44Mi04LjgxbC02Ljg2LTI3LjcxLDIyLjUyLTE4LjU5YTgsOCwwLDAsMC00LjQ3LTE0LjE0Wm0tMzIuMTEsMjMuNmE4LDgsMCwwLDAtMi42OCw4LjA5bDMuNSwxNC4xMi0xMy4yNy03LjgxYTgsOCwwLDAsMC04LjEyLDBsLTEzLjI3LDcuODEsMy41LTE0LjEyYTgsOCwwLDAsMC0yLjY4LTguMDlsLTExLjExLTkuMTgsMTQuODktMS4xNWE4LDgsMCwwLDAsNi43My00LjhsNi0xMy45Miw2LDEzLjkyYTgsOCwwLDAsMCw2LjczLDQuOGwxNC44OSwxLjE1WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZIMTgwVjI0YTQsNCwwLDAsMC04LDBWMzZIODRWMjRhNCw0LDAsMCwwLTgsMFYzNkg0OEExMiwxMiwwLDAsMCwzNiw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDIwOCwzNlptNCwxNzJhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRINzZWNTZhNCw0LDAsMCwwLDgsMFY0NGg4OFY1NmE0LDQsMCwwLDAsOCwwVjQ0aDI4YTQsNCwwLDAsMSw0LDRabS0zNS42OS05MC4zOC0zMi4yNC0yLjQ5LTEyLjQtMjguNzFhNCw0LDAsMCwwLTcuMzQsMGwtMTIuNCwyOC43MS0zMi4yNCwyLjQ5YTQsNCwwLDAsMC0yLjI0LDcuMDhsMjQuNDYsMjAuMTlMOTQuNDUsMTc1YTQsNCwwLDAsMCw1LjkxLDQuNDFMMTI4LDE2My4xOGwyNy42NCwxNi4yN2E0LDQsMCwwLDAsMiwuNTUsNC4wNSw0LjA1LDAsMCwwLDIuMzktLjc5LDQsNCwwLDAsMCwxLjQ5LTQuMTdsLTcuNDYtMzAuMTUsMjQuNDYtMjAuMTlhNCw0LDAsMCwwLTIuMjQtNy4wOFptLTI5LjI2LDIyLjcxYTQsNCwwLDAsMC0xLjMzLDRsNS43OCwyMy4zNkwxMzAsMTU1LjA5YTQsNCwwLDAsMC00LjA2LDBMMTA0LjUsMTY3LjczbDUuNzgtMjMuMzZhNCw0LDAsMCwwLTEuMzMtNEw5MC4xOSwxMjQuODQsMTE1LDEyMi45MmE0LDQsMCwwLDAsMy4zNi0yLjRMMTI4LDk4LjFsOS42OCwyMi40MmE0LDQsMCwwLDAsMy4zNiwyLjRsMjQuNzcsMS45MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRIMTgyVjI0YTYsNiwwLDAsMC0xMiwwVjM0SDg2VjI0YTYsNiwwLDAsMC0xMiwwVjM0SDQ4QTE0LDE0LDAsMCwwLDM0LDQ4VjIwOGExNCwxNCwwLDAsMCwxNCwxNEgyMDhhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMjA4LDM0Wm0yLDE3NGEyLDIsMCwwLDEtMiwySDQ4YTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMkg3NFY1NmE2LDYsMCwwLDAsMTIsMFY0Nmg4NFY1NmE2LDYsMCwwLDAsMTIsMFY0NmgyNmEyLDIsMCwwLDEsMiwyWm0tMzMuNTQtOTIuMzctMzEtMi40TDEzMy41MSw4NS42MmE2LDYsMCwwLDAtMTEsMGwtMTEuOTEsMjcuNjEtMzEsMi40YTYsNiwwLDAsMC0zLjM2LDEwLjYxbDIzLjQ5LDE5LjM5LTcuMTYsMjguOTNhNiw2LDAsMCwwLDguODcsNi42MUwxMjgsMTY1LjVsMjYuNjIsMTUuNjdhNiw2LDAsMCwwLDguODctNi42MWwtNy4xNi0yOC45MywyMy40OS0xOS4zOWE2LDYsMCwwLDAtMy4zNi0xMC42MVptLTMwLjY4LDIzLjE1YTYsNiwwLDAsMC0yLDYuMDdsNC42MywxOC43NEwxMzEsMTUzLjM3YTYsNiwwLDAsMC02LjA4LDBsLTE3LjM3LDEwLjIyLDQuNjMtMTguNzRhNiw2LDAsMCwwLTItNi4wN0w5NS4yOCwxMjYuNDVsMTkuODMtMS41M2E2LDYsMCwwLDAsNS0zLjYxTDEyOCwxMDMuMTRsNy44NCwxOC4xN2E2LDYsMCwwLDAsNSwzLjYxbDE5LjgzLDEuNTNaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhIMTg4VjI0YTEyLDEyLDAsMCwwLTI0LDB2NEg5MlYyNGExMiwxMiwwLDAsMC0yNCwwdjRINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1Mkg2OGExMiwxMiwwLDAsMCwyNCwwaDcyYTEyLDEyLDAsMCwwLDI0LDBoMTZabS0yNy4wOC05NC4zNS0yNy40Mi0yLjEyTDEzOSw4My4yNWExMiwxMiwwLDAsMC0yMiwwTDEwNi41LDEwNy41M2wtMjcuNDIsMi4xMmExMiwxMiwwLDAsMC02LjcyLDIxLjIybDIwLjU4LDE3LTYuMjUsMjUuMjZhMTIsMTIsMCwwLDAsMTcuNzMsMTMuMjJMMTI4LDE3Mi40NmwyMy41OCwxMy44OGExMiwxMiwwLDAsMCwxNy43My0xMy4yMmwtNi4yNS0yNS4yNiwyMC41OC0xN2ExMiwxMiwwLDAsMC02LjcyLTIxLjIyWm0tMzUsMjQuNTFhMTIsMTIsMCwwLDAtNCwxMi4xM2wxLjIxLDQuODktNS4wNy0zYTEyLjA2LDEyLjA2LDAsMCwwLTEyLjE4LDBsLTUuMDcsMywxLjIxLTQuODlhMTIsMTIsMCwwLDAtNC0xMi4xM2wtMy40Ny0yLjg3LDUtLjM5YTEyLDEyLDAsMCwwLDEwLjA5LTcuMjFsMi4zMy01LjQsMi4zMyw1LjRhMTIsMTIsMCwwLDAsMTAuMDksNy4yMWw1LC4zOVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJIMTg0VjI0YTgsOCwwLDAsMC0xNiwwdjhIODhWMjRhOCw4LDAsMCwwLTE2LDB2OEg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNNzIsNjRWNTZhOCw4LDAsMCwxLDE2LDB2OGE4LDgsMCwwLDEtMTYsMFptMTA2LjU1LDYwLjctMjQuNDYsMjAuMTlMMTYxLjU1LDE3NWE0LDQsMCwwLDEtMS40OSw0LjE3LDQuMDUsNC4wNSwwLDAsMS0yLjM5Ljc5LDQsNCwwLDAsMS0yLS41NUwxMjgsMTYzLjE4bC0yNy42NCwxNi4yN0E0LDQsMCwwLDEsOTQuNDUsMTc1bDcuNDYtMzAuMTVMNzcuNDUsMTI0LjdhNCw0LDAsMCwxLDIuMjQtNy4wOGwzMi4yNC0yLjQ5LDEyLjQtMjguNzFhNCw0LDAsMCwxLDcuMzQsMGwxMi40LDI4LjcxLDMyLjI0LDIuNDlhNCw0LDAsMCwxLDIuMjQsNy4wOFpNMTg0LDY0YTgsOCwwLDAsMS0xNiwwVjU2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDkuNiwxNDMuNDEsMTU3LjY3LDE3NiwxMjgsMTU4LjU0LDk4LjMzLDE3Nmw4LjA3LTMyLjU5TDgwLDEyMS42MWwzNC42NS0yLjY3TDEyOCw4OGwxMy4zNSwzMC45NEwxNzYsMTIxLjYxWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkgxODRWMjRhOCw4LDAsMCwwLTE2LDB2OEg4OFYyNGE4LDgsMCwwLDAtMTYsMHY4SDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWm0wLDE3Nkg0OFY0OEg3MnY4YTgsOCwwLDAsMCwxNiwwVjQ4aDgwdjhhOCw4LDAsMCwwLDE2LDBWNDhoMjRWMjA4Wm0tMzEuMzgtOTQuMzYtMjkuODQtMi4zMS0xMS40My0yNi41YTgsOCwwLDAsMC0xNC43LDBsLTExLjQzLDI2LjUtMjkuODQsMi4zMWE4LDgsMCwwLDAtNC40NywxNC4xNGwyMi41MiwxOC41OS02Ljg2LDI3LjcxYTgsOCwwLDAsMCwxMS44Miw4LjgxTDEyOCwxNjcuODJsMjUuNjEsMTUuMDdhOCw4LDAsMCwwLDExLjgyLTguODFsLTYuODYtMjcuNzEsMjIuNTItMTguNTlhOCw4LDAsMCwwLTQuNDctMTQuMTRabS0zMi4xMSwyMy42YTgsOCwwLDAsMC0yLjY4LDguMDlsMy41LDE0LjEyLTEzLjI3LTcuODFhOCw4LDAsMCwwLTguMTIsMGwtMTMuMjcsNy44MSwzLjUtMTQuMTJhOCw4LDAsMCwwLTIuNjgtOC4wOWwtMTEuMTEtOS4xOCwxNC44OS0xLjE1YTgsOCwwLDAsMCw2LjczLTQuOGw2LTEzLjkyLDYsMTMuOTJhOCw4LDAsMCwwLDYuNzMsNC44bDE0Ljg5LDEuMTVaIi8+PC9zdmc+)
 */
declare const I: Icon;
export { I as CalendarStar };