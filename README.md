## Changes Made:

* Logout button works, data is deleted from localStorage. After logout user is redirected back to login screen.
* Added additional filter tab for older emails. Only email which are older than 30 days are added to it. Calculations are done with miliseconds for accuracy.
* Added emails to the item list.
* Login is validated this way: 
    - Username or password can't be empty or longer than 30 characters.
    - User is only logged in if information for username or password is correct.
    - Incorrect login attempts are logged in. After 3 tries, 30 second counter is displayed instead of login form. This timeout counter is only to simulate too many wrong attempts (it's only on the front end of the application).
* During correct or incorrect login, while information is being fetched, a loader is displayed instead of the login button.
* After email update, page is not reloaded. After update, the update modal is closed automatically.
* Added wrong emails filter by using regex.
* Fixed some typos, added missing types, some functions moved to one general file (instead of multiple ones).
* Added some more additional components, for purposes of refractoring.
* Fixed visible errors in the console and in the code.
