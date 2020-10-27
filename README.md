# PPKWU_Zadanie2

It's a Nodejs REST Api project that will check privided string witch big letters, small letters, numbers and special characters occurences.

## Starting server tutorial:

To start server, just go to project directory with terminal and enter command:
`node index.js`

## Endpoints:

`GET /validate` <- check string with chars occurences

@body (:string)

@return json with occurences of each chars


Example body:
`{
  "string": "TESTgfgd1gdf"
}`

Example result:
`{
  "result": {
    "hasLowerCase": true,
    "hasUpperCase": true,
    "hasNumbers": true,
    "hasSpecialCharacters": false
  }
}`
