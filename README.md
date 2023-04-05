# JSON
To open file, yarn then yarn start.

Click through to a business (example: Dining, Breakfast, Amigos).
Click the heart in the upper right corner of header.
This will take you to screens/FavoritesEditScreen.

Note: Right now I can not get the image and business name to pass through to this screen (still learning to pass props).

NOTE: Clicking on the heart also adds a business to the FavoritesScreen (click heart in the bottom tab bar). But I also
need the business to be added to a horizontal flatlist based on the category the user was in when added
(example: If the user was in Breakfast, then a breakfast flatlist would be created).

Here's what I would like to happen at this screen.

1: The user can add comments about this business that will be saved in their phone memory (using Async storage?).

2: If they click save, he user will return to the business screen where they will see their comments.

3: If they click delete it will remove the business from favorites.

4: If the user is in the Favorites screen that lists all favorites, they can click "Add/change comments" 
and will be taken back to the FavoritesEditScreen where they can change comments, Go to the business screen, or
delete it from from favorites.

If you feel there is anything wrong or confusing with the user interface of this, input is always appreciated.
