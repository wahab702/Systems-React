import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./Cart_Image/Cart.png";



// const Title=() => (
//     <h2>This is Component Composition</h2>
// )
// const hello=function (){
//     return(
//         <h1>My name is Wahab</h1>
//     )
// }
// const Comp=() =>{
//     return(
//     <div>
//         <Title/>
//         {Title()}
//       <h1 id="heading">This is functional component</h1>
//     </div>
       
// );
//  };
const Header = () => {
    return(
        <div className="Header">
            <div className="Logo">
                <img className="img"src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"/>
            </div>
            <div className="title">
                <h1 className="col">Food Ordering Website</h1>
            </div>
            <div className="Links">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Conatct</li>
                    <li>Cart</li> 
                </ul>
            </div>
        </div>
    )
}
const RestaurentCard=(props)=>{
  const {res}=props
  const{name , locality , cuisines ,avgRatingString , cloudinaryImageId ,areaName , costForTwo }=res?.info
    return(
         <div className="Rest_Card">
            <img className="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
            {/* <h4>{props.resN}</h4>
            <h4>{props.Area}</h4>
            <h4>{props.star}</h4>
            <h4>{props.delivery}</h4> */}

            <h4 className="name">{name}</h4>
            <h4 className="locality">{"💰 "+costForTwo}</h4>
            <h4 className="average">{"📍 "+areaName}</h4>
            <h4 className="cuisine">{"😍 "+cuisines.join(", ")}</h4>
            <h3 className="rating">{"⭐ "+props.res.info.externalRatings?.aggregatedRating?.rating}</h3>
            {/* <h1>{props.key}</h1> */}

            {/* <h1>{props.r.name}</h1>
            <h1>{props.r.location}</h1> */}

            
            
            </div>
    )
}
const resData=[
   {
                    "info": {
                      "id": "683064",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/73b7c83d-a281-4d45-91ef-472535c9bda5_683064.JPG",
                      "locality": "Saat Rasta Circle",
                      "areaName": "Mahalaxmi Malabar Hill",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.2,
                      "parentId": "721",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "3.5K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 03:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/pizza-hut-saat-rasta-circle-mahalaxmi-malabar-hill-rest683064",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "313246",
                      "name": "Mer Konfekt",
                      "cloudinaryImageId": "db0fda02429cb7b65a06afb2d7019570",
                      "locality": "Breach Candy",
                      "areaName": "Mahalaxmi",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Pizzas"
                      ],
                      "avgRating": 4.8,
                      "veg": true,
                      "parentId": "11221",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "8.9K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 19:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.6",
                          "ratingCount": "95"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mer-konfekt-breach-candy-mahalaxmi-rest313246",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "763498",
                      "name": "Blue Tokai Coffee Roasters",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/aad33170-20f1-4ca7-8fbf-0e920b726f08_763498.JPG",
                      "locality": "Mahalaxmi",
                      "areaName": "Mahalaxmi Malabar Hill",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Cafe",
                        "Coffee",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "parentId": "2682",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.4K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "823"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/blue-tokai-coffee-roasters-mahalaxmi-mahalaxmi-malabar-hill-rest763498",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "741472",
                      "name": "Bombay Sweet Shop",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/16/77501b4e-979d-42c7-8909-4a1d697128f3_741472.JPG",
                      "locality": "Gamdevi",
                      "areaName": "Gamdevi Mandir",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Sweets",
                        "Desserts",
                        "Snacks"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "48883",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1.1K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 01:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "52% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/bombay-sweet-shop-gamdevi-gamdevi-mandir-rest741472",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "41908",
                      "name": "Shiv Sagar Veg Restaurant",
                      "cloudinaryImageId": "h440vlyoidfsli3hsf6k",
                      "locality": "Kemps Corner",
                      "areaName": "Kemps Corner ",
                      "costForTwo": "₹650 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian",
                        "Chinese",
                        "Continental",
                        "Beverages",
                        "Mexican",
                        "Desserts",
                        "Chaat",
                        "Italian",
                        "Jain"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "183312",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "15K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Misal%20Pav.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Misal%20Pav.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "1.4K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/shiv-sagar-veg-restaurant-kemps-corner-rest41908",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "487846",
                      "name": "Flax - Healthy Living",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/70e2dfb7-46ba-4614-a6fd-0dbc9daf7725_487846.jpg",
                      "locality": "Malabar Hill",
                      "areaName": "Breach Candy",
                      "costForTwo": "₹800 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads"
                      ],
                      "avgRating": 4.5,
                      "parentId": "80553",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "2.6K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "High%20Protein/rx%20tag%205.png",
                            "description": "High Protein"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "High Protein",
                                  "imageId": "High%20Protein/rx%20tag%205.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹249",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "136"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/flax-healthy-living-malabar-hill-breach-candy-rest487846",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "575213",
                      "name": "Veg Darbar by Behrouz Biryani",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/86cd215f-02f2-408e-96b9-445f1b9acb87_575213.JPG",
                      "locality": "August Kranti Road",
                      "areaName": "Kemps Corner",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "Mughlai",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4,
                      "veg": true,
                      "parentId": "344904",
                      "avgRatingString": "4.0",
                      "totalRatingsString": "72",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/veg-darbar-by-behrouz-biryani-august-kranti-road-kemps-corner-rest575213",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "507005",
                      "name": "McCafe by McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/fd43c1da-f28f-4b82-8725-8eeb3a03a705_507005.jpg",
                      "locality": "Lower Parel",
                      "areaName": "Lower Parel",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "American",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "8263",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "40",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.7",
                          "ratingCount": "911"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mccafe-by-mcdonalds-lower-parel-rest507005",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "812555",
                      "name": "Cheesecake & Co.",
                      "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                      "locality": "N M Joshi Marg",
                      "areaName": "Byculla",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "387417",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "866",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹225 OFF",
                        "subHeader": "ABOVE ₹899",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/cheesecake-and-co-n-m-joshi-marg-byculla-rest812555",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "38142",
                      "name": "99 Pancakes",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/5/37d8ec12-1db9-4c66-931a-e41430b02867_38142.JPG",
                      "locality": "Chowpatty",
                      "areaName": "Chowpatty",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Waffle",
                        "Bakery",
                        "Desserts",
                        "Cakes",
                        "Coffee",
                        "Shakes",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "387975",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "7.0K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 03:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "837"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/99-pancakes-chowpatty-rest38142",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "566473",
                      "name": "Faasos' Signature Wraps & Rolls",
                      "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
                      "locality": "August Kranti Road",
                      "areaName": "Kemps Corner",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "340366",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "169",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 1.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/faasos-signature-wraps-and-rolls-august-kranti-road-kemps-corner-rest566473",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "7022",
                      "name": "Nothing But Chicken",
                      "cloudinaryImageId": "l0gdifmwozvjjihazfpi",
                      "locality": "Bandra West",
                      "areaName": "Mumbai Central",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Salads",
                        "Biryani",
                        "Kebabs",
                        "Fast Food",
                        "Healthy Food"
                      ],
                      "avgRating": 4.5,
                      "parentId": "668",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "6.2K+",
                      "sla": {
                        "deliveryTime": 21,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "High%20Protein/rx%20tag%205.png",
                            "description": "High Protein"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "High Protein",
                                  "imageId": "High%20Protein/rx%20tag%205.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹118"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "218"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/nothing-but-chicken-bandra-west-mumbai-central-rest7022",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "6622",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/0a5092fa-e014-49b6-a6e1-39a4a731e9e4_6622.JPG",
                      "locality": "Tardeo",
                      "areaName": "Tardeo",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "23K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "865"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/theobroma-tardeo-rest6622",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "418134",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_418134.JPG",
                      "locality": "Chaayos Lower Parel",
                      "areaName": "Lower Parel",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.5,
                      "parentId": "281782",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "3.9K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹199"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/chaayos-chai-snacks-relax-chaayos-lower-parel-rest418134",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23671",
                      "name": "McDonald's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/355636e7-ce01-4fff-bc55-dda99d743e49_23671.JPG",
                      "locality": "Bellasis Road",
                      "areaName": "Jehangir Boman Behram Marg",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "40K+",
                      "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/mcdonalds-bellasis-road-jehangir-boman-behram-marg-rest23671",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "645478",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/e4012b48-8006-4dc7-bfaa-e1ed13fdfa29_645478.jpg",
                      "locality": "MODI BHAVAN",
                      "areaName": "Gamdevi",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.2,
                      "parentId": "2",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "6.1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "High%20Protein/rx%20tag%204.png",
                            "description": "High Protein"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "High Protein",
                                  "imageId": "High%20Protein/rx%20tag%204.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/subway-modi-bhavan-gamdevi-rest645478",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53851",
                      "name": "Maiz Mexican Kitchen",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/15/c63ee96c-3e7a-4b0f-9b1e-ff82bf6bfa63_53851.jpg",
                      "locality": "Tardeo",
                      "areaName": "Tardeo",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Mexican"
                      ],
                      "avgRating": 4.7,
                      "parentId": "11654",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "9.7K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 03:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "High%20Protein/rx%20tag%205.png",
                            "description": "High Protein"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "High Protein",
                                  "imageId": "High%20Protein/rx%20tag%205.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "263"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/maiz-mexican-kitchen-tardeo-rest53851",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "532928",
                      "name": "SMOOR",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/c230dd45-a0d0-4da5-af0b-e9ad15c4f41d_532928.JPG",
                      "locality": "ANDHERI EAST",
                      "areaName": "Worli",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery"
                      ],
                      "avgRating": 4.6,
                      "parentId": "3506",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "609",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-22 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹449",
                        "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
                        "secondaryDiscountCallout": "₹30 Cashback"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "160"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/smoor-andheri-east-worli-rest532928",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "263581",
                      "name": "Veg Meals By LunchBox",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/2ea4afe2-9731-4f25-b356-0780532e2517_263581.JPG",
                      "locality": "Dr E Moses road",
                      "areaName": "Lower Parel Worli",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Thalis",
                        "North Indian",
                        "Biryani",
                        "South Indian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "21938",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "228",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹99"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/veg-meals-by-lunchbox-dr-e-moses-road-lower-parel-worli-rest263581",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "763505",
                      "name": "Suchali's Artisan Bakehouse",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/dcbc38b0-f598-4697-8c98-43cad13531eb_763505.JPG",
                      "locality": "Bhulabhai Desai Road",
                      "areaName": "Mahalaxmi Malabar Hill",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.6,
                      "parentId": "196351",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "1.2K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2026-01-21 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-11d95b31-3e52-4956-b22b-218e8d88b1dc"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/mumbai/suchalis-artisan-bakehouse-bhulabhai-desai-road-mahalaxmi-malabar-hill-rest763505",
                      "type": "WEBLINK"
                    }
                  }
                ]
              
            
                
         

const Body=() => {
    return(
        
        <div className="body">
            
            <div className="Search">Search Here
            </div>
            <div className="res">
              {resData.map((rest)=>(
              <RestaurentCard
              key={rest.info.id}
              res={rest}
              />
              )
              )}
            {/* <RestaurentCard 
            resN="Meghana Food"
            Area="Biryani , Pakistani"
            star="4.4"
            delivery="35minutes"
            image="https://images.deliveryhero.io/image/fd-pk/LH/s6bb-listing.jpg"
            />
            <RestaurentCard
            resN="KFC"
            Area="Fast food , Gujranwala , Pakistan"
            star="4.5"
            delivery="35minutes"
            /> */}
            {/* <RestaurentCard
            res={resData[0]}
            />
             <RestaurentCard
            res={resData[1]}
            />
             <RestaurentCard
            res={resData[2]}
            />
             <RestaurentCard
            res={resData[3]}
            />
             <RestaurentCard
            res={resData[4]}
            /> */}
            

            {/* {resData.map((restaurant)=>(
                <RestaurentCard
                key={restaurant.info.id}
                res={restaurant}
                />
            ))} */}
            {/* {resData.map((restaurant) => (
                <RestaurentCard
                     key={restaurant.info.id}
                     res={restaurant}
  />
))} */}
            {/* <RestaurentCard
            res={r}
            /> */}
            {/* <RestaurentCard
             resN="KFC"
            Area="Fast food , Gujranwala , Pakistan"
            star="4.5"
            delivery="35minutes"
            image="https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800"
            />
            <RestaurentCard
            resN="Meghana Food"
            Area="Biryani , Pakistani"
            star="4.4"
            delivery="35minutes"
            />
            <RestaurentCard
             resN="KFC"
            Area="Fast food , Gujranwala , Pakistan"
            star="4.5"
            delivery="35minutes"
            /> */}
            
            
            </div>
           
           
        
        </div>
    )
}
const AppLayout=() => {
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}

// const heading=React.createElement("h1" , {id:"heading"}, "Wahab making a raect");
// const headingJSX = <h1 id="heading">This is React by javascript</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
