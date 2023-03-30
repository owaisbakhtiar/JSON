class Business {
  constructor(
    id,
    subCategoryIds,
    businessTitle,
    imageUrl,
    location,
    hours1,
    hours2,
    description,
    userComments,
    website,
    facebook,
    email,
    phone,
    whatsapp,
    favorite,
    mapChick,
  )
  {
    this.id = id;
    this.subCategoryIds = subCategoryIds;
    this.businessTitle = businessTitle;
    this.imageUrl = imageUrl;
    this.location = location;
    this.hours1 = hours1;
    this.hours2 = hours2;
    this.description = description;
    this.userComments = userComments;
    this.website = website;
    this.facebook = facebook;
    this.email = email;
    this.phone = phone;
    this.whatsapp = whatsapp;
    this.favorite = favorite;
    this.mapChick = mapChick;
  }
}

export default Business;
