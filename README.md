# JSON
To open file, yarn then yarn start.
Learning React Native from Udemy, Academind, and online tutorials.
When I started I did not know any javascript and still do not have a good knowledge.
I will start doing javascript tutorials once I get this layout completed.

I attached a project that I am practicing with so you can see where I am in skills.
I cannot do any of this on my own. I have to use tutorials and it takes me a lot of time to learn.

NOTE: My JSON files are located in a folder named data. They use information from folder named models.
   This layout for JSON files is based on an Academind tutorial (React Native-Practical Guide) by Max Schwarzuller.
   
Here is what I would like to learn.
1: screens/CategoriesScreen
  I have a horizontal flatlist that returns CATEGORIESINFO using components/InfoCard.
  I want to click on each circle and pass information from dummy-info-data/INFO (title & imageUrl) to screens/InfoDetailScreen,
  but I cannot learn how. I am only able to pass the id. I have tried options from a dozen tutorials with no luck.
  
2: When you click on the vertical flatlist (example: Dining) it will open a subCategory with dining options. I also want
  this screen to open a horizontal flatlist with additional (and different) info items that can be clicked to opn in screens/InfoDetailScreen.
  I have not worked on this yet. I am trying to decide if this will take a new JSON or if the information can be added to the business-data file.
  
3: I successfully built the props going from CategoriesScreen to SubCategoriesScreen to BusinessListScreen and finally BusinessDetailScreen,
  but I have tried to build it again and I cannot do it.
  My big problem is that I do not completely understand how to pass and receive the props.
  I would like to learn how this code works:
  CategoriesScreen, line 17: categoryId: itemData.item.id,
      Is categoryId something I can create/change, or is it a javascript word?
      Is itemData something I can create/change, or is it a javascript word?
      I have seen some tutorials that use only item (not itemData). Why is this?
  SubCategoriesScreen, line 12: const catId = route.params.categoryId;
      This is receiving the prop categoryId from CategoriesScreen. The word catId can be changed...Correct?
  SubCategoriesScreen, lines 15-17: const displaySubCategories = SUBCATEGORIES.filter((catItem) => {
                                  return catItem.subCategoryIds.indexOf(catId) >= 0;
                                });
       I do not understand any of this. Where did the word catItem come from? Where did subCategoryIds (or sometimes categoryIds) come from?           
       Line 20 is also confusing.
  InfoDetailScreen. See #1 above.
