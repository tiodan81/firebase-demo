# Firebase

## Installation steps

1. [follow the instructions](https://firebase.google.com/docs/web/setup) to set up a new project via the FB console
  - use the Realtime Database for app data; Storage is for assets (e.g. media files)
  - copy initialization scripts
2. [install the FB CLI](https://firebase.google.com/docs/hosting/quickstart)
3. set up authentication (optional), or set database rules for public access
4. decide how you want to [structure your data](https://firebase.google.com/docs/database/web/structure-data)
  - if creating users & using auth, it's a good idea to have separate data & user nodes
  - consider the minimum representation of your data
