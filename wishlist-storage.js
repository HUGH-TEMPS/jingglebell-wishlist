// Wishlist Storage Utility for localStorage
const WishlistStorage = {
    // Get all wishlist items
    getItems: function () {
        try {
            const items = localStorage.getItem('wishlistItems');
            return items ? JSON.parse(items) : [];
        } catch (e) {
            console.error('Error reading wishlist:', e);
            return [];
        }
    },

    // Save all wishlist items
    saveItems: function (items) {
        try {
            localStorage.setItem('wishlistItems', JSON.stringify(items));
            return true;
        } catch (e) {
            console.error('Error saving wishlist:', e);
            return false;
        }
    },

    // Add a new item
    addItem: function (item) {
        const items = this.getItems();
        items.push(item);
        return this.saveItems(items);
    },

    // Update an item by index
    updateItem: function (index, item) {
        const items = this.getItems();
        if (index >= 0 && index < items.length) {
            items[index] = item;
            return this.saveItems(items);
        }
        return false;
    },

    // Delete an item by index
    deleteItem: function (index) {
        const items = this.getItems();
        if (index >= 0 && index < items.length) {
            items.splice(index, 1);
            return this.saveItems(items);
        }
        return false;
    },

    // Check if link already exists
    linkExists: function (link, excludeIndex = -1) {
        if (!link) return false;
        const items = this.getItems();
        const normalizedLink = link.toLowerCase().trim().replace(/\/+$/, '');

        for (let i = 0; i < items.length; i++) {
            if (i === excludeIndex) continue;
            const existingLink = (items[i].link || '').toLowerCase().trim().replace(/\/+$/, '');
            if (existingLink && existingLink === normalizedLink) {
                return true;
            }
        }
        return false;
    }
};

