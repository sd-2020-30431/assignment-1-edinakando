using System;

namespace WastelessAPI.Application.Models
{
    public class GroceryItem
    {
        public String Name { get; set; }
        public Int32 Quantity { get; set; }
        public Int32 Calories { get; set; }
        public DateTime PurchaseDate { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}
