# Usage 💻

_# CREATE FOLLOWING ENVIRONMENT VARIABLES_

```
    PORT
    HOST
    USER
    PASSWORD
    DBUSERS
```

_# REGISTER USER_

```
POST /user/register
headers{
    'Content-Type': 'application/json'
},
body: JSON.stringify({
	user,
	name,
	last_name,
	email,
	password,
})
```
