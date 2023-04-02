# JSON
To open file, yarn then yarn start.

NOTE: My JSON files are located in a folder named data. They use information from a folder named models.
   This layout for JSON files is based on an Academind tutorial (React Native-Practical Guide) by Max Schwarzuller.
   
1: screens/CategoriesScreen.
NOTE: I am just beginning to learn to pass parameters and props.
  I have a horizontal flatlist that returns CATEGORIESINFO using components/InfoCard.
    I want to click on each circle and pass imageUrl and title from dummy-info-data/INFO to screens/InfoDetailScreen,
  but I cannot get this to work. I am able to pass catId, but nothing else. Not sure what I am doing wrong.
  
2: When you click on the main vertical flatlist (example: Dining) it will open a sub Category. I also want this to open a horizontal flatlist at the top like in the step above. I think this data needs to be part of the JSON for each sub-category (example: Dining would also have the information for the circle items in horizontal flatlist——Attractions would have the circle items for that horizontal flatlist.
  I have not worked on this yet. I am trying to decide if this will take a new JSON or if the information can be added to the business-data file.
  
3: I successfully built the props going from CategoriesScreen to SubCategoriesScreen to BusinessListScreen and finally BusinessDetailScreen,
  but I have tried to build it again and I cannot do it. My big problem is that I do not completely understand how to pass and receive the props.
