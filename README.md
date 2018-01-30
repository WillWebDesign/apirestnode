# API RESY Node JS

API Rest full in Node JS with scalability, reuse and separation of responsibilities.

## Running
To start and run the project/server, simply run the following command in your root directory:

```
npm start
```

## Sample endpoints

### Views
 - `/` - Default route that redirects to the home page
 - `/home` - Render the home page sample

### API
 - `/api/v1/hotels` - Post all hotels, for filter of name or stars send in the body request a JSON :

 ```
{"filter":
  {
	  "name" : "",
	  "stars" : ""
  }
}
 ```
