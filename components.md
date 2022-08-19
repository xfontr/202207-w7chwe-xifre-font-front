[ROUTES]

/home -> Default. Will redirect to /sign-in if the user is not logged in.
/sign-in
/sign-up
/user/:id

[COMPONENTS]

# App

**Receives**

- Nothing.

**State**

- None.

**Shows**

- Full application. Header.

**User actions**

- None.

# SignForm

**Receives**

- If it's a sign up or a sign in form.

**State**

- A state for the user inputs.

**Shows**

- If it's a login form:

  - A form with two inputs (user name and password) and a submit button.

- If it's a sign in form:

  - A form with two inputs to inser username and password.
  - Said form will also have an input for iserting a url to an image.
  - Will also have an input for inserting a user description/biography.

**User actions**

- Submit the form and sign in or sign up depending on the type of form.

# UsersList

**Receives**

- Nothing.

**State**

- The filters chosen by the user:
  - To show all users.
  - To show only friends.
  - To show only enemies.

**Shows**

- List of users, which can be all users, friends or enemies, depending on the user preference.

**User actions**

- Decide what sort of users he wants to see.

# User

**Receives**

- A user.

**State**

- None.

**Shows**

- The main user data: name and image.
- A button to view profile.
- A button to add as a friend.
- A button to add as an enemy.

**User actions**

- He will be able to click the shown buttons, and by doing so he will have the option to:
  - Add the user as a friend.
  - Add the user as an enemy.
  - View the user profile.

# Profile

**Receives**

- Nothing, it will however fetch the API to retreive the specific user included in the URL as a parameter.

**State**

- The user retreived.

**Shows**

- Full user data:

  - Name.
  - Image.
  - Description/biography.

- The exact same buttons that the User component displays.

**User actions**

- The exact same ones as at the User component.

# Button

**Receives**

- A function.
- A text
- A type (submit or button)
- Possibly a type of style (icon or default)

**State**

- Nothing

**Shows**

- A button with the received text.

**User actions**:

- Click the button so it activates the received function.

[DATA_LAYER]
