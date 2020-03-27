using System;

namespace WastelessAPI.Application.Models.Groceries
{
    public class GroceryItem
    {
        public String Name { get; set; }
        public Int32 Quantity { get; set; }
        public Int32 Calories { get; set; }
        public DateTime PurchaseDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public DateTime? ConsumptionDate { get; set; }

        public GroceryItem(){ }
        public GroceryItem(DataAccess.Models.GroceryItem item)
        {
            Name = item.Name;
            Calories = item.Calories;
            Quantity = item.Quantity;
            PurchaseDate = item.PurchaseDate;
            ExpirationDate = item.ExpirationDate;
            ConsumptionDate = item.ConsumptionDate;
        }
    }
}