import type { Icon } from "../../lib/types";
/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTUuMiwxMDAuOGMtMjMtMjMtNTUuNTctMjcuNjMtNzIuOC0xMC40YTM0LjIxLDM0LjIxLDAsMCwwLTcuNjEsMTEuNjYsMTYuMjMsMTYuMjMsMCwwLDEtMTQuNzIsMTBDNDgsMTEyLjQ0LDM3LDExNi42MSwyOC44LDEyNC44LDcuNiwxNDYsMTMuMzMsMTg2LjEyLDQxLjYsMjE0LjRzNjguMzksMzQsODkuNiwxMi44QzEzOS4zOSwyMTksMTQzLjU2LDIwOCwxNDQsMTk1LjkzYTE2LjIzLDE2LjIzLDAsMCwxLDEwLTE0LjcyLDM0LjIxLDM0LjIxLDAsMCwwLDExLjY2LTcuNjFDMTgyLjgzLDE1Ni4zNywxNzguMTcsMTIzLjc4LDE1NS4yLDEwMC44Wk0xMTIsMTY4YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDExMiwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ5LjY2LDQ2LjM0bC00MC00MGE4LDgsMCwwLDAtMTEuMzEsMTEuMzJMMjAwLjY5LDIwLDE0MC41Miw4MC4xNkMxMTcuNzMsNjguMyw5Mi4yMSw2OS4yOSw3Ni43NSw4NC43NGE0Mi4yNyw0Mi4yNywwLDAsMC05LjM5LDE0LjM3QTguMjQsOC4yNCwwLDAsMSw1OS44MSwxMDRjLTE0LjU5LjQ5LTI3LjI2LDUuNzItMzYuNjUsMTUuMTFDMTEuMDgsMTMxLjIyLDYsMTQ4LjYsOC43NCwxNjguMDcsMTEuNCwxODYuNywyMS4wNywyMDUuMTUsMzYsMjIwczMzLjM0LDI0LjU2LDUyLDI3LjIyQTcxLjEzLDcxLjEzLDAsMCwwLDk4LjEsMjQ4YzE1LjMyLDAsMjguODMtNS4yMywzOC43Ni0xNS4xNiw5LjM5LTkuMzksMTQuNjItMjIuMDYsMTUuMTEtMzYuNjVhOC4yNCw4LjI0LDAsMCwxLDQuOTItNy41NSw0Mi4xMiw0Mi4xMiwwLDAsMCwxNC4zNy05LjM5YzE1LjQ1LTE1LjQ2LDE2LjQ0LTQxLDQuNTgtNjMuNzdMMjM2LDU1LjMxbDIuMzQsMi4zNGE4LDgsMCwxLDAsMTEuMzItMTEuMzFaTTE2MCwxNjcuOTNhMjYuMTIsMjYuMTIsMCwwLDEtOC45NSw1LjgzLDI0LjI0LDI0LjI0LDAsMCwwLTE1LDIxLjg5Yy0uMzYsMTAuNDYtNCwxOS40MS0xMC40MywyNS44OC04LjQ0LDguNDMtMjEsMTEuOTUtMzUuMzYsOS44OUM3NSwyMjkuMjUsNTkuNzMsMjIxLjE5LDQ3LjI3LDIwOC43M1MyNi43NSwxODEsMjQuNTgsMTY1LjgxYy0yLTE0LjM3LDEuNDYtMjYuOTIsOS44OS0zNS4zNkM0MC45NCwxMjQsNDkuODksMTIwLjM3LDYwLjM1LDEyMGgwYTI0LjIyLDI0LjIyLDAsMCwwLDIxLjg5LTE1LDI2LjEyLDI2LjEyLDAsMCwxLDUuODMtOWM1LjQ5LTUuNDksMTMtOC4xMywyMS4zOC04LjEzYTQ5LjM4LDQ5LjM4LDAsMCwxLDE5LjEzLDQuMTlMMTA4LjUsMTEyLjE5YTMyLDMyLDAsMSwwLDM1LjMxLDM1LjMxbDIwLjA4LTIwLjA4QzE3MC40MSwxNDIuNzEsMTY5LjQ3LDE1OC40MSwxNjAsMTY3LjkzWm0tMTAuNC02MS40OGE3Mi45LDcyLjksMCwwLDEsNS45Myw2Ljc1bC0xNS40MiwxNS40MmEzMi4yMiwzMi4yMiwwLDAsMC0xMi42OC0xMi42OGwxNS40Mi0xNS40M0E3Myw3MywwLDAsMSwxNDkuNTUsMTA2LjQ1Wk0xMTIsMTI4YTE2LDE2LDAsMCwxLDE2LDE2aDBhMTYsMTYsMCwxLDEtMTYtMTZabTQ4Ljg1LTMyLjg1YTg2Ljk0LDg2Ljk0LDAsMCwwLTYuNjgtNkwxNzYsNjcuMzEsMTg4LjY5LDgwbC0yMS44MywyMS44MkE4Ni45NCw4Ni45NCwwLDAsMCwxNjAuODYsOTUuMTRaTTIwMCw2OC42OCwxODcuMzIsNTYsMjEyLDMxLjMxLDIyNC42OSw0NFpNOTMuNjYsMTk0LjMzYTgsOCwwLDAsMS0xMS4zMSwxMS4zMmwtMzItMzJhOCw4LDAsMCwxLDExLjMyLTExLjMxWiIvPjwvc3ZnPg==)
 */
declare const I: Icon;
export { I as Duotone };