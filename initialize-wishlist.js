// Initialize wishlist with default items
// Run this once to add initial items to localStorage

const initialItems = [
    {
        title: "Headset Wireless Bluetooth",
        link: "https://shopee.ph/Tylex-S4000-Headset-Wireless-Bluetooth-Stereo-Foldable-TF-Card-FM-AUX-Support-8Hrs-Playtime-i.119987099.3169867218?extraParams=%7B%22display_model_id%22%3A61673789304%2C%22model_selection_logic%22%3A3%7D&sp_atk=eda47a2d-2957-49f5-834d-3f6d46730858&xptdk=eda47a2d-2957-49f5-834d-3f6d46730858",
        image_url: "https://down-ph.img.susercontent.com/file/ph-11134207-7rasi-m5ay1vdwvguy6a.webp",
        description: "",
        date_added: new Date().toISOString()
    },
    {
        title: "Men's Jacket Outdoor Waterproof",
        link: "https://shopee.ph/Men's-Jacket-Outdoor-Waterproof-Large-Zip-Hooded-Detachable-Jacket-Breathable-Coat-i.333369948.20030649696?extraParams=%7B%22display_model_id%22%3A226682993435%2C%22model_selection_logic%22%3A3%7D&sp_atk=088b03df-e69c-4db0-bfe9-adbedd079e5f&xptdk=088b03df-e69c-4db0-bfe9-adbedd079e5f",
        image_url: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98y-lz8w4fd7wscae6.webp",
        description: "",
        date_added: new Date().toISOString()
    },
    {
        title: "Camping Moon Chair Buy 1 Take 1",
        link: "https://shopee.ph/product/584255260/44408470089?d_id=d868e&uls_trackid=54bapnfv00e3",
        image_url: "https://down-ph.img.susercontent.com/file/ph-11134207-7ra0m-mcvte5i2oftk62.webp",
        description: "",
        date_added: new Date().toISOString()
    }
];

// Function to initialize wishlist with default items
function initializeWishlist() {
    if (typeof WishlistStorage === 'undefined') {
        console.error('WishlistStorage is not loaded. Make sure wishlist-storage.js is loaded first.');
        return;
    }

    const existingItems = WishlistStorage.getItems();
    let addedCount = 0;

    initialItems.forEach(newItem => {
        // Check if item already exists (by link)
        const linkExists = WishlistStorage.linkExists(newItem.link);
        
        if (!linkExists) {
            WishlistStorage.addItem(newItem);
            addedCount++;
            console.log('Added:', newItem.title);
        } else {
            console.log('Skipped (already exists):', newItem.title);
        }
    });

    console.log(`Initialization complete. Added ${addedCount} new items.`);
    return addedCount;
}

// Auto-initialize when script loads (only if localStorage is empty or has less than 3 items)
if (typeof WishlistStorage !== 'undefined') {
    const existingItems = WishlistStorage.getItems();
    // Only auto-initialize if wishlist is empty
    if (existingItems.length === 0) {
        console.log('Wishlist is empty. Initializing with default items...');
        initializeWishlist();
    }
}

