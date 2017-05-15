# Storytime

[Live Example](https://alexbennettstorytime.herokuapp.com/#/)

Storytime is a full-stack application that tracks user interaction without implementing authorization.  Instead, JS Cookie is used to manipulate browser cookies to track users and limit functionality accordingly.

Users are able to create new Stories and add to any existing Story's body, which is a block of text.  Users are limited to 100 characters of text per addition, which results in collaborative story writing.  After contributing to any story, a cookie is placed on the user's browser that prevents further contributions for the next 15 minutes, preventing a user from writing a large amount of content in a short amount of time.

Users can read Stories and also have Stories read to them by clicking on the green play button on any Story page, which activates the ResponsiveVoiceJS API to begin reading the Story body in a British accent.

## Structure

Since authorization is not a part of this application, the database simply keeps track of Stories.  Stories are viewable by anyone at any time.  However, each Story consists of not only a title and body section, but also a tracker_key, which references the last user who made an addition to the Story.

Whenever a user contributes to a story, a cookie is placed on their browser, which references the point in time at which the contribution was made.  This date reference is used as the tracker_key on the backend, allowing the application to identify its last contributor by its cookie.  Any further attempts to contribute to Stories will check for the cookie and, if present, will check the date reference to ensure that the last contribution was over 15 minutes old.  If users attempt to contribute too quickly after their last contribution, a small reminder message will appear, letting them know they need to wait.  If a user has waited long enough, the cookie will be reset in the user's browser and the tracker_key will be updated accordingly.

To ensure that users can hear the Stories read back to them, the ResponsiveVoiceJS API runs in the background on every page so that even a slow internet connection will be able to load the necessary data before the user makes it to a Story page and attempts to play it.  The API has commands for play and stop, both of which are bound to the play/pause button in a toggled structure, and also the stop command will fire whenever a Story page unmounts.

## Future Plans

There are a couple of customization options that are planned for this application.

The first is the ability to set the amount of characters that people can contribute to a Story when it is created.  Backend architecture is already in place to allow for either every word or every 100 characters.  Eventually, I would like to allow for Story creators to set the number of characters as well.

Also, while the lack of authorization allows for quick, easy access to the content, it currently does not enable contributors to show their identity.  I would like to explore this functionality by storing a contributor name in the browser's cookie so that contributors could choose to leave a signature behind after adding content.

Finally, the ResponsiveVoiceJS API has many voice options available, and I have been toying with the idea of incorporating a dropdown menu that would allow users to select the accent of the voice that they hear.
