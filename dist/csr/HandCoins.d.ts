import type { Icon } from "../lib/types";
/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMzMsMTQxLjA2YTI0LjQzLDI0LjQzLDAsMCwwLTIxLjI0LTQuMjNsLTQxLjg0LDkuNjJBMjgsMjgsMCwwLDAsMTQwLDExMkg4OS45NGEzMS44MiwzMS44MiwwLDAsMC0yMi42Myw5LjM3TDQ0LjY5LDE0NEgxNkExNiwxNiwwLDAsMCwwLDE2MHY0MGExNiwxNiwwLDAsMCwxNiwxNkgxMjBhNy45Myw3LjkzLDAsMCwwLDEuOTQtLjI0bDY0LTE2YTYuOTQsNi45NCwwLDAsMCwxLjE5LS40TDIyNiwxODIuODJsLjQ0LS4yYTI0LjYsMjQuNiwwLDAsMCwzLjkzLTQxLjU2Wk0xNiwxNjBINDB2NDBIMTZabTIwMy40Myw4LjIxLTM4LDE2LjE4TDExOSwyMDBINTZWMTU1LjMxbDIyLjYzLTIyLjYyQTE1Ljg2LDE1Ljg2LDAsMCwxLDg5Ljk0LDEyOEgxNDBhMTIsMTIsMCwwLDEsMCwyNEgxMTJhOCw4LDAsMCwwLDAsMTZoMzJhOC4zMiw4LjMyLDAsMCwwLDEuNzktLjJsNjctMTUuNDEuMzEtLjA4YTguNiw4LjYsMCwwLDEsNi4zLDE1LjlaTTE2NCw5NmEzNiwzNiwwLDAsMCw1LjktLjQ4LDM2LDM2LDAsMSwwLDI4LjIyLTQ3QTM2LDM2LDAsMSwwLDE2NCw5NlptNjAtMTJhMjAsMjAsMCwxLDEtMjAtMjBBMjAsMjAsMCwwLDEsMjI0LDg0Wk0xNjQsNDBhMjAsMjAsMCwwLDEsMTkuMjUsMTQuNjEsMzYsMzYsMCwwLDAtMTUsMjQuOTNBMjAuNDIsMjAuNDIsMCwwLDEsMTY0LDgwYTIwLDIwLDAsMCwxLDAtNDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuOSwxNDQuMjRhMjAuNDUsMjAuNDUsMCwwLDAtMTcuODQtMy41M0wxNjAuNzUsMTUyQTIzLjc2LDIzLjc2LDAsMCwwLDE2NCwxNDBhMjQsMjQsMCwwLDAtMjQtMjRIODkuOTRhMjcuODEsMjcuODEsMCwwLDAtMTkuOCw4LjJMNDYuMzQsMTQ4SDE2QTEyLDEyLDAsMCwwLDQsMTYwdjQwYTEyLDEyLDAsMCwwLDEyLDEySDEyMGE0LDQsMCwwLDAsMS0uMTJsNjQtMTZhNC42OSw0LjY5LDAsMCwwLC42LS4ybDM4LjgyLTE2LjU0LjIyLS4xYTIwLjYsMjAuNiwwLDAsMCwzLjI5LTM0LjhaTTEyLDIwMFYxNjBhNCw0LDAsMCwxLDQtNEg0NHY0OEgxNkE0LDQsMCwwLDEsMTIsMjAwWm0yMDkuMTMtMjguMTdMMTgyLjcyLDE4OC4yLDExOS41MSwyMDRINTJWMTUzLjY2bDIzLjgtMjMuOEExOS44NiwxOS44NiwwLDAsMSw4OS45NCwxMjRIMTQwYTE2LDE2LDAsMCwxLDAsMzJIMTEyYTQsNCwwLDAsMCwwLDhoMzJhMy45NCwzLjk0LDAsMCwwLC45LS4xbDY3LTE1LjQxLjE2LDBhMTIuNiwxMi42LDAsMCwxLDksMjMuMzhaTTE2NCw5MmEzMS44OCwzMS44OCwwLDAsMCw4LjczLTEuMiwzMiwzMiwwLDEsMCwyMi41NS0zNy41OEEzMiwzMiwwLDEsMCwxNjQsOTJabTY0LThhMjQsMjQsMCwxLDEtMjQtMjRBMjQsMjQsMCwwLDEsMjI4LDg0Wk0xNjQsMzZhMjQsMjQsMCwwLDEsMjMuNzQsMjAuNDZBMzIsMzIsMCwwLDAsMTcyLDgyLjYyLDI0LDI0LDAsMSwxLDE2NCwzNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuMTIsMTQyLjY1YTIyLjQzLDIyLjQzLDAsMCwwLTE5LjU1LTMuODhsLTQ1LjI0LDEwLjRBMjYsMjYsMCwwLDAsMTQwLDExNEg4OS45NGEyOS43OCwyOS43OCwwLDAsMC0yMS4yMSw4Ljc5TDQ1LjUyLDE0NkgxNkExNCwxNCwwLDAsMCwyLDE2MHY0MGExNCwxNCwwLDAsMCwxNCwxNEgxMjBhNiw2LDAsMCwwLDEuNDYtLjE4bDY0LTE2YTcuMTYsNy4xNiwwLDAsMCwuODktLjNMMjI1LjE3LDE4MWwuMzMtLjE1YTIyLjYsMjIuNiwwLDAsMCwzLjYyLTM4LjE4Wk0xNCwyMDBWMTYwYTIsMiwwLDAsMSwyLTJINDJ2NDRIMTZBMiwyLDAsMCwxLDE0LDIwMFptMjA2LjI4LTMwLTM4LjIsMTYuMjdMMTE5LjI2LDIwMkg1NFYxNTQuNDlsMjMuMjEtMjMuMjJBMTcuODgsMTcuODgsMCwwLDEsODkuOTQsMTI2SDE0MGExNCwxNCwwLDAsMSwwLDI4SDExMmE2LDYsMCwwLDAsMCwxMmgzMmE2LDYsMCwwLDAsMS4zNC0uMTVsNjctMTUuNDEuMjQtLjA2QTEwLjYsMTAuNiwwLDAsMSwyMjAuMjgsMTcwWk0xNjQsOTRhMzQuNTQsMzQuNTQsMCwwLDAsNy4yOC0uNzgsMzQsMzQsMCwxLDAsMjUuNDYtNDIuNDNBMzQsMzQsMCwxLDAsMTY0LDk0Wm02Mi0xMGEyMiwyMiwwLDEsMS0yMi0yMkEyMiwyMiwwLDAsMSwyMjYsODRaTTE2NCwzOGEyMS45NCwyMS45NCwwLDAsMSwyMS41MSwxNy40OSwzNCwzNCwwLDAsMC0xNS4zOCwyNS42NUEyMiwyMiwwLDEsMSwxNjQsMzhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNzYsMTM3Ljg4QTI4LjM5LDI4LjM5LDAsMCwwLDIwOC4xMywxMzNMMTcyLDE0MS4yNmMwLS40MiwwLS44NCwwLTEuMjZhMzIsMzIsMCwwLDAtMzItMzJIODkuOTRhMzUuNzYsMzUuNzYsMCwwLDAtMjUuNDUsMTAuNTRMNDMsMTQwSDIwQTIwLDIwLDAsMCwwLDAsMTYwdjQwYTIwLDIwLDAsMCwwLDIwLDIwSDEyMGExMS44OSwxMS44OSwwLDAsMCwyLjkxLS4zNmw2NC0xNmExMS40LDExLjQsMCwwLDAsMS43OS0uNmwzOC44Mi0xNi41NGMuMjMtLjA5LjQ1LS4xOS42Ny0uM2EyOC42MSwyOC42MSwwLDAsMCw0LjU3LTQ4LjMyWk0zNiwxOTZIMjRWMTY0SDM2Wm0xODEuNjgtMzEuMzktMzcuNTEsMTZMMTE4LjUyLDE5Nkg2MFYxNTdsMjEuNDYtMjEuNDZBMTEuOTMsMTEuOTMsMCwwLDEsODkuOTQsMTMySDE0MGE4LDgsMCwwLDEsMCwxNkgxMTJhMTIsMTIsMCwwLDAsMCwyNGgzMmExMi4xOSwxMi4xOSwwLDAsMCwyLjY5LS4zbDY3LTE1LjQxLjQ3LS4xMmE0LjYxLDQuNjEsMCwwLDEsNS44Miw0LjQ0QTQuNTgsNC41OCwwLDAsMSwyMTcuNjgsMTY0LjYxWk0xNjQsMTAwYTQwLjM2LDQwLjM2LDAsMCwwLDUuMTgtLjM0LDQwLDQwLDAsMSwwLDI5LjY3LTU5LjMyQTQwLDQwLDAsMSwwLDE2NCwxMDBabTQwLTM2YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDIwNCw2NFpNMTY0LDQ0YTE2LDE2LDAsMCwxLDEyLjk0LDYuNThBMzkuOSwzOS45LDAsMCwwLDE2NC4yLDc2SDE2NGExNiwxNiwwLDAsMSwwLTMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjguMDksNTcuMzhhMzYsMzYsMCwwLDEsNTUuMTctMjcuODIsNCw0LDAsMCwxLS41Niw3QTUyLjA2LDUyLjA2LDAsMCwwLDE1Miw4NGMwLDEuMTcsMCwyLjM0LjEyLDMuNDlhNCw0LDAsMCwxLTYsMy43NkEzNiwzNiwwLDAsMSwxMjguMDksNTcuMzhaTTI0MCwxNjAuNjFhMjQuNDcsMjQuNDcsMCwwLDEtMTMuNiwyMmwtLjQ0LjItMzguODMsMTYuNTRhNi45NCw2Ljk0LDAsMCwxLTEuMTkuNGwtNjQsMTZBNy45Myw3LjkzLDAsMCwxLDEyMCwyMTZIMTZBMTYsMTYsMCwwLDEsMCwyMDBWMTYwYTE2LDE2LDAsMCwxLDE2LTE2SDQ0LjY5bDIyLjYyLTIyLjYzQTMxLjgyLDMxLjgyLDAsMCwxLDg5Ljk0LDExMkgxNDBhMjgsMjgsMCwwLDEsMjcuMjUsMzQuNDVsNDEuODQtOS42MkEyNC42MSwyNC42MSwwLDAsMSwyNDAsMTYwLjYxWm0tMTYsMGE4LjYxLDguNjEsMCwwLDAtMTAuODctOC4zbC0uMzEuMDgtNjcsMTUuNDFhOC4zMiw4LjMyLDAsMCwxLTEuNzkuMkgxMTJhOCw4LDAsMCwxLDAtMTZoMjhhMTIsMTIsMCwwLDAsMC0yNEg4OS45NGExNS44NiwxNS44NiwwLDAsMC0xMS4zMSw0LjY5TDU2LDE1NS4zMVYyMDBoNjNsNjIuNDMtMTUuNjEsMzgtMTYuMThBOC41Niw4LjU2LDAsMCwwLDIyNCwxNjAuNjFaTTE2OCw4NGEzNiwzNiwwLDEsMCwzNi0zNkEzNiwzNiwwLDAsMCwxNjgsODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNiwxNTJINDh2NTZIMTZhOCw4LDAsMCwxLTgtOFYxNjBBOCw4LDAsMCwxLDE2LDE1MlpNMjA0LDU2YTI4LDI4LDAsMCwwLTEyLDIuNzFoMEEyOCwyOCwwLDEsMCwxNzYsODUuMjloMEEyOCwyOCwwLDEsMCwyMDQsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMwLjMzLDE0MS4wNmEyNC40MywyNC40MywwLDAsMC0yMS4yNC00LjIzbC00MS44NCw5LjYyQTI4LDI4LDAsMCwwLDE0MCwxMTJIODkuOTRhMzEuODIsMzEuODIsMCwwLDAtMjIuNjMsOS4zN0w0NC42OSwxNDRIMTZBMTYsMTYsMCwwLDAsMCwxNjB2NDBhMTYsMTYsMCwwLDAsMTYsMTZIMTIwYTcuOTMsNy45MywwLDAsMCwxLjk0LS4yNGw2NC0xNmE2Ljk0LDYuOTQsMCwwLDAsMS4xOS0uNEwyMjYsMTgyLjgybC40NC0uMmEyNC42LDI0LjYsMCwwLDAsMy45My00MS41NlpNMTYsMTYwSDQwdjQwSDE2Wm0yMDMuNDMsOC4yMS0zOCwxNi4xOEwxMTksMjAwSDU2VjE1NS4zMWwyMi42My0yMi42MkExNS44NiwxNS44NiwwLDAsMSw4OS45NCwxMjhIMTQwYTEyLDEyLDAsMCwxLDAsMjRIMTEyYTgsOCwwLDAsMCwwLDE2aDMyYTguMzIsOC4zMiwwLDAsMCwxLjc5LS4ybDY3LTE1LjQxLjMxLS4wOGE4LjYsOC42LDAsMCwxLDYuMywxNS45Wk0xNjQsOTZhMzYsMzYsMCwwLDAsNS45LS40OCwzNiwzNiwwLDEsMCwyOC4yMi00N0EzNiwzNiwwLDEsMCwxNjQsOTZabTYwLTEyYTIwLDIwLDAsMSwxLTIwLTIwQTIwLDIwLDAsMCwxLDIyNCw4NFpNMTY0LDQwYTIwLDIwLDAsMCwxLDE5LjI1LDE0LjYxLDM2LDM2LDAsMCwwLTE1LDI0LjkzQTIwLjQyLDIwLjQyLDAsMCwxLDE2NCw4MGEyMCwyMCwwLDAsMSwwLTQwWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as HandCoins };